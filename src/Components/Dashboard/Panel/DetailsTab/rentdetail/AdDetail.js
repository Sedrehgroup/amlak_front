import React, { useEffect, useState } from "react";
import SliderAdDetail from "./addetail/SliderAdDetail";

import axios from "axios";

import Frame from "../../../../../assets/Images/Dashboard/Frame.png";
import Driving from "../../../../../assets/Images/Dashboard/Details/Driving.svg";
import Elevator from "../../../../../assets/Images/Dashboard/Details/Elevator.svg";
import Security from "../../../../../assets/Images/Dashboard/Details/Security.svg";
import RequestsFromMe from "./RequestsFromMe";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch, useStore } from "react-redux";
import useToken from "../../../../../customHooks/useToken";
import { updateListHandler } from "../../../../../redux/reducers/userProperty";
import { setUserIsLoggedHandler } from "../../../../../redux/reducers/login";

export default function AdDetail({ data }) {
  const [data2, setData2] = useState({});
  const dispatch = useDispatch();
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
  const [showMyRequest, setShowMyRequest] = useState(false);

  const num = String(data2.id);
  // console.log(typeof String(num));
  console.log(num);

  // const [numSetter, setNumSetter] = useStore();
  // setNumSetter(numSetter);
  // console.log(numSetter);
  const [token] = useToken();

  const onSubmit = () => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(
          `${Api_Url}/api/requests/`,
          {
            status: 0,
            request_property: num,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          console.log(data);
          dispatch(updateListHandler());
          // dispatch(userLoginStepAccess("Register_Step"));
          // getAccessTokenHandler(phoneNumber);
        })
        .catch((e) => {
          console.log("error in axios /users/create_user", e);
          if (e.response.status == 401) {
            //dispatch(setUserIsLoggedHandler(false));
            // window.localStorage.setItem("user_logged", "false");
          }
        });
    } catch (error) {}
  };

  // console.log(typeof ++data2.id);

  return (
    <>
      {showMyRequest ? (
        <RequestsFromMe />
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
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                {data2?.description}
                <button className="bg-primary-500">
                  <div className="text-primary-900">بیشتر</div>
                </button>
                <hr
                  style={{
                    color: "#FDBA74",
                  }}
                />
              </div>
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

              <div className="flex flex-col justify-between h-[40%] ">
                <div className="p-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30795.380700658057!2d51.372130333374294!3d35.77622000762392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1669539829911!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex justify-center gap-8">
                  <button className=" text-sub-500 border-12 border-solid border-sub-500 rounded px-6 py-1 ">
                    گفتگو
                  </button>

                  <Popup
                    trigger={
                      <button className="button bg-main-500 text-white px-12 rounded-lg">
                        {" "}
                        ثبت درخواست{" "}
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
                            className="bg-warmGray-400 w-full h-14 rounded-lg mt-4"
                          />
                        </div>
                        <div className="actions flex justify-center gap-3">
                          <button
                            className="button bg-warmGray-500 text-white w-12 rounded-lg text-base"
                            onClick={() => {
                              console.log("modal closed ");
                              close();
                            }}
                          >
                            بستن{" "}
                          </button>
                          <button
                            className="button bg-main-500 text-white w-12 rounded-lg text-base"
                            onClick={() => {
                              // showMyRequestHandler();
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
      )}
    </>
  );
}
