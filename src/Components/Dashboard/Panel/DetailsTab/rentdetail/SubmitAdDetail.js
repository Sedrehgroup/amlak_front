import React, { useState } from "react";

export default function SubmitAdDetail() {
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
    <div className="flex justify-center">
      <div className="form1 seventyfivevh">
        <strong className="flex justify-center items-start text-4xl">
          ثبت آگهی اجاره
        </strong>
        <form className="bg-white w-3/4 p-4 mx-auto rounded-lg">
          <div>
            <div>
              <p className="bg-white text-center mb-2">
                برای ثبت آگهی در سامانه اجاره بها تمامی فیلد های زیر را با دقت
                تکمیل کنید.{" "}
              </p>
            </div>
            <div className="flex flex-row justify-between flex-wrap">
              <div className="relative w-full mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-11 right-2">
                  عنوان آگهی{" "}
                </label>
                <input
                  className="w-full h-14"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="55 متر مسکونی یک خواب در افسریه"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-8 right-2">
                  مبلغ رهن
                </label>
                <input
                  className="w-full h-11"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="تومان"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="relative inputC mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-8 right-2">
                  مبلغ اجاره{" "}
                </label>
                <input
                  className="w-full h-11"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="تومان"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="relative inputC2 mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-8 right-2">
                  متراژ{" "}
                </label>
                <input
                  className="w-full h-11"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="150 متر"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="relative inputC2 mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-8 right-2">
                  سال ساخت{" "}
                </label>
                <input
                  className="w-full h-11"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="1401"
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
              <div className="relative inputC2 mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-8 right-2">
                  قابل تبدیل{" "}
                </label>
                <input
                  className="w-full h-11"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="بله"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="relative inputC2 mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-8 right-2">
                  تعداد اتاق{" "}
                </label>
                <input
                  className="w-full h-11"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="4"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="relative w-full mt-6 border-12 border-solid border-primary-700">
                <label className="absolute bg-primary-50 bottom-20 right-2">
                  توضیحات آگهی{" "}
                </label>
                <input
                  className="w-full h-24"
                  value={firstName}
                  onChange={(e) => updateFormData(e)}
                  placeholder="این خانه سند دارد."
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <details className="p-4 rounded-lg m-auto">
                <summary className="font-semibold">
                  اطلاعات تکمیلی(اختیاری){" "}
                </summary>
                <div className="flex flex-row justify-between flex-wrap">
                  <div className="flex relative w-full mt-6 border-12 border-solid border-primary-700">
                    <label className="absolute bg-primary-50 bottom-11 right-2">
                      عنوان آگهی{" "}
                    </label>
                    <input
                      className="w-full h-14"
                      value={firstName}
                      onChange={(e) => updateFormData(e)}
                      placeholder="55 متر مسکونی یک خواب در افسریه"
                      type="text"
                      name="firstName"
                      required
                    />
                  </div>
                </div>
              </details>
            </div>
          </div>
          {/* <input type="submit" className="bg-primary-700" value="sabt" /> */}
          <button className="bg-primary-700 w-full h-10 mt-20 text-white mb-16">
            <input type="submit" value="ثبت آگهی" />
          </button>
        </form>
      </div>
    </div>
  );
}
