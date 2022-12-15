import React, { useEffect, useState } from "react";
import user from "../../assets/Images/Dashboard/user-nav.svg";
import loc from "../../assets/Images/Dashboard/loc.svg";
import logo from "../../assets/Images/Dashboard/logo.svg";
import axios from "axios";
import useToken from "../../customHooks/useToken";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedHandler, userLoginStepDenied } from "../../redux/reducers/login";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setUserIdHandler } from "../../redux/reducers/user";

export default function NavBar() {
 
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const [token] = useToken();
  const update = useSelector((state) => state.user.update);
  useEffect(()=>{
    console.warn("update>>>>>>>>>>>>>>>>>>",update)
  },[update])
  const logOutHandler = () => {
    window.localStorage.removeItem("ACC_TOKEN");
    window.localStorage.removeItem("REF_TOKEN");
    window.localStorage.setItem("user_logged", "false");
    dispatch(setUserIsLoggedHandler(false));
    dispatch(userLoginStepDenied("PhoneNumber_Step"));
    dispatch(userLoginStepDenied("PhoneSms_Step"));
    dispatch(userLoginStepDenied("Register_Step"));
    // location.reload();
    // history.go(0);
  };
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;
  
    if (!!!!token) {
      try {
        axios
          .get(`${Api_Url}/account/user_information/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log("axios /account/user_information data.data:", data);
            setUserData(data);
            dispatch(setUserIdHandler(data?.id));
          })
          .catch((e) => {
            console.log("error in axios /account/user_information", e);
            if(e.code == "ERR_NETWORK" || e.response.status == 401){
              dispatch(setUserIsLoggedHandler(false))
            }
           
          });
      } catch (error) {

        console.log("error", error);
      }
    }
    else {
      dispatch(setUserIsLoggedHandler(false))
    }
  }, [token,update]);

  return (
    <div className="relative w-full bg-warmGray-50 flex items-center justify-between px-6 py-4 ">
      <div className="flex gap-4">
        {/* <button
          className="text-sm text-main-500 font-bold"
          onClick={logOutHandler}
        >
          خروج
        </button> */}
        <button className="sm:hidden flex bg-primary-500 rounded justify-center items-center p-2">
          <img src={loc} alt="" />
        </button>
        <button className="p-2 border border-main-300  rounded gap-2  h-10  border-solid flex items-center">
          <img src={user} alt="" />
          <p className="flex-none flex justify-center items-center">
            <span>{userData?.first_name}</span>
            <span className="px-1">{userData?.last_name}</span>
          </p>
        </button>
        <button
          className="text-sm text-main-500 font-bold"
          onClick={logOutHandler}
        >
          خروج
        </button>
      </div>
      <div className="absolute mx-auto left-[45%]">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="">
        {" "}
        {/* <button className="text-main-500 m-6 font-medium">پشتیبانی</button> */}
        {/* <button className="bg-main-500 rounded-lg font-bold text-main-50 w-32 h-10 text-base">
        </button> */}
        <Link
          to="/allProperties"
          className="text-sm bg-main-500  text-main-50 rounded-lg font-bold px-4 py-2"
        >
          آگهی های اجاره
        </Link>
      </div>
    </div>
  );
}
