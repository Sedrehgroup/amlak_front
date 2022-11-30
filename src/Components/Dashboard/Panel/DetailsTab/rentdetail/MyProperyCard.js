import React, { useState } from "react";

import frame from "./../../../../../assets/Images/Dashboard/Frame.png";
import AdDetail from "./AdDetail";

export default function MyProperyCard(props) {
  const { title, mortgage_amount, rent_amount, area } = props.data;
  const showHandler = props.showHandler;
  const deleteHandler = props.deleteHandler;
  const isShown = props.isShown;

  return (
    <>
      <div
        className="bg-white mx-2 flex justify-center flex-col rounded-lg  mb-4"
        style={{ width: "calc(33% - 1.5rem)" }}
      >
        <strong className="mx-auto pt-6">{title}</strong>
        <div className="flex bg-white">
          <div className="w-2/3 rounded-lg p-6">
            <img src={frame} alt="" className="rounded-lg" />
          </div>
          <div className="w-1/3 m-6 rounded-lg">
            <p className="mb-4">قیمت رهن : {mortgage_amount} تومان </p>
            <hr
              style={{
                color: "#D6D3D1",
                marginBottom: "16px",
              }}
            />
            <p className="mb-4">قیمت اجاره : {rent_amount} تومان </p>
            <hr
              style={{
                color: "#D6D3D1",
                marginBottom: "16px",
              }}
            />
            <p className="mb-4">متراژ : {area} متر</p>
          </div>
        </div>
        <hr
          style={{
            color: "black",
            marginBottom: "16px",
          }}
        />
        <div className="flex justify-end gap-4 mb-4 px-7">
          {isShown && (
            <>
              <button
                onClick={() => deleteHandler(props.data)}
                className="w-24 h-10 text-dark_red border-12 border-dark_red border-solid rounded-lg"
              >
                حذف آگهی
              </button>
              <button className="w-24 h-10 bg-main-500 text-white border-12 border-primary-500 border-solid rounded-lg">
                ویرایش آگهی
              </button>
            </>
          )}
          <button
            onClick={() => showHandler(props.data)}
            className="w-24 h-10 bg-main-500 text-white border-12 border-primary-500 border-solid rounded-lg"
          >
            مشاهده آگهی
          </button>
        </div>
      </div>
    </>
  );
}
