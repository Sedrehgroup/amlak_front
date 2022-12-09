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
  return (
    <div className="p-10 border border-warmGray-400 bg-warmGray-100 my-8 mx-12 rounded-lg">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between pb-4 border-b-2 border-b-warmGray-800">
          <p className="font-semibold text-xl">قرارداد شماره {data?.id} </p>
          {/* <button className=" bg-sub-500 text-warmGray-50 rounded-lg px-4 py-2">
            {TitleOfChatButton}
          </button> */}
        </div>
        <div className="flex justify-between gap-x-12">
          <img
            src={imgPath}
            className="rounded-lg "
            alt="img"
            style={{ width: "400px", height: "240px" }}
          />
          <div className="flex flex-col gap-y-6 justify-between w-full">
            <div className="flex flex-col justify-between">
              <p className="font-light">
                نام و نام خانوادگی موجر:
                <span className="font-medium text-lg">
                  {data?.contract_landlord_information?.first_name}{" "}
                  {data?.contract_landlord_information?.last_name}
                </span>
              </p>
              <p className="font-light">
                نام و نام خانوادگی مستاجر:
                <span className="font-medium text-lg">
                  {data?.contract_tenant_information?.first_name}{" "}
                  {data?.contract_tenant_information?.last_name}
                </span>
              </p>
              <div className="flex flex-row gap-4">
                <p className="font-light">
                  شروع قرارداد:{" "}
                  <span className="font-medium text-lg mx-1">
                    {data?.start_date?.slice(8, 10)}
                    {
                      arrayOfMonths.find(
                        (val) => val.value == data?.start_date?.slice(5, 7)
                      ).label
                    }
                    {data?.start_date?.slice(0, 4)}
                  </span>
                </p>
                <p className="font-light">
                  پایان قرارداد:{" "}
                  <span className="font-medium text-lg mx-1">
                    {data?.end_date?.slice(8, 10)}
                    {
                      arrayOfMonths.find(
                        (val) => val.value == data?.end_date?.slice(5, 7)
                      ).label
                    }
                    {data?.end_date?.slice(0, 4)}
                  </span>
                </p>
              </div>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="font-light flex flex-row gap-4">
              وضعیت :&nbsp;&nbsp;
              {data?.landlord_signature && data?.tenant_signature ? (
                <span
                  className={`font-bold text-[#22C55E] bg-[#DCFCE7] rounded p-2`}
                >
                  تکمیل قرارداد اجاره
                </span>
              ) : data?.landlord_signature &&
                !data?.tenant_signature &&
                role == "L" ? (
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
              ) : !data?.landlord_signature &&
                data?.tenant_signature &&
                role == "L" ? (
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
              ) : !data?.landlord_signature &&
                data?.tenant_signature &&
                role == "T" ? (
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
              ) : data?.landlord_signature &&
                !data?.tenant_signature &&
                role == "T" ? (
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
              ) : !data?.landlord_signature && !data?.tenant_signature ? (
                <span
                  className={`font-bold text-[#F97316] bg-[#FFEDD5] rounded p-2`}
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
                  className="border-12 bg-main-600 text-white rounded-lg font-bold px-6 py-2"
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
                    className="border-12 bg-main-600 text-white rounded-lg font-bold px-6 py-2"
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
                    className="border-12 bg-main-600 text-white rounded-lg font-bold px-6 py-2"
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
                    className="border-12 bg-main-600 text-white rounded-lg font-bold px-6 py-2"
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
                    className="border-12 bg-main-600 text-white rounded-lg font-bold px-6 py-2"
                  >
                    امضا قرارداد
                  </Link>
                </>
              ) : !data?.landlord_signature && !data?.tenant_signature ? (
                <Link
                  to={`${url}/signContract`}
                  onClick={passDataToSignContract}
                  className="border-12 bg-main-600 text-white rounded-lg font-bold px-6 py-2"
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
