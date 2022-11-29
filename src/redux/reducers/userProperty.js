import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userProperty",
  initialState: {
    myProperty: [],
  },
  reducers: {
    updateMyPropertyListHandler: (state, action) => {
      state.myProperty = [...action.payload, ...state.myProperty];
    },
  },
});
export default slice.reducer;

export const { updateMyPropertyListHandler } = slice.actions;
