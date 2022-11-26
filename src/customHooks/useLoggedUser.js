import React, { useEffect, useState } from "react";

const useLoggedUser = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  useEffect(() => {
    const isLogged = window.localStorage.getItem("user_logged");
    if (!!!!isLogged & (isLogged == "true")) setIsUserLogged(true);
    else setIsUserLogged(false);
  }, []);
  return [isUserLogged, setIsUserLogged];
};

export default useLoggedUser;
