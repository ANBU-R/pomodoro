import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/Timer/timerSlice";
import settingsReducer from "./features/Settings/settingsSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    settings: settingsReducer,
  },
});

export default store;
