import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("app_user")) || [],
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const newUser = {
        user_id: action.payload.user_id,
        user_email: action.payload.user_email,
        user_password: action.payload.user_password,
      };
      state.users.push(newUser);
      localStorage.setItem("app_user", JSON.stringify(state.users));
    },

    login: (state, action) => {
      const user_email = action.payload.user_email;
      const user_password = action.payload.user_password;
      const user = state.users.find(
        (u) => u.user_email === user_email && u.user_password === user_password
      );

      if (user) {
        state.currentUser = user;
        localStorage.setItem("app_user", JSON.stringify(state.users));
      } else {
        throw new Error("Invalid email or password");
      }
    },

    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem(state.currentUser);
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
