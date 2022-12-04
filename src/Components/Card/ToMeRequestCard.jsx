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
// کارت درخواست وارده به من به عنوان موجر

const ToMeRequestCard = ({
  data,
  TitleOfChatButton,
  imgPath,
  passPropertyData,
  submitPropertyHandler,
  rejectPropertyHandler,
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
  //   const signContactShow = () => {
  //     dispatch(signContractHandler(true));
  //     dispatch(signContractData(props.mojer_reqid));
  //   };
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
                  ? "عدم تایید درخواست اجاره توسط شما"
                  : status == 1
                  ? "درخواست اجاره"
                  : status == 2
                  ? "تایید درخواست اجاره توسط شما"
                  : status == 3
                  ? "امضای قرارداد توسط مستأجر"
                  : null}
              </span>
            </p>
            <hr className=" text-warmGray-400" />
            <div className=" flex gap-x-4">
              <Link
                to={`${url}/${request_property?.id}`}
                onClick={passPropertyData}
                className="border-12 border-main-600 text-main-600 rounded-lg font-bold px-6 py-2"
              >
                مشاهده آگهی
              </Link>
              {status == 0 ? (
                <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
                  جزئیات درخواست
                </button>
              ) : status == 1 ? (
                <>
                  <Popup
                    trigger={
                      <button className="border-12 border-main-600 text-main-600 rounded-lg font-bold px-6 py-2">
                        اطلاعات تماس مستاجر
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
                        <div className="header"> اطلاعات درخواست دهنده</div>
                        <div className="content">
                          <p className="text-base">توضیحات مستاجر:</p>
                          <p className="text-xs pt-4 text-warmGray-400">
                            {tenant_description ||
                              "خانواده بنده دارای دو کودک می باشد. "}
                          </p>
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
                  <Popup
                    trigger={
                      <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
                        مشاهده درخواست
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
                        <div className="header"> مشاهده درخواست</div>
                        <div className="content">
                          <p className="text-base">توضیحات مستاجر:</p>
                          <p className="text-xs pt-4 text-warmGray-400">
                            {tenant_description ||
                              "خانواده بنده دارای دو کودک می باشد. "}
                          </p>
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
                          <button
                            className="button bg-main-500 text-white py-1 rounded-lg text-base px-4"
                            onClick={() => {
                              submitPropertyHandler();
                              close();
                            }}
                          >
                            تایید درخواست
                          </button>
                          <button
                            className="button bg-[hsl(0,74%,60%)] text-white py-1 rounded-lg text-base px-4"
                            onClick={() => {
                              rejectPropertyHandler();
                              close();
                            }}
                          >
                            رد درخواست
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </>
              ) : status == 2 ? (
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

export default ToMeRequestCard;
