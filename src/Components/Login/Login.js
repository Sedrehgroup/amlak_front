import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormAuth from "./Elements/FormAuth";
import PhoneNumForm from "./Elements/PhoneNumForm";
import PhoneSmsForm from "./Elements/PhoneSmsForm";

export default function Login() {
  const loginSteps = useSelector((state) => state.login.loginSteps);

  useEffect(() => {
    console.log("loginSteps", loginSteps);
  }, [loginSteps]);

  return (
    <div>
      {/* /@mohamad
جایی که شماره وارد میشه
*/}
      {loginSteps["PhoneSms_Step"] ? (
        <FormAuth />
      ) : loginSteps["PhoneNumber_Step"] ? (
        <PhoneSmsForm />
      ) : (
        <PhoneNumForm />
      )}
    </div>
  );
}
