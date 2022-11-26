import React from "react";
import CounterImage from "../../../../assets/Images/Dashboard/Counter.svg";

// add tab to name

export default function Counter() {
    return (
        <div>
            <button className="flex gap-x-2 items-center">
                <img src={CounterImage} alt="" />
                <p>پیشخوان</p>
            </button>
        </div>
    );
}
