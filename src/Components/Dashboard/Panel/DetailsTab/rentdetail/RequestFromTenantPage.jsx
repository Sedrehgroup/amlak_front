import React from "react";
import RequestFromLessor from "../../../../Card/RequestFromLessor";
import imgFrame from "../../../../../assets/Images/Dashboard/Frame.png";

// درخواست ها - صفحه مستأجر

const RequestFromTenantPage = () => {
    return (
        <div className="flex flex-col overflow-y-scroll bg-warmGray-200 ">
            <RequestFromLessor
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
            ></RequestFromLessor>
            <RequestFromLessor
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
            ></RequestFromLessor>
            <RequestFromLessor
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
            ></RequestFromLessor>
        </div>
    );
};

export default RequestFromTenantPage;
