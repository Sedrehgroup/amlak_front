import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import useToken from "./../../../../customHooks/useToken";

import PropertyDetails from "./../AddOns/PropertyDetails";
import PropertyCard from "./../AddOns/PropertyCard";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { iranCitiesList } from "../../../../utils/iranCitiesList";

const AllProperties = () => {
  const [token] = useToken();
  const [MyPropertiesList, setMyProperties] = useState([]);
  const [adData, setAdData] = useState([]);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const [previousUrl, setPreviousUrl] = useState("disable");
  const [nextUrl, setNextUrl] = useState("disable");

  const [showLoading, setShowLoading] = useState(false);
  let { path, url } = useRouteMatch();
  useEffect(() => {
    console.log("city,province", city, province);
  }, [city]);

  const nextHandler = () => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .get(`${Api_Url}/api/property/properties_list${nextUrl}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setMyProperties(data.results);
          setShowLoading(false);
          setPreviousUrl(data?.previous?.slice(39) || "disable");
          setNextUrl(data?.next?.slice(39) || "disable");
          document.querySelector("#m_main_content").scrollTop = 0;

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
  };
  const previousHandler = () => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .get(`${Api_Url}/api/property/properties_list${previousUrl}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setMyProperties(data.results);
          setShowLoading(false);
          setPreviousUrl(data?.previous?.slice(39) || "disable");
          setNextUrl(data?.next?.slice(39) || "disable");
          document.querySelector("#m_main_content").scrollTop = 0;
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
  };
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
            setMyProperties(data?.results);
            setShowLoading(false);
            setNextUrl(data?.next?.slice(39) || "disable");
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
  const handler = (data) => {
    setAdData(data);
  };

  return (
    <>
      <Switch>
        <Route exact path={path}>
          {!showLoading ? (
            <div>
              {MyPropertiesList.length > 0 ? (
                <>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-baseline p-2 pr-6">
                      <div className="relative inputC mx-1 mt-6 border-12 border-solid border-white">
                        <label className="absolute bottom-14 right-0 text-sm text-warmGray-500">
                          استان
                        </label>

                        <select
                          dir="ltr"
                          className="w-full h-12 px-4 "
                          placeholder="تهران"
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                        >
                          <option value={""}>...انتخاب کنید</option>

                          {[
                            ...new Set(
                              iranCitiesList.map((element) => element.province)
                            ),
                          ].map((val, index) => (
                            <option key={index} value={val}>
                              {val}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative inputC mx-1 mt-6 border-12 border-solid border-white">
                        <label className="absolute  bottom-14 right-0 text-sm text-warmGray-500">
                          شهرستان
                        </label>
                        <select
                          dir="ltr"
                          className="w-full h-12 px-4"
                          placeholder="تهران"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option value={""}>...انتخاب کنید</option>
                          {iranCitiesList
                            .filter((element) => element.province == province)
                            .map((val, index) => (
                              <option key={index} value={val.city}>
                                {val.city}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="mx-8 bg-warmGray-100 h-[1px]"></div>
                    <div className="m_grid-container pr-6">
                      {MyPropertiesList.map((val, index) => (
                        <div key={index}>
                          <PropertyCard
                            data={val}
                            showHandler={handler}
                            notForMe
                          />
                        </div>
                      ))}
                    </div>
                    {nextUrl == "disable" && previousUrl == "disable" ? null : (
                      <div className="my-10 text-main-800 flex justify-center gap-12">
                        <button
                          disabled={nextUrl == "disable"}
                          className="bg-main-200 p-2 disabled:bg-main-50 disabled:cursor-not-allowed  rounded-r-2xl w-20 cursor-pointer"
                          onClick={nextHandler}
                        >
                          بعدی
                        </button>

                        <button
                          disabled={previousUrl == "disable"}
                          className="bg-main-200 p-2 disabled:bg-main-50  disabled:cursor-not-allowed rounded-l-2xl w-20 cursor-pointer"
                          onClick={previousHandler}
                        >
                          قبلی
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : null}
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
        </Route>
        <Route path={`${path}/:cardId`}>
          <PropertyDetails data={adData} />
        </Route>
      </Switch>
    </>
  );
};

export default AllProperties;
