import React, { useEffect, useState } from "react";
import RenterDetailsPopup from "./RenterDetailsPopup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import {
  signContractData,
  signContractHandler,
} from "./../../redux/reducers/userProperty";
import { Link, useRouteMatch } from "react-router-dom";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import {
  arrayOfDays,
  arrayOfMonths,
  arrayOfYears,
} from "../../utils/yearsList";
// کارت درخواست وارده به من به عنوان موجر

const ToMeRequestCard = ({
  data,
  TitleOfChatButton,
  imgPath,
  passPropertyData,
  submitPropertyHandler,
  rejectPropertyHandler,
  submitContractHandler,
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
            <p className="font-light flex flex-row gap-4">
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
                    className={`font-bold text-[#22C55E] bg-[#DCFCE7] rounded p-2`}
                  >
                    امضای قرارداد توسط مستأجر
                  </span>
                  <span
                    className={`font-bold text-[#F97316] bg-[#FFEDD5] rounded p-2`}
                  >
                    منتظر امضای قرارداد توسط شما
                  </span>
                </>
              ) : status == 5 ? (
                <>
                  <span
                    className={`font-bold text-[#22C55E] bg-[#DCFCE7] rounded p-2`}
                  >
                    امضای قرارداد توسط شما
                  </span>
                  <span
                    className={`font-bold text-[#F97316] bg-[#FFEDD5] rounded p-2`}
                  >
                    منتظر امضای قرارداد توسط مستاجر
                  </span>
                </>
              ) : null}
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
                <RequestInfoBtn />
              ) : status == 1 ? (
                <>
                  <TenantContactInfoBtn {...tenant_description} />
                  <SeeRequestBtn
                    tenant_description={tenant_description}
                    submitPropertyHandler={submitPropertyHandler}
                    rejectPropertyHandler={rejectPropertyHandler}
                  />
                </>
              ) : status == 2 ? (
                <SubmitContractBtn
                  tenant={tenant}
                  submitContractHandler={submitContractHandler}
                  request_property={request_property}
                  tenant_description={tenant_description}
                />
              ) : status == 3 || status == 4 ? (
                <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
                  امضای قرارداد
                </button>
              ) : status == 5 || status == 6 ? (
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

const SubmitContractBtn = ({
  tenant,
  request_property,
  tenant_description,
  submitContractHandler,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // contract_registration_date
  // تاریخ عقد قراداد
  const [day1, setDay1] = useState("01");
  const [month1, setMonth1] = useState("01");
  const [year1, setYear1] = useState("1370");
  const [date1, setDate1] = useState("1370-01-01");

  useEffect(() => {
    setDate1(`${year1}-${month1}-${day1}`);
  }, [day1, month1, year1]);
  // =========================

  // contract_date
  // تاریخ ثبت قراداد
  const [day2, setDay2] = useState("01");
  const [month2, setMonth2] = useState("01");
  const [year2, setYear2] = useState("1370");
  const [date2, setDate2] = useState("1370-01-01");

  useEffect(() => {
    setDate1(`${year2}-${month2}-${day2}`);
  }, [day2, month2, year2]);
  // =========================

  // start_date
  // تاریخ شروع قراداد
  const [day3, setDay3] = useState("01");
  const [month3, setMonth3] = useState("01");
  const [year3, setYear3] = useState("1370");
  const [date3, setDate3] = useState("1370-01-01");

  useEffect(() => {
    setDate1(`${year3}-${month3}-${day3}`);
  }, [day3, month3, year3]);
  // =========================

  // end_date
  // تاریخ پایان قراداد
  const [day4, setDay4] = useState("01");
  const [month4, setMonth4] = useState("01");
  const [year4, setYear4] = useState("1370");
  const [date4, setDate4] = useState("1370-01-01");

  useEffect(() => {
    setDate1(`${year4}-${month4}-${day4}`);
  }, [day4, month4, year4]);
  // =========================
  useEffect(() => {
    console.log("tenant", tenant);
  }, [tenant]);
  const onSubmit = (data) => {
    console.log("form data", {
      contract_landlord: request_property?.owner?.owner_id,
      contract_tenant: tenant?.id,
      contract_property: request_property?.id,
      contract_registration_date: date1,
      contract_date: date2,
      start_date: date3,
      end_date: date4,
      serial_number: data?.serial_number,
      serial_type: data?.serial_type,
      document_status: data?.document_status,
      share: data?.share,
      dong: data?.dong,
    });
    submitContractHandler({
      contract_landlord: request_property?.owner?.owner_id,
      contract_tenant: tenant?.id,
      contract_property: request_property?.id,
      contract_registration_date: date1,
      contract_date: date2,
      start_date: date3,
      end_date: date4,
      serial_number: data?.serial_number,
      serial_type: data?.serial_type,
      document_status: data?.document_status,
      share: data?.share,
      dong: data?.dong,
    });
  };
  return (
    <Popup
      trigger={
        <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
          ثبت مشخصات قرارداد
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
          <div className="header">جزئیات قرارداد</div>
          <div className="content">
            <form
              style={{ overflowY: "scroll" }}
              className="bg-white w-full p-4 mx-auto rounded-lg flex flex-row flex-wrap"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <p className="bg-white  text-center mb-2">
                  برای ثبت قرارداد فیلدهای زیر را تکمیل کنید
                </p>
              </div>

              <div className="relative w-full mx-1  mt-4 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50  bottom-7 text-[.7rem] right-2">
                  نام صاحب خانه
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  placeholder="علی"
                  type="text"
                  value={request_property?.owner?.first_name}
                  {...register("owner_name")}
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  نام خانوادگی صاحب خانه
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("owner_lastname")}
                  value={request_property?.owner?.last_name}
                  placeholder="محمدی"
                  type="text"
                />
              </div>
              <div className="relative inputC3 mx-1  mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  نام مستاجر
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  placeholder="علی"
                  type="text"
                  value={tenant?.first_name}
                  {...register("tenant_name")}
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  نام خانوادگی مستاجر
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("tenant_lastname")}
                  value={tenant?.last_name}
                  placeholder="محمدی"
                  type="text"
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  شماره سریال
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("serial_number", {
                    required: "لطفا این فیلد را تکمیل کنید",

                    valueAsNumber: true,
                  })}
                  placeholder="123456"
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  نوع سریال
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("serial_type", {
                    required: "لطفا این فیلد را تکمیل کنید",

                    valueAsNumber: true,
                  })}
                  placeholder="2"
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  وضعیت سند
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("document_status", {
                    required: "لطفا این فیلد را تکمیل کنید",

                    valueAsNumber: true,
                  })}
                  placeholder="5"
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  سهم مشترک
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("share", {
                    required: "لطفا این فیلد را تکمیل کنید",

                    valueAsNumber: true,
                  })}
                  placeholder="5"
                />
              </div>
              <div className="relative inputC3 mx-1   mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-7 text-[.7rem] right-2">
                  سهم معامله
                </label>
                <input
                  className="w-full h-9 px-1  py-2"
                  {...register("dong", {
                    required: "لطفا این فیلد را تکمیل کنید",
                    valueAsNumber: true,
                  })}
                  placeholder="2"
                />
              </div>

              <div className="relative inputC3 mx-1  mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-10 right-2 ">
                  تاریخ عقد قرارداد
                </label>
                <select
                  dir="ltr"
                  className="w-1/4 h-12 pl-2"
                  onChange={(e) => {
                    setDay1(e.target.value);
                  }}
                  placeholder="روز"
                >
                  {arrayOfDays.map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={day1 == val && "selected"}
                    >
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select
                  dir="ltr"
                  className="w-2/5 h-12 pl-3"
                  onChange={(e) => {
                    setMonth1(e.target.value);
                  }}
                  placeholder="فروردین"
                >
                  {arrayOfMonths.map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={month1 == val.value && "selected"}
                    >
                      {val.label}
                    </option>
                  ))}
                </select>

                <select
                  dir="ltr"
                  className="w-[35%] h-12 px-4"
                  onChange={(e) => {
                    setYear1(e.target.value);
                  }}
                  placeholder="سال"
                >
                  {arrayOfYears(90).map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={year1 == val && "selected"}
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative inputC3 mx-1  mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-10 right-2 ">
                  تاریخ ثبت قرارداد
                </label>
                <select
                  dir="ltr"
                  className="w-1/4 h-12 pl-2"
                  onChange={(e) => {
                    setDay2(e.target.value);
                  }}
                  placeholder="روز"
                >
                  {arrayOfDays.map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={day2 == val && "selected"}
                    >
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select
                  dir="ltr"
                  className="w-2/5 h-12 pl-3"
                  onChange={(e) => {
                    setMonth2(e.target.value);
                  }}
                  placeholder="فروردین"
                >
                  {arrayOfMonths.map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={month2 == val.value && "selected"}
                    >
                      {val.label}
                    </option>
                  ))}
                </select>

                <select
                  dir="ltr"
                  className="w-[35%] h-12 px-4"
                  onChange={(e) => {
                    setYear2(e.target.value);
                  }}
                  placeholder="سال"
                >
                  {arrayOfYears(90).map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={year2 == val && "selected"}
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC3 mx-1  mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-10 right-2 ">
                  تاریخ شروع قرارداد
                </label>
                <select
                  dir="ltr"
                  className="w-1/4 h-12 pl-2"
                  onChange={(e) => {
                    setDay3(e.target.value);
                  }}
                  placeholder="روز"
                >
                  {arrayOfDays.map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={day3 == val && "selected"}
                    >
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select
                  dir="ltr"
                  className="w-2/5 h-12 pl-3"
                  onChange={(e) => {
                    setMonth3(e.target.value);
                  }}
                  placeholder="فروردین"
                >
                  {arrayOfMonths.map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={month3 == val.value && "selected"}
                    >
                      {val.label}
                    </option>
                  ))}
                </select>

                <select
                  dir="ltr"
                  className="w-[35%] h-12 px-4"
                  onChange={(e) => {
                    setYear3(e.target.value);
                  }}
                  placeholder="سال"
                >
                  {arrayOfYears(90).map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={year3 == val && "selected"}
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative inputC3 mx-1  mt-6 border-12 border-solid border-main-200">
                <label className="absolute bg-primary-50 bottom-10 right-2 ">
                  تاریخ پایان قرارداد
                </label>
                <select
                  dir="ltr"
                  className="w-1/4 h-12 pl-2"
                  onChange={(e) => {
                    setDay4(e.target.value);
                  }}
                  placeholder="روز"
                >
                  {arrayOfDays.map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={day4 == val && "selected"}
                    >
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select
                  dir="ltr"
                  className="w-2/5 h-12 pl-3"
                  onChange={(e) => {
                    setMonth4(e.target.value);
                  }}
                  placeholder="فروردین"
                >
                  {arrayOfMonths.map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={month4 == val.value && "selected"}
                    >
                      {val.label}
                    </option>
                  ))}
                </select>

                <select
                  dir="ltr"
                  className="w-[35%] h-12 px-4"
                  onChange={(e) => {
                    setYear4(e.target.value);
                  }}
                  placeholder="سال"
                >
                  {arrayOfYears(90).map((val, index) => (
                    <option
                      key={index}
                      value={val}
                      selected={year4 == val && "selected"}
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-row items-stretch w-full gap-6">
                <button
                  onClick={() => close()}
                  className="bg-warmGray-100 text-warmGray-500 flex-1 h-10 mt-6   cursor-pointer"
                >
                  بستن
                </button>
                <button
                  // onClick={() => close()}
                  type="submit"
                  className="bg-main-500  h-10 mt-6 text-white flex-1  cursor-pointer"
                >
                  تایید قرارداد
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

const TenantContactInfoBtn = ({ tenant_description }) => {
  return (
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
              {tenant_description || "خانواده بنده دارای دو کودک می باشد. "}
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
  );
};
const SeeRequestBtn = ({
  tenant_description,
  submitPropertyHandler,
  rejectPropertyHandler,
}) => {
  return (
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
              {tenant_description || "خانواده بنده دارای دو کودک می باشد. "}
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
  );
};

const RequestInfoBtn = ({ tenant_description, request_property }) => {
  return (
    <Popup
      trigger={
        <button className="border-2 bg-main-600 text-white rounded-lg font-bold px-6 py-2">
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
                {tenant_description || "خانواده بنده دارای دو کودک می باشد. "}
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
