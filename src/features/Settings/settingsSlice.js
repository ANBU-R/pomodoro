import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingsVisibility: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    showSettings: (state) => {
      state.settingsVisibility = true;
    },
    hideSettings: (state) => {
      state.settingsVisibility = false;
    },
  },
});

export const { showSettings, hideSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
