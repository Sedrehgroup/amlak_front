import * as React from "react";
import useLocalStorage from "use-local-storage";

export const TokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const [accToken, setAccToken] = useLocalStorage("access_token", null);
  const [refToken, setRefToken] = useLocalStorage("refresh_token", null);

  return (
    <TokenContext.Provider value={{ accToken, setAccToken, refToken, setRefToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
