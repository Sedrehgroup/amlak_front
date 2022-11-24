import React, { useEffect, useState } from "react";
import ReactCodeInput from "react-code-input";
import { useDispatch } from "react-redux";
import Logo from "../../../assets/Images/Dashboard/logo.svg";
import { userLoginStepAccess } from "../../../redux/reducers/login";

export default function PhoneSmsForm() {
  const [isPinCodeValid, setIsPinCodeValid] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isPinCodeValid) dispatch(userLoginStepAccess("PhoneSms_Step"));
  }, [isPinCodeValid]);
  const checkPinCode = () => {
    const isPinCodeValid = pinCode === "12345";

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
                  fields={5}
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
              <label>Correct pin code: {12345}</label>
              <label>{isPinCodeValid && btnIsPressed && "Valid"}</label>
              <label>{!isPinCodeValid && btnIsPressed && "Not valid"}</label>
              {/* <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <label className="absolute bg-primary-50 top-[-10px] left-2 px-1 text-sm ">
                شماره موبایل
              </label>
              <input
                className="w-full py-4 px-4 rounded-sm border-12 border-solid border-primary-600"
                // value={phoneNumber}
                aria-invalid={errors.firstName ? "true" : "false"}
                {...register("phoneNumber", {
                  required: "وارد کردن شماره الزامی می باشد",
                  maxLength: 11,
                  valueAsNumber: true,
                  onChange: () => {
                    console.log("watch('phoneNumber')", watch("phoneNumber"));
                  },
                })}
                placeholder="09123456789"
                dir="ltr"
              />
              {errors.phoneNumber && (
                <>
                  <span className="text-primary-900">
                    {errors.phoneNumber?.message}
                  </span>
                </>
              )}

              <button
                className="bg-primary-800 text-white w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto"
                type="submit"
              >
                دریافت کد ورود
              </button>
            </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
