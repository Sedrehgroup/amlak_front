import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login",
  initialState: {
    loginSteps: {
      PhoneNumber_Step: false,
      PhoneSms_Step: false,
      Register_Step: false,
    },
    smsCode: 0,
    phoneNumber: '0',
    // isUserLogged: window.localStorage.getItem("user_logged") === "true",
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
    setPhoneNumberHandler: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setUserIsLoggedHandler: (state, action) => {
      state.isUserLogged = action.payload;
    },
  },
});
export default slice.reducer;

//Actions
export const {
  userLoginStepAccess,
  userLoginStepDenied,
  setSmsCodeHandler,
  setPhoneNumberHandler,
  setUserIsLoggedHandler,
} = slice.actions;

//functions
