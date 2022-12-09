import React from "react";
import house from "../../../../../assets/Images/Dashboard/house.jpg";

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CounterComponent = (props) => {
  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  return (
    <div className="rounded-lg flex  px-10 py-8 bg-warmGray-50 border border-warmGray-400 w-full h-full">
      <div className="flex flex-col gap-y-8 items-start">
        <h2 className=" font-bold text-2xl text-warmGray-900 ">
          {props.Title}
        </h2>
        <div className="flex justify-between gap-x-12">
          <div className="flex flex-col gap-y-6  w-3/5">
            <div className="border border-warmGray-300 flex p-4 gap-x-20 rounded-lg ">
              <div className="flex flex-col gap-y-4">
                <p className="text-base">
                  قیمت رهن : <span>{props.MortgagePrice}</span>
                </p>
                <hr className="text-warmGray-300" />
                <p className="text-base">
                  قیمت اجاره : <span>{props.RentalPrice}</span>
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-base">
                  سال ساخت : <span>{props.YearOfConstruction}</span>
                </p>
                <hr className="text-warmGray-300" />
                <p className="text-base text-right">
                  متراژ : <span>{props.Meterage}</span>
                </p>
              </div>
            </div>
            <div
              dir="ltr"
              className="border border-warmGray-300 w-full rounded-lg p-2"
            >
              <div className="max-w-xl mx-auto my-4  pb-4">
                <div className="flex pb-3">
                  <div className="flex-1"></div>
                  <div className="flex-1 px-2">
                    <div className="w-10 h-10 bg-[#22C55E] mx-auto rounded-full text-lg text-white flex items-center"></div>
                  </div>
                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-[#22C55E] rounded items-center align-middle align-center flex-1">
                      <div
                        className="bg-[#22C55E] text-xs leading-none py-1 text-center text-black rounded "
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <div className="w-10 h-10 bg-[#22C55E] mx-auto rounded-full text-lg text-black flex items-center"></div>
                  </div>
                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-warmGray-300 rounded items-center align-middle align-center flex-1">
                      <div
                        className="bg-[#22C55E] text-xs leading-none py-1 text-center text-grey-darkest rounded "
                        style={{ width: "20%" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <div className="w-10 h-10 bg-white border-2 border-warmGray-300 mx-auto rounded-full text-lg text-white flex items-center">
                      <span className="text-warmGray-400 text-center w-full">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-warmGray-300 rounded items-center align-middle align-center flex-1">
                      <div
                        className="bg-green-light text-xs leading-none py-1 text-center text-warmGray-300 rounded "
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <div className="w-10 h-10 bg-white border-2 border-warmGray-300 mx-auto rounded-full text-lg text-white flex items-center">
                      <span className="text-warmGray-400 text-center w-full ">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 "></div>
                </div>
                <div className="flex text-xs content-center text-center gap-x-5">
                  <div className="w-1/4">درخواست اجاره</div>
                  <div className="w-1/4">تأیید درخواست توسط مؤجر</div>
                  <div className="w-1/4 text-warmGray-400">
                    امضای قرارداد توسط طرفین
                  </div>
                  <div className="w-1/4 text-warmGray-400">
                    تأیید قرارداد و اجاره
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-warmGray-300  flex flex-row items-center gap-4 p-2 rounded-lg">
              <p className="font-light text-base">وضعیت :</p>
              <p className="font-bold rounded p-2 text-sm text-[#22C55E] bg-[#DCFCE7]">
                تایید توسط مؤجر
              </p>
              <p className="text-sm pr-6">منتظر امضای قرارداد توسط شما</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-4 w-2/5">
            <img
              className="object-cover rounded-lg"
              src={house}
              alt="house"
              title="house"
            />
            <div className="flex justify-between gap-x-4 w-full">
              <button className="w-1/2 py-2  text-base rounded-lg font-semibold text-main-600 border-2 border-main-600">
                مشاهده آگهی
              </button>
              <button
                style={gradient}
                className="w-1/2 py-2 text-base rounded-lg font-semibold text-warmGray-50 "
              >
                {props.btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
