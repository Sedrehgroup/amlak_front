import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Main from "../Main";
import PhoneNumForm from "./Elements/PhoneNumForm";
import PhoneSmsForm from "./Elements/PhoneSmsForm";
import RegisterForm from "./Elements/RegisterForm";
import useLocalStorage from "use-local-storage"

export default function Login() {
  const [accToken, setAccToken] = useLocalStorage("access_token", null);
  const isLoged = accToken;
  
  const loginSteps = useSelector((state) => state.login.loginSteps);
  useEffect(() => {
    document.title='سامانه اجاره بها - ورود'
    console.log("isLogged", isLoged);
  }, []);
  return (
    <>
   
      {isLoged ? (
        <Redirect to="/" />
      ) : (
        <div>
          {loginSteps["PhoneSms_Step"] ? (
            <RegisterForm /> //if user is not in database it should register
          ) : loginSteps["PhoneNumber_Step"] ? (
            <PhoneSmsForm /> //recieve sms code from user and check if it is true
          ) : (
            <PhoneNumForm /> //recieve phone number from user
          )}
        </div>
      )}
      <h2>hihihi</h2>
    </>
  );
}
