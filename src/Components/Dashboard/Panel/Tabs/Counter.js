import React from "react";
import CounterImage from "../../../../assets/Images/Dashboard/Counter.svg";

// add tab to name

export default function Counter() {
  return (
    <div>
      <button className="flex justify-center items-center h-10">
        <img src={CounterImage} alt="" />
        <p>پیشخوان</p>
      </button>
      <hr></hr>
    </div>
  );
}
