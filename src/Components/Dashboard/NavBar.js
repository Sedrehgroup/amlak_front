import React, { useState } from "react";
import logo from "../../assets/Images/Dashboard/logo.svg";
import user from "../../assets/Images/Dashboard/user-nav.svg";
import loc from "../../assets/Images/Dashboard/loc.svg";
import AllProperties from "./Panel/Tabs/AllProperties";

export default function NavBar() {
  const [isAllAdds, setisAllAdds] = useState(false);

  const isAllAddsHandler = function () {
    setisAllAdds(!isAllAdds);
  };
  console.log(isAllAdds);

  return (
    <div className="w-full bg-white flex justify-between items-center">
      <div className="mr-7 flex gap-4">
        <button className="sm:hidden flex bg-primary-500 rounded justify-center items-center p-2">
          <p className="mr-3">تهران</p>
          <img src={loc} alt="" />
        </button>
        <button className="p-2 border border-main-300  rounded gap-2 w-32 h-10 border-12 border-solid flex items-center">
          <img src={user} alt="" />
          <p className="flex-none flex justify-center items-center ">
            علی محمدی
          </p>
        </button>
      </div>

      <img src={logo} alt="logo" className="flex justify-center items-center" />
      <div className="ml-7">
        {" "}
        <button className="text-main-500 m-6 font-medium">پشتیبانی</button>
        <button
          className="bg-main-500 rounded-lg font-bold"
          onClick={isAllAddsHandler}
        >
          <p className="text-main-50 w-32 h-10 flex justify-center items-center text-base ">
            آگهی های اجاره
          </p>
        </button>
      </div>
    </div>
  );
}
