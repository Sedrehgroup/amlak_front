import React, { useEffect, useState } from "react";
import SliderAdDetail from "./addetail/SliderAdDetail";

import Frame from "../../../../../assets/Images/Dashboard/Frame.png";
import Driving from "../../../../../assets/Images/Dashboard/Details/Driving.svg";
import Elevator from "../../../../../assets/Images/Dashboard/Details/Elevator.svg";
import Security from "../../../../../assets/Images/Dashboard/Details/Security.svg";
import SignContract from "./SignContract";

export default function AdDetail({ data }) {
  const [data2, setData2] = useState({});
  useEffect(() => {
    console.log("data in adDetail ", data);
    if (!!!!data) {
      const {
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
  const [showSignContact, setShowSignContact] = useState(false);
  const showSignContactHandler = () => {
    setShowSignContact(true);
  };
  return (
    <>
      {showSignContact ? (
        <SignContract />
      ) : (
        <div className="">
          <strong className="flex justify-center text-4xl mb-8">
            {data2?.title}
          </strong>
          <div className="flex">
            <div className="bg-white w-3/5 ml-10 mr-10  flex justify-center flex-col rounded-lg">
              <div className="flex bg-white">
                <div className="w-2/3 rounded-lg p-6">
                  <SliderAdDetail />
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
                  <p className="mb-4">
                    قیمت اجاره : {data2?.rent_amount} تومان{" "}
                  </p>
                  <hr
                    style={{
                      color: "#D6D3D1",
                      marginBottom: "16px",
                    }}
                  />
                  <p className="mb-4">مؤجر : رضا نیازی</p>
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
                  <p className="mb-4">نوع قرارداد : {data2?.use}</p>
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
                  <p className="mb-4">اتاق : {data2?.bedrooms}</p>
                  <hr
                    style={{
                      color: "#D6D3D1",
                      marginBottom: "16px",
                    }}
                  />
                  <p className="mb-4">طبقه : 1 از 4</p>
                </div>
              </div>
            </div>
            <div className="bg-white w-2/5 ml-10 mr-10 rounded-lg p-4">
              <h2>توضیحات</h2>
              <p>
                {data2?.description}
                <button className="bg-primary-500">
                  <div className="text-primary-900">بیشتر</div>
                </button>
                <hr
                  style={{
                    color: "#FDBA74",
                  }}
                />
              </p>
              <div>
                <p>امکانات</p>
                <div className="w-20 h-20 bg-primary-50 p-2 mb-2">
                  <img src={Driving} alt="" className="mx-auto" />
                  <p className="text-primary-950 text-center rounded-lg ">
                    پارکینگ
                  </p>
                </div>
              </div>
              <hr
                style={{
                  color: "#FDBA74",
                }}
              />
              <p className="mb-1 mt-1">{data2?.address}</p>
              <img
                src={Frame}
                alt=""
                className="h-48 w-full rounded-lg mb-14"
              />
              <div className="flex justify-center gap-8">
                <button className=" text-sub-500 border-12 border-solid border-sub-500 rounded px-6 py-1 ">
                  گفتگو
                </button>
                <button
                  className="bg-main-500 text-white px-12 rounded-lg"
                  onClick={showSignContactHandler}
                >
                  ثبت درخواست
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
}
