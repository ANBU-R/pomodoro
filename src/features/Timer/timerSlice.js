import { createSlice } from "@reduxjs/toolkit";
import { TICKING } from "./Const";

const initialState = {
  pomodoro: 10,
  shortBreak: 1,
  longBreak: 10,
  tickingSoundType: TICKING,
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
    changeTickingSoundType: (state, action) => {
      state.tickingSoundType = action.payload;
    },
  },
});

export const { resetTimer, changeTime, changeTickingSoundType } =
  timerSlice.actions;
export default timerSlice.reducer;
