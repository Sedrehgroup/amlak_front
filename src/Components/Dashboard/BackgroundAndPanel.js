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
        id="m_main_content"
        style={{
          width: "calc(100% - 200px)",
          maxHeight: "calc(100vh - 72px)",
          overflowY: "auto",
        }}
        className=""
      >
        <Dashboard />
      </div>
    </div>
  );
}
