import React from "react";
import Elements from "../../../../assets/Images/Dashboard/Elements.svg";

export default function MyElement() {
  return (
    <>
      <button className="flex h-10">
        <img src={Elements} alt="" />
        <p>آگهی های من</p>
      </button>
    </>
  );
}
