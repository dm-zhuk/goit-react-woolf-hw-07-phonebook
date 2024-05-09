import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Form, Label, Input, SubmitButton } from './index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', phone: '' });
  const { name, phone } = contact;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleAddContact = evt => {
    const { value, name } = evt.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = { name, phone };
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? toast.warning(`${name} or tel. ${phone} is already in the phonebook`)
      : dispatch(addContact(newContact))
          .unwrap()
          .then(() => {
            toast.success('New contact saved in your phonebook');
          })
          .catch(() => {
            toast.error('Contact not saved');
          });
    resetContactForm();
  };
  const resetContactForm = () => {
    setContact({ name: '', phone: '' });
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleAddContact}
          required
        />
        <Label>Number:</Label>
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleAddContact}
          required
        />
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </>
  );
};

export default ContactForm;
