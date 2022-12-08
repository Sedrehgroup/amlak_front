import React from "react";
import house from "../../../../../assets/Images/Dashboard/house.jpg";

const CounterComponent = (props) => {
  const gradient = {
    background: "linear-gradient(90.83deg, #FF731D 0.01%, #FFAB77 100.01%)",
  };

  return (
    <div className="rounded-lg flex  px-16 py-8 bg-warmGray-50 border border-warmGray-400 w-full h-full">
      <div className="flex flex-col gap-y-6 items-start">
        <h2 className=" font-bold text-2xl text-warmGray-900 ">
          {props.Title}
        </h2>
        <div className="flex justify-between gap-x-16">
          <div className=" flex flex-col gap-y-6">
            <div className="border border-warmGray-300 flex p-4 gap-x-20 rounded-lg">
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
            <div className="border border-warmGray-300"></div>
            <div className="border border-warmGray-300"></div>
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
