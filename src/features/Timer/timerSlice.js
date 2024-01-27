import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 10,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    resetTimer: (state, action) => {
      state.timer = action.payload.currentTimer;
    },
    changeTime: (state, action) => {
      state[action.payload.type] = action.payload.newTime;
    },
  },
});

export const { resetTimer, changeTime } = timerSlice.actions;
export default timerSlice.reducer;
