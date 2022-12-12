import React from "react";
import NavBar from "./Dashboard/NavBar";
import RightPanel from "./Dashboard/Panel/RightPanel";

export default function Main({comp}) {
  return (
    <div>
      <NavBar />
      <div className=" flex w-full bg-warmGray-200">
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
          {comp}
        </div>
      </div>
    </div>
  );
}
