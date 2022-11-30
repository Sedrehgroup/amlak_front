import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import PhoneNumForm from "./Elements/PhoneNumForm";
import PhoneSmsForm from "./Elements/PhoneSmsForm";
import RegisterForm from "./Elements/RegisterForm";

export default function Login() {
  const loginSteps = useSelector((state) => state.login.loginSteps);

  useEffect(() => {
    console.log("loginSteps", loginSteps);
  }, [loginSteps]);

  return (
    <div>
      {loginSteps["Register_Step"] ? (
        <Dashboard /> //if user is in database he goes to Dashboard
      ) : loginSteps["PhoneSms_Step"] ? (
        <RegisterForm /> //if user is not in database it should register
      ) : loginSteps["PhoneNumber_Step"] ? (
        <PhoneSmsForm /> //recieve sms code from user and check if it is true
      ) : (
        <PhoneNumForm /> //recieve phone number from user
      )}
    </div>
  );
}
