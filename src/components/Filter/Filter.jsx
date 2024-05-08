import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';
import { Label, Input } from 'components/ContactForm/index';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => dispatch(setFilter(evt.target.value));

  return (
    <>
      <Label>
        Find contacts by name:
        <Input type="text" value={filter} onChange={handleFilterChange} />
      </Label>
    </>
  );
};

export default Filter;
