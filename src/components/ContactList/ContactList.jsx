import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/contactSlice';
import { FindResults, OnDeleteButton } from './index';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterData = useSelector(getFilter);

  const handleFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterData.toLowerCase())
    );

  return (
    <ul>
      {contacts &&
        handleFilteredContacts().map(contact => (
          <FindResults key={contact.id}>
            {contact.name} - {contact.number}
            <OnDeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </OnDeleteButton>
          </FindResults>
        ))}
    </ul>
  );
};

export default ContactList;
