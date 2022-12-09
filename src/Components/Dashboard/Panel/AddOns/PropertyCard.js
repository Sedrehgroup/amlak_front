import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import frame from "./../../../../assets/Images/Dashboard/Frame.png";

export default function PropertyCard(props) {
  const { title, mortgage_amount, rent_amount, area, id, city } = props.data;
  const showHandler = props.showHandler;
  const deleteHandler = props.deleteHandler;

  let { path, url } = useRouteMatch();

  return (
    <>
      <div className=" h-auto max-w-[350px]">
        <Link
          to={`/allProperties/${id}`}
          onClick={() => showHandler(props.data)}
          className="bg-white mx-1 flex justify-center flex-col rounded-lg mb-4"
        >
          <div className="flex flex-col bg-white rounded-lg">
            <>
              <img
                src={frame}
                alt=""
                className="rounded-t-lg"
                style={{
                  height: "320px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </>
            <strong className="mx-auto mb-3 mt-3">{title}</strong>
            <hr
              style={{
                color: "rgba(255, 171, 119, 1)",
                marginBottom: "16px",
              }}
            />
            <div className="w-full px-4 rounded-lg flex flex-col text-center">
              <p className="mb-4">قیمت رهن : {mortgage_amount} تومان </p>
              {/* <hr
                style={{
                  color: "rgba(255, 171, 119, 1)",
                  marginBottom: "16px",
                }}
              /> */}
              <p className="mb-4">قیمت اجاره : {rent_amount} تومان </p>
              {/* <hr
                style={{
                  color: "rgba(255, 171, 119, 1)",
                  marginBottom: "16px",
                }}
              /> */}
              <p className="mb-4">متراژ : {area} متر</p>
              {/* <hr
                style={{
                  color: "rgba(255, 171, 119, 1)",
                  marginBottom: "16px",
                }}
              /> */}
              <p className="mb-4">شهرستان : {city} </p>
            </div>
          </div>
          <div
            className={`flex flex-row flex-wrap gap-4   ${
              props.notForMe ? "justify-end px-3" : "justify-center px-1"
            }`}
          >
            {!props.notForMe && (
              <div className="w-full">
                {/* <hr
                  style={{
                    color: "rgba(255, 171, 119, 1)",
                    marginBottom: "16px",
                    width: "70%",
                  }}
                /> */}
                <button
                  onClick={() => deleteHandler(props.data)}
                  className="text-sm px-3 py-2 whitespace-nowrap text-darkRed border-12 border-darkRed border-solid rounded-lg w-1/3"
                >
                  حذف آگهی
                </button>
                <button className="text-sm px-3 py-2 whitespace-nowrap bg-main-500 text-white border-12 border-primary-500 border-solid rounded-lg w-1/3">
                  ویرایش آگهی
                </button>
                {/* <Link
                  to={`${url}/${id}`}
                  onClick={() => showHandler(props.data)}
                  className="text-sm px-3 py-2 bg-main-500  whitespace-nowrap text-white border-12 border-primary-500 border-solid rounded-lg w-1/3"
                >
                  مشاهده آگهی
                </Link> */}
              </div>
            )}
            {/* <Link
              to={`${url}/${id}`}
              onClick={() => showHandler(props.data)}
              className="text-sm px-3 py-2 bg-main-500  whitespace-nowrap text-white border-12 border-primary-500 border-solid rounded-lg"
            >
              مشاهده آگهی
            </Link> */}
          </div>
        </Link>
      </div>
    </>
  );
}
