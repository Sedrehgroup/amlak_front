import React, { useEffect, useState } from "react";
import RequestFromLessor from "../../../../Card/RequestFromLessor";
import imgFrame from "../../../../../assets/Images/Dashboard/Frame.png";
import axios from "axios";
import useToken from "../../../../../customHooks/useToken";

// درخواست ها - صفحه مؤجر

{
  /* <RequestFromLessor
        imgPath={imgFrame}
        AdTitle="مسکونی 248 متر"
        TitleOfChatButton="گفتگو با مستأجر"
        mortgagePrice=" 810,000,000 تومان"
        rentalPrice="9,000,000 تومان"
        meterage="340 متر"
        stateTextColor="text-[#F97316]"
        stateBgColor="bg-[#FFEDD5]"
        requestState="درخواست اجاره"
        SecondButtonText="اطلاعات تماس مستأجر"
        MainButtonText="مشاهده درخواست"
      ></RequestFromLessor> */
}

const RequestFromLessorPage = () => {
  const [lessorData, setLessorData] = useState();
  console.log(lessorData);

  const [token] = useToken();

  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;

    try {
      axios
        .get(`${Api_Url}/api/requests_to_me/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log("axios /requests_to_me data.data:", data);
          setLessorData(data);
        })
        .catch((e) => console.log("error in axios /users/user_information", e));
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);

  return (
    <div className="flex flex-col overflow-y-scroll bg-warmGray-200 ">
      {/* موجر */}
      {!!!!lessorData &&
        lessorData.map((value, index) => (
          <div key={index}>
            <RequestFromLessor
              AdTitle={`${lessorData[index].request_property.title}`}
              TitleOfChatButton="گفتگو با مستأجر"
              meterage={`${lessorData[index].request_property.area} متر`}
              mortgagePrice={`${lessorData[index].request_property.mortgage_amount} تومان`}
              rentalPrice={`${lessorData[index].request_property.rent_amount} تومان`}
              imgPath={imgFrame}
              requestState="-"
              SecondButtonText="اطلاعات تماس مستأجر"
              MainButtonText="مشاهده درخواست"
              emzaStatus
              mojer_status={lessorData[index].status}
              mojer_reqid={lessorData[index].id}
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

export default RequestFromLessorPage;
