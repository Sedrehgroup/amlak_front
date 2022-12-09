import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    email: "mwwadzsefewfwefe@gmail.com",
    father_name: "Hassan",
    certificate_number: "22326420",
    birth_day: "2022-01-01",
    sex: true,
    latin_first_name: "ALIREZA",
    latin_last_name: "Dinvarzadeh",
    certificate_country: "IRAN",
    certificate_province: "TEHRAN",
    certificate_county: "THERAN",
    certificate_type: "ASL",
    marriage: true,
    education: "educated",
    province: "TEHRAN",
    county: "TEHRAN",
    city: "TEHRAN",
    address: "string too long",
    postal_code: "2233445511",
    personal_phone_number: "02298747455",
    user_id: 0,
    update: 0,
  },

  reducers: {
    fn: (state, action) => {
      state.loginSteps[action.payload] = true;
    },
    setUserIdHandler: (state, action) => {
      state.user_id = action.payload;
    },
    updateHandler: (state, action) => {
      state.update = action.payload;
    },
  },
});
export default slice.reducer;

//Actions
export const { fn, setUserIdHandler, updateHandler } = slice.actions;

//functions
