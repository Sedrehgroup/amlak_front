import React, { useState } from "react";
import ChatTitle from "./ChatTitle";

const ChatsList = (props) => {
  const [cl, setcl] = useState([
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
      Role="Lessor"
      OpeningChatPage={props.OpeningChatPage}
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
      Role="Lessor"
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
      Role="Lessor"
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
      Role="Lessor"
    />,
    <hr className=" text-warmGray-400 w-3/4 self-center" />,
    <ChatTitle
      AdName="مسکونی دوبلکس 248 متر در پیروزی "
      UserName="نام مؤجر : بابک نیازی"
      message="سلام. من با درخواست های شما موافقت می کنم. ولی یک نکته مهم ..."
      Role="Lessor"
    />,
  ]);

  return <div className="flex flex-col gap-y-6 py-2">{cl}</div>;
};

export default ChatsList;
