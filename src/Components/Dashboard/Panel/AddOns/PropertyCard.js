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
      <div className="bg-white rounded-lg h-auto max-w-[350px] border border-warmGray-400">
        <Link
          to={`/allProperties/${id}`}
          onClick={() => showHandler(props.data)}
          className=" rounded-lg "
        >
          <div className="flex flex-col rounded-lg">
            <img
              src={house}
              alt=""
              className="rounded-t-lg w-fit object-cover"
              style={
                {
                  // height: "320px",
                  // width: "100%",
                  // objectFit: "cover",
                }
              }
            />

            <strong
              className="my-3 text-center px-2 overflow-hidden "
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "1",
                WebkitBoxOrient: "vertical",
                // overflow: "hidden",
              }}
            >
              {title}
            </strong>
            <hr className=" border-main-300 mx-3" />
            <div className="w-full px-4  rounded-lg flex flex-col gap-y-2 my-3 text-center">
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
            <div className="flex gap-x-2">
              <button
                onClick={() => deleteHandler(props.data)}
                className="text-sm px-2 py-1 whitespace-nowrap text-darkRed border-2 border-darkRed border-solid rounded-lg "
              >
                حذف آگهی
              </button>

              <Link
                to={`/editProperty/?id=${id}`}
                className="text-sm px-2 py-1 border-main-600  whitespace-nowrap text-main-600 border-2  border-solid rounded-lg"
              >
                ویرایش آگهی
              </Link>
              <Link
                to={`/allProperties/${id}`}
                onClick={() => showHandler(props.data)}
                className="text-sm px-2 py-1 border-main-600  whitespace-nowrap text-main-600  border-2  border-solid rounded-lg"
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
