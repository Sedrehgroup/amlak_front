import React from "react";
import AddImage from "../../../../assets/Images/Dashboard/Add.svg";

export default function AddTab() {
    return (
        <>
            <button className="flex gap-x-2 items-center">
                <img src={AddImage} alt="" />
                <p>ثبت آگهی اجاره</p>
            </button>
        </>
    );
}
