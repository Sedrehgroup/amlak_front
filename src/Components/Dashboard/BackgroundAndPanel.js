import React from "react";
import Main from "./Main/Main";
import Panel from "./Panel/Panel";

export default function BackgroundAndPanel() {
  return (
    <div className=" bg-warmGray-200 w-full flex">
      <div className="w-[200px] pt-10">
        <Panel />
      </div>

      <div
        style={{
          width: "calc(100% - 200px)",
          maxHeight: "calc(100vh - 72px)",
          overflowY: "auto",
        }}
      >
        <Main />
      </div>
    </div>
  );
}
