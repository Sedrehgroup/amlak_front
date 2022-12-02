import React, { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState("");
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    setToken(window.localStorage.getItem("ACC_TOKEN")?.replace(/"/g, "") || "");
  }, [update]);
  return [token, setUpdate];
};

export default useToken;
