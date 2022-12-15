import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useToken from "../../../../customHooks/useToken";
import {
  updateListHandler,
  updateMyPropertyListHandler,
} from "../../../../redux/reducers/userProperty";
import { useDispatch } from "react-redux";
import { iranCitiesList } from "../../../../utils/iranCitiesList";
import { arrayOfYears } from "../../../../utils/yearsList";

import { toast } from "react-toastify";
import { setUserIsLoggedHandler } from "../../../../redux/reducers/login";
import { useHistory } from "react-router-dom";
import SumbitMapModal from "../../../Map/submitMapModal";
import { LEAFLET_CENTER } from "../../../../utils/config";

export default function SubmitProperty() {
  const [selectedProvince, setSelectedProvince] = useState("تهران");
  const [selectedState, setSelectedState] = useState("تهران");
  const [selectedTab, setTab] = useState(0);
  const [markerCords, setMarker] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [token] = useToken();
  useEffect(() => {
    document.title = "سامانه اجاره بها - ثبت آگهی";
  }, []);
  const onSubmit = (data) => {
    console.log("form data", data);
    console.log("watch('title')", watch("title"));
    createProperty(data);
  };
  const createProperty = ({
    // city,
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
    const formData = {
      title: title,
      mortgage_amount: +mortgage_price,
      rent_amount: +rent_price,
      type: +type_of_property,
      use: +use_of_property,
      area: +metric,
      province: "نامعین",
      county: province,
      city: state,
      neighbourhood: district,
      convertible: convertible,
      construction_year: +year_of_construction,
      bedrooms: +number_of_room,
      // above is require
      // down in optional
      special_situation: special_situation || 0,
      description,
      zip,
      Sub_registration_plate,
      Sub_registration_plate_from,
      Sub_registration_plate_to,
      Original_registration_plate,
      Original_registration_plate_from,
      Original_registration_plate_to,
      registration_section: registration_section || "Tehran",
      registration_area: registration_area || "Tehran",
      Skeleton_type: Skeleton_type || 0,
      phone_status: phone_status || 0,
      phone_lines: phone_lines || 0,
      address: address || "آدرس تعیین نشده است",
      building_side: building_side || 0,
      unit_side: unit_side || 0,
      unit_floor: unit_floor || 0,
      floors_number: floors_number || 0,
      units_per_floor: units_per_floor || 0,
    };
    try {
      axios
        .post(`${Api_Url}/api/property/my_properties/`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("axios /api/property/my_properties data.data:", data);
          history.push("/myProperties");
          toast.success("آگهی با موفقیت ثبت شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });

          dispatch(updateListHandler());
          dispatch(updateMyPropertyListHandler([formData]));
        })
        .catch((e) => {
          console.log("error in axios /api/property/my_properties", e);
          if (e.response.status == 401) {
            //dispatch(setUserIsLoggedHandler(false));
            // window.localStorage.setItem("user_logged", "false");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="form1 seventyfivevh">
        <strong className="mt-8 mb-8 flex items-start justify-center text-4xl">
          ثبت آگهی اجاره
        </strong>

        <nav>
          <div onClick={() => setTab(0)}>اطلاعات اصلی</div>
          <div onClick={() => setTab(1)}>امکانات</div>
          <div onClick={() => setTab(2)}>اطلاعات تکمیلی</div>
        </nav>

        <form
          className="mx-auto flex w-3/4 flex-row flex-wrap rounded-lg bg-white p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="mb-2 bg-white text-center">
              برای ثبت آگهی در سامانه اجاره بها تمامی فیلد های زیر را با دقت
              تکمیل کنید.{" "}
            </p>
          </div>

          {selectedTab === 0 && (
            <>
              <div className="relative mx-1 mt-6  w-full border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  عنوان آگهی{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  placeholder="55 متر مسکونی یک خواب در افسریه"
                  type="text"
                  required
                  {...register("title", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                />
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  مبلغ رهن
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("mortgage_price", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="تومان"
                  type="text"
                  required
                />
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  مبلغ اجاره{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("rent_price", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="تومان"
                  type="text"
                  required
                />
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  متراژ{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("metric", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="150 متر"
                  type="text"
                  required
                />
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  سال ساخت{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("year_of_construction", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1401"
                  required
                  defaultValue={1400}
                >
                  {arrayOfYears(50).map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نوع ملک{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {[
                    "قطعه زمین",
                    "ساختمان",
                    "دستگاه آپارتمان",
                    "ویلایی",
                    "باب مغازه",
                    "باب مسجد",
                    "قطعه انباری",
                    "قطعه پارکینگ",
                    "دستگاه سالن",
                    "باب حمام",
                    "دستگاه سوله",
                    "دستگاه تالار",
                    "دستگاه کارخانه",
                    "دستگاه کارگاه",
                    "سایر",
                  ].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  کاربری ملک{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("use_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {[
                    "مسکونی",
                    "اداری",
                    "تجاری",
                    "آموزشی",
                    "صنعتی",
                    "باغ و باغچه",
                    "زمین زراعی",
                    "ورزشی",
                    "بهداشتی",
                    "مذهبی",
                    "مسکونی تجاری",
                    "خدماتی",
                    "دامداری",
                    "دامپروری",
                    "مرغداری",
                    "گلخانه",
                    "پرورش ماهی",
                    "سایر",
                  ].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  استان{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("province", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    onChange: (e) => {
                      setSelectedProvince(e.target.value);
                    },
                  })}
                  defaultValue="تهران"
                  placeholder="تهران"
                  required
                >
                  {[
                    ...new Set(
                      iranCitiesList.map((element) => element.province)
                    ),
                  ].map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  شهرستان{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("state", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    onChange: (e) => {
                      setSelectedState(e.target.value);
                    },
                  })}
                  defaultValue="تهران"
                  placeholder="تهران"
                  required
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
              {/* <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
              <label className="absolute bg-primary-50 bottom-9 right-2">
                شهر{" "}
              </label>
              <select
                dir="ltr"
                className="w-full h-12 px-4"
                {...register("city", {
                  required: "وارد کردن این فیلد الزامی می باشد",
                })}
                value={selectedState}
                placeholder="تهران"
                required
              >
                {iranCitiesList
                  .filter((element) => element.province == selectedProvince)
                  .map((val, index) => (
                    <option key={index} value={val.city}>
                      {val.city}
                    </option>
                  ))}
              </select>
            </div> */}
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  محله{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("district", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="تهرانپارس"
                  type="text"
                  required
                />
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  قابل تبدیل{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("convertible", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="بله"
                  required
                  defaultValue={true}
                >
                  {[true, false].map((val, index) => (
                    <option key={index} value={val}>
                      {val ? "بله" : "خیر"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  تعداد اتاق{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("number_of_room", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="4"
                  type="text"
                  required
                />
              </div>
            </>
          )}
          {selectedTab === 1 && (
            <>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت آب{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت برق{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت گاز{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت پارکینگ{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت انباری{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نمای ساختمان{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  آسانسور{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("type_of_property", {
                    required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="مسکونی"
                  required
                  defaultValue={0}
                >
                  {["اشتراکی", "سایر"].map((val, index) => (
                    <option key={index} value={index}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          {selectedTab === 2 && (
            <div className="flex flex-row flex-wrap justify-between">
              <div className="relative mt-6 w-full border-2 border-solid border-main-200">
                <label className="absolute bottom-20 right-2 bg-primary-50">
                  نشانی ملک{" "}
                </label>
                <input
                  className="h-24 w-full px-1"
                  {...register("address", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="بلوار کشاورز تقاطق قدس"
                  type="text"
                />
              </div>

              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت خاص{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("special_situation", { valueAsNumber: true })}
                  placeholder="معمولی"
                >
                  {[
                    { lb: "معمولی", value: 1 },
                    { lb: "گسل خیز", value: 0 },
                    { lb: "بستر رودخانه", value: 2 },
                    { lb: "غیره", value: 3 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={1 == val.value && "selected"}
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  کد پستی
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("zip", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1234567891"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  پلاک ثبتی فرعی{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("Sub_registration_plate", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  پلاک ثبتی فرعی از{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("Sub_registration_plate_from", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  پلاک ثبتی فرعی تا{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register(" Sub_registration_plate_to", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="2"
                  type="text"
                />
              </div>

              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  پلاک ثبتی اصلی{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("Original_registration_plate", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="4"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  پلاک ثبتی اصلی از{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("Original_registration_plate_from", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="6"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  پلاک ثبتی اصلی تا{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("Original_registration_plate_to", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="12"
                  type="text"
                />
              </div>

              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  بخش ثبتی{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("registration_section", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="تهران"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  حوزه ثبتی{" "}
                </label>
                <input
                  className="h-12 w-full px-1  py-2"
                  {...register("registration_area", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="تهران"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نوع اسکلت{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("Skeleton_type", { valueAsNumber: true })}
                  placeholder="آجری"
                >
                  {[
                    { lb: "بتنی", value: 0 },
                    { lb: "آجری", value: 1 },
                    { lb: "سیمانی", value: 2 },
                    { lb: "غیره", value: 3 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={1 == val.value && "selected"}
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت تلفن{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("phone_status", { valueAsNumber: true })}
                  placeholder="آزاد"
                >
                  {[
                    { lb: "بدون خط", value: 0 },
                    { lb: "آزاد", value: 1 },
                    { lb: "غیره", value: 2 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={1 == val.value && "selected"}
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  تعداد خط{" "}
                </label>
                <input
                  className="h-12 w-full px-4"
                  {...register("phone_lines", {
                    valueAsNumber: true,
                  })}
                  placeholder="2"
                  type="text"
                />
              </div>

              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  سمت ساختمان{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("building_side", {
                    valueAsNumber: true,
                  })}
                  placeholder="شمالی"
                >
                  {[
                    { lb: "جنوبی", value: 0 },
                    { lb: "شمالی", value: 1 },
                    { lb: "شرقی", value: 2 },
                    { lb: "غربی", value: 3 },
                    { lb: "غیره", value: 4 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={1 == val.value && "selected"}
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  سمت واحد{" "}
                </label>
                <select
                  dir="ltr"
                  className="h-12 w-full px-4"
                  {...register("unit_side", {
                    valueAsNumber: true,
                  })}
                  placeholder="شمالی"
                >
                  {[
                    { lb: "جنوبی", value: 0 },
                    { lb: "شمالی", value: 1 },
                    { lb: "شرقی", value: 2 },
                    { lb: "غربی", value: 3 },
                    { lb: "غیره", value: 4 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={1 == val.value && "selected"}
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  طبقه واحد{" "}
                </label>
                <input
                  className="h-12 w-full px-4"
                  {...register("unit_floor", {
                    valueAsNumber: true,
                  })}
                  placeholder="3"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  تعداد طبقات ساختمان{" "}
                </label>
                <input
                  className="h-12 w-full px-4"
                  {...register("floors_number", {
                    valueAsNumber: true,
                  })}
                  placeholder="10"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  تعداد واحد در طبقه{" "}
                </label>

                <input
                  className="h-12 w-full px-4"
                  {...register("units_per_floor", {
                    valueAsNumber: true,
                  })}
                  placeholder="2"
                  type="text"
                />
              </div>
              <div className="relative mt-6 w-full border-2 border-solid border-main-200">
                <label className="absolute bottom-20 right-2 bg-primary-50">
                  توضیحات آگهی{" "}
                </label>
                <input
                  className="h-24 w-full px-1"
                  {...register("descriptions", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="این خانه سند دارد."
                  type="text"
                />
              </div>
              <SumbitMapModal markerCords={markerCords} setMarker={setMarker} />
            </div>
          )}

          <input
            type="submit"
            value="ثبت آگهی"
            className="mt-6 mb-6 h-10 w-full cursor-pointer bg-main-500 text-white"
          />
        </form>
      </div>
    </div>
  );
}
