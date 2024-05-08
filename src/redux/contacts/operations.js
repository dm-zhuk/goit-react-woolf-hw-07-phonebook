import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '<https://66393a1d4253a866a250c722.mockapi.io>'; // https://66393a1d4253a866a250c722.mockapi.io/:endpoint

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//
export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});

/* Використовуй функцію createAsyncThunk для оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. Обробку екшенів та зміну даних у стані Redux зроби за допомогою createSlice.
import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./tasksSlice";

axios.defaults.baseURL = "<https://62584f320c918296a49543e7.mockapi.io>";

export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get("/tasks");
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

*/
