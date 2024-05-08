import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const actionTypes = [fetchAll, addContact, deleteContact];

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
      });
    actionTypes.forEach(actionType => {
      builder
        .addCase(actionType.pending, handlePending)
        .addCase(actionType.rejected, handleError);
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
