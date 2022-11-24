import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login",
  initialState: {
    loginSteps: {
      PhoneNumber_Step: false,
      PhoneSms_Step: false,
    },
    smsCode: 0,
  },
  reducers: {
    userLoginStepAccess: (state, action) => {
      state.loginSteps[action.payload] = true;
    },
    userLoginStepDenied: (state, action) => {
      state.loginSteps[action.payload] = false;
    },
    setSmsCodeHandler: (state, action) => {
      state.smsCode = action.payload;
    },
  },
});
export default slice.reducer;

//Actions
export const { userLoginStepAccess, userLoginStepDenied, setSmsCodeHandler } =
  slice.actions;

//functions
