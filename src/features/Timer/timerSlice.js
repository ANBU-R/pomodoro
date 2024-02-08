import { createSlice } from "@reduxjs/toolkit";
import { TICKING, ALARM_BELL } from "../../const.js";

const initialState = {
  pomodoro: Number(localStorage.getItem("pomodoro")) || 25,
  shortBreak: Number(localStorage.getItem("shortBreak")) || 5,
  longBreak: Number(localStorage.getItem("longBreak")) || 30,
  tickingSoundType: Number(localStorage.getItem("tickingSoundType")) || TICKING,
  alarmSoundType: Number(localStorage.getItem("alarmSoundType")) || ALARM_BELL,
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
      localStorage.setItem("pomodoro", action.payload.pomodoro);
      localStorage.setItem("shortBreak", action.payload.shortBreak);
      localStorage.setItem("longBreak", action.payload.longBreak);
    },
    changeTickingSoundType: (state, action) => {
      state.tickingSoundType = action.payload;
      localStorage.setItem("tickingSoundType", action.payload);
    },
    changeAlarmSoundType: (state, action) => {
      state.alarmSoundType = action.payload;
      localStorage.setItem("alarmSoundType", action.payload);
    },
  },
});

export const {
  resetTimer,
  changeTime,
  changeTickingSoundType,
  changeAlarmSoundType,
} = timerSlice.actions;
export default timerSlice.reducer;
