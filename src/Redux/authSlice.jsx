import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,         
  isLoggedIn: false,  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

   
  },
});

export const { signIn } = authSlice.actions;

export default authSlice.reducer;
