import React from "react";
import waiting from "../../../../assets/Images/Dashboard/Counter/waiting.svg";
import rents from "../../../../assets/Images/Dashboard/Counter/rents.svg";
import rented_counter from "../../../../assets/Images/Dashboard/Counter/rented_counter.svg";
export default function ImageContainerCounter() {
  return (
    <div className="eightyfivepercent flex gap-4 mb-4 mt-12">
      <div className="w-1/3 relative">
        <img src={waiting} alt="waiting" className="rounded-xl" />
        <div className="bg-main-100 absolute p-1 top-0 right-0 rounded-tr-lg rounded-bl-lg">
          منتظر بررسی
        </div>
        <span className="text-white absolute top-[45%] text-5xl font-black">
          5
        </span>
      </div>
      <div className="w-1/3 relative">
        <img src={rents} alt="rents" className="rounded-xl" />
        <div className="bg-main-100 absolute p-1 top-0 right-0 rounded-tr-lg rounded-bl-lg">
          اجاره شده ها{" "}
        </div>
        <span className="text-white absolute top-[45%]  text-5xl font-black">
          2
        </span>
      </div>
      <div className="w-1/3 relative">
        <img src={rented_counter} alt="rented_counter" className="rounded-xl" />
        <div className="bg-main-100 absolute p-1 top-0 right-0 rounded-tr-lg rounded-bl-lg">
          اجاره داده شده ها{" "}
        </div>
        <span className="text-white absolute top-[45%] text-5xl font-black">
          1
        </span>
      </div>
    </div>
  );
}
