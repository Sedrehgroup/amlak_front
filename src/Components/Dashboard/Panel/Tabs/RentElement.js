import React from "react";
import Elements from "../../../../assets/Images/Dashboard/Elements.svg";

export default function RentElement() {
  return (
    <>
      <button className="flex h-10">
        <img src={Elements} alt="" />
        <p>آگهی های اجاره</p>
      </button>
    </>
  );
}
