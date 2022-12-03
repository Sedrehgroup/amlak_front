import React, { useEffect, useState } from "react";
import imgFrame from "../../../../../assets/Images/Dashboard/Frame.png";
import axios from "axios";
import useToken from "../../../../../customHooks/useToken";
import { setUserIsLoggedHandler } from "../../../../../redux/reducers/login";
import { useDispatch } from "react-redux";
import ToMeRequestCard from "../../../../Card/ToMeRequestCard";

// درخواست ها - صفحه مؤجر

const RequestsToMe = () => {
  const [lessorData, setLessorData] = useState();

  const dispatch = useDispatch();
  const [token] = useToken();

  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    if (!!!!token) {
      try {
        axios
          .get(`${Api_Url}/api/request/requests_to_me/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log("axios /requests_to_me data.data:", data);
            setLessorData(data);
          })
          .catch((e) => {
            console.log("error in axios /users/user_information", e);
            if (e.response.status == 401) {
              //dispatch(setUserIsLoggedHandler(false));
              // window.localStorage.setItem("user_logged", "false");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token]);

  return (
    <div className=" bg-warmGray-200 ">
      {/* موجر */}
      {!!!!lessorData &&
        lessorData.map((value, index) => (
          <div key={index}>
            <ToMeRequestCard
              TitleOfChatButton="گفتگو با مستاجر"
              imgPath={imgFrame}
              data={value}
            />
          </div>
        ))}
      {!lessorData && (
        <div className="m-auto text-xl bg-warmGray-300">
          شمادرخواستی ندارید!
        </div>
      )}
    </div>
  );
};

export default RequestsToMe;
