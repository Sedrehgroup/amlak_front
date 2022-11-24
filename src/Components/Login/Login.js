import React from "react";
import FormAuth from "./Elements/FormAuth";
import PhoneNumForm from "./Elements/PhoneNumForm";
import PhoneSmsForm from "./Elements/PhoneSmsForm";

export default function Login() {
  return (
    <div>
      {/* /@mohamad
جایی که شماره وارد میشه
*/}
      {/* <PhoneNumForm /> */}
      <PhoneSmsForm />

      {/* صفحه بعدی */}
      {/* <FormAuth /> */}
    </div>
  );
}
