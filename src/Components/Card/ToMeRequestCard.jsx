import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";

import { Link, useRouteMatch } from "react-router-dom";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import {
  arrayOfDays,
  arrayOfMonths,
  arrayOfYears,
} from "../../utils/yearsList";
import { reqDataHandler } from "../../redux/reducers/userProperty";
// کارت درخواست وارده به من به عنوان موجر

const tenantDefaultDesc = "متن پیشفرض توضیحات مستاجر";
const landlordDefaultDesc = "متن پیشفرض توضیحات موجر";
const ToMeRequestCard = ({
  data,
  TitleOfChatButton,
  imgPath,
  passPropertyData,
  submitPropertyHandler,
  rejectPropertyHandler,
  submitContractHandler,
  signContractHandler,
}) => {
  const {
    tenant,
    id,
    request_property,
    status,
    tenant_description,
    landlord_description,
  } = data;
  let { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const passReqDataForSubmitContractHandler = () => {
    dispatch(reqDataHandler(data));
  };
  //   const signContactShow = () => {
  //     dispatch(signContractHandler(true));
  //     dispatch(signContractData(props.mojer_reqid));
  //   };

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
                  {request_property.area}متر
                </span>
                {/* <span className="font-medium text-lg">{`${props.meterage}`}</span> */}
              </p>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="flex flex-row gap-4 font-light">
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
                    ? "عدم تایید درخواست اجاره توسط شما"
                    : status == 1
                    ? "درخواست اجاره"
                    : status == 2
                    ? "تایید درخواست اجاره توسط شما"
                    : status == 3
                    ? "منتظر امضای قرارداد توسط شما"
                    : status == 6
                    ? "تکمیل قرارداد اجاره"
                    : null}
                </span>
              ) : status == 4 ? (
                <>
                  <span
                    className={`rounded bg-[#DCFCE7] p-2 font-bold text-[#22C55E]`}
                  >
                    امضای قرارداد توسط مستأجر
                  </span>
                  <span
                    className={`rounded bg-[#FFEDD5] p-2 font-bold text-[#F97316]`}
                  >
                    منتظر امضای قرارداد توسط شما
                  </span>
                </>
              ) : status == 5 ? (
                <>
                  <span
                    className={`rounded bg-[#DCFCE7] p-2 font-bold text-[#22C55E]`}
                  >
                    امضای قرارداد توسط شما
                  </span>
                  <span
                    className={`rounded bg-[#FFEDD5] p-2 font-bold text-[#F97316]`}
                  >
                    منتظر امضای قرارداد توسط مستاجر
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
              {status == 0 ? (
                <RequestInfoBtn
                  tenant_description={tenant_description}
                  request_property={request_property}
                />
              ) : status == 1 ? (
                <>
                  <SeeRequestBtn
                    data={data}
                    tenant_description={tenant_description}
                    submitPropertyHandler={submitPropertyHandler}
                    rejectPropertyHandler={rejectPropertyHandler}
                  />
                </>
              ) : status == 2 ? (
                <>
                  <TenantContactInfoBtn
                    data={data}
                    tenant_description={tenant_description}
                  />
                  <Link
                    to={`/submitContract?reqId=${id}`}
                    onClick={passReqDataForSubmitContractHandler}
                    className="rounded-lg  border-2 px-6 py-2 font-bold text-white"
                    style={gradient}
                  >
                    ثبت مشخصات قرارداد
                  </Link>
                </>
              ) : status == 3 || status == 4 ? (
                <Link
                  to={`/contracts`}
                  // onClick={signContractHandler}
                  className="rounded-lg  border-2 px-6 py-2 font-bold text-white"
                  style={gradient}
                >
                  صفحه قرارداد ها
                </Link>
              ) : status == 5 || status == 6 ? (
                <button
                  className="rounded-lg  border-2 px-6 py-2 font-bold text-white"
                  style={gradient}
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

export default ToMeRequestCard;

const TenantContactInfoBtn = ({ data, tenant_description }) => {
  return (
    <Popup
      trigger={
        <button className="rounded-lg border-2 border-main-600 px-6 py-2 font-bold text-main-600">
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
            <div>
              <p className="text-base">مشخصات مستاجر:</p>
              <p className="pt-1 text-xs text-warmGray-400">
                <span> {data?.tenant?.first_name}</span>{" "}
                <span> {data?.tenant?.last_name}</span>
                <span> {data?.tenant?.phone_number}</span>
              </p>
            </div>
            <div className=" mb-2">
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
const gradient = {
  background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
};

const SeeRequestBtn = ({
  data,
  tenant_description,
  landlord_description,
  submitPropertyHandler,
  rejectPropertyHandler,
}) => {
  return (
    <Popup
      trigger={
        <button
          style={gradient}
          className=" rounded-lg px-6 py-2 font-bold text-white"
        >
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
            <div className=" mb-2">
              <p className="text-base">عنوان آگهی:</p>
              <p className="text-xs  text-warmGray-400">
                {data?.request_property?.title}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">قیمت رهن:</p>
              <p className="text-xs text-warmGray-400">
                {data?.request_property?.mortgage_amount}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">قیمت اجاره ماهانه:</p>
              <p className="text-xs  text-warmGray-400">
                {data?.request_property?.rent_amount}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">متراژ:</p>
              <p className="text-xs  text-warmGray-400">
                {data?.request_property?.area}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">تعداد اتاق:</p>
              <p className="text-xs text-warmGray-400">
                {data?.request_property?.bedrooms}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">توضیحات موجر:</p>
              <p className="text-xs text-warmGray-400">
                {landlord_description || landlordDefaultDesc}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">توضیحات مستاجر:</p>
              <p className="text-xs  text-warmGray-400">
                {tenant_description || tenantDefaultDesc}
              </p>
            </div>
            <div className=" mb-2">
              <p className="text-base">مشخصات مستاجر:</p>
              <p className="text-xs  text-warmGray-400">
                <span> {data?.tenant?.first_name}</span>{" "}
                <span> {data?.tenant?.last_name}</span>
                <span> {data?.tenant?.phone_number}</span>
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
            <button
              className="button rounded-lg bg-main-500 py-1 px-4 text-base text-white"
              onClick={() => {
                submitPropertyHandler();
                close();
              }}
            >
              تایید درخواست
            </button>
            <button
              className="button rounded-lg bg-[hsl(0,74%,60%)] py-1 px-4 text-base text-white"
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
  );
};

const RequestInfoBtn = ({ tenant_description, request_property }) => {
  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };
  return (
    <Popup
      trigger={
        <button
          style={gradient}
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
