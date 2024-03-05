import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const getDrugs24 = createAsyncThunk("drugs/getAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/drugs");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getDrugById = createAsyncThunk("drugs/drugById", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/drugs/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
