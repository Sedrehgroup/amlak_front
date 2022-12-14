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
    <div className="my-8 mx-12 rounded-lg border border-warmGray-400 bg-warmGray-100 p-10">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between border-b-2 border-b-warmGray-800 pb-4">
          <p className="text-xl font-semibold">{request_property?.title}</p>
          <button className=" rounded-lg bg-sub-500 px-4 py-2 text-warmGray-50">
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
          <div className="flex w-full flex-col justify-between gap-y-6">
            <div className="flex justify-between">
              <p className="font-light">
                قیمت رهن:
                <span className="text-lg font-medium">
                  {request_property?.mortgage_amount} تومان
                </span>
              </p>

              <p className="font-light">
                قیمت اجاره ماهانه:{" "}
                <span className="text-lg font-medium">
                  {request_property?.rent_amount} تومان
                </span>
              </p>
              <p className="font-light">
                متراژ:{" "}
                <span className="text-lg font-medium">
                  {request_property?.area}متر
                </span>
                {/* <span className="font-medium text-lg">{`${props.meterage}`}</span> */}
              </p>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="flex flex-row items-center gap-4 font-light">
              وضعیت :&nbsp;&nbsp;
              {status != 4 || status != 5 ? (
                <span
                  className={`font-bold ${
                    status == 0
                      ? "bg-[#FEE2E2] text-[#EF4444]"
                      : status == 1 || status == 3
                      ? "bg-[#FFEDD5] text-[#F97316]"
                      : status == 2 || status == 6
                      ? "bg-[#DCFCE7] text-[#22C55E]"
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
                    className={`rounded bg-[#DCFCE7] p-2 font-bold text-[#22C55E]`}
                  >
                    امضای قرارداد توسط شما
                  </span>
                  <span
                    className={`rounded bg-[#FFEDD5] p-2 font-bold text-[#F97316]`}
                  >
                    منتظر امضای قرارداد توسط موجر
                  </span>
                </>
              ) : status == 5 ? (
                <>
                  <span
                    className={`rounded bg-[#DCFCE7] p-2 font-bold text-[#22C55E]`}
                  >
                    امضای قرارداد توسط موجر
                  </span>
                  <span
                    className={`rounded bg-[#FFEDD5] p-2 font-bold text-[#F97316]`}
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
                className="rounded-lg border-2 border-main-600 px-6 py-2 font-bold text-main-600"
              >
                مشاهده آگهی
              </Link>
              {status == 0 ? null : status == 1 ? null : status == 2 ? (
                <RequestInfoBtn
                  style={gradient}
                  tenant_description={tenant_description}
                  request_property={request_property}
                />
              ) : status == 3 || status == 5 ? (
                <Link
                  to={`/contracts`}
                  style={gradient}
                  className="rounded-lg border-2 px-6 py-2 font-bold text-white"
                >
                  صفحه قرارداد ها
                </Link>
              ) : status == 4 || status == 6 ? (
                <button
                  style={gradient}
                  className="rounded-lg border-2 px-6 py-2 font-bold text-white"
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

const RequestInfoBtn = ({ style, tenant_description, request_property }) => {
  const tenantDefaultDesc = "متن پیشفرض توضیحات مستاجر";

  return (
    <Popup
      trigger={
        <button
          style={style}
          className="rounded-lg border-2 px-6 py-2 font-bold text-white"
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
                <span className="text-base">مبلغ اجاره ماهانه :</span>
                <span>{request_property?.rent_amount}تومان</span>
              </div>
            </div>
            <div>
              <p className="text-base">توضیحات مستاجر:</p>
              <p className="pt-1 text-xs text-warmGray-400">
                {tenant_description || tenantDefaultDesc}
              </p>
            </div>
          </div>
          <div className="actions flex justify-center gap-3">
            <button
              className="button rounded-lg bg-warmGray-100 py-1 px-4 text-base text-warmGray-500"
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
