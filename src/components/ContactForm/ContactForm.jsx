import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Form, Label, Input, SubmitButton } from './index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNameExist = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isNameExist) {
      toast.warning(`${name} or tel. ${number} is already in contacts list!`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      setName('');
      setNumber('');
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
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
          onChange={handleChange}
          required
        />
        <Label>Number:</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </>
  );
};

export default ContactForm;
