import React from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "./RenterDetailsPopup.css";

export default function RenterDetailsPopup() {
  const detailsFromUser = useSelector(
    (state) => state.loginMainProperty.detailsFromUser
  );
  console.log(detailsFromUser);

  return (
    <Popup
      trigger={<button className="button"> اطلاعات تماس مستاجر </button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal rounded-lg">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> اطلاعات تماس </div>
          <div className="content flex">
            <div className="w-1/2 ">
              <p>نام و نام خانوادگی:</p>
              <p>{detailsFromUser.first_name} </p>
              <p>{detailsFromUser.last_name} </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <p>شماره همراه:</p>
              <p dir="ltr">{detailsFromUser.phone_number} </p>
            </div>
          </div>
          <div className="actions">
            <Popup
              //   trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            ></Popup>
            <button
              className="button bg-main-500 text-white w-12 rounded-lg"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              بستن{" "}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
