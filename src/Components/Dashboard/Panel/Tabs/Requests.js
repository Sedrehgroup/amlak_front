import React from "react";
import Request from "../../../../assets/Images/Dashboard/Request.svg";

export default function Requests() {
  return (
    <>
      <button className="flex h-10">
        <img src={Request} alt="" />
        <p>درخواست ها</p>
      </button>
    </>
  );
}
