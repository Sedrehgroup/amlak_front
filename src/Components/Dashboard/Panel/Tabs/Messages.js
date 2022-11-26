import React from "react";
import MessagesImage from "../../../../assets/Images/Dashboard/Messages.svg";

export default function Messages() {
  return (
    <div>
      <button className="flex gap-x-2 items-center">
        <img src={MessagesImage} alt="" />
        <p>گفتگو</p>
      </button>
    </div>
  );
}
