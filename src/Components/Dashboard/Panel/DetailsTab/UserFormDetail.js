import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useToken from "../../../../customHooks/useToken";
// import useToken from "../../../../../customHooks/useToken";

export default function UserFormDetail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [token] = useToken();
  const onSubmit = (data) => {
    console.log("form data", data);
    console.log("watch('title')", watch("title"));
    createProperty(data);
  };
  const createProperty = ({
    city,
    convertible,
    metric,
    mortgage_price,
    number_of_room,
    rent_price,
    province,
    district,
    use_of_property,
    type_of_property,
    state,
    title,
    year_of_construction,
    special_situation,
    description,
    zip,
    Sub_registration_plate,
    Sub_registration_plate_from,
    Sub_registration_plate_to,
    Original_registration_plate,
    Original_registration_plate_from,
    Original_registration_plate_to,
    registration_section,
    registration_area,
    Skeleton_type,
    phone_status,
    phone_lines,
    address,
    building_side,
    unit_side,
    unit_floor,
    floors_number,
    units_per_floor,
  }) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(
          `${Api_Url}/api/my_properties/`,
          {
            title: title,
            mortgage_amount: +mortgage_price,
            rent_amount: +rent_price,
            type: +type_of_property,
            use: +use_of_property,
            area: +metric,
            province: province,
            county: state,
            city: city,
            neighbourhood: district,
            // convertible: convertible,
            convertible: true,
            construction_year: +year_of_construction,
            bedrooms: +number_of_room,
            // above is require
            // down in optional
            special_situation,
            description,
            zip,
            Sub_registration_plate,
            Sub_registration_plate_from,
            Sub_registration_plate_to,
            Original_registration_plate,
            Original_registration_plate_from,
            Original_registration_plate_to,
            registration_section,
            registration_area,
            Skeleton_type,
            phone_status,
            phone_lines,
            address,
            building_side,
            unit_side,
            unit_floor,
            floors_number,
            units_per_floor,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("axios /api/my_properties data.data:", data);
        })
        .catch((e) => console.log("error in axios /users/otp_register", e));
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
              required
              {...register("name", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام خانوادگی
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("lastname", {
                required: "وارد کردن این فیلد الزامی می باشد",
                // valueAsNumber: true,
              })}
              placeholder="محمدی"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              کد ملی
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("national_code", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="0012223334"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نام پدر
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("metric", {
                required: "وارد کردن این فیلد الزامی می باشد",
                // valueAsNumber: true,
              })}
              placeholder="رضا"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              تاریخ تولد
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("birth_date", {
                required: "وارد کردن این فیلد الزامی می باشد",
                // valueAsNumber: true,
              })}
              placeholder="06/08/1378"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              محل صدور
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("place_of_issue", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="تهران"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              سریال شناسنامه
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("serial_id", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="د123456/12"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              پیش شماره
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("aria_code", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="021"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              تلفن
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("phone_number", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="44112233"
              type="text"
              required
            />
          </div>

          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              استان
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("province", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="تهران"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شهر{" "}
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("city", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="تهران"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              کد پستی
            </label>
            <input
              className="w-full h-12 px-1  py-2"
              {...register("zip", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="1122334456"
              type="text"
              required
            />
          </div>
          <div className="relative w-full mt-6 border-12 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-20 right-2">
              نشانی محل اقامت
            </label>
            <input
              className="w-full h-24 px-1"
              {...register("address", {
                // required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="بلوار کشاورز - تقاطع قدس"
              type="text"
            />
          </div>

          <button className="bg-main-500 w-full h-10 mt-6 text-white mb-6">
            <input type="submit" value="ثبت تغییرات" />
          </button>
        </form>
      </div>
    </div>
  );
}
