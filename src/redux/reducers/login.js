import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login",
  initialState: {
    loginSteps: {
      PhoneNumber_Step: false,
      PhoneSms_Step: false,
    },
  },
  reducers: {
    userLoginStepAccess: (state, action) => {
      state.loginSteps[action.payload] = true;
    },
    userLoginStepDenied: (state, action) => {
      state.loginSteps[action.payload] = false;
    },
  },
});
export default slice.reducer;

//Actions
export const { userLoginStepAccess, userLoginStepDenied } = slice.actions;

//functions
