import React from "react";

const ChatTitle = (props) => {
  return (
    <div className="flex flex-col items-start gap-y-4 px-6 py-1 border-r-[4px] border-main-500 ">
      <div className="flex  flex-col items-start gap-y-1">
        <p className=" font-semibold ">{props.AdName}</p>
        <p className=" font-medium text-sm">{props.UserName}</p>
      </div>
      <p className="font-light text-xs text-justify overflow-hidden h-8">
        {props.message}
      </p>
    </div>
  );
};

export default ChatTitle;
