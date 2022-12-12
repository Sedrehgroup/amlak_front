import React, { useState, useEffect, useRef } from "react";
import messages3 from "../../assets/Images/Dashboard/messages-3.svg";
import send from "../../assets/Images/Dashboard/send.svg";
import Message from "./Message";

const MessagesList = (props) => {
  const [isActiveChat, setIsActiveChat] = useState(false);
  const [mockMessage, setMockMessage] = useState([
    {
      message_text: "سلام. من این درخواست ها را از شما دارم",
      date: currentTime(),
    },
    {
      message_text: "درخواست شماره 1",
      date: currentTime(),
    },
    {
      message_text: "درخواست شماره 2",
      date: currentTime(),
    },
    {
      message_text:
        "سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهمی که باید عرض کنم این است که من این خانه را فقط به یک خانواده 4 نفری اجاره میدهم و نه بیشتر",
      date: currentTime(),
      messenger: "Audience",
    },
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
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col">
        <img src={messages3} alt="messages" />
        <p>برای صحبت کردن، یکی از گفتگو ها را انتخاب کنید</p>{" "}
      </div>
    </div>
  ) : (
    <div className="relative flex h-full w-full flex-col justify-between">
      <div className=" flex w-full justify-between  border-b-[2px] border-warmGray-400 py-4 px-3 ">
        <div className="flex flex-col items-start gap-y-1">
          <p className=" text-sm font-semibold">{props.AdName}</p>
          <p className=" text-xs font-medium">{props.UserName}</p>
        </div>
        <button className="  rounded-lg px-3 text-sm font-bold text-main-600">
          مشاهده آگهی
        </button>{" "}
      </div>
      <div className="flex h-full flex-col-reverse justify-between overflow-auto ">
        <div className="mx-6 mb-4 flex flex-col justify-end gap-y-3 pt-4">
          {mockMessage.map((messageItem, index) => (
            <Message
              MessageText={messageItem.message_text}
              date={currentTime()}
              Messenger={!!messageItem?.messenger ? "Audience" : null}
            />
          ))}
        </div>
      </div>
      <div className=" mx-6 mb-3 flex gap-x-3 rounded-lg bg-warmGray-200 p-2">
        <button
          onClick={() => {
            if (message === "") {
              setMessage("");
            } else {
              const newMockMessage = mockMessage.concat({
                message_text: message,
                date: currentTime(),
              });
              setMockMessage(newMockMessage);
              setMessage("");
            }
          }}
        >
          <img src={send} alt="" className="hover:text-main-400" />
        </button>
        <textarea
          rows="1"
          className="w-full resize-none overflow-y-scroll bg-warmGray-200 p-1 focus:outline-none"
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
