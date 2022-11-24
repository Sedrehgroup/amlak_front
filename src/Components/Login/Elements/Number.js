import React, { useState } from "react";
import Logo from "../../../assets/Images/Dashboard/logo.svg";

export default function Number() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { phoneNumber } = formData;

  return (
    <div className="bg-primary-50">
      <div className="twentyvh flex justify-end">
        <img src={Logo} width={325} height={95} alt="" className="mx-auto " />
      </div>
      <div class="flex flex-col eightyvh">
        <div class="m-auto ideal-border" dir="rtl">
          <p className="mx-8">
            لطفا برای ورود به سامانه <strong>شماره موبایل</strong> خود را وارد
            کنید :
          </p>
          <div className="w-52 rounded-sm border-12 border-solid border-primary-600 mx-auto relative inputC mt-6">
            <label className="absolute bg-primary-50 bottom-8 left-1">
              شماره موبایل
            </label>
            <input
              className="w-full h-11"
              // value={phoneNumber}
              onChange={(e) => updateFormData(e)}
              placeholder="09123456789"
              type="tel"
              name="firstName"
              required
              dir="ltr"
            />
          </div>
          <button className="bg-primary-800 w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto">
            <p className="text-white">دریافت کد ورود</p>
          </button>
        </div>
      </div>
    </div>
  );
}
