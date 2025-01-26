// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
          id: 1,
          username: "Hatim2023",
          email: "hatim@gmail.com",
          password: "hatimTanger09",
          gender: "Homme",
          profileImage: "https://img.freepik.com/free-photo/male-chef-kitchen-holding-plate-fresh-vegetables_23-2149646226.jpg",
          ville: "Tanger",
          dateOfBirth: "https://img.freepik.com/free-photo/side-view-man-cooking-job_52683-97547.jpg",
          bannerImage: null
        },
        {
          id: 2,
          username: "chefMaal_0",
          email: "chManal@gmaim.com",
          password: "Manl999manal",
          gender: "Femme",
          profileImage: "https://img.freepik.com/free-photo/female-chef-kitchen-dressed-apron-uniform_23-2149720713.jpg",
          ville: "Tetouan",
          dateOfBirth: null,
          bannerImage: "https://img.freepik.com/premium-photo/modern-home-kitchen-decor-with-chopping-board_53876-131432.jpg"
        }
      ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, updates } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        Object.assign(existingUser, updates);
      }
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
