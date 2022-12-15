import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import Logo from "./../../../assets/Images/Dashboard/logo.svg";
import loginLogo from "./../../../assets/Images/Dashboard/loginLogo.svg";
import Spinner from "react-spinkit";
// import "../../../App.css";

import {
  setPhoneNumberHandler,
  setSmsCodeHandler,
  setUserIsLoggedHandler,
  userLoginStepAccess,
} from "../../../redux/reducers/login";
import { toast } from "react-toastify";

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
    if (phoneNumber == "09123123125" || phoneNumber == "09123123126") {
      // کاربر تستی

      dispatch(setPhoneNumberHandler(phoneNumber));
      dispatch(userLoginStepAccess("PhoneNumber_Step"));
      setShowLoading(false);
    } else {
      const Api_Url = process.env.REACT_APP_API_URL;
      try {
        axios
          .post(`${Api_Url}/account/otp_register/`, {
            phone_number: `+98${phoneNumber.slice(1)}`,
          })
          .then((data) => {
            console.log("axios /users/otp_register", data);
            // dispatch(setSmsCodeHandler(data.data));
            dispatch(setPhoneNumberHandler(phoneNumber));
            dispatch(userLoginStepAccess("PhoneNumber_Step"));
            setShowLoading(false);
          })
          .catch((e) => {
            toast.error("مشکلی رخ داده است", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
            console.log("error in axios /users/otp_register", e);
            setShowLoading(false);
            if (e.response.status == 401) {
            }
          });
      } catch (error) {}
    }
  };

  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  const shadow = {
    boxShadow:
      "0px 257px 103px rgba(0, 0, 0, 0.01), 0px 145px 87px rgba(0, 0, 0, 0.05), 0px 64px 64px rgba(0, 0, 0, 0.09), 0px 16px 35px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="pattern flex flex-col bg-warmGray-100">
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
        <div className="eightyvh flex flex-col">
          <div
            className="m-auto mx-8 flex flex-col gap-y-8 rounded-lg border border-warmGray-300/50 bg-warmGray-50 px-10 py-14 sm:mx-auto"
            dir="rtl"
            style={shadow}
          >
            <p className="mx-8">
              لطفا برای ورود به سامانه{" "}
              <strong className="font-bold">شماره موبایل</strong> خود را وارد
              کنید :
            </p>
            <div className="inputC mx-auto w-52">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative flex flex-col gap-y-14"
              >
                <label className="absolute top-[-10px] left-2 bg-warmGray-50 px-1 text-sm ">
                  شماره موبایل
                </label>
                <input
                  className="w-full rounded border border-main-300 py-4 px-4"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  autoFocus
                  {...register("phoneNumber", {
                    required: "وارد کردن شماره الزامی می باشد",
                    maxLength: 11,
                    minLength: 11,
                    pattern: {
                      value: /([0][9])\d+/,
                      message: "شماره وارد شده اشتباه می باشد",
                    },
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
                  style={
                    phoneNum?.length != 11
                      ? { backgroundColor: "#F3EAE4" }
                      : gradient
                  }
                  className={` m-auto flex h-12 w-52 items-center justify-center rounded-lg font-bold text-white disabled:bg-main-300 `}
                  type="submit"
                >
                  دریافت کد ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="eightyvh flex items-center justify-center">
          <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
        </div>
      )}
    </div>
  );
}
