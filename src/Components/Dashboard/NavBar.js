import React, { useEffect, useState } from "react";
import user from "../../assets/Images/Dashboard/user-nav.svg";
import loc from "../../assets/Images/Dashboard/loc.svg";
import logo from "../../assets/Images/Dashboard/logo.svg";
import axios from "axios";
import useToken from "../../customHooks/useToken";

export default function NavBar() {
  const [isAllAdds, setisAllAdds] = useState(false);
  const [userData, setUserData] = useState({});

  const isAllAddsHandler = function () {
    setisAllAdds(!isAllAdds);
  };
  const [token] = useToken();
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    try {
      axios
        .get(`${Api_Url}/users/user_information/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("axios /users/user_information data.data:", data);
          setUserData(data);
        })
        .catch((e) => console.log("error in axios /users/user_information", e));
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);

  return (
    <div className="w-full bg-white flex justify-between items-center">
      <div className="mr-7 flex gap-4">
        <button className="sm:hidden flex bg-primary-500 rounded justify-center items-center p-2">
          <p className="mr-3">تهران</p>
          <img src={loc} alt="" />
        </button>
        <button className="p-2 border border-main-300  rounded gap-2  h-10 border-12 border-solid flex items-center">
          <img src={user} alt="" />
          <p className="flex-none flex justify-center items-center ">
            <span>{userData?.first_name}</span>
            <span className="px-1">{userData?.last_name}</span>
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
