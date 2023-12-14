import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState ={
	contacts :[],
  isLoading: false,
  error: null
}

const contactsSlice = createSlice({

  name: "contacts",
  initialState,

  reducers: {} ,
  extraReducers:builder => builder
  .addCase(fetchContacts.fulfilled, (state, {payload})=>{
    state.isLoading=false
    state.contacts = payload
  })
  .addCase(addContact.fulfilled, (state, {payload}) =>{
    state.isLoading=false
    state.contacts.push(payload)
  })
  .addCase(deleteContact.fulfilled, (state, {payload}) =>{
    state.isLoading = false;
    const id = state.contacts.findIndex(contact => contact.id ===payload);
    state.contacts.splice(id,1)
  })
  .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), state =>{
    state.isLoading=true;
    state.error=null
  })
  .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, {payload})=>{
    state.isLoading=false;
    state.error=payload
  })
});

export const contactsReducer = contactsSlice.reducer;