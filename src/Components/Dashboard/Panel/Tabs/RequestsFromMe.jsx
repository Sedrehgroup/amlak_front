import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-spinkit";
import axios from "axios";
import imgFrame from "./../../../../assets/Images/Dashboard/Frame.png";
import useToken from "../../../../customHooks/useToken";
import { setUserIsLoggedHandler } from "../../../../redux/reducers/login";
import MyRequestCard from "../../../Card/MyRequestCard";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RequestDetails from "../AddOns/RequestDetails";

// درخواست ها - صفحه مستأجر

const RequestsFromMe = () => {
  const [adData, setAdData] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  const [tenantData, setTenantData] = useState();
  const update = useSelector((state) => state.userProperty.update);

  const [token] = useToken();
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .get(`${Api_Url}/api/request/my_requests/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log("axios /api/request/my_requests data.data:", data);
            setTenantData(data);
            setShowLoading(false);
          })
          .catch((e) => {
            setShowLoading(false);

            console.log("error in axios /api/request/my_requests", e);

            if (e.response.status == 401) {
              //dispatch(setUserIsLoggedHandler(false));
              // window.localStorage.setItem("user_logged", "false");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token, update]);
  const getPropertyData = (data) => {
    setAdData(data);
  };
  return (
    <Switch>
      <Route exact path={path}>
        {!showLoading ? (
          <div className=" bg-warmGray-200 ">
            {!!!!tenantData &&
              tenantData.map((value, index) => (
                <div key={index}>
                  <MyRequestCard
                    TitleOfChatButton="گفتگو با موجر"
                    imgPath={imgFrame}
                    data={value}
                    passPropertyData={() =>
                      getPropertyData(value?.request_property)
                    }
                  />
                </div>
              ))}
            {tenantData?.length == 0 && (
              <div className="m-auto text-xl text-center ">
                شما درخواستی ثبت نکرده اید!
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center eightyvh">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        )}
      </Route>
      <Route path={`${path}/:cardId`}>
        <RequestDetails data={adData} />
      </Route>
    </Switch>
  );
};

export default RequestsFromMe;
