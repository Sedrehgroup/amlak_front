import React from "react";
import Elements from "../../../../assets/Images/Dashboard/Elements.svg";

export default function RentElement() {
  return (
    <>
      <button className="flex gap-x-2 items-center">
        <img src={Elements} alt="" />
        <p>آگهی های اجاره</p>
      </button>
    </>
  );
}
