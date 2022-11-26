import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../../assets/Images/Dashboard/logo.svg";
import { userLoginStepAccess } from "../../../redux/reducers/login";
// import { userLoginStepAccess } from "../../../redux/reducers/login";

export default function RegisterForm() {
  const phoneNumber = useSelector((state) => state.login.phoneNumber);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ firstName, lastName, nationalCode }) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(`${Api_Url}/users/create_user/`, {
          phone_number: `+98${phoneNumber}`,

          national_code: nationalCode,
          first_name: firstName,
          last_name: lastName,
        })
        .then((data) => {
          console.log("axios /users/create_user", data);
          dispatch(userLoginStepAccess("Register_Step"));

          getAccessTokenHandler(phoneNumber);
        })
        .catch((e) => console.log("error in axios /users/create_user", e));
    } catch (error) {}
  };

  const getAccessTokenHandler = (phoneNumber) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(`${Api_Url}/users/token/`, {
          phone_number: `+98${phoneNumber}`,
          password: "rent",
        })
        .then(({ data }) => {
          dispatch(userLoginStepAccess("Register_Step"));
          window.localStorage.setItem("ACC_TOKEN", data.access);
          window.localStorage.setItem("REF_TOKEN", data.refresh);
          window.localStorage.setItem("user_logged", "true");
          console.log("axios /users/token data.data:", data);
        })
        .catch((e) => console.log("error in axios /users/otp_register", e));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="bg-primary-50">
      <div className="twentyvh flex justify-end">
        <img src={Logo} width={325} height={95} alt="" className="mx-auto " />
      </div>
      <div className="flex flex-col eightyvh">
        <div className="m-auto ideal-border" dir="rtl">
          <p className="mx-8 text-center">
            <strong>ثبت اطلاعات</strong>
          </p>
          <div className="w-2/3  mx-auto  inputC mt-6">
            <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
              <div
                className="relative mt-4 inline-block ml-2"
                style={{ width: "calc(50% - .5rem)" }}
              >
                <label className="absolute bg-primary-50 top-[-10px] left-2 px-1 text-sm ">
                  نام
                </label>
                <input
                  className="w-full py-4 px-4 rounded-sm border-12 border-solid border-primary-600"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  autoFocus
                  {...register("firstName", {
                    required: "وارد کردن نام الزامی می باشد",
                  })}
                  placeholder="علی"
                  dir="ltr"
                />
              </div>
              <div
                className="relative mt-4 inline-block mr-2"
                style={{ width: "calc(50% - .5rem)" }}
              >
                <label className="absolute bg-primary-50 top-[-10px] left-2 px-1 text-sm ">
                  نام خانوادگی
                </label>
                <input
                  className="w-full py-4 px-4 rounded-sm border-12 border-solid border-primary-600"
                  aria-invalid={errors.lastName ? "true" : "false"}
                  {...register("lastName", {
                    required: "وارد کردن نام خانوادگی الزامی می باشد",
                  })}
                  placeholder="احمدی"
                  dir="ltr"
                />
              </div>
              <div className="relative mt-4  w-100">
                <label className="absolute bg-primary-50 top-[-10px] left-2 px-1 text-sm ">
                  کد ملی
                </label>
                <input
                  className="w-full py-4 px-4 rounded-sm border-12 border-solid border-primary-600"
                  aria-invalid={errors.nationalCode ? "true" : "false"}
                  {...register("nationalCode", {
                    required: "وارد کردن کد ملی الزامی می باشد",

                    valueAsNumber: true,
                  })}
                  placeholder="0012223334"
                  dir="ltr"
                />
              </div>
              {errors.firstName && (
                <>
                  <p className="text-[#EF4444] text-sm">
                    {errors.firstName?.message}
                  </p>
                </>
              )}
              {errors.lastName && (
                <>
                  <p className="text-[#EF4444] text-sm">
                    {errors.lastName?.message}
                  </p>
                </>
              )}
              {errors.nationalCode && (
                <>
                  <p className="text-[#EF4444] text-sm">
                    {errors.nationalCode?.message}
                  </p>
                </>
              )}
              <button
                className="bg-primary-800 text-white w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto"
                type="submit"
              >
                ثبت نام
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
