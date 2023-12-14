import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://6563cf79ceac41c0761d1eef.mockapi.io";
export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkApi) => {
	  try {
		const { data } = await axios.get(
		  `/contacts`
		);
		
		return data;
	  } catch (err) {
		return thunkApi.rejectWithValue(err.message);
	  }
	}
  );
  
  export const addContact =  createAsyncThunk(
	'contacts/addContact',
	async ({name, phone}, thunkApi) => {
	  try {
		const { data } = await axios.post(
		  '/contacts',{name, phone});
		
		return data;
	  } catch (err) {
		return thunkApi.rejectWithValue(err.message);
	  }
	}
  );
  export const deleteContact =  createAsyncThunk(
	'contacts/deleteContact',
	async (id, thunkApi) => {
	  try {
		const { data } = await axios.delete(
		  `/contacts/${id}`
		);
		return data.id;
	  } catch (err) {
		return thunkApi.rejectWithValue(err.message);
	  }
	}
  );