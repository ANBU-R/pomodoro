import { createSlice } from "@reduxjs/toolkit";
import { TICKING, ALARM_BELL } from "../../const.js";

const initialState = {
  pomodoro: 10,
  shortBreak: 1,
  longBreak: 10,
  tickingSoundType: TICKING,
  alarmSoundType: ALARM_BELL,
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
    changeAlarmSoundType: (state, action) => {
      state.alarmSoundType = action.payload;
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
