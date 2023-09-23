import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice.js";

const store = configureStore({
  reducer: {
    Auth: authSlice,
  },
});

export default store;
