/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PropertyDetailsSlider from "./PropertyDetailsSlider";
import Spinner from "react-spinkit";

import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Frame from "./../../../../assets/Images/Dashboard/Frame.png";
// import Driving from "./../../../../assets/Images/Dashboard/Details/Driving.svg";
// import Elevator from "./../../../../assets/Images/Dashboard/Details/Elevator.svg";
// import Security from "./../../../../assets/Images/Dashboard/Details/Security.svg";

import Driving from "./../../../../assets/Images/Dashboard/driving.svg";
import Elevator from "./../../../../assets/Images/Dashboard/grid-9.svg";
import Security from "./../../../../assets/Images/Dashboard/security-safe.svg";

import useToken from "../../../../customHooks/useToken";
import { toast } from "react-toastify";

export default function PropertyDetails({ data }) {
  const [data2, setData2] = useState(null);
  const [description, setDescription] = useState("");
  const [is404, setIs404] = useState(false);

  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  const history = useHistory();
  const [token] = useToken();
  useEffect(() => {
    document.title='سامانه اجاره بها - مشخصات آگهی'
  }, []);
  // useEffect(() => {
  //   const Api_Url = process.env.REACT_APP_API_URL;
  //   if (!!!!params) {
  //     const propertyId = params?.cardId;
  //     if (token.length > 0) {
  //       setShowLoading(true);
  //       try {
  //         axios
  //           .get(`${Api_Url}/api/property/properties_list/`, {
  //             params: {
  //               id: propertyId,
  //             },
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           })
  //           .then(({ data }) => {
  //             setShowLoading(false);
  //             const {
  //               owner,
  //               id,
  //               title,
  //               mortgage_amount,
  //               rent_amount,
  //               type,
  //               use,
  //               special_situation,
  //               area,
  //               province,
  //               county,
  //               city,
  //               neighbourhood,
  //               convertible,
  //               construction_year,
  //               bedrooms,
  //               description,
  //               zip,
  //               Sub_registration_plate,
  //               Sub_registration_plate_from,
  //               Sub_registration_plate_to,
  //               Original_registration_plate,
  //               Original_registration_plate_from,
  //               Original_registration_plate_to,
  //               registration_section,
  //               registration_area,
  //               Skeleton_type,
  //               phone_status,
  //               phone_lines,
  //               address,
  //               building_side,
  //               unit_side,
  //               unit_floor,
  //               floors_number,
  //               units_per_floor,
  //             } = data?.results;
  //             setData2(data?.results);
  //             console.log(
  //               "axios get /api/property/properties_list data.data:",
  //               data
  //             );
  //           })
  //           .catch((e) => {
  //             console.log("error in axios /api/property/properties_list", e);
  //             setShowLoading(false);
  //           });
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     }
  //   }
  // }, [token, params]);
  // useEffect(() => {
  //   console.log("data in adDetail ", data);
  //   if (!!!!data) {
  //     const {
  //       owner,
  //       id,
  //       title,
  //       mortgage_amount,
  //       rent_amount,
  //       type,
  //       use,
  //       special_situation,
  //       area,
  //       province,
  //       county,
  //       city,
  //       neighbourhood,
  //       convertible,
  //       construction_year,
  //       bedrooms,
  //       description,
  //       zip,
  //       Sub_registration_plate,
  //       Sub_registration_plate_from,
  //       Sub_registration_plate_to,
  //       Original_registration_plate,
  //       Original_registration_plate_from,
  //       Original_registration_plate_to,
  //       registration_section,
  //       registration_area,
  //       Skeleton_type,
  //       phone_status,
  //       phone_lines,
  //       address,
  //       building_side,
  //       unit_side,
  //       unit_floor,
  //       floors_number,
  //       units_per_floor,
  //     } = data;
  //     setData2({
  //       owner,
  //       id,
  //       title,
  //       mortgage_amount,
  //       rent_amount,
  //       type,
  //       use,
  //       special_situation,
  //       area,
  //       province,
  //       county,
  //       city,
  //       neighbourhood,
  //       convertible,
  //       construction_year,
  //       bedrooms,
  //       description,
  //       zip,
  //       Sub_registration_plate,
  //       Sub_registration_plate_from,
  //       Sub_registration_plate_to,
  //       Original_registration_plate,
  //       Original_registration_plate_from,
  //       Original_registration_plate_to,
  //       registration_section,
  //       registration_area,
  //       Skeleton_type,
  //       phone_status,
  //       phone_lines,
  //       address,
  //       building_side,
  //       unit_side,
  //       unit_floor,
  //       floors_number,
  //       units_per_floor,
  //     });
  //   }
  // }, [data]);

  const onSubmit = () => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(
          `${Api_Url}/api/request/my_requests/`,
          {
            status: 1, //create request with status 1
            request_property: +data2?.id,
            tenant_description: description || null,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("api/request/my_requests data.data:", data);
          toast.success("درخواست شما با موفقیت ثبت شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });
          history.push("/requestsFromMe");
        })
        .catch((e) => {
          console.log("error in axios /users/create_user", e);
          if (e.response.status == 403) {
            toast.error("شما مجاز به ثبت درخواست آگهی خود نیستید!", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
          }
        });
    } catch (error) {}
  };

  useEffect(() => {
    if (!token) return;
    const Api_Url = process.env.REACT_APP_API_URL;
    const id = window.location.pathname.split("/").at(-1);
    console.log("iddddd", id);
    try {
      axios
        .get(`${Api_Url}/api/property/properties_list/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("dataaa", data);
          const {
            owner,
            id,
            title,
            mortgage_amount,
            rent_amount,
            type,
            use,
            special_situation,
            area,
            province,
            county,
            city,
            neighbourhood,
            convertible,
            construction_year,
            bedrooms,
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
          } = data;
          setData2({
            owner,
            id,
            title,
            mortgage_amount,
            rent_amount,
            type,
            use,
            special_situation,
            area,
            province,
            county,
            city,
            neighbourhood,
            convertible,
            construction_year,
            bedrooms,
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
          });

          console.log(
            "axios get /api/property/properties_list data.data:",
            data
          );
        })
        .catch((e) => {
          console.log("error in axios /api/property/properties_list", e);
          if (e.response.status === 404) setIs404(true);
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);

  return (
    <>
      {data2 ? (
        <div className="mx-10 mt-6 flex gap-x-12">
          <div className="flex h-[568px] w-2/3 flex-col gap-y-16 overflow-auto rounded-lg bg-warmGray-100 p-8 ">
            <h2 className="text-2xl font-bold">{data2?.title}</h2>
            <div className="flex flex-col items-center gap-y-16 rounded-lg ">
              <div className="w-[99%] rounded-lg">
                <PropertyDetailsSlider />
              </div>
              <div className="flex w-full flex-col gap-y-8">
                <p className=" border-b-4 border-warmGray-700 pb-2 text-lg font-semibold">
                  توضیحات ملک
                </p>
                <p className=" text-justify">
                  آپارتمان ۱۰۰ متری دوخواب نوساز فوق العاده شیک و خوش نقشه رنگ
                  شده کابینت شده ،گاز رومیزی شیرآلات درجه یک،پکیج، کولر آبی
                  ،سرویس ایرانی ،فرنگی ،کمد دیواری طبقه بندی شده .همه چی تکمیل
                  فقط پارکینگ ندارد در طبقه اول در بهترین محله سجاد جنوبی کوچه
                  بابایی محله بی سر صدا باخریدار واقعی کنار میام فروشنده صد در
                  صد هستم
                </p>
              </div>
              <div className="flex w-full flex-col gap-y-8">
                <p className=" border-b-4 border-warmGray-700 pb-2 text-lg font-semibold">
                  اطلاعات ملک
                </p>
                <div className="flex gap-x-20">
                  <div className="flex w-1/3 flex-col gap-y-6">
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        نوع ملک
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">آپارتمان</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        قابل تبدیل{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">{data2?.convertible ? "بله" : "خیر"}</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت خاص
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">
                        {
                          [
                            { lb: "معمولی", value: 1 },
                            { lb: "گسل خیز", value: 0 },
                            { lb: "بستر رودخانه", value: 2 },
                            { lb: "غیره", value: 3 },
                          ].find((v) => v.value == data2?.special_situation)?.lb
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        نوع اسکلت
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">
                        {
                          [
                            { lb: "بتنی", value: 0 },
                            { lb: "آجری", value: 1 },
                            { lb: "سیمانی", value: 2 },
                            { lb: "غیره", value: 3 },
                          ].find((v) => v.value == data2?.Skeleton_type)?.lb
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت تلفن
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">
                        {
                          [
                            { lb: "بدون خط", value: 0 },
                            { lb: "آزاد", value: 1 },
                            { lb: "غیره", value: 2 },
                          ].find((v) => v.value == data2?.phone_status)?.lb
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        تعداد خط
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">
                        {
                          [
                            { lb: "بدون خط", value: 0 },
                            { lb: "1", value: 1 },
                            { lb: "2", value: 2 },
                            { lb: "3", value: 3 },
                            { lb: "بیشتر", value: 4 },
                          ].find((v) => v.value == data2?.phone_lines)?.lb
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        سمت ساختمان
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">
                        {
                          [
                            { lb: "جنوبی", value: 0 },
                            { lb: "شمالی", value: 1 },
                            { lb: "شرقی", value: 2 },
                            { lb: "غربی", value: 3 },
                            { lb: "غیره", value: 4 },
                          ].find((v) => v.value == data2?.building_side)?.lb
                        }
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        تعداد واحد در طبقه
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">
                        {
                          [
                            { lb: "2", value: 0 },
                            { lb: "1", value: 1 },
                            { lb: "3", value: 2 },
                            { lb: "4", value: 3 },
                            { lb: "غیره", value: 4 },
                          ].find((v) => v.value == data2?.units_per_floor)?.lb
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-col gap-y-6">
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        نوع کاربری
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">مسکونی</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت آب{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">اشتراکی</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت برق
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">اختصاصی</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت گاز
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">ندارد</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت پارکینگ
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">دارد</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        وضعیت انباری{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">ندارد</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        سیستم گرمایشی{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">بخاری</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        سیستم سرمایشی{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">کولر آبی</p>
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-col gap-y-6">
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        آسانسور
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">دارد</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        پلاک ثبتی فرعی{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">123</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        پلاک ثبتی اصلی{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">654</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        بخش ثبتی{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">مرکزی</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        حوزه ثبتی{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">مرکزی</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        آشپزخانه{" "}
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">اپن</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">
                        نمای ساختمان
                      </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">سنگ</p>
                    </div>
                    <div>
                      <span className="text-xs text-warmGray-400 ">بالکن </span>
                      <hr className="mt-1 mb-2 text-warmGray-400" />
                      <p className="">دارد</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-8">
                <p className=" border-b-4 border-warmGray-700 pb-2 text-lg font-semibold">
                  امکانات ملک{" "}
                </p>
                <div className="flex gap-x-4">
                  <div className="flex flex-col items-center justify-center gap-y-4 rounded-lg bg-warmGray-300 px-12 py-4">
                    <p className="font-bold ">پارکینگ</p>
                    <img src={Driving} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-4 rounded-lg bg-warmGray-300 px-12 py-4">
                    <p className="font-bold ">آسانسور</p>
                    <img src={Elevator} alt="" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-y-4 rounded-lg bg-warmGray-300 px-12 py-4">
                    <p className="font-bold ">نگهبانی</p>
                    <img src={Security} alt="" />
                  </div>
                  {/* <div className="flex flex-col items-center justify-center gap-y-4 rounded-lg bg-warmGray-200 px-12 py-4">
                    <p className="font-bold ">بیشتر</p>
                  </div> */}
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-8">
                <p className=" border-b-4 border-warmGray-700 pb-2 text-lg font-semibold">
                  آدرس ملک{" "}
                </p>
                {/* <p className="">{data2?.address}</p> */}
                <p className=" text-justify">
                  تهران، بلوار کشاورز، خیابان قدس مرکز رشد شهید فخری زاده، پلاک
                  37{" "}
                </p>
                <iframe
                  className="aspect-video h-[300px] w-full rounded-lg "
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=%D8%AA%D8%B9%D8%A7%D9%84%DB%8C%20%DA%A9%D9%88%D8%AB%D8%B1&t=&z=17&ie=UTF8&iwloc=&output=embed"
                />
              </div>
              {/* <div className="flex w-1/3 flex-col gap-y-2 pt-0">
                <p className="">
                  قیمت رهن :{" "}
                  <strong>
                    {data2?.mortgage_amount.toLocaleString()}&nbsp; تومان
                  </strong>
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">
                  قیمت رهن :{" "}
                  <strong>
                    {data2?.rent_amount.toLocaleString()}&nbsp; تومان
                  </strong>
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">
                  مؤجر :<span>{data2?.owner?.first_name}</span>{" "}
                  <span>{data2?.owner?.last_name}</span>
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">متراژ : {data2?.area} متر</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">مدت قراداد : 2 سال</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">نوع قرارداد : {data2?.use || "قول نامه"}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">محله : {data2?.neighbourhood}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">سال ساخت : {data2?.construction_year}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">تعداد اتاق : {data2?.bedrooms}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">
                  طبقه : {data2?.unit_floor || "2"} از{" "}
                  {data2?.floors_number || "4"}
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="">
                  توضیحات مالک : {data2?.description || "بدون توضیح"}
                </p>
              </div> */}
            </div>
          </div>
          <div className=" flex h-[568px] w-1/3 flex-col justify-between rounded-lg  bg-warmGray-100 p-6">
            {/* <div>
              <p>امکانات</p>
              <div className="w-20 h-20 bg-primary-50 p-2 mb-2">
                <img src={Driving} alt="" className="mx-auto" />
                <p className="text-primary-950 text-center rounded-lg ">
                  پارکینگ
                </p>
              </div>
            </div> */}

            {/* سمت چپ */}
            <div className="flex w-full flex-col gap-y-4 pt-0">
              <p className="">
                قیمت رهن :{" "}
                <strong>
                  {data2?.mortgage_amount.toLocaleString()}&nbsp; تومان
                </strong>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              <p>
                قیمت رهن :{" "}
                <strong>
                  {data2?.rent_amount.toLocaleString()}&nbsp; تومان
                </strong>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              <p className="">
                مؤجر :&nbsp;
                <span className="font-bold">
                  {data2?.owner?.first_name}
                </span>{" "}
                <span className="font-bold">{data2?.owner?.last_name}</span>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              <p className="">
                متراژ : <strong>{data2?.area} متر</strong>{" "}
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              {/* <p className="">مدت قراداد : 2 سال</p>
            <hr
              style={{
                color: "#D6D3D1",
              }}
            /> */}
              {/* <p className="">نوع قرارداد : {data2?.use || "قول نامه"}</p>
            <hr
              style={{
                color: "#D6D3D1",
              }}
            /> */}
              <p className="">
                محله : <strong>{data2?.neighbourhood}</strong>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              <p className="">
                سال ساخت : <strong>{data2?.construction_year}</strong>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              <p className="">
                تعداد اتاق : <strong>{data2?.bedrooms}</strong>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                }}
              />
              <p className="">
                طبقه :{" "}
                <strong>
                  {data2?.unit_floor || "2"} از {data2?.floors_number || "4"}
                </strong>
              </p>

              {/* <p className="">
              توضیحات مالک : {data2?.description || "بدون توضیح"}
            </p> */}
            </div>
            {/* <div className="flex flex-col gap-1">
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  آدرس
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="">{data2?.address}</p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  قابل تبدیل
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="">
                  {data2?.convertible ? "بله" : "خیر"}
                </p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  وضعیت خاص
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {
                    [
                      { lb: "معمولی", value: 1 },
                      { lb: "گسل خیز", value: 0 },
                      { lb: "بستر رودخانه", value: 2 },
                      { lb: "غیره", value: 3 },
                    ].find((v) => v.value == data2?.special_situation)?.lb
                  }
                </p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  نوع اسکلت
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {
                    [
                      { lb: "بتنی", value: 0 },
                      { lb: "آجری", value: 1 },
                      { lb: "سیمانی", value: 2 },
                      { lb: "غیره", value: 3 },
                    ].find((v) => v.value == data2?.Skeleton_type)?.lb
                  }
                </p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  وضعیت تلفن
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {
                    [
                      { lb: "بدون خط", value: 0 },
                      { lb: "آزاد", value: 1 },
                      { lb: "غیره", value: 2 },
                    ].find((v) => v.value == data2?.phone_status)?.lb
                  }
                </p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  تعداد خط
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {
                    [
                      { lb: "بدون خط", value: 0 },
                      { lb: "1", value: 1 },
                      { lb: "2", value: 2 },
                      { lb: "3", value: 3 },
                      { lb: "بیشتر", value: 4 },
                    ].find((v) => v.value == data2?.phone_lines)?.lb
                  }
                </p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  سمت ساختمان
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {
                    [
                      { lb: "جنوبی", value: 0 },
                      { lb: "شمالی", value: 1 },
                      { lb: "شرقی", value: 2 },
                      { lb: "غربی", value: 3 },
                      { lb: "غیره", value: 4 },
                    ].find((v) => v.value == data2?.building_side)?.lb
                  }
                </p>
              </div>
              <div>
                <span className="text-[.7rem] font-bold text-[#FDBA74]">
                  تعداد واحد در هر طبقه
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {
                    [
                      { lb: "2", value: 0 },
                      { lb: "1", value: 1 },
                      { lb: "3", value: 2 },
                      { lb: "4", value: 3 },
                      { lb: "غیره", value: 4 },
                    ].find((v) => v.value == data2?.units_per_floor)?.lb
                  }
                </p>
              </div>
            </div> */}
            <div className="flex flex-col justify-between  ">
              <div className="flex gap-x-2">
                <div className="w-1/3">
                  <button className="w-full rounded-lg border-2 border-sub-500 py-2 font-medium text-sub-500 ">
                    گفتگو
                  </button>
                </div>
                <div className="w-2/3">
                  <Popup
                    trigger={
                      <button
                        className=" h-full w-full rounded-lg py-2 font-bold  text-white"
                        style={gradient}
                      >
                        ثبت درخواست
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal flex flex-col gap-y-3 py-6 px-6">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                        <div className="header"> تایید اجاره آگهی </div>
                        <div className="content">
                          <p className="text-base">توضیحات تکمیلی</p>
                          <input
                            type="text"
                            className="mt-4 w-full rounded border-2 border-solid border-warmGray-500 bg-warmGray-100 p-4 text-base"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                          />
                        </div>
                        <div className="actions flex justify-end gap-3">
                          <button
                            className="button rounded-lg bg-warmGray-200 py-1 px-8 text-base text-warmGray-500"
                            onClick={() => {
                              close();
                            }}
                          >
                            بستن{" "}
                          </button>
                          <button
                            className="button rounded-lg bg-main-500 py-1 px-8 text-base text-white"
                            onClick={() => {
                              onSubmit();
                              close();
                            }}
                          >
                            تایید{" "}
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : is404 ? (
        <div className="m-auto bg-warmGray-300 text-center text-xl">
          این آگهی موجود نیست!
        </div>
      ) : (
        <div className="eightyvh flex items-center justify-center">
          <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
        </div>
      )}
      {/* </div> */}
    </>
  );
}
