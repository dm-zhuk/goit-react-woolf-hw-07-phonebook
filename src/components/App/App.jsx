import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, SubTitle } from './index';
import { fetchAll } from '../../redux/contacts/operations';
import { selectContacts, selectLoader } from '../../redux/contacts/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Container>
      <Title>✆ Phonebook ✆</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {isLoading ? <Loader /> : <ContactList contacts={contacts} />}
    </Container>
  );
};

export default App;
