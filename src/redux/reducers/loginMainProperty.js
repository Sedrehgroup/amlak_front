import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsFromUser: [],
};

const counterSlice = createSlice({
  name: "loginMainProperty",
  initialState,
  reducers: {
    getMainDetailsFromUser: (state, action) => {
      state.detailsFromUser = action.payload;
    },
  },
});
export const { getMainDetailsFromUser } = counterSlice.actions;

export default counterSlice.reducer;
