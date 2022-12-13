import React from "react";
import RenterDetailsPopup from "./RenterDetailsPopup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import {
  signContractData,
  signContractHandler,
} from "./../../redux/reducers/userProperty";
import { Link, useRouteMatch } from "react-router-dom";
import Popup from "reactjs-popup";
// کارت درخواست من به عنوان مستاجر

const MyRequestCard = ({
  data,
  TitleOfChatButton,
  imgPath,
  passPropertyData,
}) => {
  const {
    id,
    request_property,
    status,
    tenant_description,
    landlord_description,
  } = data;
  let { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  // const signContactShow = () => {
  //   dispatch(signContractHandler(true));
  //   dispatch(signContractData(props.mojer_reqid));
  // };

  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

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
                  {request_property?.area}متر
                </span>
                {/* <span className="font-medium text-lg">{`${props.meterage}`}</span> */}
              </p>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="font-light flex flex-row items-center gap-4">
              وضعیت :&nbsp;&nbsp;
              {status != 4 || status != 5 ? (
                <span
                  className={`font-bold ${
                    status == 0
                      ? "text-[#EF4444] bg-[#FEE2E2]"
                      : status == 1 || status == 3
                      ? "text-[#F97316] bg-[#FFEDD5]"
                      : status == 2 || status == 6
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
                    ? "منتظر امضای قرارداد"
                    : status == 6
                    ? "تکمیل قرارداد اجاره"
                    : null}
                </span>
              ) : status == 4 ? (
                <>
                  <span
                    className={`font-bold text-[#22C55E] bg-[#DCFCE7] rounded p-2`}
                  >
                    امضای قرارداد توسط شما
                  </span>
                  <span
                    className={`font-bold text-[#F97316] bg-[#FFEDD5] rounded p-2`}
                  >
                    منتظر امضای قرارداد توسط موجر
                  </span>
                </>
              ) : status == 5 ? (
                <>
                  <span
                    className={`font-bold text-[#22C55E] bg-[#DCFCE7] rounded p-2`}
                  >
                    امضای قرارداد توسط موجر
                  </span>
                  <span
                    className={`font-bold text-[#F97316] bg-[#FFEDD5] rounded p-2`}
                  >
                    منتظر امضای قرارداد توسط شما
                  </span>
                </>
              ) : null}
            </p>
            <hr className=" text-warmGray-400" />
            <div className=" flex gap-x-4">
              <Link
                to={`/allProperties/${request_property?.id}`}
                onClick={passPropertyData}
                className="border-2 border-main-600 text-main-600 rounded-lg font-bold px-6 py-2"
              >
                مشاهده آگهی
              </Link>
              {status == 0 ? null : status == 1 ? null : status == 2 ? (
                <RequestInfoBtn 
                style={gradient}
                
                tenant_description={tenant_description} request_property={request_property} />
              
              ) : status == 3 || status == 5 ? (
                <Link
                to={`/contracts`}
                style={gradient}
                
                className="border-2 text-white rounded-lg font-bold px-6 py-2"
              >
               
                صفحه قرارداد ها
              </Link>
               
              ) : status == 4 || status == 6 ? (
                <button
                  style={gradient}
                  className="border-2 text-white rounded-lg font-bold px-6 py-2"
                >
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

const RequestInfoBtn = ({style, tenant_description, request_property }) => {
const tenantDefaultDesc = "متن پیشفرض توضیحات مستاجر";

  return (
    <Popup
      trigger={
        <button
          style={style}
          className="border-2 text-white rounded-lg font-bold px-6 py-2"
        >
          جزئیات درخواست
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">جزئیات درخواست</div>
          <div className="content">
            <div className="flex flex-row justify-start gap-6">
              <div>
                <span className="text-base">آگهی :</span>
                <span>{request_property?.title}</span>
              </div>
              <div>
                <span className="text-base">مبلغ رهن :</span>
                <span>{request_property?.mortgage_amount}تومان</span>
              </div>
              <div>
                <span className="text-base">مبلغ اجاره :</span>
                <span>{request_property?.rent_amount}تومان</span>
              </div>
            </div>
            <div>
              <p className="text-base">توضیحات مستاجر:</p>
              <p className="text-xs pt-1 text-warmGray-400">
                {tenant_description || tenantDefaultDesc}
              </p>
            </div>
          </div>
          <div className="actions flex justify-center gap-3">
            <button
              className="button bg-warmGray-100 text-warmGray-500 py-1 rounded-lg text-base px-4"
              onClick={() => {
                close();
              }}
            >
              بستن{" "}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};