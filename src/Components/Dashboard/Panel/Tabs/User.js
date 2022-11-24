import React from "react";
import UserImage from "../../../../assets/Images/Dashboard/user.svg";

export default function User() {
  return (
    <div>
      <button className="flex h-10 justify-end">
        <img src={UserImage} alt="UserImage" />
        <p>اطلاعات کاربری</p>
      </button>
      <hr></hr>
    </div>
  );
}
