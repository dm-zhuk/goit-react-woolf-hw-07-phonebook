import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { FindResults, OnDeleteButton } from './index';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <FindResults key={id}>
          {name} - {phone}
          <OnDeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </OnDeleteButton>
        </FindResults>
      ))}
    </ul>
  );
};

export default ContactList;
