import React from "react";
import SliderAdDetail from "./addetail/SliderAdDetail";

import Frame from "../../../../../assets/Images/Dashboard/Frame.png";
import Driving from "../../../../../assets/Images/Dashboard/Details/Driving.svg";
import Elevator from "../../../../../assets/Images/Dashboard/Details/Elevator.svg";
import Security from "../../../../../assets/Images/Dashboard/Details/Security.svg";

export default function AdDetail() {
  return (
    <div>
      <strong className="flex justify-center text-4xl mb-8">مشاهده آگهی</strong>
      <div className="flex">
        <div className="bg-white w-3/5 ml-10 mr-10  flex justify-center flex-col rounded-lg">
          <p className="mx-auto">مسکونی دوبلکس 248 متر در پیروزی</p>
          <div className="flex bg-white">
            <div className="w-2/3 rounded-lg">
              <SliderAdDetail />
            </div>
            <div className="w-1/3 m-6 rounded-lg">
              <p className="mb-4">قیمت رهن : 620,000,000 تومان </p>
              <hr
                style={{
                  color: "#D6D3D1",
                  marginBottom: "16px",
                }}
              />
              <p className="mb-4">قیمت اجاره : 4,500,000 تومان </p>
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
              <p className="mb-4">متراژ : 248 متر</p>
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
              <p className="mb-4">نوع قرارداد : مسکونی</p>
              <hr
                style={{
                  color: "#D6D3D1",
                  marginBottom: "16px",
                }}
              />
              <p className="mb-4">محله : پیروزی</p>
              <hr
                style={{
                  color: "#D6D3D1",
                  marginBottom: "16px",
                }}
              />
              <p className="mb-4">سال ساخت : 1399</p>
              <hr
                style={{
                  color: "#D6D3D1",
                  marginBottom: "16px",
                }}
              />
              <p className="mb-4">اتاق : 2</p>
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است.{" "}
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
          <p className="mb-1 mt-1">آدرس</p>
          <img src={Frame} alt="" className="h-48 w-full rounded-lg mb-14" />
          <div className="flex justify-center gap-8">
            <button className=" text-sub-500 border-12 border-solid border-sub-500 rounded px-6 py-1 ">
              گفتگو
            </button>
            <button className="bg-primary-800 text-white px-12 rounded-lg">
              ثبت درخواست
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
