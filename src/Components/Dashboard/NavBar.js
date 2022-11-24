import React from "react";
import logo from "../../assets/Images/Dashboard/logo.svg";
import user from "../../assets/Images/Dashboard/user-nav.svg";
import loc from "../../assets/Images/Dashboard/loc.svg";

export default function NavBar() {
  return (
    <div className="w-screen bg-white flex justify-between items-center tenvh">
      <div className="ml-7">
        <button className="bg-primary-800 rounded-lg">
          <p className="text-primary-50 w-32 h-10 flex justify-center items-center ">
            آگهی های اجاره
          </p>
        </button>
        <button className="text-primary-800 m-6">پشتیبانی</button>
      </div>
      <img src={logo} alt="logo" className="flex justify-center items-center" />
      <div className="mr-7 flex gap-4">
        <button className="flex bg-primary-500 rounded justify-center items-center p-2">
          <p className="mr-3">تهران</p>
          <img src={loc} alt="" />
        </button>
        <button className="p-2 gap-2 w-32 h-10 border-12 border-solid border-primary-600 rounded flex">
          <p className="flex-none flex justify-center items-center">
            علی محمدی
          </p>
          <img src={user} alt="" />
        </button>
      </div>
    </div>
  );
}
