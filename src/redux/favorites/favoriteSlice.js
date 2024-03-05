import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavoriteDrug(state, action) {
      const product = action.payload;
      let found = false;
      for (let i of state.favorites) {
        if (i.product._id === product._id) {
          ++i.count;
          found = true;
        }
      }
      if (!found) {
        state.favorites.push({ product, count: 1 });
      }
    },
    deleteFavoriteDrug(state, action) {
      const idx = state.favorites.findIndex((i) => i.product._id === action.payload._id);
      state.favorites.splice(idx, 1);
    },
    changeCount(state, action) {
      const idx = state.favorites.findIndex((i) => i.product._id === action.payload._id);
      if (idx >= 0) {
        const item = state.favorites[idx];
        item.count = action.payload.count;
      }
    },
  },
});

export const { addFavoriteDrug, deleteFavoriteDrug, changeCount } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
