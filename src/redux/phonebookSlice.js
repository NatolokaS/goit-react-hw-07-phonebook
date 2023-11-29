import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  delContactThunk,
  getContactsThunk,
  postContactThunk,
} from 'components/services/FetchContacts';

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [getContactsThunk, postContactThunk, delContactThunk];

const addStatusToActs = status => arrOfActs.map(el => el[status]);

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = null;
      })
      .addCase(postContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        state.error = null;
      })
      .addCase(delContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});

export const getPhonebookValue = state => state.phonebook.contacts;
export const getIsLoading = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.error;