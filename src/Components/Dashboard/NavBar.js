import React, { useEffect, useState } from "react";
import user from "../../assets/Images/Dashboard/user-nav.svg";
import loc from "../../assets/Images/Dashboard/loc.svg";
import logo from "../../assets/Images/Dashboard/logo.svg";
import axios from "axios";
import useToken from "../../customHooks/useToken";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserIsLoggedHandler,
  userLoginStepDenied,
} from "../../redux/reducers/login";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setUserIdHandler } from "../../redux/reducers/user";

export default function NavBar({ userData }) {
  // const [userData, setUserData] = useState({});
  // const dispatch = useDispatch();
  // const [token] = useToken();
  // const update = useSelector((state) => state.user.update);
  // useEffect(() => {
  //   console.warn("update>>>>>>>>>>>>>>>>>>", update);
  // }, [update]);
  const logOutHandler = () => {
    window.localStorage.removeItem("ACC_TOKEN");
    window.localStorage.removeItem("REF_TOKEN");
    window.localStorage.setItem("user_logged", "false");
    // dispatch(setUserIsLoggedHandler(false));
    // dispatch(userLoginStepDenied("PhoneNumber_Step"));
    // dispatch(userLoginStepDenied("PhoneSms_Step"));
    // dispatch(userLoginStepDenied("Register_Step"));
    // location.reload();
    // history.go(0);
  };
  // useEffect(() => {
  //   const Api_Url = process.env.REACT_APP_API_URL;
  //   console.log("tokenNavbar", token);
  //   if (!!!!token) {
  //     axios
  //       .get(`${Api_Url}/account/user_information/`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then(({ data }) => {
  //         console.log("axios /account/user_information data.data:", data);
  //         setUserData(data);
  //         dispatch(setUserIdHandler(data?.id));
  //       })
  //       .catch((e) => {
  //         console.log("error in axios /account/user_information", e);
  //         if (e.code == "ERR_NETWORK" || e.response.status == 401) {
  //           dispatch(setUserIsLoggedHandler(false));
  //         }
  //       });
  //   } else {
  //     console.log("else");
  //     dispatch(setUserIsLoggedHandler(false));
  //   }
  // }, [token]);

  return (
    <div className="relative flex w-full items-center justify-between bg-warmGray-50 px-6 py-4 ">
      <div className="flex gap-4">
        {/* <button
          className="text-sm text-main-500 font-bold"
          onClick={logOutHandler}
        >
          خروج
        </button> */}
        <button className="flex items-center justify-center rounded bg-primary-500 p-2 sm:hidden">
          <img src={loc} alt="" />
        </button>
        <button className="flex h-10 items-center  gap-2 rounded  border  border-solid border-main-300 p-2">
          <img src={user} alt="" />
          <p className="flex flex-none items-center justify-center">
            <span>{userData?.first_name}</span>
            <span className="px-1">{userData?.last_name}</span>
          </p>
        </button>
        <button
          className="text-sm font-bold text-main-500"
          onClick={logOutHandler}
        >
          خروج
        </button>
      </div>
      <div className="absolute left-[45%] mx-auto">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="">
        {" "}
        {/* <button className="text-main-500 m-6 font-medium">پشتیبانی</button> */}
        {/* <button className="bg-main-500 rounded-lg font-bold text-main-50 w-32 h-10 text-base">
        </button> */}
        <Link
          to="/allProperties"
          className="rounded-lg bg-main-500  px-4 py-2 text-sm font-bold text-main-50"
        >
          آگهی های اجاره
        </Link>
      </div>
    </div>
  );
}
