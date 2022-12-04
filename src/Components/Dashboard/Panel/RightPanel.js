import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  Dashboard_img,
  Accepted_img,
  AddProperty_img,
  Chat_img,
  Properties_img,
  Requests_img,
  UserInfo_img,
} from "./AddOns/panelImages";

import useTimeDateFa from "../../../customHooks/useTimeDateFa";
import { useSelector } from "react-redux";

export default function RightPanel() {
  const [date] = useTimeDateFa();
  const showSignContract = useSelector(
    (state) => state.userProperty.showSignContract
  );
  const location = useLocation();

  return (
    <>
      <div className="bg-warmGray-100 rounded-tl-lg rounded-bl-lg flex flex-col gap-y-4 pt-2 pr-4">
        <Link to="/dashboard">
          <div
            className={`flex flex-row gap-2 ${
              (location.pathname == "/" || location.pathname == "/dashboard") &&
              "bg-white"
            }`}
          >
            <img src={Dashboard_img} alt="" width={20} />
            <span className="text-sm">پیشخوان</span>
          </div>
        </Link>
        <Link to="/userinfo">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/userinfo" && "bg-white"
            }`}
          >
            <img src={UserInfo_img} alt="" width={20} />
            <span className="text-sm">اطلاعات کاربری</span>
          </div>
        </Link>
        <Link to="/chat">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/chat" && "bg-white"
            }`}
          >
            <img src={Chat_img} alt="" width={20} />
            <span className="text-sm">گفتگو</span>
          </div>
        </Link>
        <div>
          <p className="font-bold text-lg">موجر</p>
        </div>
        <Link to="/submitProperty">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/submitProperty" && "bg-white"
            }`}
          >
            <img src={AddProperty_img} alt="" width={20} />
            <span className="text-sm">ثبت آگهی اجاره</span>
          </div>
        </Link>
        <Link to="/myProperties">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/myProperties" && "bg-white"
            }`}
          >
            <img src={Properties_img} alt="" width={20} />
            <span className="text-sm">آگهی های من</span>
          </div>
        </Link>
        <Link to="/requestsToMe">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/requestsToMe" && "bg-white"
            }`}
          >
            <img src={Requests_img} alt="" width={20} />
            <span className="text-sm">درخواست ها</span>
          </div>
        </Link>
        <Link to="/accepptedFromMe">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/accepptedFromMe" && "bg-white"
            }`}
          >
            <img src={Accepted_img} alt="" width={20} />
            <span className="text-sm">اجاره داده شده ها</span>
          </div>
        </Link>
        <div>
          <p className="font-bold text-lg">مستاجر</p>
        </div>
        <Link to="/allProperties">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/allProperties" && "bg-white"
            }`}
          >
            <img src={Properties_img} alt="" width={20} />
            <span className="text-sm">آگهی های اجاره</span>
          </div>
        </Link>
        <Link to="/requestsFromMe">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/requestsFromMe" && "bg-white"
            }`}
          >
            <img src={Requests_img} alt="" width={20} />
            <span className="text-sm">درخواست ها</span>
          </div>
        </Link>
        <Link to="/accepptedForMe">
          <div
            className={`flex flex-row gap-2 ${
              location.pathname == "/accepptedForMe" && "bg-white"
            }`}
          >
            <img src={Accepted_img} alt="" width={20} />
            <span className="text-sm">اجاره شده ها</span>
          </div>
        </Link>
        <span className="bg-main-200 text-sm w-fit p-1 rounded-bl-lg rounded-tr-lg mt-10 self-end">
          {date.day}&nbsp;&nbsp;
          {date.month}&nbsp;&nbsp;
          {date.year}
        </span>
      </div>
    </>
  );
}
