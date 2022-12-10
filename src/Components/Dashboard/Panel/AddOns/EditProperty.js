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
import useQuery from "../../../../customHooks/useQuery";

export default function EditProperty() {
  const Api_Url = process.env.REACT_APP_API_URL;
  let query = useQuery();
  const requestId = query.get("id");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedState, setSelectedState] = useState("تهران");
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [token] = useToken();
  const [defaultData, setDefaultData] = useState({
    id: 26,
    owner: {
      owner_id: 1,
      first_name: "Pouria",
      last_name: "Soleymanzadeh",
    },
    title: "ویلا 120 متری دوبلکس گیلان لاهیجان",
    mortgage_amount: 7800000,
    rent_amount: 120000,
    type: 0,
    use: 2,
    special_situation: null,
    area: 120,
    province: "نامعین",
    county: "گیلان",
    city: "لاهیجان",
    neighbourhood: "شهریار",
    convertible: true,
    construction_year: 1399,
    bedrooms: 5,
    description: null,
    created_date: "2022-12-06T20:09:16.878376Z",
    zip: null,
    Sub_registration_plate: null,
    Sub_registration_plate_from: null,
    Sub_registration_plate_to: null,
    Original_registration_plate: null,
    Original_registration_plate_from: null,
    Original_registration_plate_to: null,
    registration_section: null,
    registration_area: null,
    Skeleton_type: null,
    phone_status: null,
    phone_lines: null,
    address: null,
    building_side: null,
    unit_side: null,
    unit_floor: null,
    floors_number: null,
    units_per_floor: null,
  });
  useEffect(() => {
    if (!!!!token) {
      try {
        axios
          .get(`${Api_Url}/api/property/modify_properties/${+requestId}/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log(
              "axios /api/property/modify_properties data.data:",
              data
            );

            setDefaultData(data);
          })
          .catch((e) => {
            console.log("error in axios /api/property/modify_properties", e);
            if (e.response.status == 401) {
              //dispatch(setUserIsLoggedHandler(false));
              // window.localStorage.setItem("user_logged", "false");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token]);

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
        .patch(
          `${Api_Url}/api/property/modify_properties/${+requestId}/`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("axios /api/property/modify_properties data.data:", data);
          history.push("/myProperties");
          toast.success("آگهی با موفقیت ویرایش شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });

          dispatch(updateListHandler());
        })
        .catch((e) => {
          console.log("error in axios /api/property/modify_properties", e);
          if (e.response.status == 401) {
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
          ویرایش آگهی اجاره
        </strong>

        <form
          className="bg-white w-3/4 p-4 mx-auto rounded-lg flex flex-row flex-wrap"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="bg-white text-center mb-2">
              برای ویرایش آگهی در سامانه اجاره بها تمامی فیلد های زیر را با دقت
              تکمیل کنید.{" "}
            </p>
          </div>

          <div className="relative w-full mx-1  mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              عنوان آگهی{" "}
            </label>
            <input
              defaultValue={defaultData.title}
              className="w-full h-12 px-1  py-2"
              placeholder="55 متر مسکونی یک خواب در افسریه"
              type="text"
              required
              {...register("title", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              مبلغ رهن
            </label>
            <input
              defaultValue={defaultData.mortgage_amount}
              className="w-full h-12 px-1  py-2"
              {...register("mortgage_price", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="تومان"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              مبلغ اجاره{" "}
            </label>
            <input
              defaultValue={defaultData.rent_amount}
              className="w-full h-12 px-1  py-2"
              {...register("rent_price", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="تومان"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              متراژ{" "}
            </label>
            <input
              defaultValue={defaultData.area}
              className="w-full h-12 px-1  py-2"
              {...register("metric", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="150 متر"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              سال ساخت{" "}
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("year_of_construction", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="1401"
              required
              defaultValue={defaultData.construction_year}
            >
              {arrayOfYears(50).map((val, index) => (
                <option
                  key={index}
                  value={val}
                  selected={defaultData.construction_year == val && "selected"}
                >
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              نوع ملک{" "}
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("type_of_property", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="مسکونی"
              required
              defaultValue={defaultData.type}
            >
              {["مسکونی", "تجاری", "غیره"].map((val, index) => (
                <option
                  key={index}
                  value={index}
                  selected={defaultData.type == index && "selected"}
                >
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              کاربری ملک{" "}
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("use_of_property", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="مسکونی"
              required
              defaultValue={defaultData.use}
            >
              {["مسکونی", "زراعی", "ویلایی", "غیره"].map((val, index) => (
                <option
                  key={index}
                  value={index}
                  selected={defaultData.use == index && "selected"}
                >
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              استان{" "}
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("province", {
                required: "وارد کردن این فیلد الزامی می باشد",
                onChange: (e) => {
                  setSelectedProvince(e.target.value);
                },
              })}
              defaultValue={defaultData.county}
              placeholder="تهران"
              required
            >
              {[
                ...new Set(iranCitiesList.map((element) => element.province)),
              ].map((val, index) => (
                <option
                  key={index}
                  value={val}
                  selected={defaultData.county == val && "selected"}
                >
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شهرستان{" "}
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("state", {
                required: "وارد کردن این فیلد الزامی می باشد",
                onChange: (e) => {
                  setSelectedState(e.target.value);
                },
              })}
              defaultValue={defaultData.city}
              placeholder="تهران"
              required
            >
              {iranCitiesList
                .filter(
                  (element) =>
                    element.province == (selectedProvince || defaultData.county)
                )
                .map((val, index) => (
                  <option
                    key={index}
                    value={val.city}
                    selected={defaultData.city == val.city && "selected"}
                  >
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
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              محله{" "}
            </label>
            <input
              defaultValue={defaultData.neighbourhood}
              className="w-full h-12 px-1  py-2"
              {...register("district", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="تهرانپارس"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1   mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              قابل تبدیل{" "}
            </label>
            <select
              dir="ltr"
              className="w-full h-12 px-4"
              {...register("convertible", {
                required: "وارد کردن این فیلد الزامی می باشد",
              })}
              placeholder="بله"
              required
              defaultValue={defaultData.convertible}
            >
              {[true, false].map((val, index) => (
                <option
                  key={index}
                  value={val}
                  selected={defaultData.convertible}
                >
                  {val ? "بله" : "خیر"}
                </option>
              ))}
            </select>
          </div>
          <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              تعداد اتاق{" "}
            </label>
            <input
              defaultValue={defaultData.bedrooms}
              className="w-full h-12 px-1  py-2"
              {...register("number_of_room", {
                required: "وارد کردن این فیلد الزامی می باشد",
                valueAsNumber: true,
              })}
              placeholder="4"
              type="text"
              required
            />
          </div>
          <div className="relative inputC mx-1  mt-6 "></div>

          <details className="p-4 rounded-lg m-auto">
            <summary className="font-semibold text-center mt-4 cursor-pointer select-none">
              اطلاعات تکمیلی(اختیاری){" "}
            </summary>
            <div className="flex flex-row justify-between flex-wrap">
              <div className="relative w-full mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-20 right-2">
                  نشانی ملک{" "}
                </label>
                <input
                  defaultValue={defaultData.address}
                  className="w-full h-24 px-1"
                  {...register("address", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="بلوار کشاورز تقاطق قدس"
                  type="text"
                />
              </div>

              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  وضعیت خاص{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("special_situation", { valueAsNumber: true })}
                  placeholder="معمولی"
                  defaultValue={defaultData.special_situation}
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
                      selected={
                        defaultData.special_situation == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  کد پستی
                </label>
                <input
                  defaultValue={defaultData.zip}
                  className="w-full h-12 px-1  py-2"
                  {...register("zip", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1234567891"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  پلاک ثبتی فرعی{" "}
                </label>
                <input
                  defaultValue={defaultData.Sub_registration_plate}
                  className="w-full h-12 px-1  py-2"
                  {...register("Sub_registration_plate", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  پلاک ثبتی فرعی از{" "}
                </label>
                <input
                  defaultValue={defaultData.Sub_registration_plate_from}
                  className="w-full h-12 px-1  py-2"
                  {...register("Sub_registration_plate_from", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  پلاک ثبتی فرعی تا{" "}
                </label>
                <input
                  defaultValue={defaultData.Original_registration_plate_to}
                  className="w-full h-12 px-1  py-2"
                  {...register(" Sub_registration_plate_to", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="2"
                  type="text"
                />
              </div>

              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  پلاک ثبتی اصلی{" "}
                </label>
                <input
                  defaultValue={defaultData.Original_registration_plate}
                  className="w-full h-12 px-1  py-2"
                  {...register("Original_registration_plate", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="4"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  پلاک ثبتی اصلی از{" "}
                </label>
                <input
                  defaultValue={defaultData.Original_registration_plate_from}
                  className="w-full h-12 px-1  py-2"
                  {...register("Original_registration_plate_from", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="6"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  پلاک ثبتی اصلی تا{" "}
                </label>
                <input
                  defaultValue={defaultData.Original_registration_plate_to}
                  className="w-full h-12 px-1  py-2"
                  {...register("Original_registration_plate_to", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                    valueAsNumber: true,
                  })}
                  placeholder="12"
                  type="text"
                />
              </div>

              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  بخش ثبتی{" "}
                </label>
                <input
                  defaultValue={defaultData.registration_section}
                  className="w-full h-12 px-1  py-2"
                  {...register("registration_section", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="تهران"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  حوزه ثبتی{" "}
                </label>
                <input
                  defaultValue={defaultData.registration_area}
                  className="w-full h-12 px-1  py-2"
                  {...register("registration_area", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="تهران"
                  type="text"
                />
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  نوع اسکلت{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("Skeleton_type", { valueAsNumber: true })}
                  placeholder="آجری"
                  defaultValue={defaultData.Skeleton_type}
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
                      selected={
                        defaultData.Skeleton_type == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  وضعیت تلفن{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("phone_status", { valueAsNumber: true })}
                  placeholder="آزاد"
                  defaultValue={defaultData.phone_status}
                >
                  {[
                    { lb: "بدون خط", value: 0 },
                    { lb: "آزاد", value: 1 },
                    { lb: "غیره", value: 2 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        defaultData.phone_status == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  تعداد خط{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("phone_lines", {
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  defaultValue={defaultData.phone_lines}
                >
                  {[
                    { lb: "بدون خط", value: 0 },
                    { lb: "1", value: 1 },
                    { lb: "2", value: 2 },
                    { lb: "3", value: 3 },
                    { lb: "بیشتر", value: 4 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        defaultData.phone_lines == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  سمت ساختمان{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("building_side", {
                    valueAsNumber: true,
                  })}
                  placeholder="شمالی"
                  defaultValue={defaultData.building_side}
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
                      selected={
                        defaultData.building_side == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  سمت واحد{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("unit_side", {
                    valueAsNumber: true,
                  })}
                  placeholder="شمالی"
                  defaultValue={defaultData.unit_side}
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
                      selected={
                        defaultData.building_side == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  طبقه واحد{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("unit_floor", {
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  defaultValue={defaultData.unit_floor}
                >
                  {[
                    { lb: "2", value: 0 },
                    { lb: "1", value: 1 },
                    { lb: "3", value: 2 },
                    { lb: "4", value: 3 },
                    { lb: "غیره", value: 4 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        defaultData.unit_floor == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  تعداد طبقات ساختمان{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("floors_number", {
                    valueAsNumber: true,
                  })}
                  placeholder="3"
                  defaultValue={defaultData.floors_number}
                >
                  {[
                    { lb: "1", value: 0 },
                    { lb: "2", value: 1 },
                    { lb: "3", value: 2 },
                    { lb: "4", value: 3 },
                    { lb: "5", value: 4 },
                    { lb: "6", value: 5 },
                    { lb: "7", value: 6 },
                    { lb: "8", value: 7 },
                    { lb: "9", value: 8 },
                    { lb: "10", value: 9 },
                    { lb: "11", value: 10 },
                    { lb: "12", value: 11 },
                    { lb: "13", value: 12 },
                    { lb: "14", value: 13 },
                    { lb: "15", value: 14 },
                    { lb: "16", value: 15 },
                    { lb: "17", value: 16 },
                    { lb: "18", value: 17 },
                    { lb: "بیشتر", value: 18 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        defaultData.floors_number == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC mx-1  mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-9 right-2">
                  تعداد واحد در طبقه{" "}
                </label>
                <select
                  dir="ltr"
                  className="w-full h-12 px-4"
                  {...register("units_per_floor", {
                    valueAsNumber: true,
                  })}
                  placeholder="1"
                  defaultValue={defaultData.units_per_floor}
                >
                  {[
                    { lb: "2", value: 0 },
                    { lb: "1", value: 1 },
                    { lb: "3", value: 2 },
                    { lb: "4", value: 3 },
                    { lb: "غیره", value: 4 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        defaultData.units_per_floor == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative w-full mt-6 border-2 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-20 right-2">
                  توضیحات آگهی{" "}
                </label>
                <input
                  className="w-full h-24 px-1"
                  {...register("descriptions", {
                    // required: "وارد کردن این فیلد الزامی می باشد",
                  })}
                  placeholder="این خانه سند دارد."
                  type="text"
                  defaultValue={defaultData.description}
                />
              </div>
            </div>
          </details>
          <input
            type="submit"
            value="ویرایش آگهی"
            className="bg-main-500 w-full h-10 mt-6 text-white mb-6 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
