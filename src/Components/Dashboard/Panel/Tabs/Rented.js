import React from "react";
import Rent from "../../../../assets/Images/Dashboard/Rents.svg";

export default function Rented() {
  return (
    <>
      <button className="flex gap-x-2 items-center">
        <img src={Rent} alt="" />
        <p>اجاره شده ها</p>
      </button>
    </>
  );
}
