import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToken from "../../../../../customHooks/useToken";
import {
  signContractHandler,
  updateListHandler,
} from "../../../../../redux/reducers/userProperty";

export default function SignContract() {
  const [boxes, setBoxes] = useState([]);
  const [token] = useToken();
  const dispatch = useDispatch();
  const reqId = useSelector((state) => state.userProperty.requestId);
  function handleChange(e) {
    const {
      parentNode: { children },
    } = e.target;

    const index = [...children].indexOf(e.target);

    const newState = [...boxes];

    newState[index] = !newState[index];

    setBoxes(newState);
  }

  function isDisabled() {
    const len = boxes.filter((box) => box).length;
    return len === 0 || len > 1;
  }
  const redirectToRequests = () => {
    const Api_Url = process.env.REACT_APP_API_URL;
    console.log("modify_requests reqid", reqId);
    try {
      axios
        .patch(
          `${Api_Url}/api/modify_requests/${45}/`,
          {
            status: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((_data) => {
          dispatch(signContractHandler(false));
          dispatch(updateListHandler());
          console.log("axios del /api/modify_requests data:", _data);
        })
        .catch((e) =>
          console.log("error in del /api/modify_requests data:", e)
        );
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="form1 seventyfivevh">
        <strong className="flex justify-center items-start text-4xl mb-4">
          امضای قرارداد{" "}
        </strong>
        <div className="h-700">
          <div
            className="bg-white w-3/4 sixtyheight p-4 mx-auto rounded-lg overflow-auto"
            dir="rtl"
          >
            <span>
              <strong> ماده ۱ - طرفین قرارداد</strong>
            </span>
            <p>قرارداد اجاره حاضر بین</p>
            <div>
              <span>
                <strong>علی محمدی</strong>
              </span>{" "}
              فرزند :{" "}
              <span>
                <strong>احمد</strong>
              </span>{" "}
              به شماره شناسنامه :{" "}
              <span>
                <strong>۰۰۲۱۲۳۴۵۶۷۸</strong>
              </span>{" "}
              صادره از :{" "}
              <span>
                <strong>تهران</strong>
              </span>{" "}
              به کدملی :{" "}
              <span>
                <strong>۰۰۲۱۲۳۴۵۶۷۸</strong>
              </span>{" "}
              متولد:{" "}
              <span>
                <strong>تهران</strong>
              </span>{" "}
              ساکن :{" "}
              <span>
                <strong>تهران، انقلاب، کوچه شماره ۱</strong>
              </span>{" "}
              تلفن :{" "}
              <span>
                <strong>۰۹۱۲۴۶۵۸۷۵۴</strong>
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
                <strong>رضا نیازی</strong>
              </span>{" "}
              فرزند :{" "}
              <span>
                <strong>جعفر</strong>
              </span>{" "}
              به شماره شناسنامه :{" "}
              <span>
                <strong>۰۰۸۱۲۳۴۵۶۷۸</strong>
              </span>{" "}
              صادره از :{" "}
              <span>
                <strong>تبریز</strong>
              </span>{" "}
              به کدملی :{" "}
              <span>
                <strong>۰۰۸۱۲۳۴۵۶۷۸</strong>
              </span>{" "}
              متولد :{" "}
              <span>
                <strong>تبریز</strong>
              </span>{" "}
              ساکن :{" "}
              <span>
                <strong>تهران، شهرک اکباتان، ساختمان 176</strong>
              </span>{" "}
              تلفن :{" "}
              <span>
                <strong>۰۹۱۲۹۰۸۷۶۵۴</strong>
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
                  <strong>۶</strong>
                </span>{" "}
                دانگ یک دستگاه{" "}
                <span>
                  <strong>آپارتمان</strong>
                </span>{" "}
                واقع در{" "}
                <span>
                  <strong>تهران، تجریش، کوچه ۴۶</strong>
                </span>{" "}
                پلاک ثبتی شماره{" "}
                <span>
                  <strong>۷۳۴۸۹۷۴۴۷۶</strong>
                </span>{" "}
                فرعی از ....... به مساحت{" "}
                <span>
                  <strong>۱۲۰ متر مربع</strong>
                </span>{" "}
                دارای سند مالکیت به شماره سریال{" "}
                <span>
                  <strong>۴۵۶۴۵۶۴۵۶۴</strong>
                </span>{" "}
                به نام موجر، مشتمل بر{" "}
                <span>
                  <strong>۲ اتاق خواب</strong>
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
                    <strong>۱۴۰۱٫۰۸٫۵</strong>
                  </span>{" "}
                  آغاز و در مورخ{" "}
                  <span>
                    <strong>۱۴۰۲٫۰۸٫۵</strong>
                  </span>{" "}
                  خاتمه می یابد. (۳۶۵ روز)
                </div>
              </div>
              <div className="mt-5">
                <span>
                  <strong>ماده ۴ - اجاره بها، نحوه پرداخت</strong>
                </span>
                <div>
                  میزان اجاره بها از قرار ماهی ۴٬۵۰۰٬۰۰۰ تومان معادل ۴۵٬۰۰۰٬۰۰۰
                  ریال و جمعاً برای مدت اجاره مذکور میزان ۵۴٬۰۰۰٬۰۰۰ تومان می
                  باشد. مبلغ ۲۰۰٬۰۰۰٬۰۰۰ تومان معادل ۲٬۰۰۰٬۰۰۰٬۰۰۰ ریال از طرف
                  مستأجر به عنوان ودیعه قرض الحسنه به موجر نقداً پرداخت می شود.
                </div>
              </div>
              <div>
                ماده ۵ - تقسیم مورد اجاره با عنایت به قرارداد اجاره مورخ
                ۱۴۰۱٫۰۸٫۰۵ ، آپارتمان مورد اجاره به همراه تمامی توابع و ملحقات
                آن هم اکنون در تحویل و ید مستأجر و تحت تصرف وی می باشد.
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
                قرارداد مزبور در ۷ ماده در مورخ ۱۴۰۱٫۰۸٫۰۵ و در حضور شهود به
                امضای طرفین رسید.
              </div>
            </div>
          </div>
          <div className="bg-white w-3/4  p-4 mx-auto rounded-lg mt-2 mb-4">
            <input
              type="checkbox"
              onChange={handleChange}
              className="m-2 w-4 h-4 cursor-pointer"
            />
            <label>
              <strong>
                اینجانب با آگاهی کامل، موافقت خود را با شرایط مذکور اعلام می کنم
              </strong>
            </label>
            <div className="flex flex-row justify-between align-center mt-2">
              <div>
                <p>وضعیت امضای مؤجر : </p>
                <p>وضعیت امضای مستأجر :</p>
              </div>
              <div className=" flex gap-4">
                <button className="p-2 gap-2 w-28 border-12 border-solid border-primary-600 rounded">
                  <p className="text-main-400">انصراف</p>
                </button>
                <button
                  className="bg-main-500 w-48 disabled:bg-gray disabled:cursor-not-allowed"
                  disabled={isDisabled()}
                  onClick={redirectToRequests}
                >
                  <p className="text-white">تایید و امضا</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
