import React, { useEffect, useState } from "react";
import RequestFromLessor from "../../../../Card/RequestFromLessor";
import imgFrame from "../../../../../assets/Images/Dashboard/Frame.png";
import axios from "axios";
import useToken from "../../../../../customHooks/useToken";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedHandler } from "../../../../../redux/reducers/login";

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
        .get(`${Api_Url}/api/requests/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("axios /users/user_information data.data:", data);
          setTenantData(data);
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
  }, [token, update]);

  return (
    <div className="flex flex-col overflow-y-scroll bg-warmGray-200 ">
      {!!!!tenantData &&
        tenantData.map((value, index) => (
          <div key={index}>
            <RequestFromLessor
              AdTitle={`${tenantData[index].request_property.title}`}
              TitleOfChatButton="گفتگو با موجر"
              meterage={`${tenantData[index].request_property.area} متر`}
              mortgagePrice={`${tenantData[index].request_property.mortgage_amount} تومان`}
              rentalPrice={`${tenantData[index].request_property.rent_amount} تومان`}
              imgPath={imgFrame}
              requestState="-"
              // SecondButtonText="اطلاعات تماس مستأجر"
              MainButtonText="مشاهده درخواست"
              mostajer_status={tenantData[index].status}
            />
          </div>
        ))}
      {!tenantData && (
        <div className="m-auto text-xl bg-warmGray-300">
          شمادرخواستی ثبت نکرده اید!
        </div>
      )}{" "}
    </div>
  );
};

export default RequestsFromMe;
