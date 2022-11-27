import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../../../../customHooks/useToken";
import AdDetail from "../DetailsTab/rentdetail/AdDetail";
import MyProperyCard from "../DetailsTab/rentdetail/MyProperyCard";

const MyProperties = () => {
  const [token] = useToken();
  const [MyPropertiesList, setMyProperties] = useState([]);
  useEffect(() => {
    console.log("token", token);
  }, [token]);

  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .get(`${Api_Url}/api/my_properties/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setMyProperties(data);
          console.log("axios get /api/my_properties data.data:", data);
        })
        .catch((e) => console.log("error in axios /users/otp_register", e));
    } catch (error) {
      console.log("error", error);
    }
  }, [token]);
  const [showDetail, setShowDetail] = useState(false);
  const [adData, setAdData] = useState([]);
  const handler = (data) => {
    setShowDetail(true);
    setAdData(data);
  };
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {!!!!MyPropertiesList &&
          !showDetail &&
          MyPropertiesList.map((val, index) => (
            <MyProperyCard data={val} key={index} showHandler={handler} />
          ))}
      </div>
      {showDetail && <AdDetail data={adData} />}
    </>
  );
};

export default MyProperties;
