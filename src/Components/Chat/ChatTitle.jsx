import React, { useState } from "react";

const ChatTitle = (props) => {
  return (
    <div
      onClick={props.OpeningChatPage}
      className={
        props.Role === "Lessor"
          ? "flex flex-col items-start gap-y-4 px-6 py-1 border-r-[4px] border-main-500 hover:bg-main-100/30 hover:-translate-x-2 duration-300"
          : "flex flex-col items-start gap-y-4 px-6 py-1 border-r-[4px] border-sub-500 hover:bg-sub-100/20 hover:-translate-x-2 duration-300"
      }
    >
      <div className="flex  flex-col items-start gap-y-1">
        <p className=" font-semibold text-right">{props.AdName}</p>
        <p className=" font-medium text-sm">{props.UserName}</p>
      </div>
      <p className="font-light text-xs text-justify overflow-hidden h-8">
        {props.message}
      </p>
    </div>
  );
};

export default ChatTitle;
