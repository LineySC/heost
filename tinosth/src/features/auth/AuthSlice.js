import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  firstname: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id
      state.role = action.payload.role;
      state.firstname = action.payload.firstname;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.role = null;
      state.firstname = null;
      state.isAuthenticated = false;
      state.id = null
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
