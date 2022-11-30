import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userProperty",
  initialState: {
    myProperty: [],
    update: 0,
  },
  reducers: {
    updateMyPropertyListHandler: (state, action) => {
      state.myProperty = [...action.payload, ...state.myProperty];
    },
    updateListHandler: (state, _) => {
      state.update = Math.random();
    },
  },
});
export default slice.reducer;

export const { updateMyPropertyListHandler, updateListHandler } = slice.actions;
