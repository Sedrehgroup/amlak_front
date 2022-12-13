import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Spinner from "react-spinkit";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import useToken from "../../../../customHooks/useToken";
import imgFrame from "./../../../../assets/Images/Dashboard/Frame.png";
import { setUserIsLoggedHandler } from "../../../../redux/reducers/login";
import ToMeRequestCard from "../../../Card/ToMeRequestCard";
import RequestDetails from "../AddOns/RequestDetails";
import {
  selectedPropertyDataHandler,
  updateListHandler,
} from "../../../../redux/reducers/userProperty";
import { toast } from "react-toastify";

// درخواست ها - صفحه مؤجر

const RequestsToMe = () => {
  const [lessorData, setLessorData] = useState();
  const [update, setUpdate] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const [token] = useToken();
  const [adData, setAdData] = useState({});

  const Api_Url = process.env.REACT_APP_API_URL;
  
  useEffect(() => {
    document.title='سامانه اجاره بها - درخواست های موجر'
  }, []);
  useEffect(() => {
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .get(`${Api_Url}/api/request/requests_to_me/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log("axios /requests_to_me data.data:", data);
            setLessorData(data);
            setShowLoading(false);
          })
          .catch((e) => {
            console.log("error in axios /requests_to_me", e);
            setShowLoading(false);

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
  const changeStatusHandler = (id, status) => {
    // id = request id
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .patch(
            `${Api_Url}/api/request/modify_requests_to_me/${id}/`,
            {
              status,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(({ data }) => {
            console.log(
              "axios /api/request/modify_requests_to_me data.data:",
              data
            );
            dispatch(updateListHandler(Math.random())); //update tenant requests list
            setUpdate(Math.random()); //update landloard requests list
            setShowLoading(false);
            toast.success("درخواست آگهی توسط شما تایید شد", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
          })
          .catch((e) => {
            console.log("error in axios /api/request/modify_requests_to_me", e);
            setShowLoading(false);

            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const rejectPropertyHandler = (id) => {
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .patch(
            `${Api_Url}/api/request/modify_requests_to_me/${id}/`,
            {
              status: 0,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(({ data }) => {
            console.log(
              "axios /api/request/modify_requests_to_me data.data:",
              data
            );
            dispatch(updateListHandler(Math.random())); //update tenant requests list
            setUpdate(Math.random()); //update landloard requests list
            setShowLoading(false);
            toast.success("درخواست آگهی توسط شما رد شد", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
          })
          .catch((e) => {
            console.log("error in axios /api/request/modify_requests_to_me", e);
            setShowLoading(false);

            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const submitContractHandler = (data, id) => {
    console.log("request id", id, "data", data);
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .post(`${Api_Url}/api/contract/list_create_contract/`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log(
              "axios /api/contract/list_create_contract data.data:",
              data
            );
            changeStatusHandler(id, 3);
            dispatch(updateListHandler(Math.random())); //update tenant requests list
            setUpdate(Math.random()); //update landloard requests list
            setShowLoading(false);
            toast.success("قرارداد ثبت شد", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
          })
          .catch((e) => {
            console.log("error in axios /api/contract/list_create_contract", e);
            setShowLoading(false);

            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const getPropertyData = (data) => {
    // setAdData(data);
    dispatch(selectedPropertyDataHandler(data));
  };
  return (
    <Switch>
      <Route exact path={path}>
        {!showLoading ? (
          <div className=" ">
            {/* موجر */}
            {!!!!lessorData &&
              lessorData.map((value, index) => (
                <div key={index}>
                  <ToMeRequestCard
                    TitleOfChatButton="گفتگو با مستاجر"
                    imgPath={imgFrame}
                    data={value}
                    passPropertyData={() =>
                      getPropertyData(value?.request_property)
                    }
                    submitPropertyHandler={() =>
                      changeStatusHandler(value?.id, 2)
                    }
                    rejectPropertyHandler={() =>
                      rejectPropertyHandler(value?.id)
                    }
                    submitContractHandler={(data) =>
                      submitContractHandler(data, value?.id)
                    }
                    // signContractHandler={signContractHandler}
                  />
                </div>
              ))}
            {lessorData?.lenght == 0 && (
              <div className="m-auto text-xl text-center">
                شما درخواستی ندارید!
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center eightyvh">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        )}
      </Route>
      {/* <Route path={`${path}/:cardId`}>
        <RequestDetails data={adData} />
      </Route> */}
    </Switch>
  );
};

export default RequestsToMe;
