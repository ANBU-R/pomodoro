import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/Timer/timerSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;
