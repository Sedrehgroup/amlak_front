import React from "react";
import house from "../../../../../assets/Images/Dashboard/house.jpg";

const CounterComponent = (props) => {
  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  return (
    <div className="flex h-full  w-full rounded-lg border border-warmGray-400 bg-warmGray-50 px-10 py-8">
      <div className="flex flex-col items-start gap-y-8">
        <h2 className=" text-2xl font-bold text-warmGray-900 ">
          {props.Title}
        </h2>
        <div className="flex justify-between gap-x-12">
          <div className="flex w-3/5 flex-col  gap-y-6">
            <div className="flex gap-x-20 rounded-lg border border-warmGray-300 p-4 ">
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
                <p className="text-right text-base">
                  متراژ : <span>{props.Meterage}</span>
                </p>
              </div>
            </div>
            <div
              dir="ltr"
              className="w-full rounded-lg border border-warmGray-300 p-2"
            >
              <div className="mx-auto my-4 max-w-xl ">
                <div className="flex pb-3">
                  <div className="flex-1"></div>
                  <div className="flex-1 px-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-lg font-bold text-warmGray-100">
                      1
                    </div>
                  </div>
                  <div className="align-center flex w-1/6 content-center items-center align-middle">
                    <div className="align-center w-full flex-1 items-center rounded bg-[#22C55E] align-middle">
                      <div
                        className="rounded bg-[#22C55E] py-1 text-center text-xs leading-none text-black "
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-lg font-bold text-warmGray-100">
                      2
                    </div>
                  </div>
                  <div className="align-center flex w-1/6 content-center items-center align-middle">
                    <div className="align-center w-full flex-1 items-center rounded bg-warmGray-300 align-middle">
                      <div
                        className="text-grey-darkest rounded bg-[#22C55E] py-1 text-center text-xs leading-none "
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <div className="mx-auto flex h-10 w-10 items-center rounded-full border-2 border-warmGray-300 bg-white text-lg text-white">
                      <span className="w-full text-center text-warmGray-400">
                        3
                      </span>
                    </div>
                  </div>
                  <div className="align-center flex w-1/6 content-center items-center align-middle">
                    <div className="align-center w-full flex-1 items-center rounded bg-warmGray-300 align-middle">
                      <div
                        className="bg-green-light rounded py-1 text-center text-xs leading-none text-warmGray-300 "
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 px-2">
                    <div className="mx-auto flex h-10 w-10 items-center rounded-full border-2 border-warmGray-300 bg-white text-lg text-white">
                      <span className="w-full text-center text-warmGray-400 ">
                        4
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 "></div>
                </div>
                <div className="flex content-center gap-x-5 text-center text-xs">
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
            <div className="flex flex-row  items-center gap-4 rounded-lg border border-warmGray-300 p-2">
              <p className="text-base font-light">وضعیت :</p>
              <p className="rounded bg-[#DCFCE7] p-2 text-sm font-bold text-[#22C55E]">
                تایید توسط مؤجر
              </p>
              <p className="pr-6 text-sm">منتظر امضای قرارداد توسط شما</p>
            </div>
          </div>
          <div className="flex w-2/5 flex-col justify-between gap-y-4">
            <img
              className="rounded-lg object-cover"
              src={house}
              alt="house"
              title="house"
            />
            <div className="flex w-full justify-between gap-x-4">
              <button className="w-1/2 rounded-lg  border-2 border-main-600 py-2 text-base font-semibold text-main-600">
                مشاهده آگهی
              </button>
              <button
                style={gradient}
                className="w-1/2 rounded-lg py-2 text-base font-semibold text-warmGray-50 "
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
