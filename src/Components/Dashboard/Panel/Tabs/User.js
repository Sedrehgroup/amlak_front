import React from "react";
import UserImage from "../../../../assets/Images/Dashboard/user.svg";

export default function User() {
    return (
        <div>
            <button className="flex gap-x-2 items-center">
                <img src={UserImage} alt="UserImage" />
                <p>اطلاعات کاربری</p>
            </button>
        </div>
    );
}
