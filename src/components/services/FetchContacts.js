import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://6563cf79ceac41c0761d1eef.mockapi.io/contacts';

const getContacts = async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const postContact = async (newContact, thunkAPI) => {
  try {
    const response = await axios.post(URL, newContact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

const delContact = async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`${URL}/${contactId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const getContactsThunk = createAsyncThunk(
  'phonebook/getContacts',
  getContacts
);

export const postContactThunk = createAsyncThunk(
  'phonebook/postContact',
  postContact
);

export const delContactThunk = createAsyncThunk(
  'phonebook/delContact',
  delContact
);