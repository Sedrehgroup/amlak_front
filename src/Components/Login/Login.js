import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Main from "../Main";
import PhoneNumForm from "./Elements/PhoneNumForm";
import PhoneSmsForm from "./Elements/PhoneSmsForm";
import RegisterForm from "./Elements/RegisterForm";

export default function Login({ isLoged }) {
  const loginSteps = useSelector((state) => state.login.loginSteps);

  return (
    <>
      {isLoged ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          {loginSteps["Register_Step"] ? (
            <Main /> //if user is in database he goes to Main
          ) : loginSteps["PhoneSms_Step"] ? (
            <RegisterForm /> //if user is not in database it should register
          ) : loginSteps["PhoneNumber_Step"] ? (
            <PhoneSmsForm /> //recieve sms code from user and check if it is true
          ) : (
            <PhoneNumForm /> //recieve phone number from user
          )}
        </div>
      )}
    </>
  );
}
