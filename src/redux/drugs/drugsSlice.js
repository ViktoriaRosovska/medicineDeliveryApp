import { createSlice } from "@reduxjs/toolkit";
import { getDrugById, getDrugs24 } from "./drugsOperations";

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  drugs: [],
  drugById: {},
  isLoading: false,
  error: null,
  total: 0,
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getDrugs24.pending, handlePending)
      .addCase(getDrugs24.fulfilled, (state, action) => {
        state.drugs = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDrugs24.rejected, handleRejected)

      .addCase(getDrugById.pending, handlePending)
      .addCase(getDrugById.fulfilled, (state, action) => {
        state.drugById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDrugById.rejected, handleRejected),
});

export const drugsReducer = drugsSlice.reducer;
