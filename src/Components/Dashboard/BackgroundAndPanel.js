import React from "react";
import Panel from "./Panel";

export default function BackgroundAndPanel() {
    return (
        <div className="w-full h-screen bg-warmGray-200 relative flex">
            <Panel />
        </div>
    );
}
