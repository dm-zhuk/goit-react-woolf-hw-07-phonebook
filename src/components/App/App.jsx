import React from 'react';
import { Container, Title, SubTitle } from './index';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <Container>
      <Title>✆ Phonebook ✆</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
