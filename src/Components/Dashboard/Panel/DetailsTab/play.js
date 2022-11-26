import React, { useState } from "react";

export default function UserFormDetail() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, email } = formData;

  return (
    <div className="form1 seventyfivevh">
      <strong className="flex justify-center items-start text-4xl">
        اطلاعات کاربری
      </strong>
      <form className="bg-white w-1/2 p-4 mx-auto rounded-lg">
        <div>
          <div>
            <p className="bg-white text-center mb-2">
              برای ثبت اطلاعات کاربری خود فیلدهای زیر را تکمیل کنید
            </p>
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                نام
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="علی"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                نام خانوادگی
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="محمدی"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                کد ملی{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="0056178429"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                نام پدر{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="رضا"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                تاریخ تولد{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="1378/7/5"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                محل صدور{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="تهران"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                سریال شناسنامه{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="123456/12د"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                پیش شماره{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="021"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                تلفن{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="44780621"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                استان{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="تهران"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                شهر{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="تهران"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-8 right-2">
                کد پستی{" "}
              </label>
              <input
                className="w-full h-11"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="0657486931"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div className="relative w-full mt-6 border-12 border-solid border-primary-700">
              <label className="absolute bg-primary-50 bottom-20 right-2">
                نشانی محل اقامت{" "}
              </label>
              <input
                className="w-full h-24"
                value={firstName}
                onChange={(e) => updateFormData(e)}
                placeholder="بلوار کشاورز"
                type="text"
                name="firstName"
                required
              />
            </div>
          </div>
        </div>
        {/* <input type="submit" className="bg-primary-700" value="sabt" /> */}
        <button className="bg-primary-700 w-full h-10 mt-20 text-white mb-16">
          <input type="submit" value="ثبت تغییرات" />
        </button>

        {/* Submit
          </input> */}
      </form>
    </div>
  );
}
