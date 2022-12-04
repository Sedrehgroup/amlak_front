import React from "react";
import RenterDetailsPopup from "./RenterDetailsPopup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import {
  signContractData,
  signContractHandler,
} from "./../../redux/reducers/userProperty";
// import SignContract from "../Dashboard/Panel/DetailsTab/rentdetail/SignContract";
// کارت طراحی شده برای درخواست ها و اجاره ها

const MyRequestCard = ({ data, TitleOfChatButton, imgPath }) => {
  const {
    id,
    request_property,
    status,
    tenant_description,
    landlord_description,
  } = data;

  const dispatch = useDispatch();
  // const signContactShow = () => {
  //   dispatch(signContractHandler(true));
  //   dispatch(signContractData(props.mojer_reqid));
  // };
  return (
    <div className="p-10 border border-warmGray-400 bg-warmGray-100 my-8 mx-12 rounded-lg">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between pb-4 border-b-2 border-b-warmGray-800">
          <p className="font-semibold text-xl">{request_property?.title}</p>
          <button className=" bg-sub-500 text-warmGray-50 rounded-lg px-4 py-2">
            {TitleOfChatButton}
          </button>
        </div>
        <div className="flex justify-between gap-x-12">
          <img
            src={imgPath}
            className="rounded-lg "
            alt="img"
            style={{ width: "400px", height: "240px" }}
          />
          <div className="flex flex-col gap-y-6 justify-between w-full">
            <div className="flex justify-between">
              <p className="font-light">
                قیمت رهن:
                <span className="font-medium text-lg">
                  {request_property?.mortgage_amount} تومان
                </span>
              </p>
              <p className="font-light">
                قیمت اجاره:{" "}
                <span className="font-medium text-lg">
                  {request_property?.rent_amount} تومان
                </span>
              </p>
              <p className="font-light">
                متراژ:{" "}
                <span className="font-medium text-lg">
                  {request_property.area}متر
                </span>
                {/* <span className="font-medium text-lg">{`${props.meterage}`}</span> */}
              </p>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="font-light">
              وضعیت :&nbsp;&nbsp;
              <span
                className={`font-bold ${
                  status == 0
                    ? "text-[#EF4444] bg-[#FEE2E2]"
                    : status == 1
                    ? "text-[#F97316] bg-[#FFEDD5]"
                    : status == 2 || status == 3
                    ? "text-[#22C55E] bg-[#DCFCE7]"
                    : null
                }  rounded p-2`}
              >
                {status == 0
                  ? "عدم تأیید درخواست شما توسط مؤجر"
                  : status == 1
                  ? "در حال انتظار تأیید توسط مؤجر "
                  : status == 2
                  ? "تایید درخواست شما توسط مؤجر"
                  : status == 3
                  ? "امضای قرارداد توسط موجر"
                  : null}
              </span>
            </p>
            <hr className=" text-warmGray-400" />
            <div className=" flex gap-x-4">
              <button className="border-12 border-main-600 text-main-600 rounded-lg font-bold px-6 py-2">
                مشاهده آگهی
              </button>
              {status == 0 ? null : status == 1 ? null : status == 2 ? (
                <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
                  امضای قرارداد
                </button>
              ) : status == 3 ? (
                <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
                  نمایش اجاره نامه
                </button>
              ) : null}
              {/* onClick={signContactShow} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequestCard;
