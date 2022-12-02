import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Logo from "./../../../assets/Images/Dashboard/logo.svg";
import Spinner from "react-spinkit";

import {
  setPhoneNumberHandler,
  setSmsCodeHandler,
  setUserIsLoggedHandler,
  userLoginStepAccess,
} from "../../../redux/reducers/login";

export default function PhoneNumForm() {
  const [phoneNum, setPhoneNum] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ phoneNumber }) => {
    setShowLoading(true);
    console.log("phoneNumber", phoneNumber);
    if (phoneNumber == 9123123123) {
      // موجر تستی
      dispatch(setSmsCodeHandler("0000"));
      dispatch(setPhoneNumberHandler(phoneNumber));
      dispatch(userLoginStepAccess("PhoneNumber_Step"));
      setShowLoading(false);
    } else if (phoneNumber == 9123123124) {
      // مستاجر تستی
      dispatch(setSmsCodeHandler("0001"));
      dispatch(setPhoneNumberHandler(phoneNumber));
      dispatch(userLoginStepAccess("PhoneNumber_Step"));
      setShowLoading(false);
    } else {
      const Api_Url = process.env.REACT_APP_API_URL;
      try {
        axios
          .post(`${Api_Url}/account/otp_register/`, {
            phone_number: `+98${phoneNumber}`,
          })
          .then((data) => {
            console.log("axios /users/otp_register", data);
            dispatch(setSmsCodeHandler(data.data));
            dispatch(setPhoneNumberHandler(phoneNumber));
            dispatch(userLoginStepAccess("PhoneNumber_Step"));
            setShowLoading(false);
          })
          .catch((e) => {
            console.log("error in axios /users/otp_register", e);
            if (e.response.status == 401) {
              //dispatch(setUserIsLoggedHandler(false));
              window.localStorage.setItem("user_logged", "false");
              window.localStorage.removeItem("ACC_TOKEN");
              window.localStorage.removeItem("REF_TOKEN");
              setShowLoading(false);
            }
          });
      } catch (error) {}
    }
  };
  return (
    <div className="bg-primary-50">
      <div className="twentyvh flex justify-end">
        <img src={Logo} width={325} height={95} alt="" className="mx-auto " />
      </div>
      {!showLoading ? (
        <div className="flex flex-col eightyvh">
          <div className="m-auto ideal-border" dir="rtl">
            <p className="mx-8">
              لطفا برای ورود به سامانه <strong>شماره موبایل</strong> خود را وارد
              کنید :
            </p>
            <div className="w-52  mx-auto  inputC mt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <label className="absolute bg-primary-50 top-[-10px] left-2 px-1 text-sm ">
                  شماره موبایل
                </label>
                <input
                  className="w-full py-4 px-4 rounded-sm border-12 border-solid border-primary-600"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  autoFocus
                  {...register("phoneNumber", {
                    required: "وارد کردن شماره الزامی می باشد",
                    maxLength: 11,
                    minLength: 11,
                    valueAsNumber: true,
                  })}
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  placeholder="09123456789"
                  dir="ltr"
                  required
                />
                {errors.phoneNumber && (
                  <>
                    <span className="text-[#EF4444]">
                      {errors.phoneNumber?.message}
                    </span>
                  </>
                )}

                <button
                  disabled={phoneNum?.length != 11}
                  className="bg-main-500 disabled:bg-main-300 text-white w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto"
                  type="submit"
                >
                  دریافت کد ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center eightyvh">
          <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
        </div>
      )}
    </div>
  );
}
