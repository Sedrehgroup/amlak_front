import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import frame from "./../../../../assets/Images/Dashboard/Frame.png";
import house from "./../../../../assets/Images/Dashboard/house.jpg";

export default function PropertyCard(props) {
  const { title, mortgage_amount, rent_amount, area, id, city } = props.data;
  const showHandler = props.showHandler;
  const deleteHandler = props.deleteHandler;

  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="h-auto max-w-[350px] rounded-lg border border-warmGray-400 bg-white">
        <Link
          to={`/allProperties/${id}`}
          onClick={() => showHandler(props.data)}
          className=" rounded-lg "
        >
          <div className="flex flex-col rounded-lg">
            <img
              src={house}
              alt=""
              className="w-fit rounded-t-lg object-cover"
              style={
                {
                  // height: "320px",
                  // width: "100%",
                  // objectFit: "cover",
                }
              }
            />

            <strong
              className="my-3 overflow-hidden px-2 text-center "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                // overflow: "hidden",
              }}
            >
              {title}
            </strong>
            <hr className=" mx-3 border-main-300" />
            <div className="my-3 flex  w-full flex-col gap-y-2 rounded-lg px-4 text-center">
              <p className="">قیمت رهن : {mortgage_amount} تومان </p>
              {/* <hr
                style={{
                  color: "rgba(255, 171, 119, 1)",
                  marginBottom: "16px",
                }}
              /> */}
              <p className="">قیمت اجاره : {rent_amount} تومان </p>
              {/* <hr
                style={{
                  color: "rgba(255, 171, 119, 1)",
                  marginBottom: "16px",
                }}
              /> */}
              <p className="">متراژ : {area} متر</p>
              {/* <hr
                style={{
                  color: "rgba(255, 171, 119, 1)",
                  marginBottom: "16px",
                }}
              /> */}
              <p className="">شهرستان : {city} </p>
            </div>
          </div>
        </Link>
        <div
          className={`flex flex-row flex-wrap gap-x-2  ${
            props.notForMe ? "justify-end px-3" : "justify-center px-1 py-4"
          }`}
        >
          {!props.notForMe && (
            <div className="flex gap-1">
              <button
                onClick={() => deleteHandler(props.data)}
                className="whitespace-nowrap rounded-lg border-2 border-solid border-darkRed px-2 py-1 text-sm text-darkRed "
              >
                حذف آگهی
              </button>

              <Link
                to={`/editProperty/?id=${id}`}
                className="whitespace-nowrap rounded-lg border-2 border-solid  border-main-600 px-2 py-1  text-sm text-main-600"
              >
                ویرایش آگهی
              </Link>
              <Link
                to={`/allProperties/${id}`}
                onClick={() => showHandler(props.data)}
                className="whitespace-nowrap rounded-lg border-2 border-solid  border-main-600 px-2  py-1  text-sm text-main-600"
              >
                مشاهده آگهی
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
