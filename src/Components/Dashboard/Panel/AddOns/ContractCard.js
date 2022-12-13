import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import { useDispatch, useSelector } from "react-redux";

import { Link, useRouteMatch } from "react-router-dom";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import {
  arrayOfDays,
  arrayOfMonths,
  arrayOfYears,
} from "./../../../../utils/yearsList";
// کارت درخواست وارده به من به عنوان موجر

const ContractCard = ({
  data,
  //   TitleOfChatButton,
  passDataToSignContract,
  imgPath,
  //   passPropertyData,
  //   submitPropertyHandler,
  //   rejectPropertyHandler,
  //   submitContractHandler,
  //   signContractHandler,
}) => {
  //   const {
  //     tenant,
  //     id,
  //     request_property,
  //     status,
  //     tenant_description,
  //     landlord_description,
  //   } = data;
  let { path, url } = useRouteMatch();
  const user_id = useSelector((state) => state.user.user_id);
  const [role, setRole] = useState(""); //T: tenant L: landloard
  useEffect(() => {
    console.log("user_id", user_id);
    console.log(
      "data?.contract_landlord_information?.id",
      data?.contract_landlord_information?.id
    );
    console.log(
      "data?.contract_tenant_information?.id",
      data?.contract_tenant_information?.id
    );
    if (user_id == data?.contract_landlord_information?.id) {
      setRole("L");
    } else if (user_id == data?.contract_tenant_information?.id) {
      setRole("T");
    }
  }, [user_id, data]);
  const dispatch = useDispatch();
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
          <p className="text-xl font-semibold">قرارداد شماره {data?.id} </p>
          {/* <button className=" bg-sub-500 text-warmGray-50 rounded-lg px-4 py-2">
            {TitleOfChatButton}
          </button> */}
        </div>
        <div className="flex justify-between gap-x-12">
          <img
            src={imgPath}
            className="rounded-lg "
            alt="img"
            // style={{ width: "400px", height: "240px" }}
          />
          <div className="flex w-full flex-col justify-between  gap-y-3">
            <div className="flex flex-col  justify-between gap-y-4">
              <p className="font-light">
                نام و نام خانوادگی موجر:
                <span className="text-lg font-medium">
                  {data?.contract_landlord_information?.first_name}{" "}
                  {data?.contract_landlord_information?.last_name}
                </span>
              </p>
              <p className="font-light">
                نام و نام خانوادگی مستاجر:
                <span className="text-lg font-medium">
                  {data?.contract_tenant_information?.first_name}{" "}
                  {data?.contract_tenant_information?.last_name}
                </span>
              </p>
              <p className="font-light">
                شروع قرارداد:{" "}
                <span className="mx-1 text-lg font-medium">
                  {data?.start_date?.slice(8, 10)}
                 <span className="px-2">
                 {
                    arrayOfMonths.find(
                      (val) => val.value == data?.start_date?.slice(5, 7)
                    ).label
                  }
                 </span>
                  {data?.start_date?.slice(0, 4)}
                </span>
              </p>
              <p className="font-light">
                پایان قرارداد:{" "}
                <span className="mx-1 text-lg font-medium">
                  {data?.end_date?.slice(8, 10)}
                <span className="px-2">
                {
                    arrayOfMonths.find(
                      (val) => val.value == data?.end_date?.slice(5, 7)
                    ).label
                  }
                </span>
                  {data?.end_date?.slice(0, 4)}
                </span>
              </p>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="flex flex-row items-center gap-4 font-light">
              وضعیت :&nbsp;&nbsp;
              {data?.landlord_signature && data?.tenant_signature ? (
                <span
                  className={`rounded bg-[#DCFCE7] p-2 font-bold text-[#22C55E]`}
                >
                  تکمیل قرارداد اجاره
                </span>
              ) : data?.landlord_signature &&
                !data?.tenant_signature &&
                role == "L" ? (
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
              ) : !data?.landlord_signature &&
                data?.tenant_signature &&
                role == "L" ? (
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
              ) : !data?.landlord_signature &&
                data?.tenant_signature &&
                role == "T" ? (
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
              ) : data?.landlord_signature &&
                !data?.tenant_signature &&
                role == "T" ? (
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
              ) : !data?.landlord_signature && !data?.tenant_signature ? (
                <span
                  className={`rounded bg-[#FFEDD5] p-2 font-bold text-[#F97316]`}
                >
                  منتظر امضای قرارداد توسط شما
                </span>
              ) : null}
            </p>
            <hr className=" text-warmGray-400" />
            <div className=" flex gap-x-4">
              {data?.landlord_signature && data?.tenant_signature ? (
                <Link
                  to={`${url}/signContract`}
                  onClick={passDataToSignContract}
                  className="rounded-lg px-6 py-2 font-bold text-white"
                  style={gradient}
                >
                  مشاهده قرارداد
                </Link>
              ) : data?.landlord_signature &&
                !data?.tenant_signature &&
                role == "L" ? (
                <>
                  <Link
                    to={`${url}/signContract`}
                    onClick={passDataToSignContract}
                    className="rounded-lg border-2 bg-main-600 px-6 py-2 font-bold text-white"
                  >
                    مشاهده قرارداد
                  </Link>
                </>
              ) : !data?.landlord_signature &&
                data?.tenant_signature &&
                role == "L" ? (
                <>
                  <Link
                    to={`${url}/signContract`}
                    onClick={passDataToSignContract}
                    className="rounded-lg border-2 bg-main-600 px-6 py-2 font-bold text-white"
                  >
                    امضا قرارداد
                  </Link>
                </>
              ) : !data?.landlord_signature &&
                data?.tenant_signature &&
                role == "T" ? (
                <>
                  <Link
                    to={`${url}/signContract`}
                    onClick={passDataToSignContract}
                    className="rounded-lg border-2 bg-main-600 px-6 py-2 font-bold text-white"
                  >
                    مشاهده قرارداد
                  </Link>
                </>
              ) : data?.landlord_signature &&
                !data?.tenant_signature &&
                role == "T" ? (
                <>
                  <Link
                    to={`${url}/signContract`}
                    onClick={passDataToSignContract}
                    className="rounded-lg border-2 bg-main-600 px-6 py-2 font-bold text-white"
                  >
                    امضا قرارداد
                  </Link>
                </>
              ) : !data?.landlord_signature && !data?.tenant_signature ? (
                <Link
                  to={`${url}/signContract`}
                  onClick={passDataToSignContract}
                  className="rounded-lg border-2 bg-main-600 px-6 py-2 font-bold text-white"
                >
                  امضا قرارداد
                </Link>
              ) : null}
              {/* onClick={signContactShow} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
