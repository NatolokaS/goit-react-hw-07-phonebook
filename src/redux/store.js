import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { phonebookSlice } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice.reducer,
    filter: filterSlice.reducer,
  },
});