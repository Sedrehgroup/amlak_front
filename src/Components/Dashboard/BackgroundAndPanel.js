import React from "react";
import Dashboard from "./Dashboard";
import RightPanel from "./Panel/RightPanel";

export default function BackgroundAndPanel() {
  return (
    <div className=" bg-warmGray-200 w-full flex">
      <div className="w-[200px] pt-4">
        <RightPanel />
      </div>

      <div
        style={{
          width: "calc(100% - 200px)",
          maxHeight: "calc(100vh - 72px)",
          overflowY: "auto",
        }}
        className="pt-4"
      >
        <Dashboard />
      </div>
    </div>
  );
}
