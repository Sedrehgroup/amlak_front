import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userProperty",
  initialState: {
    myProperty: [],
    update: 0,
    requestId: 0,
    selectedProperty: {},
    selectedRequest: {},
  },
  reducers: {
    updateMyPropertyListHandler: (state, action) => {
      state.myProperty = [...action.payload, ...state.myProperty];
    },
    updateListHandler: (state, _) => {
      state.update = Math.random();
    },
    signContractData: (state, action) => {
      state.requestId = action.payload;
    },
    selectedPropertyDataHandler: (state, action) => {
      state.selectedProperty = action.payload;
    },
    reqDataHandler: (state, action) => {
      state.selectedRequest = action.payload;
    },
  },
});
export default slice.reducer;

export const {
  updateMyPropertyListHandler,
  updateListHandler,
  signContractHandler,
  signContractData,
  selectedPropertyDataHandler,
  reqDataHandler,
} = slice.actions;
