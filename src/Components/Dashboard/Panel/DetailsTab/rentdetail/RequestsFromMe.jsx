import React, { useEffect, useState } from "react";
import imgFrame from "../../../../../assets/Images/Dashboard/Frame.png";
import axios from "axios";
import useToken from "../../../../../customHooks/useToken";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedHandler } from "../../../../../redux/reducers/login";
import MyRequestCard from "../../../../Card/MyRequestCard";

// درخواست ها - صفحه مستأجر

const RequestsFromMe = () => {
  const [showMyRequest, setShowMyRequest] = useState(false);
  const showMyRequestHandler = () => {
    setShowMyRequest(true);
  };

  const [tenantData, setTenantData] = useState();
  const update = useSelector((state) => state.userProperty.update);

  const [token] = useToken();
  const dispatch = useDispatch();
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    try {
      axios
        .get(`${Api_Url}/api/request/my_requests/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("axios /api/request/my_requests data.data:", data);
          setTenantData(data);
        })
        .catch((e) => {
          console.log("error in axios /api/request/my_requests", e);

          if (e.response.status == 401) {
            //dispatch(setUserIsLoggedHandler(false));
            // window.localStorage.setItem("user_logged", "false");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [token, update]);

  return (
    <div className=" bg-warmGray-200 ">
      {!!!!tenantData &&
        tenantData.map((value, index) => (
          <div key={index}>
            <MyRequestCard
              TitleOfChatButton="گفتگو با موجر"
              imgPath={imgFrame}
              data={value}
            />
          </div>
        ))}
      {tenantData?.length == 0 && (
        <div className="m-auto text-xl text-center ">
          شما درخواستی ثبت نکرده اید!
        </div>
      )}{" "}
    </div>
  );
};

export default RequestsFromMe;
