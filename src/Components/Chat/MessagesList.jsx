import React, { useState } from "react";
import messages3 from "../../assets/Images/Dashboard/messages-3.svg";
import send from "../../assets/Images/Dashboard/send.svg";
import Message from "./Message";

const MessagesList = (props) => {
  const [isActiveChat, setIsActiveChat] = useState(false);

  // const SendMessage = () => {
  //   let am = document.getElementById("AllMessages");
  //   let m = (
  //     <Message
  //       MessageText="سلام. من این درخواست ها را از شما دارم"
  //       date="11:02"
  //     />
  //   );
  //   // am.appendChild(m);
  // };

  return isActiveChat ? (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col">
        <img src={messages3} alt="messages" />
        <p>برای صحبت کردن، یکی از گفتگو ها را انتخاب کنید</p>{" "}
      </div>
    </div>
  ) : (
    <div className="w-full h-full relative flex flex-col justify-between ">
      <div
        className=" w-full flex justify-between  py-4 px-3 border-b-[2px] border-warmGray-400"
        // style={{
        //   boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.2)",
        //   webkitBoxShadow: "0px 5px 5px 0px rgba(0,0,0,0.2)",
        //   mozBoxShadow: "0px 5px 5px 0px rgba(0,0,0,0.2)",
        // }}
      >
        <div className="flex flex-col gap-y-1 items-start">
          <p className=" font-semibold text-sm">{props.AdName}</p>
          <p className=" font-medium text-xs">{props.UserName}</p>
        </div>
        <button className="border-2  text-main-600 rounded-lg font-bold px-6 text-sm">
          مشاهده آگهی
        </button>{" "}
      </div>
      <div
        className="flex flex-col gap-y-3 overflow-auto mb-6 mx-6"
        id="AllMessages"
      >
        <Message
          MessageText="سلام.  سلام. سلام. سلام. سلام. سلام. سلام. سلام. سلام. سلام. سلام.من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
        <Message
          MessageText="سلام. من این درخواست ها را از شما دارم"
          date="11:02"
        />
      </div>
      <div className=" rounded-lg p-2 bg-warmGray-200 flex gap-x-3 mb-3 mx-6">
        <button>
          <img src={send} alt="" className="hover:text-main-400" />
        </button>
        <input
          className="focus:outline-none overflow-y-auto w-full p-1 bg-warmGray-200"
          type="text"
          placeholder="پیام خود را بنویسید ..."
        />
      </div>
    </div>
  );
};
export default MessagesList;
