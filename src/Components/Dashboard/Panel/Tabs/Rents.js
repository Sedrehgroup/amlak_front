import React from "react";
import Rent from "../../../../assets/Images/Dashboard/Rents.svg";

export default function Rents() {
  return (
    <>
      <button className="flex h-10">
        <img src={Rent} alt="" />
        <p>اجاره داده شده ها</p>
      </button>
      <hr></hr>
    </>
  );
}
