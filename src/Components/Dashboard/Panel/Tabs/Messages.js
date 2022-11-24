import React from "react";
import MessagesImage from "../../../../assets/Images/Dashboard/Messages.svg";

export default function Messages() {
  return (
    <div>
      <button className="flex h-10">
        <img src={MessagesImage} alt="" />
        <p>گفتگو</p>
      </button>
      <hr></hr>
    </div>
  );
}
