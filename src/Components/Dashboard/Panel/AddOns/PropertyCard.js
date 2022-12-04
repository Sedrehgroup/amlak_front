import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import frame from "./../../../../assets/Images/Dashboard/Frame.png";

export default function PropertyCard(props) {
  const { title, mortgage_amount, rent_amount, area, id } = props.data;
  const showHandler = props.showHandler;
  const deleteHandler = props.deleteHandler;
  const isShown = props.isShown;
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="w-full h-auto">
        <div className="bg-white mx-2 flex justify-center flex-col rounded-lg mb-4">
          <strong className="mx-auto pt-6">{title}</strong>
          <div className="flex flex-col bg-white">
            <div className=" p-10">
              <img
                src={frame}
                alt=""
                className="rounded-lg"
                style={{
                  height: "150px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="w-full px-4 rounded-lg">
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
                  className="text-sm w-24 h-10 text-dark_red border-12 border-dark_red border-solid rounded-lg"
                >
                  حذف آگهی
                </button>
                <button className="text-sm w-24 h-10 bg-main-500 text-white border-12 border-primary-500 border-solid rounded-lg">
                  ویرایش آگهی
                </button>
              </>
            )}
            <Link
              to={`${url}/${id}`}
              onClick={() => showHandler(props.data)}
              className="text-sm px-4 py-2 bg-main-500 text-white border-12 border-primary-500 border-solid rounded-lg"
            >
              مشاهده آگهی
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
