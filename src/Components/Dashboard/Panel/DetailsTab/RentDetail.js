import React from "react";
import AdDetail from "./rentdetail/AdDetail";
import RentElementDetail from "./rentdetail/RentElementDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function RentDetail() {
  return (
    <div>
      {/* <p className="flex justify-center">اگهی اجاره</p>
      <div className="flex gap-8">
        <RentElementDetail />
      </div> */}

      <AdDetail />
    </div>
  );
}
