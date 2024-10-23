import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    value: 0,
    name: "jlw",
    money: "500000",
  },
  reducers: {
    show: (state) => {
      state.name = "great coder jlw";
    },
    add: (state) => {
      state.money += 0;
    },
  },
});

export const { show, add } = homeSlice.actions;

export default homeSlice.reducer;
