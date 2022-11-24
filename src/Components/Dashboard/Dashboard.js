import React from "react";
import BackgroundAndPanel from "./BackgroundAndPanel";
import NavBar from "./NavBar";

import { BrowserRouter as Router } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <BackgroundAndPanel />
    </div>
  );
}
