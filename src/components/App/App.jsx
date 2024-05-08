import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, SubTitle } from './index';
import { fetchAll } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  const contacts = useSelector(selectContacts);
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
      <ContactList contacts={contacts} />
    </Container>
  );
};

export default App;
