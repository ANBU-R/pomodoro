import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 10,
  shortBreak: 1,
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
      state["pomodoro"] = action.payload.pomodoro;
      state["shortBreak"] = action.payload.shortBreak;
      state["longBreak"] = action.payload.longBreak;
    },
  },
});

export const { resetTimer, changeTime } = timerSlice.actions;
export default timerSlice.reducer;
