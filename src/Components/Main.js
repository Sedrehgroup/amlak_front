import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "./Dashboard/NavBar";
import RightPanel from "./Dashboard/Panel/RightPanel";
import Protected from "./Protect/protected";

export default function Main({ comp, isLoged }) {

  return (
    <div>
      <Protected isLoged={isLoged}>
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
      </Protected>
    </div>
  );
}
