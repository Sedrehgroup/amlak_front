import React, { useState, useEffect, useRef } from "react";
import messages3 from "../../assets/Images/Dashboard/messages-3.svg";
import send from "../../assets/Images/Dashboard/send.svg";
import Message from "./Message";

const MessagesList = (props) => {
  const [isActiveChat, setIsActiveChat] = useState(false);

  // function OpeningChatPage() {
  //   setIsActiveChat(false);
  // }

  const [ml, setml] = useState([
    <Message
      MessageText="سلام. من این درخواست ها را از شما دارم"
      date={currentTime()}
    />,
    <Message MessageText="درخواست شماره 1" date={currentTime()} />,
    <Message MessageText="درخواست شماره 2" date={currentTime()} />,
    <Message MessageText="درخواست شماره 3" date={currentTime()} />,
    <Message
      MessageText="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهمی که باید عرض کنم این است که من این خانه را فقط به یک خانواده 4 نفری اجاره میدهم و نه بیشتر"
      date={currentTime()}
      Messenger="Audience"
    />,
  ]);

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
    // setMessage("");

    console.log("value is:", event.target.value);
  };

  function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();

    let time = hh + ":" + mm;

    return time;
  }

  return isActiveChat ? (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col">
        <img src={messages3} alt="messages" />
        <p>برای صحبت کردن، یکی از گفتگو ها را انتخاب کنید</p>{" "}
      </div>
    </div>
  ) : (
    <div className="w-full h-full relative flex flex-col justify-between">
      <div className=" w-full flex justify-between  py-4 px-3 border-b-[2px] border-warmGray-400 ">
        <div className="flex flex-col gap-y-1 items-start">
          <p className=" font-semibold text-sm">{props.AdName}</p>
          <p className=" font-medium text-xs">{props.UserName}</p>
        </div>
        <button className="  text-main-600 rounded-lg font-bold px-3 text-sm">
          مشاهده آگهی
        </button>{" "}
      </div>
      <div className="overflow-auto flex flex-col-reverse justify-between h-full ">
        <div className="flex flex-col gap-y-3 mb-4 mx-6 pt-4 justify-end">
          {ml}
        </div>
      </div>
      <div className=" rounded-lg p-2 bg-warmGray-200 flex gap-x-3 mb-3 mx-6">
        <button
          onClick={() => {
            if (message === "") {
              setMessage("");
            } else {
              const newml = ml.concat(
                <Message MessageText={message} date={currentTime()} />
              );
              setml(newml);
              setMessage("");
            }
          }}
        >
          <img src={send} alt="" className="hover:text-main-400" />
        </button>
        <textarea
          rows="1"
          className="focus:outline-none overflow-y-scroll w-full p-1 bg-warmGray-200 resize-none"
          placeholder="پیام خود را بنویسید ..."
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default MessagesList;
