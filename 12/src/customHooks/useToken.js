import React, { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(window.localStorage.getItem("ACC_TOKEN")?.replace(/"/g, "") || "");
  }, []);
  return [token];
};

export default useToken;
