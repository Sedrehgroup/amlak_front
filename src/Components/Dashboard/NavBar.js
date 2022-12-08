import React, { useEffect, useState } from "react";
import user from "../../assets/Images/Dashboard/user-nav.svg";
import loc from "../../assets/Images/Dashboard/loc.svg";
import logo from "../../assets/Images/Dashboard/logo.svg";
import axios from "axios";
import useToken from "../../customHooks/useToken";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserIsLoggedHandler } from "../../redux/reducers/login";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setUserIdHandler } from "../../redux/reducers/user";

export default function NavBar() {
  const [isAllAdds, setisAllAdds] = useState(false);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const [token] = useToken();
  const history = useHistory();
  const location = useLocation();
  const isAllAddsHandler = function () {
    setisAllAdds(!isAllAdds);
  };
  const logOutHandler = () => {
    window.localStorage.removeItem("ACC_TOKEN");
    window.localStorage.removeItem("REF_TOKEN");
    window.localStorage.setItem("user_logged", "false");
    dispatch(setUserIsLoggedHandler(false));
    history.push("/login");
    // location.reload();
    history.go(0);
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
            if (e.response.status == 401) {
              dispatch(setUserIsLoggedHandler(false));
              window.localStorage.setItem("user_logged", "false");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token]);

  return (
    <div className="w-full bg-white flex justify-between items-center">
      <div className="mr-7 flex gap-4">
        {/* <button
          className="text-sm text-main-500 font-bold"
          onClick={logOutHandler}
        >
          خروج
        </button> */}
        <button className="sm:hidden flex bg-primary-500 rounded justify-center items-center p-2">
          <img src={loc} alt="" />
        </button>
        <button className="p-2 border border-main-300  rounded gap-2  h-10 border-12 border-solid flex items-center">
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

      {/* <img src={logo} alt="logo" className=" fixed" /> */}
      <img src={logo} alt="logo" className="fixed left-1/2 logofromtop" />
      <div className="ml-7 m-6">
        {" "}
        {/* <button className="text-main-500 m-6 font-medium">پشتیبانی</button> */}
        {/* <button className="bg-main-500 rounded-lg font-bold text-main-50 w-32 h-10 text-base">
        </button> */}
        <Link
          to="/allProperties"
          className="border-12 bg-main-500 text-base text-main-50 rounded-lg font-bold px-6 py-2"
        >
          آگهی های اجاره
        </Link>
      </div>
    </div>
  );
}
