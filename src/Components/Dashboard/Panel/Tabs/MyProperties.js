import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "react-spinkit";
import useToken from "../../../../customHooks/useToken";

import PropertyDetails from "./../AddOns/PropertyDetails";
import PropertyCard from "./../AddOns/PropertyCard";
import {
  updateListHandler,
  updateMyPropertyListHandler,
} from "../../../../redux/reducers/userProperty";
import { iranCitiesList } from "../../../../utils/iranCitiesList";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const MyProperties = () => {
  const update = useSelector((state) => state.userProperty.update);
  const [MyPropertiesList, setMyProperties] = useState([]);

  const [adData, setAdData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const [previousUrl, setPreviousUrl] = useState("disable");
  const [nextUrl, setNextUrl] = useState("disable");
  let { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const [token] = useToken();
  useEffect(() => {
    if (province == "") setCity("");
  }, [province]);
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;
    if (token.length > 0) {
      setShowLoading(true);
      try {
        axios
          .get(
            `${Api_Url}/api/property/my_properties/?city=${city}&county=${province}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(({ data }) => {
            setMyProperties(data?.results);
            setShowLoading(false);
            setNextUrl(data?.next?.slice(37) || "disable");
            console.log(
              "axios get /api/property/my_properties data.data:",
              data
            );
          })
          .catch((e) => {
            console.log("error in axios /api/property/my_properties", e);
            setShowLoading(false);
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [city]);
  const nextHandler = () => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .get(`${Api_Url}/api/property/my_properties${nextUrl}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setMyProperties(data.results);
          setShowLoading(false);
          setPreviousUrl(data?.previous?.slice(37) || "disable");
          setNextUrl(data?.next?.slice(37) || "disable");
          document.querySelector("#m_main_content").scrollTop = 0;

          console.log("axios get /api/property/my_properties data.data:", data);
        })
        .catch((e) => {
          console.log("error in axios /api/property/my_properties", e);
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
        .get(`${Api_Url}/api/property/my_properties${previousUrl}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setMyProperties(data.results);
          setShowLoading(false);
          setPreviousUrl(data?.previous?.slice(37) || "disable");
          setNextUrl(data?.next?.slice(37) || "disable");
          document.querySelector("#m_main_content").scrollTop = 0;
          console.log("axios get /api/property/my_properties data.data:", data);
        })
        .catch((e) => {
          console.log("error in axios /api/property/my_properties", e);
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
          .get(`${Api_Url}/api/property/my_properties/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log(
              "axios get /api/property/my_properties/ data.data:",
              data
            );
            dispatch(updateMyPropertyListHandler(data.results));
            setMyProperties(data.results);
            setShowLoading(false);
            setNextUrl(data?.next?.slice(37) || "disable");
          })
          .catch((e) => {
            console.log("error in axios /api/property/my_properties/", e);
            setShowLoading(false);
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token, update]);

  const delHandler = (data) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .delete(`${Api_Url}/api/property/modify_properties/${data.id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_data) => {
          dispatch(updateListHandler());
          toast.success("با موفقیت حذف شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });
          console.log("axios del /api/property/modify_properties data:", _data);
        })
        .catch((e) =>
          console.log("error in del /api/property/modify_properties data:", e)
        );
    } catch (error) {
      console.log("error", error);
    }
  };
  const handler = (data) => {
    setAdData(data);
  };
  return (
    <>
      <Switch>
        <Route exact path={path}>
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
                  <option value={""}>همه استان ها</option>

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
                  <option value={""}>همه شهرستان ها</option>
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
            {!showLoading ? (
              <div>
                {MyPropertiesList.length > 0 ? (
                  <>
                    <div className="m_grid-container pr-6">
                      {MyPropertiesList.map((val, index) => (
                        <div key={index}>
                          <PropertyCard
                            data={val}
                            key={index}
                            showHandler={handler}
                            deleteHandler={delHandler}
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
                  </>
                ) : null}

                {MyPropertiesList.length == 0 && (
                  <div className="m-auto text-center text-xl bg-warmGray-300">
                    آگهی ثبت شده ای وجود ندارد!
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center eightyvh">
                <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
              </div>
            )}
          </div>
        </Route>
        <Route path={`${path}/:cardId`}>
          <PropertyDetails data={adData} />
        </Route>
      </Switch>
    </>
  );
};

export default MyProperties;
