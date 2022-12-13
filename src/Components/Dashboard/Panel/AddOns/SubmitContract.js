import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "react-spinkit";

import useToken from "../../../../customHooks/useToken";
import {
  arrayOfDays,
  arrayOfMonths,
  arrayOfYears,
} from "../../../../utils/yearsList";
import useQuery from "../../../../customHooks/useQuery";
import useTimeDateFa from "../../../../customHooks/useTimeDateFa";
import { updateHandler } from "../../../../redux/reducers/user";

{
  /* <SubmitContractBtn
                  tenant={tenant}
                  submitContractHandler={submitContractHandler}
                  request_property={request_property}
                  tenant_description={tenant_description}
                /> */
}
const SubmitContract = () => {
  const { tenant, request_property, tenant_description } = useSelector(
    (state) => state.userProperty.selectedRequest
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let query = useQuery();
  const requestId = query.get("reqId");
  const dispatch = useDispatch();
  const history = useHistory();
  const [token] = useToken();
  const [showLoading, setShowLoading] = useState(false);
  const Api_Url = process.env.REACT_APP_API_URL;
  const [date] = useTimeDateFa();
  useEffect(() => {
    console.log("requestId", requestId);
  }, [requestId]);
  // contract_registration_date
  // تاریخ عقد قراداد
  const [day1, setDay1] = useState("15");
  const [month1, setMonth1] = useState("09");
  const [year1, setYear1] = useState("1401");
  const [date1, setDate1] = useState("1401-09-15");

  useEffect(() => {
    setDate1(`${year1}-${month1}-${day1}`);
  }, [day1, month1, year1]);
  // =========================

  // contract_date
  // تاریخ ثبت قراداد
  useEffect(() => {
    console.log("date", date);
  }, [date]);

  const date2 =`${date.year}-${date.monthDigit.length==1?`0${date.monthDigit}`:`${date.monthDigit}`}-${date.day}`;

  // =========================

  // start_date
  // تاریخ شروع قراداد
  const [day3, setDay3] = useState("20");
  const [month3, setMonth3] = useState("09");
  const [year3, setYear3] = useState("1401");
  const [date3, setDate3] = useState("1401-09-20");

  useEffect(() => {
    setDate1(`${year3}-${month3}-${day3}`);
  }, [day3, month3, year3]);
  // =========================

  // end_date
  // تاریخ پایان قراداد
  const [day4, setDay4] = useState("20");
  const [month4, setMonth4] = useState("09");
  const [year4, setYear4] = useState("1402");
  const [date4, setDate4] = useState("1402-09-20");

  useEffect(() => {
    setDate1(`${year4}-${month4}-${day4}`);
  }, [day4, month4, year4]);
  // =========================

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
    submitContractHandler(
      {
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
      },
      +requestId
    );
  };
  const submitContractHandler = (data, id) => {
    console.log("request id", id, "data", data);
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .post(`${Api_Url}/api/contract/list_create_contract/`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log(
              "axios /api/contract/list_create_contract data.data:",
              data
            );
            changeStatusHandler(id, 3);
            // dispatch(updateListHandler(Math.random())); //update tenant requests list
            // setUpdate(Math.random()); //update landloard requests list
            history.push("/contracts");
            dispatch(updateHandler(Math.random()));
            setShowLoading(false);
            toast.success("قرارداد ثبت شد", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
          })
          .catch((e) => {
            console.log("error in axios /api/contract/list_create_contract", e);
            setShowLoading(false);

            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const changeStatusHandler = (id, status) => {
    // id = request id
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .patch(
            `${Api_Url}/api/request/modify_requests_to_me/${id}/`,
            {
              status,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(({ data }) => {
            console.log(
              "axios /api/request/modify_requests_to_me data.data:",
              data
            );
          })
          .catch((e) => {
            console.log("error in axios /api/request/modify_requests_to_me", e);

            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  return (
    <>
      {!showLoading ? (
        <>
          <div className="flex justify-center">
            <div className="form1 seventyfivevh mb-4">
              <strong className="mb-8 mt-8 flex items-start justify-center text-4xl">
                جزئیات قرارداد
              </strong>

              <form
                className="mx-auto flex w-10/12 flex-row flex-wrap rounded-lg bg-white p-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <p className="mb-2  bg-white text-center">
                    برای ثبت قرارداد فیلدهای زیر را تکمیل کنید
                  </p>
                </div>

                <div className="relative mx-1 mt-6 flex w-full rounded-lg border-2 border-solid border-warmGray-300 p-8">
                  <strong className="absolute bottom-32 right-2 bg-primary-50">
                    اطلاعات هویتی
                  </strong>

                  <div className="inputC relative mx-1 mt-6">
                    <label className="absolute bottom-9 right-2 bg-primary-50">
                      نام موجر
                    </label>
                    <input
                      className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                      placeholder="علی"
                      type="text"
                      value={request_property?.owner?.first_name}
                      {...register("owner_name")}
                    />
                  </div>

                  <div className="inputC relative mx-1 mt-6">
                    <label className="absolute bottom-9 right-2 bg-primary-50">
                      نام خانوادگی موجر
                    </label>
                    <input
                      className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                      {...register("owner_lastname")}
                      value={request_property?.owner?.last_name}
                      placeholder="محمدی"
                      type="text"
                    />
                  </div>
                  <div className="inputC relative mx-1 mt-6">
                    <label className="absolute bottom-9 right-2 bg-primary-50">
                      نام مستاجر
                    </label>
                    <input
                      className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                      placeholder="علی"
                      type="text"
                      value={tenant?.first_name}
                      {...register("tenant_name")}
                    />
                  </div>
                  <div className="inputC relative mx-1 mt-6">
                    <label className="absolute bottom-9 right-2 bg-primary-50">
                      نام خانوادگی مستاجر
                    </label>
                    <input
                      className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                      {...register("tenant_lastname")}
                      value={tenant?.last_name}
                      placeholder="محمدی"
                      type="text"
                    />
                  </div>
                </div>

                <div className="relative mx-1 mt-6 flex w-full flex-col rounded-lg  border-2 border-solid border-warmGray-300 p-8">
                  <strong className="absolute bottom-44 right-2 bg-primary-50">
                    مشخصات و اطلاعات ملک{" "}
                  </strong>

                  <div className="flex">
                    <div className="inputCfive mt relative mx-1">
                      <label className="absolute bottom-9 right-2 bg-primary-50">
                        شماره سریال
                      </label>
                      <input
                        className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                        {...register("serial_number", {
                          required: "لطفا این فیلد را تکمیل کنید",

                          valueAsNumber: true,
                        })}
                        placeholder="123456"
                      />
                    </div>

                    <div className="inputCfive relative mx-1">
                      <label className="absolute bottom-9 right-2 bg-primary-50">
                        نوع سریال
                      </label>
                      <input
                        className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                        {...register("serial_type", {
                          required: "لطفا این فیلد را تکمیل کنید",

                          valueAsNumber: true,
                        })}
                        placeholder="2"
                      />
                    </div>
                    <div className="inputCfive relative mx-1">
                      <label className="absolute bottom-9 right-2 bg-primary-50">
                        وضعیت سند
                      </label>
                      <select
                  dir="ltr"
                  className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"

                  {...register("document_status", {
                    valueAsNumber: true,
                  })}
                  placeholder="5"
                >
                  {[
                    { lb: "دارای سند شخصی", value: 0 },
                    { lb: "اوقافی", value: 1 },
                    { lb: "بنیادی", value: 2 },
                    { lb: "تعاونی", value: 3 },
                    { lb: "(ره)ستاد اجرایی فرمان امام", value: 4 },
                    { lb: "بدون سند", value: 5 },
                    { lb: "آستان قدس", value: 6 },
                    { lb: "موقوفه عام", value: 7 },
                    { lb: "موقوفه خاص", value: 8 },
                    { lb: "شهرداری", value: 9 },
                    { lb: "دولتی", value: 10 },
                    { lb: "شرکت سهامی خاص", value: 11 },
                    { lb: "شرکت سهامی عام", value: 11 },
                  ].map((val, index) => (
                    <option
                      key={index}
                      value={val.value}
                      selected={ val.value == 0 && "selected"}
                    >
                      {val.lb}
                    </option>
                  ))}
                </select>
                     
                    </div>
                    <div className="inputCfive relative mx-1">
                      <label className="absolute bottom-9 right-2 bg-primary-50">
                        سهم مشترک
                      </label>
                      <input
                        className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                        {...register("share", {
                          required: "لطفا این فیلد را تکمیل کنید",

                          valueAsNumber: true,
                        })}
                        placeholder="5"
                      />
                    </div>
                    <div className="inputCfive m relative  mx-1 ">
                      <label className="absolute bottom-9 right-2 bg-primary-50 ">
                        سهم معامله
                      </label>
                      <input
                        className="focusinput h-12 w-full rounded border-2 border-solid  border-warmGray-300  px-1 py-2"
                        {...register("dong", {
                          required: "لطفا این فیلد را تکمیل کنید",
                          valueAsNumber: true,
                        })}
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="inputC relative mx-1 mt-6 rounded border-2 border-solid border-warmGray-300 ">
                      <label className="absolute bottom-9 right-2 bg-primary-50">
                        تاریخ عقد قرارداد
                      </label>
                      <select
                        dir="ltr"
                        className="focusinput h-12 w-1/4 pl-2"
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
                        className="focusinput h-12 w-2/5 pl-3"
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
                        className="focusinput h-12 w-[35%] px-3"
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
                    <div className="inputC relative mx-1 mt-6  rounded border-2 border-solid border-warmGray-300 ">
                      <label className="absolute bottom-10 right-2 bg-primary-50 ">
                        تاریخ ثبت قرارداد
                      </label>
                      <span className="h-12 w-1/3 text-center pt-3 inline-block">
                      {
                        date.day
                      }
                     </span>
                     <span className="h-12 w-1/3 text-center pt-3 inline-block ">
                      {
                        date.month
                      }
                     </span>
                     <span className="h-12 w-1/3 text-center pt-3 inline-block">
                      {
                        date.year
                      }
                     </span>
                    
                   
                    </div>
                    <div className="inputC relative mx-1 mt-6  rounded border-2 border-solid border-warmGray-300 ">
                      <label className="absolute bottom-10 right-2 bg-primary-50 ">
                        تاریخ شروع قرارداد
                      </label>
                      <select
                        dir="ltr"
                        className="focusinput h-12 w-1/4 pl-2"
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
                        className="focusinput h-12 w-2/5 pl-3"
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
                        className="focusinput h-12 w-[35%] px-3"
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
                    <div className="inputC relative mx-1 mt-6 rounded border-2 border-solid border-warmGray-300 ">
                      <label className="absolute bottom-10 right-2 bg-primary-50 ">
                        تاریخ پایان قرارداد
                      </label>
                      <select
                        dir="ltr"
                        className="focusinput h-12 w-1/4 pl-2"
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
                        className="focusinput h-12 w-2/5 pl-3"
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
                        className="focusinput h-12 w-[35%] px-3"
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
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 mb-4 h-10 w-full cursor-pointer bg-main-500 text-white"
                >
                  تایید قرارداد
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="eightyvh flex items-center justify-center">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        </>
      )}
    </>
  );
};

export default SubmitContract;
