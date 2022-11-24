import React from "react";
import AddImage from "../../../../assets/Images/Dashboard/Add.svg";

export default function AddTab() {
  return (
    <>
      <button className="flex h-10">
        <img src={AddImage} alt="" />
        <p>ثبت آگهی اجاره</p>
      </button>
    </>
  );
}
