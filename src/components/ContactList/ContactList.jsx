import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { FindResults, OnDeleteButton } from './index';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts &&
        selectFilteredContacts().map(contact => (
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
