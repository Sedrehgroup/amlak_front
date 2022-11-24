import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../assets/Images/Dashboard/logo.svg";
import { userLoginStepAccess } from "../../../redux/reducers/login";

export default function PhoneSmsForm() {
  const smsCode = useSelector((state) => state.login.smsCode);

  const [isPinCodeValid, setIsPinCodeValid] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isPinCodeValid) dispatch(userLoginStepAccess("PhoneSms_Step"));
  }, [isPinCodeValid]);
  const checkPinCode = () => {
    const isPinCodeValid = pinCode == smsCode;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) setPinCode("");
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
        <div className="flex flex-col eightyvh">
          <div className="m-auto ideal-border" dir="rtl">
            <p className="mx-8">
              لطفا برای ورود به سامانه <strong>شماره موبایل</strong> خود را وارد
              کنید :
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
                className="bg-primary-800 text-white w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto"
                onClick={checkPinCode}
              >
                دریافت کد ورود
              </button>

              <label>{isPinCodeValid && btnIsPressed && "Valid"}</label>
              <center>{!isPinCodeValid && btnIsPressed && "Not valid"}</center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
