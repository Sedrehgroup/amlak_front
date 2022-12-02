import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useToken from "../../../../customHooks/useToken";
import { setUserIsLoggedHandler } from "../../../../redux/reducers/login";
import { iranCitiesList } from "../../../../utils/iranCitiesList";

export default function UserFormDetail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState({});
  const [selectedProvince, setSelectedProvince] = useState("تهران");
  const [selectedProvince2, setSelectedProvince2] = useState("تهران");
  const [selectedState2, setSelectedState2] = useState("تهران");
  const dispatch = useDispatch();
  const [token] = useToken();
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    try {
      axios
        .get(`${Api_Url}/account/user_information/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("axios /account/user_information data.data:", data);
          setUserData(data);
        })
        .catch((e) => {
          console.log("error in axios /account/user_information", e);
          if (e.response.status == 401) {
            // //dispatch(setUserIsLoggedHandler(false));
            window.localStorage.setItem("user_logged", "false");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);
  const onSubmit = (data) => {
    console.log("form data", data);
    createUserInfo(data);
  };
  const createUserInfo = ({
    email,
    father_name,
    certificate_number,
    birth_day,
    sex,
    latin_first_name,
    latin_last_name,
    certificate_country,
    certificate_province,
    certificate_county,
    certificate_type,
    marriage,
    education,
    province,
    county,
    city,
    address,
    postal_code,
    personal_phone_number,
  }) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(
          `${Api_Url}/account/create_additional_user/`,
          {
            email,
            father_name,
            certificate_number,
            birth_day,
            sex,
            latin_first_name,
            latin_last_name,
            certificate_country,
            certificate_province,
            certificate_county,
            certificate_type,
            marriage,
            education,
            province,
            county,
            city,
            address,
            postal_code,
            personal_phone_number,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("axios /account/create_additional_user data.data:", data);
        })
        .catch((e) => {
          console.log("error in axios /account/create_additional_user/", e);
          if (e.response.status == 401) {
            // //dispatch(setUserIsLoggedHandler(false));
            window.localStorage.setItem("user_logged", "false");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="form1 seventyfivevh">
        <strong className="flex justify-center items-start text-4xl mb-8">
          اطلاعات کاربری
        </strong>

        <form
          className="bg-white w-3/4 p-4 mx-auto rounded-lg flex flex-row flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="bg-white  text-center mb-2">
              برای ثبت اطلاعات کاربری خود فیلدهای زیر را تکمیل کنید
            </p>
          </div>

          <div className="relative w-full mx-1  mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              placeholder="علی"
              type="text"
              value={userData?.first_name}
              {...register("name")}
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام خانوادگی
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("lastname")}
              value={userData?.last_name}
              placeholder="محمدی"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              کد ملی
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("national_code")}
              value={userData?.national_code}
              placeholder="0012223334"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              ایمیل
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("email")}
              placeholder="fake@gmail.com"
              type="email"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام پدر
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("father_name")}
              placeholder="رضا"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              جنسیت
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("sex")}
              placeholder="مرد"
            >
              {[
                { lb: "مرد", value: true },
                { lb: "زن", value: false },
              ].map((val, index) => (
                <option key={index} value={val.value}>
                  {val.lb}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام لاتین
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("latin_first_name")}
              placeholder="ALI"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام خانوادگی لاتین
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("latin_last_name")}
              placeholder="AHMADI"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              تاریخ تولد
            </label>

            <input
              dir="rtl"
              className="w-full h-12 px-1  py-2 normal-example"
              {...register("birth_day", {
                valueAsDate: true,
                onChange: (e) => {
                  console.log("date", e.target.value);
                },
              })}
              placeholder="1378/08/06"
              type="date"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شماره شناسنامه
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("certificate_number")}
              placeholder="00122233334"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              کشور محل صدور
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("certificate_country")}
              placeholder="ایران"
              defaultValue="ایران"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              استان محل صدور
            </label>

            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("certificate_province", {
                onChange: (e) => {
                  setSelectedProvince(e.target.value);
                },
              })}
              defaultValue="تهران"
              placeholder="تهران"
            >
              {[
                ...new Set(iranCitiesList.map((element) => element.province)),
              ].map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شهر محل صدور
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("certificate_county")}
              defaultValue="تهران"
              placeholder="تهران"
            >
              {iranCitiesList
                .filter((element) => element.province == selectedProvince)
                .map((val, index) => (
                  <option key={index} value={val.city}>
                    {val.city}
                  </option>
                ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نوع شناسنامه
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("certificate_type")}
              placeholder="اصل"
            >
              {["اصل", "المثنی", "غیره"].map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              وضعیت تاهل
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("marriage")}
              placeholder="متاهل"
            >
              {[
                { lb: "متاهل", value: true },
                { lb: "مجرد", value: false },
              ].map((val, index) => (
                <option key={index} value={val.value}>
                  {val.lb}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              تحصیلات
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("education")}
              placeholder="لیسانس"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              استان محل سکونت
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("province", {
                onChange: (e) => {
                  setSelectedProvince2(e.target.value);
                },
              })}
              defaultValue="تهران"
              placeholder="تهران"
            >
              {[
                ...new Set(iranCitiesList.map((element) => element.province)),
              ].map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شهرستان محل سکونت
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("county", {
                onChange: (e) => {
                  setSelectedState2(e.target.value);
                },
              })}
              defaultValue="تهران"
              placeholder="تهران"
            >
              {iranCitiesList
                .filter((element) => element.province == selectedProvince2)
                .map((val, index) => (
                  <option key={index} value={val.city}>
                    {val.city}
                  </option>
                ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شهر محل سکونت
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("city", {
                value: selectedState2,
              })}
              value={selectedState2}
              defaultValue="تهران"
              placeholder="تهران"
            >
              {iranCitiesList
                .filter((element) => element.province == selectedProvince2)
                .map((val, index) => (
                  <option key={index} value={val.city}>
                    {val.city}
                  </option>
                ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              کد پستی
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("postal_code")}
              placeholder="11223344"
              type="text"
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شماره منزل
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("personal_phone_number")}
              placeholder="02133667799"
              type="text"
            />
          </div>

          <div className="relative w-full mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-20 right-2">
              نشانی محل اقامت
            </label>
            <input
              className="w-full h-24 px-1"
              {...register("address")}
              placeholder="بلوار کشاورز - تقاطع قدس"
              type="text"
            />
          </div>

          <button
            type="submit"
            className="bg-main-500 w-full h-10 mt-6 text-white mb-6 cursor-pointer"
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}
