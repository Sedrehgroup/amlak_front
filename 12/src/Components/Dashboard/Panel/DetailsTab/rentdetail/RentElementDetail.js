import React from "react";
import Frame from "../../../../../assets/Images/Dashboard/Frame.png";

export default function RentElementDetail() {
  return (
    <div className="mr-8 cursor-pointer">
      <img src={Frame} alt="" width={288} className="rounded-t-lg" />
      <div className="bg-white h-32 w-72 rounded-b-lg">
        <p className="flex justify-center items-center">
          مسکونی دو طبقه 358 متر
        </p>
        <hr className="line" />
        <p className="flex justify-center items-center">
          ودیعه : 350 میلیون تومان
        </p>
        <p className="flex justify-center items-center">
          اجاره : 8,250,000 تومان
        </p>
        <p className="flex justify-center items-center">جنت آباد شمالی</p>
      </div>
    </div>
  );
}
