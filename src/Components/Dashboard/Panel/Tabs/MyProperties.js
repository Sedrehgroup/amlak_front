import axios from "axios";
import React, { useEffect } from "react";
import useToken from "../../../../customHooks/useToken";

const MyProperties = () => {
  const [token] = useToken();

  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .get(
          `${Api_Url}/api/my_properties/`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          console.log("axios get /api/my_properties data.data:", data);
        })
        .catch((e) => console.log("error in axios /users/otp_register", e));
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  return <div>MyProperties</div>;
};

export default MyProperties;
