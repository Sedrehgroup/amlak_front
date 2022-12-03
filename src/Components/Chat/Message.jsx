import React, { useState } from "react";
import doubleTick from "../../assets/Images/Dashboard/double-tick-icon.svg";

const Message = (props) => {
  const [me, setMe] = useState(true);

  return me ? (
    <div className="max-w-[40%] w-fit h-fit flex flex-col items-start text-sm rounded-lg gap-y-2 p-2 bg-warmGray-300">
      <p className="text-right">{props.MessageText}</p>
      <div className="flex self-end gap-x-1">
        <img src={doubleTick} alt="" />
        <p className="text-warmGray-500">{props.date}</p>
      </div>
    </div>
  ) : (
    <div className="max-w-[40%]  flex flex-col items-start text-sm rounded-lg gap-y-2 p-2 bg-main-100 self-end">
      <p className="text-right">{props.MessageText}</p>
      <div className="flex  gap-x-1 self-end">
        <p className="text-warmGray-500">{props.date}</p>
      </div>
    </div>
  );
};

export default Message;
