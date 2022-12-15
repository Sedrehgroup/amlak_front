import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "./Dashboard/NavBar";
import RightPanel from "./Dashboard/Panel/RightPanel";
import Protected from "./Protect/protected";
import useLocalStorage from "use-local-storage";
import axios from "axios";

export default function Main({ comp }) {
  const [accToken, setAccToken] = useLocalStorage("access_token", null);
  const [refToken, setRefToken] = useLocalStorage("refresh_token", null);
  const [userData, setUserData] = useState(null);

  async function setAccTokenByRefToken() {
    try {
      const Api_Url = process.env.REACT_APP_API_URL;
      const { data } = await axios.post(`${Api_Url}/account/token/refresh/`, {
        refresh: refToken,
      });
      console.log("newAccToken", data.access);
      if (!data) throw new Error();
      setAccToken(data.access);
    } catch (err) {
      console.log("refresh token is invalid!");
      setAccToken(null);
      setRefToken(null);
    }
  }

  async function setUserByAccToken() {
    try {
      const Api_Url = process.env.REACT_APP_API_URL;
      const { data } = await axios.get(`${Api_Url}/account/user_information/`, {
        headers: {
          Authorization: `Bearer ${accToken}`,
        },
      });
      setUserData(data);
      console.log("user data", data);
    } catch (err) {
      console.warn(err);
      console.log("access token is invalid!");
      setAccTokenByRefToken();
    }
  }

  useEffect(() => {
    return () => {
      console.log("accToken", accToken);
      setUserByAccToken();
    };
  }, [accToken]);

  return (
    <div>
      <Protected isLoged={accToken}>
        {userData ? (
          <>
            <NavBar data={userData} />
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
          </>
        ) : (
          <h1>درحال بارگیری ...</h1>
        )}
      </Protected>
    </div>
  );
}
