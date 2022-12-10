import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useDispatch, useSelector } from "react-redux";
import loginLogo from "./../../../assets/Images/Dashboard/loginLogo.svg";
import {
  setUserIsLoggedHandler,
  userLoginStepAccess,
} from "../../../redux/reducers/login";
import Spinner from "react-spinkit";
import { getAccessTokenHandler } from "../../../utils/Api";
import { useHistory } from "react-router-dom";

export default function PhoneSmsForm() {
  const smsCode = useSelector((state) => state.login.smsCode);
  const phoneNumber = useSelector((state) => state.login.phoneNumber);

  const [isPinCodeValid, setIsPinCodeValid] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (isPinCodeValid) {
      checkUserIsInDatabase();
    }
  }, [isPinCodeValid]);
  const checkPinCode = () => {
    setShowLoading(true);
    const isPinCodeValid = pinCode == smsCode;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) {
      setPinCode("");
      setShowLoading(false);
    }
  };
  const checkUserIsInDatabase = () => {
    getAccessTokenHandler(phoneNumber);
  };

  const getAccessTokenHandler = (phoneNumber) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(`${Api_Url}/account/token/`, {
          phone_number: `+98${phoneNumber}`,
          password: "rent",
        })
        .then(({ data }) => {
          setShowLoading(false);

          dispatch(userLoginStepAccess("PhoneSms_Step"));
          dispatch(userLoginStepAccess("Register_Step"));
          history.push("/");
          window.localStorage.setItem("ACC_TOKEN", data.access);
          window.localStorage.setItem("REF_TOKEN", data.refresh);
          window.localStorage.setItem("user_logged", "true");
          dispatch(setUserIsLoggedHandler(true));

          console.log("axios /users/token data.data:", data);
        })
        .catch((e) => {
          console.log("error in axios /users/otp_register", e);
          if (e.response.status == 401) {
            dispatch(userLoginStepAccess("PhoneSms_Step"));
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
  };

  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  const shadow = {
    boxShadow:
      "0px 257px 103px rgba(0, 0, 0, 0.01), 0px 145px 87px rgba(0, 0, 0, 0.05), 0px 64px 64px rgba(0, 0, 0, 0.09), 0px 16px 35px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div className="pattern bg-warmGray-100 flex flex-col">
        <div className="twentyvh flex justify-end">
          <img
            src={loginLogo}
            width={325}
            height={95}
            alt=""
            className="mx-auto "
          />
        </div>
        {!showLoading ? (
          <div className="flex flex-col eightyvh">
            <div
              className="flex flex-col m-auto bg-warmGray-50 gap-y-10 px-10 py-10 rounded-lg sm:mx-auto mx-8 border border-warmGray-300/50"
              style={shadow}
              dir="rtl"
            >
              <p className="text-center text-xl font-bold">
                اعتبارسنجی کد ورود
              </p>
              <p className="mx-8 -mb-6">
                لطفا برای ورود به سامانه{" "}
                <strong className="font-bold">کد 4 رقمی</strong> پیامک شده را
                وارد کنید :
              </p>
              <div className="">
                <center>
                  <ReactCodeInput
                    style={{ direction: "ltr" }}
                    inputMode="numeric"
                    autoFocus={true}
                    name="smsCode"
                    id="pinCode"
                    type="text"
                    isValid={isPinCodeValid}
                    fields={4}
                    onChange={handlePinChange}
                    value={pinCode}
                  />
                </center>
                <button
                  disabled={pinCode.length < 4}
                  className=" font-bold disabled:bg-main-300 text-white w-44 h-12 rounded-lg mt-10 flex justify-center items-center m-auto"
                  onClick={checkPinCode}
                  style={gradient}
                >
                  ثبت کد
                </button>

                <label>{isPinCodeValid && btnIsPressed && "Valid"}</label>
                <center className="text-[#EF4444] pt-6">
                  {!isPinCodeValid &&
                    btnIsPressed &&
                    "کد وارد شده نادرست می باشد"}
                </center>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center eightyvh">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        )}
      </div>
    </>
  );
}
