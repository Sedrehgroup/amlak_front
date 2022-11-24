import React, { useState } from "react";
import Logo from "../../../assets/Images/Dashboard/logo.svg";

export default function FormAuth() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  return (
    <div className="bg-primary-50">
      <div className="twentyvh flex justify-end">
        <img src={Logo} width={325} height={95} alt="" className="mx-auto " />
      </div>
      <div class="flex flex-col eightyvh">
        <div class="m-auto ideal-border flex flex-col" dir="rtl">
          <strong className="m-auto">اعتبارسنجی کد ورود</strong>
          <div className="flex gap-8">
            <div className="w-52 rounded-sm border-12 border-solid border-primary-600 mx-auto relative inputC mt-6 mr-8">
              <label className="absolute bg-primary-50 bottom-8 right-1">
                نام
              </label>
              <input
                className="w-full h-11"
                // value={phoneNumber}
                onChange={(e) => updateFormData(e)}
                placeholder="علی"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="w-52 rounded-sm border-12 border-solid border-primary-600 mx-auto relative inputC mt-6 ml-8">
              <label className="absolute bg-primary-50 bottom-8 right-1">
                نام خانوادگی
              </label>
              <input
                className="w-full h-11"
                // value={phoneNumber}
                onChange={(e) => updateFormData(e)}
                placeholder="محمدی"
                type="text"
                name="firstName"
                required
              />
            </div>
          </div>
          <div className="w-52 rounded-sm border-12 border-solid border-primary-600 mx-auto relative inputC mt-6">
            <label className="absolute bg-primary-50 bottom-8 right-1">
              کدملی{" "}
            </label>
            <input
              className="w-full h-11"
              // value={phoneNumber}
              onChange={(e) => updateFormData(e)}
              placeholder="0022334455"
              type="number"
              name="firstName"
              required
            />
          </div>
          <button className="bg-primary-800 w-52 h-12 rounded-lg mt-10 flex justify-center items-center m-auto">
            <p className="text-white">ثبت نام</p>
          </button>
        </div>
      </div>
    </div>
  );
}
