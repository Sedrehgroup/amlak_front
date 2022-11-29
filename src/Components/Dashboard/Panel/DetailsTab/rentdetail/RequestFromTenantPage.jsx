import React, { useEffect, useState } from "react";
import RequestFromLessor from "../../../../Card/RequestFromLessor";
import imgFrame from "../../../../../assets/Images/Dashboard/Frame.png";
import axios from "axios";
import useToken from "../../../../../customHooks/useToken";

// درخواست ها - صفحه مستأجر

const RequestFromTenantPage = () => {
  const [showMyRequest, setShowMyRequest] = useState(false);
  const showMyRequestHandler = () => {
    setShowMyRequest(true);
  };

  const [tenantData, setTenantData] = useState();
  console.log(tenantData);
  // console.log(typeof String(tenantData[0].request_property.area));
  // console.log(tenantData[0].request_property.rent_amount);
  // console.log(tenantData[0].request_property.mortgage_amount);

  const [token] = useToken();

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
        .catch((e) => console.log("error in axios /users/user_information", e));
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);

  return (
    <div className="flex flex-col overflow-y-scroll bg-warmGray-200 ">
      {!!!!tenantData &&
        tenantData.map((value, index) => (
          <div key={index}>
            <RequestFromLessor
              AdTitle={`${tenantData[index].request_property.title}`}
              TitleOfChatButton="گفتگو با مستأجر"
              meterage={`${tenantData[index].request_property.area} متر`}
              mortgagePrice={`${tenantData[index].request_property.mortgage_amount} تومان`}
              rentalPrice={`${tenantData[index].request_property.rent_amount} تومان`}
              imgPath={imgFrame}
              requestState="-"
              SecondButtonText="اطلاعات تماس مستأجر"
              MainButtonText="مشاهده درخواست"
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

export default RequestFromTenantPage;
