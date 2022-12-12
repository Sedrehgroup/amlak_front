import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PropertyDetailsSlider from "./PropertyDetailsSlider";

import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Frame from "./../../../../assets/Images/Dashboard/Frame.png";
import Driving from "./../../../../assets/Images/Dashboard/Details/Driving.svg";
import Elevator from "./../../../../assets/Images/Dashboard/Details/Elevator.svg";
import Security from "./../../../../assets/Images/Dashboard/Details/Security.svg";

import useToken from "../../../../customHooks/useToken";
import { toast } from "react-toastify";

export default function PropertyDetails({ data }) {
  const [data2, setData2] = useState({});
  const [description, setDescription] = useState("");

  const history = useHistory();
  const [token] = useToken();
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
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);

  return (
    <>
      {/* <div className="mt-4 mb-4"> */}
      {/* <strong className="mb-8 flex justify-center text-4xl">
          {data2?.title}
        </strong> */}
      <div className="mx-10 mt-6 flex gap-x-12">
        <div className="flex w-4/6 flex-col gap-y-16 rounded-lg bg-warmGray-100 p-8">
          <h2 className="text-2xl font-bold">{data2?.title}</h2>
          <div className="flex gap-x-10 rounded-lg ">
            <div className="-m-2 w-2/3 rounded-lg">
              <PropertyDetailsSlider />
            </div>
            <div className="flex w-1/3 flex-col gap-y-2 pt-0">
              <p className="">
                قیمت رهن : <strong>{data2?.mortgage_amount}&nbsp; تومان</strong>
              </p>
              <hr
                style={{
                  color: "#D6D3D1",
                  marginBottom: "16px",
                }}
              />
              <p className="">
                قیمت رهن : <strong>{data2?.rent_amount}&nbsp; تومان</strong>
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
            </div>
          </div>
        </div>
        <div className="flex w-2/6 flex-col justify-between rounded-lg  bg-warmGray-100 p-4">
          {/* <div>
              <p>امکانات</p>
              <div className="w-20 h-20 bg-primary-50 p-2 mb-2">
                <img src={Driving} alt="" className="mx-auto" />
                <p className="text-primary-950 text-center rounded-lg ">
                  پارکینگ
                </p>
              </div>
            </div> */}
          <div className="flex flex-col gap-1">
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
              <p className="mb-1 mt-1">{data2?.address}</p>
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
              <p className="mb-1 mt-1">{data2?.convertible ? "بله" : "خیر"}</p>
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
          </div>
          <div className="flex flex-col justify-between  ">
            <div className="flex gap-x-2">
              <div className="w-1/3">
                <button className="w-full rounded-lg border-2 border-sub-500 py-1 font-medium text-sub-500 ">
                  گفتگو
                </button>
              </div>
              <div className="w-2/3">
                <Popup
                  trigger={
                    <button className=" h-full w-full rounded-lg bg-main-500 py-1 font-medium  text-white">
                      ثبت درخواست
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header"> تایید اجاره آگهی </div>
                      <div className="content">
                        <p className="text-base">توضیحات تکمیلی</p>
                        <input
                          type="text"
                          className="mt-4 h-14 w-full rounded-lg border-2 border-solid border-warmGray-500 bg-warmGray-100 p-4"
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                        />
                      </div>
                      <div className="actions flex justify-center gap-3">
                        <button
                          className="button rounded-lg bg-warmGray-100 py-1 px-4 text-base text-warmGray-500"
                          onClick={() => {
                            close();
                          }}
                        >
                          بستن{" "}
                        </button>
                        <button
                          className="button rounded-lg bg-main-500 py-1 px-4 text-base text-white"
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
      {/* </div> */}
    </>
  );
}
