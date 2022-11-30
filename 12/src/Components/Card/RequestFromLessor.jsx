import React from "react";
import RenterDetailsPopup from "./RenterDetailsPopup";
import "reactjs-popup/dist/index.css";
// import SignContract from "../Dashboard/Panel/DetailsTab/rentdetail/SignContract";
// کارت طراحی شده برای درخواست ها و اجاره ها

const RequestFromLessor = (props) => {
  return (
    <div className="p-10 border border-warmGray-400 bg-warmGray-100 my-8 mx-12 rounded-lg">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between pb-4 border-b-2 border-b-warmGray-800">
          <p className="font-semibold text-xl">{props.AdTitle}</p>
          <button className=" bg-sub-500 text-warmGray-50 rounded-lg px-4 py-2">
            {props.TitleOfChatButton}
          </button>
        </div>
        <div className="flex justify-between gap-x-12">
          <img
            src={props.imgPath}
            className="rounded-lg "
            alt="img"
            style={{ width: "400px", height: "240px" }}
          />
          <div className="flex flex-col gap-y-6 justify-between w-full">
            <div className="flex justify-between">
              <p className="font-light">
                قیمت رهن:
                <span className="font-medium text-lg">
                  {props.mortgagePrice}
                </span>
              </p>
              <p className="font-light">
                قیمت اجاره:{" "}
                <span className="font-medium text-lg">{props.rentalPrice}</span>
              </p>
              <p className="font-light">
                متراژ:{" "}
                <span className="font-medium text-lg">{props.meterage}</span>
                {/* <span className="font-medium text-lg">{`${props.meterage}`}</span> */}
              </p>
            </div>
            <hr className=" text-warmGray-400" />
            <p className="font-light">
              وضعیت :&nbsp;&nbsp;
              <span
                className={`font-bold ${props.stateTextColor} ${props.stateBgColor} rounded p-2`}
              >
                {props.requestState}
              </span>
            </p>
            <hr className=" text-warmGray-400" />
            <div className=" flex gap-x-4">
              <button className="border-2 border-main-600 text-main-600 rounded-lg font-bold px-6 h-10">
                مشاهده آگهی
              </button>
              <button className="border-2 border-main-600 text-main-600 rounded-lg font-bold px-6 h-10">
                {/* {props.SecondButtonText} */}
                <RenterDetailsPopup />
              </button>
              <button
                style={{
                  background: "rgb(255,115,29)",
                  // eslint-disable-next-line no-dupe-keys
                  background:
                    "linear-gradient(115deg, rgba(255,115,29,1) 0%, rgba(255,171,119,1) 100%)",
                }}
                className="text-warmGray-50 rounded-lg font-bold px-6 h-10"
              >
                {props.MainButtonText}
              </button>
              <button
                className="border-2 border-main-600 text-main-600 rounded-lg font-bold px-6 h-10"
                // onClick={() =>   <SignContract />}
              >
                امضای قرارداد{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFromLessor;
