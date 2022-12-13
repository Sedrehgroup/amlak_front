import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../../../customHooks/useToken";
import { updateHandler } from "../../../../redux/reducers/user";
import { updateListHandler } from "../../../../redux/reducers/userProperty";
import { calcTimeOfContract } from "../../../../utils/calcTimeOfContract";

export default function SignContract({ data }) {
  function printDiv() {
    history.push('/contracts')
    let elem = document.getElementById("contractPrint");
    elem.style.backgroundColor="#efefef"
    let divContents = elem.innerHTML;
    // divContents.style.direction = "rtl";
    // elem.style.direction='rtl'
    let a = window.open("", "", "height=800, width=1000");
    
    // a.document.write("<html>");
    // a.document.write("<body > <h1>Div contents are <br>");
    // a.document.write(divContents);
    a.document.body.appendChild(elem)
    // a.document.write("</body></html>");
    a.document.close();
    a.print();
  }

  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  const [disable, setDisable] = useState(true);
  const [propertyData, setPropertyData] = useState({
    id: 26,
    owner: {
      owner_id: 1,
      first_name: "علی",
      last_name: "حسینی",
    },
    title: "عنوان آگهی",
    mortgage_amount: 122,
    rent_amount: 12,
    type: 1,
    use: 0,
    special_situation: "زلزله خیز",
    area: 13,
    province: "تهران",
    county: "تهران",
    city: "تهران",
    neighbourhood: "نامشخص",
    convertible: true,
    construction_year: 1388,
    bedrooms: 4,
    description: "این ملک در برای فروش نیز می باشد",
    created_date: "2022-12-05T15:13:58.180590Z",
    zip: 1234453,
    Sub_registration_plate: 2,
    Sub_registration_plate_from: 1,
    Sub_registration_plate_to: 2,
    Original_registration_plate: 1,
    Original_registration_plate_from: 2,
    Original_registration_plate_to: 3,
    registration_section: "تهران",
    registration_area: "تهران",
    Skeleton_type: "آجری",
    phone_status: "فعال",
    phone_lines: 2,
    address: "افسریه 15 متری دوم پلاک 14",
    building_side: "شمالی",
    unit_side: 1,
    unit_floor: 2,
    floors_number: 3,
    units_per_floor: 2,
  });
  const checkbox = useRef();
  const [token] = useToken();
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.user_id);
  const Api_Url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("data of sign contract", data);
    if (!!!!data && token) {
      try {
        axios
          .get(
            `${Api_Url}/api/property/modify_properties/${data?.contract_property}/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(({ data }) => {
            console.log(
              "axios /api/property/modify_properties data.data:",
              data
            );
            setPropertyData(data);
          })
          .catch((e) => {
            console.log("error in axios /api/property/modify_properties", e);
            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [data, token]);
  const handleCheckBoxChange = (e) => {
    setDisable(!checkbox?.current?.checked);
  };
  const signContractBtnHandler = () => {
    const _data =
      user_id == propertyData?.owner?.owner_id
        ? {
            landlord_signature: true,
          }
        : {
            tenant_signature: true,
          };
    if (!!!!token) {
      try {
        axios
          .patch(
            `${Api_Url}/api/contract/modify_contract/${data?.id}/`,
            _data,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(({ data }) => {
            console.log("axios /api/contract/modify_contract data.data:", data);
            // setPropertyData(data);
            history.push("/contracts");
            dispatch(updateHandler(Math.random()));
         
            toast.success("با موفقیت قرارداد توسط شما امضا شد", {
              position: "top-center",
              rtl: true,
              className: "m_toast",
            });
          })
          .catch((e) => {
            console.log("error in axios /api/contract/modify_contract", e);
            if (e.response.status == 401) {
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  //   function isDisabled() {
  //     const len = boxes.filter((box) => box).length;
  //     return len === 0 || len > 1;
  //   }
  //   const redirectToRequests = () => {
  //     const Api_Url = process.env.REACT_APP_API_URL;
  //     console.log("modify_requests reqid", reqId);
  //     try {
  //       axios
  //         .patch(
  //           `${Api_Url}/api/modify_requests/${45}/`,
  //           {
  //             status: 1,
  //           },
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         )
  //         .then((_data) => {
  //           dispatch(signContractHandler(false));
  //           dispatch(updateListHandler());
  //           console.log("axios del /api/modify_requests data:", _data);
  //         })
  //         .catch((e) => {
  //           console.log("error in del /api/modify_requests data:", e);
  //           if (e.response.status == 401) {
  //             //dispatch(setUserIsLoggedHandler(false));
  //             // window.localStorage.setItem("user_logged", "false");
  //           }
  //         });
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  return (
    <div className="flex justify-center" id="cn">
      <div className="form1 seventyfivevh">
        <strong className="mb-4 flex items-start justify-center text-4xl">
          امضای قرارداد{" "}
        </strong>
        <div className="h-700">
          <div
            className="sixtyheight mx-auto w-3/4 overflow-auto rounded-lg bg-white p-4"
            dir="rtl"
            id="contractPrint"
          >
            <span>
              <strong> ماده ۱ - طرفین قرارداد</strong>
            </span>
            <p>قرارداد اجاره حاضر بین</p>
            <div>
              <span>
                <strong>
                  {data?.contract_landlord_information?.first_name}{" "}
                  {data?.contract_landlord_information?.last_name}
                </strong>
              </span>{" "}
              فرزند :{" "}
              <span>
                <strong>
                  {data?.contract_landlord_additional_information
                    ?.father_name || "نامشخص"}
                </strong>
              </span>{" "}
              به شماره شناسنامه :{" "}
              <span>
                <strong>
                  {data?.contract_landlord_additional_information
                    ?.certificate_number || "نامشخص"}
                </strong>
              </span>{" "}
              صادره از :{" "}
              <span>
                <strong>
                  {data?.contract_landlord_additional_information
                    ?.certificate_province || "نامشخص"}
                </strong>
              </span>{" "}
              به کدملی :{" "}
              <span>
                <strong>
                  {data?.contract_landlord_information?.national_code ||
                    "نامشخص"}
                </strong>
              </span>{" "}
              متولد:{" "}
              <span>
                <strong>
                  {data?.contract_landlord_additional_information
                    ?.certificate_county || "نامشخص"}
                </strong>
              </span>{" "}
              ساکن :{" "}
              <span>
                <strong>
                  {data?.contract_landlord_additional_information?.address ||
                    "نامشخص"}
                </strong>
              </span>{" "}
              تلفن :{" "}
              <span>
                <strong>
                  {data?.contract_landlord_additional_information
                    ?.personal_phone_number || "نامشخص"}
                </strong>
              </span>{" "}
              به عنوان{" "}
              <span>
                <strong>موجر</strong>
              </span>
            </div>
            و
            <div>
              و{" "}
              <span>
                <strong>
                  {data?.contract_tenant_information?.first_name}{" "}
                  {data?.contract_tenant_information?.last_name}
                </strong>
              </span>{" "}
              فرزند :{" "}
              <span>
                <strong>
                  {data?.contract_tenant_additional_information?.father_name ||
                    "نامشخص"}
                </strong>
              </span>{" "}
              به شماره شناسنامه :{" "}
              <span>
                <strong>
                  {data?.contract_tenant_additional_information
                    ?.certificate_number || "نامشخص"}
                </strong>
              </span>{" "}
              صادره از :{" "}
              <span>
                <strong>
                  {data?.contract_tenant_additional_information
                    ?.certificate_province || "نامشخص"}
                </strong>
              </span>{" "}
              به کدملی :{" "}
              <span>
                <strong>
                  {data?.contract_tenant_information?.national_code || "نامشخص"}
                </strong>
              </span>{" "}
              متولد:{" "}
              <span>
                <strong>
                  {data?.contract_tenant_additional_information
                    ?.certificate_county || "نامشخص"}
                </strong>
              </span>{" "}
              ساکن :{" "}
              <span>
                <strong>
                  {data?.contract_tenant_additional_information?.address ||
                    "نامشخص"}
                </strong>
              </span>{" "}
              تلفن :{" "}
              <span>
                <strong>
                  {data?.contract_tenant_additional_information
                    ?.personal_phone_number || "نامشخص"}
                </strong>
              </span>{" "}
              به عنوان{" "}
              <span>
                <strong>مستأجر</strong>
              </span>{" "}
              منعقد می گردد.
            </div>
            <div className="mt-5">
              <span>
                <strong>ماده ۲ - موضوع قرارداد و مشخصات ملک مورد اجاره</strong>
              </span>{" "}
              <div>
                عبارت است از تملیک منافع{" "}
                <span>
                  <strong>{data?.dong}</strong>
                </span>{" "}
                دانگ یک دستگاه{" "}
                <span>
                  {/* <strong>{propertyData?.Skeleton_type}</strong> */}
                  <strong>آپارتمان</strong>
                </span>{" "}
                واقع در{" "}
                <span>
                  <strong>{propertyData?.address}</strong>
                </span>{" "}
                پلاک ثبتی شماره{" "}
                <span>
                  <strong>{propertyData?.Original_registration_plate}</strong>
                </span>{" "}
                فرعی از {propertyData?.Sub_registration_plate} به مساحت{" "}
                <span>
                  <strong>{propertyData?.area} متر مربع</strong>
                </span>{" "}
                دارای سند مالکیت به شماره سریال{" "}
                <span>
                  <strong>{propertyData?.registration_section}</strong>
                </span>{" "}
                به نام موجر، مشتمل بر{" "}
                <span>
                  <strong>{propertyData?.bedrooms} اتاق خواب</strong>
                </span>{" "}
                با حق استفاده از{" "}
                <span>
                  <strong>برق، گاز، تلفن</strong>
                </span>{" "}
                به صورت اختصاصی و سایر لوازم و منصوبات و متفرعات مربوطه از جمله
                آب که جهت استفاده به رؤیت مستأجر رسیده و مورد قبول قرار گرفته
                است.
              </div>
              <div className="mt-5">
                <span>
                  <strong> ماده ۳ - مدت اجاره</strong>
                </span>
                <div>
                  مدت اجاره ار تاریخ{" "}
                  <span>
                    <strong>
                      {data?.start_date?.slice(0, 4)}/
                      {data?.start_date?.slice(5, 7)}/
                      {data?.start_date?.slice(8, 10)}
                    </strong>
                  </span>{" "}
                  آغاز و در مورخ{" "}
                  <span>
                    <strong>
                      {data?.end_date?.slice(0, 4)}/
                      {data?.end_date?.slice(5, 7)}/
                      {data?.end_date?.slice(8, 10)}
                    </strong>
                  </span>{" "}
                  خاتمه می یابد. (
                  {calcTimeOfContract(data?.start_date, data?.end_date).day ||
                    "نامشخص"}{" "}
                  روز)
                </div>
              </div>
              <div className="mt-5">
                <span>
                  <strong>ماده ۴ - اجاره بها، نحوه پرداخت</strong>
                </span>
                <div>
                  میزان اجاره بها از قرار ماهی {propertyData?.rent_amount} تومان
                  معادل {propertyData.rent_amount * 10}
                  ریال و جمعاً برای مدت اجاره مذکور میزان{" "}
                  {propertyData?.rent_amount *
                    calcTimeOfContract(data?.start_date, data?.end_date)
                      ?.month || "نامشخص"}{" "}
                  تومان می باشد. مبلغ {propertyData?.mortgage_amount} تومان
                  معادل {propertyData?.mortgage_amount * 10} ریال از طرف مستأجر
                  به عنوان ودیعه قرض الحسنه به موجر نقداً پرداخت می شود.
                </div>
              </div>
              <div>
                ماده ۵ - تقسیم مورد اجاره با عنایت به قرارداد اجاره مورخ
                {data?.contract_date?.slice(0, 4)}/
                {data?.contract_date?.slice(5, 7)}/
                {data?.contract_date?.slice(8, 10)} ، آپارتمان مورد اجاره به
                همراه تمامی توابع و ملحقات آن هم اکنون در تحویل و ید مستأجر و
                تحت تصرف وی می باشد.
              </div>
              <div>
                ماده ۶ - شرایط قرارداد 1- مستأجر حق استفاده از مورد اجاره را
                برخلاف منظور قرارداد که استفاده جهت محل سکنی می باشد ندارد، به
                اضافه آنکه مکلف است از مورد اجاره استفاده متعارف نماید. 2- موجر
                مورد اجاره را جهت سکونت سه نفر به مستأجر اجاره داده است. 3-
                مستاجر تحت هیچ شرایطی حق واگذاری مورد اجاره را به غیر تحت هیچ
                عنوانی اعم از امانت، اذن در انتفاع، اجاره مجدد ندارد. 4- مستاجر
                ملکف است به محض خاتمه مدت قرارداد اجاره و رأس موعد مقرر، مورد
                اجاره را تخلیه و تحویل موجر نماید، در غیر اینصورت مستأجر مکلف
                است روزانه مبلغ صد هزار تومان معادل یک میلیون ریال به عنوان
                خسارت وجه التزام به موجر بپردازد و موجر علاوه بر استحقاق دریافت
                وجه التزام حق درخواست تخلیه مورد اجاره را نیز دارد.
              </div>
              <div>
                ماده ۷ - قانون حاکم بر قرارداد این قرارداد در سایر موارد تابع
                قانون مدنی و قانون روابط مالک و مستأجر مصوب 1376 خواهد بود.
              </div>
              <div>
                قرارداد مزبور در ۷ ماده در مورخ{" "}
                {data?.contract_date?.slice(0, 4)}/
                {data?.contract_date?.slice(5, 7)}/
                {data?.contract_date?.slice(8, 10)} و در حضور شهود به امضای
                طرفین رسید.
              </div>
            </div>
          </div>
          <div className="mx-auto mt-2  mb-4 w-3/4 rounded-lg bg-white p-4">
            {(user_id == propertyData?.owner?.owner_id &&
              data?.landlord_signature) ||
            (user_id != propertyData?.owner?.owner_id &&
              data?.tenant_signature) ? null : (user_id ==
                propertyData?.owner?.owner_id &&
                !data?.landlord_signature) ||
              (user_id != propertyData?.owner?.owner_id &&
                !data?.tenant_signature) ? (
              <>
                <input
                  type="checkbox"
                  onChange={handleCheckBoxChange}
                  ref={checkbox}
                  className="m-2 h-4 w-4 cursor-pointer"
                />
                <label>
                  <strong>
                    اینجانب با آگاهی کامل، موافقت خود را با شرایط مذکور اعلام می
                    کنم
                  </strong>
                </label>
              </>
            ) : null}

            <div className="align-center mt-2 flex flex-row justify-between">
              <div>
                <p>
                  وضعیت امضای مؤجر :{" "}
                  {data?.landlord_signature ? (
                    <span className="text-[#20eb6a]">امضا شده</span>
                  ) : (
                    <span className="text-[#eb2e20]">امضا نشده</span>
                  )}
                </p>
                <p>
                  وضعیت امضای مستأجر :{" "}
                  {data?.tenant_signature ? (
                    <span className="text-[#20eb6a]">امضا شده</span>
                  ) : (
                    <span className="text-[#eb2e20]">امضا نشده</span>
                  )}
                </p>
              </div>
              {(user_id == propertyData?.owner?.owner_id &&
                data?.landlord_signature) ||
              (user_id != propertyData?.owner?.owner_id &&
                data?.tenant_signature) ? (
                <div className=" flex gap-4">
                  <button
                    onClick={() => printDiv()}
                    className=" w-48 rounded-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-gray"
                    style={gradient}
                  >
                    چاپ قرارداد
                  </button>
                </div>
              ) : (user_id == propertyData?.owner?.owner_id &&
                  !data?.landlord_signature) ||
                (user_id != propertyData?.owner?.owner_id &&
                  !data?.tenant_signature) ? (
                <div className=" flex gap-4">
                  <button className="w-28 gap-2 rounded border-2 border-solid border-primary-600 p-2 text-main-400">
                    انصراف
                  </button>
                  <button
                    className="w-48 bg-main-500 text-white disabled:cursor-not-allowed disabled:bg-gray"
                    disabled={disable}
                    onClick={signContractBtnHandler}
                  >
                    تایید و امضا
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
