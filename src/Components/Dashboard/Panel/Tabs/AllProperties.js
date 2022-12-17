import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinkit";
import useToken from "./../../../../customHooks/useToken";

import PropertyDetails from "./../AddOns/PropertyDetails";
import PropertyCard from "./../AddOns/PropertyCard";
import { iranCitiesList } from "../../../../utils/iranCitiesList";
import { selectedPropertyDataHandler } from "../../../../redux/reducers/userProperty";
import { useDispatch } from "react-redux";
import useLocalStorage from "use-local-storage";
import empty from "../../../../assets/Images/Dashboard/folder-open.svg";
import getDataByTokens from "../../../../utils/getDataByToken";

const AllProperties = () => {
  const dispatch = useDispatch();

  const [token] = useToken();
  const [MyPropertiesList, setMyProperties] = useState(null);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const [previousUrl, setPreviousUrl] = useState("disable");
  const [nextUrl, setNextUrl] = useState("disable");

  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    document.title = "سامانه اجاره بها - آگهی های اجاره";
  }, []);

  useEffect(() => {
    setCity("");
    if (province == "") {
      // city changes and city use effect runs
      // if we dont return we requst 2 times
      // so next line shouldn't be removed
      if (city) return; 
    }
    if (!accToken) return;
    setShowLoading(true);
    (async function () {
      const data = await getDataByTokens(
        `/api/property/properties_list/?city=${city}&county=${province}`,
        accToken,
        setAccToken,
        refToken,
        setRefToken
      );
      console.log("allProperties data.results", data?.results);
      setMyProperties(data.results);
      setShowLoading(false);
      setNextUrl(data?.next?.slice(39) || "disable");
    })();
  }, [province]);

  const [accToken, setAccToken] = useLocalStorage("access_token", null);
  const [refToken, setRefToken] = useLocalStorage("refresh_token", null);

  useEffect(() => {
    // const Api_Url = process.env.REACT_APP_API_URL;
    // if (token.length > 0) {
    //   setShowLoading(true);
    //   try {
    //     axios
    //       .get(
    //         `${Api_Url}/api/property/properties_list/?city=${city}&county=${province}`,
    //         {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //           },
    //         }
    //       )
    //       .then(({ data }) => {
    //         setMyProperties(data?.results);
    //         setShowLoading(false);
    //         setNextUrl(data?.next?.slice(39) || "disable");
    //         console.log(
    //           "axios get /api/property/properties_list data.data:",
    //           data
    //         );
    //       })
    //       .catch((e) => {
    //         console.log("error in axios /api/property/properties_list", e);
    //         setShowLoading(false);
    //       });
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    // }
    // console.log("accToken in allProperties", accToken);
    // if (province == "") setCity("");
    if (!accToken) return;
    setShowLoading(true);
    (async function () {
      const data = await getDataByTokens(
        `/api/property/properties_list/?city=${city}&county=${province}`,
        accToken,
        setAccToken,
        refToken,
        setRefToken
      );
      console.log("allProperties data.results", data?.results);
      setMyProperties(data.results);
      setShowLoading(false);
      setNextUrl(data?.next?.slice(39) || "disable");
    })();
  }, [city]);

  const nextHandler = () => {
    // const Api_Url = process.env.REACT_APP_API_URL;
    // try {
    //   axios
    //     .get(`${Api_Url}/api/property/properties_list${nextUrl}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then(({ data }) => {
    //       setMyProperties(data.results);
    //       setShowLoading(false);
    //       setPreviousUrl(data?.previous?.slice(39) || "disable");
    //       setNextUrl(data?.next?.slice(39) || "disable");
    //       document.querySelector("#m_main_content").scrollTop = 0;
    //       console.log(
    //         "axios get /api/property/properties_list data.data:",
    //         data
    //       );
    //     })
    //     .catch((e) => {
    //       console.log("error in axios /api/property/properties_list", e);
    //       setShowLoading(false);
    //     });
    // } catch (error) {
    //   console.log("error", error);
    // }
    setShowLoading(true);
    (async function () {
      const data = await getDataByTokens(
        `/api/property/properties_list${nextUrl}`,
        accToken,
        setAccToken,
        refToken,
        setRefToken
      );
      console.log("allProperties data.results", data?.results);
      setMyProperties(data.results);
      setShowLoading(false);
      setNextUrl(data?.next?.slice(39) || "disable");
      setPreviousUrl(data?.previous?.slice(39) || "disable");
      document.querySelector("#m_main_content").scrollTop = 0;
    })();
  };
  const previousHandler = () => {
    // const Api_Url = process.env.REACT_APP_API_URL;
    // try {
    //   axios
    //     .get(`${Api_Url}/api/property/properties_list${previousUrl}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then(({ data }) => {
    //       setMyProperties(data.results);
    //       setShowLoading(false);
    //       setPreviousUrl(data?.previous?.slice(39) || "disable");
    //       setNextUrl(data?.next?.slice(39) || "disable");
    //       document.querySelector("#m_main_content").scrollTop = 0;
    //       console.log(
    //         "axios get /api/property/properties_list data.data:",
    //         data
    //       );
    //     })
    //     .catch((e) => {
    //       console.log("error in axios /api/property/properties_list", e);
    //       setShowLoading(false);
    //     });
    // } catch (error) {
    //   console.log("error", error);
    // }
    setShowLoading(true);
    (async function () {
      const data = await getDataByTokens(
        `/api/property/properties_list${previousUrl}`,
        accToken,
        setAccToken,
        refToken,
        setRefToken
      );
      console.log("allProperties data.results", data?.results);
      setMyProperties(data.results);
      setShowLoading(false);
      setNextUrl(data?.next?.slice(39) || "disable");
      setPreviousUrl(data?.previous?.slice(39) || "disable");
      document.querySelector("#m_main_content").scrollTop = 0;
    })();
  };
  // useEffect(() => {
  //   // const Api_Url = process.env.REACT_APP_API_URL;
  //   // if (token.length > 0) {
  //   //   setShowLoading(true);
  //   //   try {
  //   //     axios
  //   //       .get(`${Api_Url}/api/property/properties_list/${nextUrl}`, {
  //   //         headers: {
  //   //           Authorization: `Bearer ${token}`,
  //   //         },
  //   //       })
  //   //       .then(({ data }) => {
  //   //         setMyProperties(data?.results);
  //   //         setShowLoading(false);
  //   //         setNextUrl(data?.next?.slice(39) || "disable");
  //   //         console.log(
  //   //           "axios get /api/property/properties_list data.data:",
  //   //           data
  //   //         );
  //   //       })
  //   //       .catch((e) => {
  //   //         console.log("error in axios /api/property/properties_list", e);
  //   //         setShowLoading(false);
  //   //       });
  //   //   } catch (error) {
  //   //     console.log("error", error);
  //   //   }
  //   // }
  //   return () => {
  //     console.log("accToken in allProperties", accToken);
  //     if (!accToken) return;
  //     setShowLoading(true);
  //     (async function () {
  //       const data = await getDataByTokens(
  //         `/api/property/properties_list/`,
  //         accToken,
  //         setAccToken,
  //         refToken,
  //         setRefToken
  //       );
  //       console.log("allProperties data.results", data?.results);
  //       setMyProperties(data.results);
  //       setShowLoading(false);
  //       setNextUrl(data?.next?.slice(39) || "disable");
  //     })();
  //   };
  // }, []);

  const handler = (data) => {
    // setAdData(data);
    dispatch(selectedPropertyDataHandler(data));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-baseline p-2 pr-6">
          <div className="inputC relative mx-1 mt-6 border-2 border-solid border-white">
            <label className="absolute bottom-14 right-0 text-sm text-warmGray-500">
              استان
            </label>

            <select
              dir="ltr"
              className="h-12 w-full px-4"
              placeholder="تهران"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value={""}>همه استان ها</option>

              {[
                ...new Set(iranCitiesList.map((element) => element.province)),
              ].map((val, index) => (
                <option key={index} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="inputC relative mx-1 mt-6 border-2 border-solid border-white">
            <label className="absolute  bottom-14 right-0 text-sm text-warmGray-500">
              شهرستان
            </label>
            <select
              dir="ltr"
              className="h-12 w-full px-4"
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
        {/* <div className="mx-8 bg-warmGray-100 h-[1px]"></div> */}
        {MyPropertiesList ? (
          <div>
            {MyPropertiesList.length > 0 ? (
              <>
                <div className="m_grid-container mx-7 gap-x-6 gap-y-12">
                  {MyPropertiesList.map((val, index) => (
                    <div key={index}>
                      <PropertyCard data={val} showHandler={handler} notForMe />
                    </div>
                  ))}
                </div>
                {nextUrl == "disable" && previousUrl == "disable" ? null : (
                  <div className="my-10 flex justify-center gap-12 text-main-800">
                    <button
                      disabled={nextUrl == "disable"}
                      className="w-20 cursor-pointer rounded-r-2xl bg-main-200  p-2 disabled:cursor-not-allowed disabled:bg-main-50"
                      onClick={nextHandler}
                    >
                      بعدی
                    </button>

                    <button
                      disabled={previousUrl == "disable"}
                      className="w-20 cursor-pointer rounded-l-2xl  bg-main-200 p-2 disabled:cursor-not-allowed disabled:bg-main-50"
                      onClick={previousHandler}
                    >
                      قبلی
                    </button>
                  </div>
                )}
              </>
            ) : null}

            {MyPropertiesList.length == 0 && (
              <div className=" flex h-[568px] w-full flex-col  items-center justify-center gap-y-4 text-xl">
                <img src={empty} alt="" />
                <p className=" font-medium "> آگهی ثبت شده ای وجود ندارد!</p>
              </div>
            )}
          </div>
        ) : (
          <div className="eightyvh flex items-center justify-center">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        )}
      </div>
    </>
  );
};

export default AllProperties;
