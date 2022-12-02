import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../assets/Images/Dashboard/logo.svg";
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

  return (
    <>
      <div className="bg-primary-50">
        <div className="twentyvh flex justify-end">
          <img src={Logo} width={325} height={95} alt="" className="mx-auto " />
        </div>
        {!showLoading ? (
          <div className="flex flex-col eightyvh">
            <div className="m-auto ideal-border" dir="rtl">
              <p className="mx-8">
                لطفا برای ورود به سامانه <strong>کد 4 رقمی</strong> پیامک شده را
                وارد کنید :
              </p>
              <div className=" mt-6">
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
                  className="bg-main-500 disabled:bg-main-300 text-white w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto"
                  onClick={checkPinCode}
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
