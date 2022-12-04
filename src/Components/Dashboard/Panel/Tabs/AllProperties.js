import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import useToken from "./../../../../customHooks/useToken";

import PropertyDetails from "./../AddOns/PropertyDetails";
import MyProperyCard from "./../AddOns/MyProperyCard";

const AllProperties = () => {
  const [token] = useToken();
  const [MyPropertiesList, setMyProperties] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;
    if (token.length > 0) {
      setShowLoading(true);
      try {
        axios
          .get(`${Api_Url}/api/property/properties_list/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setMyProperties(data);
            setShowLoading(false);

            console.log(
              "axios get /api/property/properties_list data.data:",
              data
            );
          })
          .catch((e) => {
            console.log("error in axios /api/property/properties_list", e);
            setShowLoading(false);
          });
      } catch (error) {
        console.log("error", error);
      }
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
      {!showLoading ? (
        <div className="m_grid-container pr-6">
          {!!!!MyPropertiesList &&
            !showDetail &&
            MyPropertiesList.map((val, index) => (
              <div key={index}>
                <MyProperyCard data={val} showHandler={handler} />
              </div>
            ))}
          {MyPropertiesList.length == 0 && (
            <div className="m-auto text-xl bg-warmGray-300">
              آگهی ثبت شده ای وجود ندارد!
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center eightyvh">
          <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
        </div>
      )}

      {showDetail && <PropertyDetails data={adData} />}
    </>
  );
};

export default AllProperties;
