import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useToken from "../../../../customHooks/useToken";
import { setUserIsLoggedHandler } from "../../../../redux/reducers/login";
import { updateHandler } from "../../../../redux/reducers/user";
import { iranCitiesList } from "../../../../utils/iranCitiesList";
import {
  arrayOfDays,
  arrayOfMonths,
  arrayOfYears,
} from "../../../../utils/yearsList";

export default function UserFormDetail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    national_code: "",
    phone_number: "",
  });
  const [userAdditionalData, setUserAdditionalData] = useState({
    email: "",
    father_name: "",
    // birth_day: "1370-01-01",
    certificate_number: "",
    sex: true,
    latin_first_name: "",
    latin_last_name: "",
    certificate_country: "",
    certificate_province: "",
    certificate_county: "",
    certificate_type: "",
    marriage: true,
    education: "",
    province: "",
    county: "",
    city: "",
    address: "",
    postal_code: "",
    personal_phone_number: "",
  });
  const phoneNumber = useSelector((state) => state.login.phoneNumber);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvince2, setSelectedProvince2] = useState("");
  const [selectedState2, setSelectedState2] = useState("تهران");
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("1370");
  const [birthDate, setBirthDate] = useState("1370-01-01");

  const dispatch = useDispatch();
  const [token] = useToken();
  useEffect(() => {
    document.title='سامانه اجاره بها - اطلاعات کاربری'
  }, []);
  useEffect(() => {
    setBirthDate(`${year}-${month}-${day}`);
  }, [day, month, year]);
  useEffect(() => {
    if (!!!!userAdditionalData.birth_day) {
      setYear(userAdditionalData.birth_day.slice(0, 4));
      setMonth(userAdditionalData.birth_day.slice(5, 7));
      setDay(userAdditionalData.birth_day.slice(8, 10));
    }
    console.log(
      "userAdditionalData>>>>>>>>>>>>>>>>>>>>>>>>>",
      userAdditionalData
    );
  }, [userAdditionalData]);

  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    if (!!!!token) {
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
              // window.localStorage.setItem("user_logged", "false");
            }
          });

        axios
          .get(`${Api_Url}/account/additional_user_information/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log(
              "axios /account/additional_user_information data.data:",
              data
            );
            setUserAdditionalData(data);
          })
          .catch((e) => {
            console.log(
              "error in axios /account/additional_user_information",
              e
            );
            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token]);
  const onSubmit = (data) => {
    console.log("form data", data);
    updateUserInfo(data);
  };
  const updateUserInfo = ({
    first_name,
    last_name,
    national_code,
    phone_number,
    email,
    father_name,
    certificate_number,
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
        .put(
          `${Api_Url}/account/additional_user_information/`,
          {
            email: email || userAdditionalData.email,
            father_name: father_name || userAdditionalData.father_name,
            certificate_number:
              certificate_number || userAdditionalData.certificate_number,
            birth_day: birthDate || `${year}-${month}-${day}`,
            sex: sex || userAdditionalData.sex,
            latin_first_name:
              latin_first_name || userAdditionalData.latin_first_name,
            latin_last_name:
              latin_last_name || userAdditionalData.latin_last_name,
            certificate_country:
              certificate_country || userAdditionalData.certificate_country,
            certificate_province:
              selectedProvince || userAdditionalData.certificate_province,
            certificate_county:
              certificate_county || userAdditionalData.certificate_county,
            certificate_type:
              certificate_type || userAdditionalData.certificate_type,
            marriage: marriage || userAdditionalData.marriage,
            education: education || userAdditionalData.education,
            province: selectedProvince2 || userAdditionalData.province,
            county: county || userAdditionalData.county,
            city: city || userAdditionalData.city,
            address: address || userAdditionalData.address,
            postal_code: postal_code || userAdditionalData.postal_code,
            personal_phone_number:
              personal_phone_number || userAdditionalData.personal_phone_number,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("axios /account/create_additional_user data.data:", data);
          dispatch(updateHandler(Math.random()))
          toast.success("اطلاعات با موفقیت ثبت شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });
        })
        .catch((e) => {
          console.log("error in axios /account/create_additional_user/", e);
          if (e.response.status == 401) {
            // //dispatch(setUserIsLoggedHandler(false));
            // window.localStorage.setItem("user_logged", "false");
          }
        });

      axios
        .patch(
          `${Api_Url}/account/user_information/`,
          {
            first_name: first_name || userData?.first_name,
            last_name: last_name || userData?.last_name,
            national_code: national_code || userData?.national_code,
            phone_number: phone_number || userData?.phone_number,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("axios /account/create_additional_user data.data:", data);
          toast.success("اطلاعات با موفقیت ثبت شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });
        })
        .catch((e) => {
          console.log("error in axios /account/create_additional_user/", e);
          if (e.response.status == 401) {
            // //dispatch(setUserIsLoggedHandler(false));
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
        <strong className="mb-8 mt-4 flex items-start justify-center text-4xl">
          اطلاعات کاربری
        </strong>

        <form
          className="mx-auto mb-4 flex w-10/12 flex-row flex-wrap rounded-lg bg-white p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <p className="mb-2  bg-white text-center">
              برای ثبت اطلاعات کاربری خود فیلدهای زیر را تکمیل کنید
            </p>
          </div>

          <div className="first relative mx-1 mt-6  w-full rounded-lg  border-2 border-solid border-warmGray-300 p-4">
            <strong className="fifteenpointfivebottom absolute right-2 bg-primary-50">
              اطلاعات هویتی
            </strong>

            <div className="flex">
              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نام
                </label>
                <input
                  className="focusinput h-12 w-full rounded  border-2  border-solid  border-warmGray-300 px-1 py-2"
                  placeholder="علی"
                  type="text"
                  defaultValue={userData?.first_name}
                  {...register("first_name")}
                />
              </div>

              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نام خانوادگی
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("last_name")}
                  defaultValue={userData?.last_name}
                  placeholder="محمدی"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  کد ملی
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("national_code")}
                  defaultValue={userData?.national_code}
                  placeholder="0012223334"
                  type="text"
                />
              </div>

              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  شماره همراه
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("phone_number")}
                  defaultValue={userData?.phone_number}
                  placeholder="0012223334"
                  type="text"
                />
              </div>
            </div>

            <div className="flex">
              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نام لاتین
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("latin_first_name")}
                  placeholder="ALI"
                  type="text"
                  defaultValue={userAdditionalData.latin_first_name}
                />
              </div>
              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نام خانوادگی لاتین
                </label>
                <input
                  defaultValue={userAdditionalData.latin_last_name}
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("latin_last_name")}
                  placeholder="AHMADI"
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  نام پدر
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("father_name")}
                  placeholder="رضا"
                  type="text"
                  defaultValue={userAdditionalData.father_name}
                />
              </div>
              <div className="inputC mx relative mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  جنسیت
                </label>
                <select
                  dir="rtl"
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                  {...register("sex")}
                  placeholder="مرد"
                >
                  {[
                    { lb: "مرد", value: true },
                    { lb: "زن", value: false },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        userAdditionalData.sex == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4 flex">
              <div className="inputCthree mx- relative mt-6 rounded border-2 border-solid border-warmGray-300">
                <label className="absolute bottom-9 right-2 bg-primary-50 ">
                  تاریخ تولد
                </label>
                <select
                  dir="ltr"
                  className="focusinput h-12 w-1/4 pl-2"
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                  placeholder="روز"
                >
                  {arrayOfDays.map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={day == val && "selected"}
                    >
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select
                  dir="ltr"
                  className="focusinput h-12 w-2/5 pl-3"
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                  placeholder="فروردین"
                >
                  {arrayOfMonths.map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={month == val.value && "selected"}
                    >
                      {val.label}
                    </option>
                  ))}
                </select>

                <select
                  dir="ltr"
                  className="focusinput h-12 w-[35%] px-4"
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                  placeholder="سال"
                >
                  {arrayOfYears(90).map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={year == val && "selected"}
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>

              <div className="inputCthree relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  وضعیت تاهل
                </label>
                <select
                  dir="ltr"
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                  {...register("marriage")}
                  placeholder="متاهل"
                >
                  {[
                    { lb: "متاهل", value: true },
                    { lb: "مجرد", value: false },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={
                        userAdditionalData.marriage == val.value && "selected"
                      }
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputCthree relative mx-1 mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  تحصیلات
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("education")}
                  placeholder="لیسانس"
                  type="text"
                  defaultValue={userAdditionalData.education}
                />
              </div>
            </div>
          </div>

          <div className="first relative mx-1 mt-6  w-full rounded border-2 border-solid border-warmGray-300 p-4">
            <strong className="absolute bottom-28 right-2 bg-primary-50">
              اطلاعات شناسنامه
            </strong>

            <div className="mb-4 flex">
              <div className="inputC relative mx-1   mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  شماره شناسنامه
                </label>
                <input
                  defaultValue={userAdditionalData.certificate_number}
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("certificate_number")}
                  placeholder="00122233334"
                  type="text"
                />
              </div>

              <div className="inputC relative mx-1   mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  کشور محل صدور
                </label>
                <input
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                  {...register("certificate_country")}
                  placeholder="ایران"
                  defaultValue={userAdditionalData.certificate_country}
                  type="text"
                />
              </div>
              <div className="inputC relative mx-1   mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  استان محل صدور
                </label>

                <select
                  dir="ltr"
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                  {...register("certificate_province", {
                    onChange: (e) => {
                      setSelectedProvince(e.target.value);
                    },
                  })}
                  placeholder="تهران"
                >
                  {[
                    ...new Set(
                      iranCitiesList.map((element) => element.province)
                    ),
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      // disabled={val != "تهران"}
                      // defaultValue={userAdditionalData.certificate_province}
                      selected={
                        userAdditionalData.certificate_province == val &&
                        "selected"
                      }
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="inputC relative mx-1   mt-6 ">
                <label className="absolute bottom-9 right-2 bg-primary-50">
                  شهرستان محل صدور
                </label>
                <select
                  dir="ltr"
                  className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                  {...register("certificate_county")}
                  placeholder="تهران"
                >
                  {iranCitiesList
                    .filter(
                      (element) =>
                        element.province ==
                        (selectedProvince ||
                          userAdditionalData.certificate_province)
                      // element.province == userAdditionalData.certificate_province
                    )
                    .map((val, index) => (
                      <option
                        key={index}
                        value={val.city}
                        // disabled={val.city != "تهران"}
                        // defaultValue={userAdditionalData.certificate_county}
                        selected={
                          userAdditionalData.certificate_county == val.city &&
                          "selected"
                        }
                      >
                        {val.city}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <div className="first relative mx-1 mt-6  w-full rounded border-2 border-solid border-warmGray-300 p-4">
            <strong className="eighteenpointfivebottom absolute right-2 bg-primary-50">
              اطلاعات تماس
            </strong>

            <div>
              <div className="flex">
                <div className="inputC relative mx-1   mt-6 rounded ">
                  <label className="absolute bottom-9 right-2 bg-primary-50">
                    ایمیل
                  </label>
                  <input
                    className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                    {...register("email")}
                    placeholder="fake@gmail.com"
                    type="email"
                    defaultValue={userAdditionalData.email}
                  />
                </div>

                <div className="inputC relative mx-1   mt-6 rounded ">
                  <label className="absolute bottom-9 right-2 bg-primary-50">
                    نوع شناسنامه
                  </label>
                  <select
                    dir="ltr"
                    className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                    {...register("certificate_type")}
                    placeholder="اصل"
                  >
                    {["اصل", "المثنی", "غیره"].map((val, index) => (
                      <option
                        key={index}
                        value={val}
                        selected={
                          userAdditionalData.certificate_type == val &&
                          "selected"
                        }
                      >
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="inputC relative mx-1   mt-6 rounded ">
                  <label className="absolute bottom-9 right-2 bg-primary-50">
                    استان محل سکونت
                  </label>
                  <select
                    dir="ltr"
                    className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                    {...register("province", {
                      onChange: (e) => {
                        setSelectedProvince2(e.target.value);
                        console.log("setSelectedProvince2", e.target.value);
                      },
                    })}
                    placeholder="تهران"
                  >
                    {[
                      ...new Set(
                        iranCitiesList.map((element) => element.province)
                      ),
                    ].map((val, index) => (
                      <option
                        // disabled={val != "تهران"}
                        key={index}
                        value={val}
                        selected={
                          userAdditionalData.province == val && "selected"
                        }
                      >
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="inputC relative mx-1   mt-6 rounded ">
                  <label className="absolute bottom-9 right-2 bg-primary-50">
                    شهرستان محل سکونت
                  </label>
                  <select
                    dir="ltr"
                    className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-4"
                    {...register("county", {
                      onChange: (e) => {
                        setSelectedState2(e.target.value);
                      },
                    })}
                    placeholder="تهران"
                  >
                    {iranCitiesList
                      .filter(
                        (element) =>
                          element.province ==
                          (selectedProvince2 || userAdditionalData.province)

                        // element.province == userAdditionalData.province
                      )
                      .map((val, index) => (
                        <option
                          // disabled={val.city != "تهران"}
                          key={index}
                          value={val.city}
                          selected={
                            userAdditionalData.county == val.city && "selected"
                          }
                        >
                          {val.city}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex">
                <div className="inputCtwo relative mx-1   mt-6 rounded ">
                  <label className="absolute bottom-9 right-2 bg-primary-50">
                    کد پستی
                  </label>
                  <input
                    className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                    {...register("postal_code")}
                    placeholder="11223344"
                    type="text"
                    defaultValue={userAdditionalData.postal_code}
                  />
                </div>
                <div className="inputCtwo relative mx-1   mt-6 rounded ">
                  <label className="absolute bottom-9 right-2 bg-primary-50">
                    شماره منزل
                  </label>
                  <input
                    className="focusinput h-12 w-full rounded border-2 border-solid border-warmGray-300 px-1  py-2"
                    {...register("personal_phone_number")}
                    placeholder="02133667799"
                    type="text"
                    defaultValue={userAdditionalData.personal_phone_number}
                  />
                </div>
              </div>
              <div className="inputCfull relative mt-6 mb-4 rounded ">
                <label className="absolute bottom-20 right-2 bg-primary-50">
                  نشانی محل اقامت
                </label>
                <input
                  className="focusinput h-24 w-full rounded border-2 border-solid border-warmGray-300 px-1"
                  {...register("address")}
                  placeholder="بلوار کشاورز - تقاطع قدس"
                  type="text"
                  defaultValue={userAdditionalData.address}
                />
              </div>
            </div>
          </div>

          {/* <div className="relative inputC mx-1   mt-6 border-2 rounded border-solid border-main-200">
            <label className="absolute bg-primary-50 bottom-9 right-2">
              شهر محل سکونت
            </label>
            <select
              dir="ltr"
              className="w-full h-12 focusinput px-4"
              {...register("city", {
                value: selectedState2,
              })}
              value={selectedState2}
              placeholder="تهران"
            >
              {iranCitiesList
                .filter(
                  (element) =>
                    element.province == userAdditionalData.province ||
                    element.province == selectedProvince2
                )
                .map((val, index) => (
                  <option
                    key={index}
                    value={val.city}
                    disabled={val.city != "تهران"}
                  >
                    {val.city}
                  </option>
                ))}
            </select>
          </div> */}

          <button
            type="submit"
            className="mt-6 mb-6 h-10 w-full cursor-pointer bg-main-500 text-white"
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </div>
  );
}
