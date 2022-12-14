import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "react-spinkit";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import useToken from "../../../../customHooks/useToken";
import imgFrame from "./../../../../assets/Images/Dashboard/Frame.png";

import ContractCard from "../AddOns/ContractCard";
import SignContract from "../AddOns/SignContract";

// صفحه قراردادها

const Contracts = () => {
  const [contractsList, setContractsList] = useState([]);

  const [showLoading, setShowLoading] = useState(false);
  const { path, url } = useRouteMatch();
  const _update = useSelector((state) => state.user.update);

  const [token] = useToken();
  const [signData, setSignData] = useState({});

  const Api_Url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    document.title = "سامانه اجاره بها - قراردادها";
  }, []);
  useEffect(() => {
    console.log("token", token);
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .get(`${Api_Url}/api/contract/list_create_contract/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log("axios /api/contract/list_create_contract:", data);
            setContractsList(data);
            setShowLoading(false);
          })
          .catch((e) => {
            console.log("error in axios /api/contract/list_create_contract", e);
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
  }, [token, _update]);
  //   const changeStatusHandler = (id, status) => {
  //     // id = request id
  //     if (!!!!token) {
  //       try {
  //         setShowLoading(true);
  //         axios
  //           .patch(
  //             `${Api_Url}/api/request/modify_requests_to_me/${id}/`,
  //             {
  //               status,
  //             },
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${token}`,
  //               },
  //             }
  //           )
  //           .then(({ data }) => {
  //             console.log(
  //               "axios /api/request/modify_requests_to_me data.data:",
  //               data
  //             );
  //             dispatch(updateListHandler(Math.random())); //update tenant requests list
  //             setUpdate(Math.random()); //update landloard requests list
  //             setShowLoading(false);
  //             toast.success("درخواست آگهی توسط شما تایید شد", {
  //               position: "top-center",
  //               rtl: true,
  //               className: "m_toast",
  //             });
  //           })
  //           .catch((e) => {
  //             console.log("error in axios /api/request/modify_requests_to_me", e);
  //             setShowLoading(false);

  //             if (e.response.status == 401) {
  //             }
  //           });
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     }
  //   };
  //   const rejectPropertyHandler = (id) => {
  //     if (!!!!token) {
  //       try {
  //         setShowLoading(true);
  //         axios
  //           .patch(
  //             `${Api_Url}/api/request/modify_requests_to_me/${id}/`,
  //             {
  //               status: 0,
  //             },
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${token}`,
  //               },
  //             }
  //           )
  //           .then(({ data }) => {
  //             console.log(
  //               "axios /api/request/modify_requests_to_me data.data:",
  //               data
  //             );
  //             dispatch(updateListHandler(Math.random())); //update tenant requests list
  //             setUpdate(Math.random()); //update landloard requests list
  //             setShowLoading(false);
  //             toast.success("درخواست آگهی توسط شما رد شد", {
  //               position: "top-center",
  //               rtl: true,
  //               className: "m_toast",
  //             });
  //           })
  //           .catch((e) => {
  //             console.log("error in axios /api/request/modify_requests_to_me", e);
  //             setShowLoading(false);

  //             if (e.response.status == 401) {
  //             }
  //           });
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     }
  //   };
  //   const submitContractHandler = (data, id) => {
  //     console.log("request id", id, "data", data);
  //     if (!!!!token) {
  //       try {
  //         setShowLoading(true);
  //         axios
  //           .post(`${Api_Url}/api/contract/list_create_contract/`, data, {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           })
  //           .then(({ data }) => {
  //             console.log(
  //               "axios /api/contract/list_create_contract data.data:",
  //               data
  //             );
  //             changeStatusHandler(id, 3);
  //             dispatch(updateListHandler(Math.random())); //update tenant requests list
  //             setUpdate(Math.random()); //update landloard requests list
  //             setShowLoading(false);
  //             toast.success("قرارداد ثبت شد", {
  //               position: "top-center",
  //               rtl: true,
  //               className: "m_toast",
  //             });
  //           })
  //           .catch((e) => {
  //             console.log("error in axios /api/contract/list_create_contract", e);
  //             setShowLoading(false);

  //             if (e.response.status == 401) {
  //             }
  //           });
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     }
  //   };
  //   const getPropertyData = (data) => {
  //     setAdData(data);
  //   };

  const passDataToSignContract = (data) => {
    setSignData(data);
  };

  return (
    <Switch>
      <Route exact path={path}>
        {!showLoading ? (
          <div className=" bg-warmGray-200 ">
            {!!!!contractsList &&
              contractsList.map((value, index) => (
                <div key={index}>
                  <ContractCard
                    data={value}
                    imgPath={imgFrame}
                    passDataToSignContract={() => passDataToSignContract(value)}
                  />
                  {/* <ToMeRequestCard
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
                  /> */}
                </div>
              ))}
            {contractsList?.lenght == 0 && (
              <div className="m-auto text-center text-xl">
                شما درخواستی ندارید!
              </div>
            )}
          </div>
        ) : (
          <div className="eightyvh flex items-center justify-center">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        )}
      </Route>
      <Route path={`${path}/:signContract`}>
        <SignContract data={signData} />
      </Route>
    </Switch>
  );
};

export default Contracts;
