import { createSlice } from "@reduxjs/toolkit";

const favorisSlice = createSlice({
  name: "favoris",
  initialState: [],
  reducers: {
    addFavoris: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFavoris: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavoris, removeFavoris } = favorisSlice.actions;

export default favorisSlice.reducer;
