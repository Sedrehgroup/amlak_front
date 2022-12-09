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
  useEffect(() => {
    console.log("data in adDetail ", data);
    if (!!!!data) {
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
    }
  }, [data]);

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

  return (
    <>
      <div className="mt-4 mb-4">
        <strong className="flex justify-center text-4xl mb-8">
          {data2?.title}
        </strong>
        <div className="flex">
          <div className="bg-white w-3/5 ml-10 mr-10  flex justify-center flex-col rounded-lg">
            <div className="flex bg-white">
              <div className="w-2/3 rounded-lg p-6">
                <PropertyDetailsSlider />
              </div>
              <div className="w-1/3 m-6 rounded-lg">
                <p className="mb-4">
                  قیمت رهن : {data2?.mortgage_amount} تومان{" "}
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">قیمت اجاره : {data2?.rent_amount} تومان </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">
                  مؤجر :<span>{data2?.owner?.first_name}</span>{" "}
                  <span>{data2?.owner?.last_name}</span>
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">متراژ : {data2?.area} متر</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">مدت قراداد : 2 سال</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">نوع قرارداد : {data2?.use || "قول نامه"}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">محله : {data2?.neighbourhood}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">سال ساخت : {data2?.construction_year}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">تعداد اتاق : {data2?.bedrooms}</p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">
                  طبقه : {data2?.unit_floor || "2"} از{" "}
                  {data2?.floors_number || "4"}
                </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">
                  توضیحات مالک : {data2?.description || "بدون توضیح"}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-between w-2/5 ml-10 mr-10 rounded-lg p-4">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
                  قابل تبدیل
                </span>
                <hr
                  style={{
                    color: "#FDBA74",
                    margin: ".2rem 0 .35rem 0",
                  }}
                />
                <p className="mb-1 mt-1">
                  {data2?.convertible ? "بله" : "خیر"}
                </p>
              </div>
              <div>
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
                <span className="font-bold text-[.7rem] text-[#FDBA74]">
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
              <div className="flex justify-center gap-8">
                <button className="text-sm text-sub-500 border-12 border-solid border-sub-500 rounded px-6 py-1 ">
                  گفتگو
                </button>

                <Popup
                  trigger={
                    <button className=" bg-main-500 text-white py-1 px-6 rounded-lg text-sm">
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
                          className="bg-warmGray-100 w-full h-14 rounded-lg mt-4 p-4 border-12 border-solid border-warmGray-500"
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                        />
                      </div>
                      <div className="actions flex justify-center gap-3">
                        <button
                          className="button bg-warmGray-100 text-warmGray-500 py-1 rounded-lg text-base px-4"
                          onClick={() => {
                            close();
                          }}
                        >
                          بستن{" "}
                        </button>
                        <button
                          className="button bg-main-500 text-white py-1 rounded-lg text-base px-4"
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
    </>
  );
}
