import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Logo from "../../../assets/Images/Dashboard/logo.svg";
import {
  setPhoneNumberHandler,
  setSmsCodeHandler,
  userLoginStepAccess,
} from "../../../redux/reducers/login";

export default function PhoneNumForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ phoneNumber }) => {
    console.log("phoneNumber", phoneNumber);
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(`${Api_Url}/users/otp_register/`, {
          phone_number: `+98${phoneNumber}`,
        })
        .then((data) => {
          console.log("axios /users/otp_register", data);
          dispatch(setSmsCodeHandler(data.data));
          dispatch(setPhoneNumberHandler(phoneNumber));
          dispatch(userLoginStepAccess("PhoneNumber_Step"));
        })
        .catch((e) => console.log("error in axios /users/otp_register", e));
    } catch (error) {}
  };
  return (
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
