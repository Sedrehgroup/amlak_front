import React, { useEffect } from "react";
import ChatsList from "./ChatsList";
import MessagesList from "./MessagesList";

const ChatPage = (props) => {
  const ocp = props.OpeningChatPage;
  useEffect(() => {
    document.title='سامانه اجاره بها - گفتگو'
  }, []);
  return (
    <div className=" w-11/12 h-[600px] mt-6 flex rounded bg-warmGray-100">
      <div className="w-1/4 rounded-tr rounded-br border-l-[2px] border-warmGray-400 overflow-y-auto overflow-x-hidden">
        <ChatsList OpeningChatPage={props.OpeningChatPage} />
      </div>
      <div className="w-3/4 rounded-tl rounded-bl ">
        <MessagesList
          AdName="مسکونی دوبلکس 248 متر در پیروزی "
          UserName="نام مؤجر : بابک نیازی"
          OpeningChatPage={ocp}
        />
      </div>
    </div>
  );
};

export default ChatPage;
