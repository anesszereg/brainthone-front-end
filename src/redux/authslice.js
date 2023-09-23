import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:5000/api/auth";

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registrationSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    registrationError: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginError: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const {
  registrationSuccess,
  registrationError,
  loginSuccess,
  loginError,
} = authSlice.actions;

// Modify your requests to use absolute URLs based on baseUrl
export const registerTeacher = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(baseUrl + "/signup/teacher", userData);
    const user = response.data;
    dispatch(registrationSuccess(user));
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};

export const registerStudent = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(baseUrl + "/signup/student", userData);
    const user = response.data;
    dispatch(registrationSuccess(user));
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};

export const loginTeacher = (userData) => async (dispatch) => {
  try {
    // Use the absolute URL based on baseUrl
    const response = await axios.post(baseUrl + "/signin/teacher", userData);
    const user = response.data;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const loginStudent = (userData) => async (dispatch) => {
  try {
    // Use the absolute URL based on baseUrl
    const response = await axios.post(baseUrl + "/signin/student", userData);
    const user = response.data;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export default authSlice.reducer;
