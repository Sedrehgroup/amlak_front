import React from "react";
import waiting from "../../../../assets/Images/Dashboard/Counter/waiting.svg";
import rents from "../../../../assets/Images/Dashboard/Counter/rents.svg";
import rented_counter from "../../../../assets/Images/Dashboard/Counter/rented_counter.svg";
export default function ImageContainerCounter() {
  return (
    <div className="eightyfivepercent flex gap-4 mb-4 ">
      <div className="w-1/3 relative">
        <img src={waiting} alt="waiting" className="h-48 " />
        <div className="bg-main-100 absolute p-1 top-2 right-0 rounded-tr-lg rounded-bl-lg">
          منتظر بررسی
        </div>
        <span className="text-white absolute top-1/2 left-1/2 text-5xl">5</span>
      </div>
      <div className="w-1/3 relative">
        <img src={rents} alt="rents" className="h-48" />
        <div className="bg-main-100 absolute p-1 flex justify-center items-center top-2 right-0 rounded-tr-lg rounded-bl-lg">
          اجاره شده ها{" "}
        </div>
        <span className="text-white absolute top-1/2 left-1/2 text-5xl">5</span>
      </div>
      <div className="w-1/3 relative">
        <img src={rented_counter} alt="rented_counter" className="h-48" />
        <div className="bg-main-100 absolute p-1 flex justify-center items-center top-2 right-0 rounded-tr-lg rounded-bl-lg">
          اجاره داده شده ها{" "}
        </div>
        <span className="text-white absolute top-1/2  text-5xl">5</span>
      </div>
    </div>
  );
}
