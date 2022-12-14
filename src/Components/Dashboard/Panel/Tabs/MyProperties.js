import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "react-spinkit";
import useToken from "../../../../customHooks/useToken";

import PropertyDetails from "./../AddOns/PropertyDetails";
import PropertyCard from "./../AddOns/PropertyCard";
import {
  selectedPropertyDataHandler,
  updateListHandler,
  updateMyPropertyListHandler,
} from "../../../../redux/reducers/userProperty";
import { iranCitiesList } from "../../../../utils/iranCitiesList";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import empty from "../../../../assets/Images/Dashboard/folder-open.svg";

const MyProperties = () => {
  const update = useSelector((state) => state.userProperty.update);

  const [MyPropertiesList, setMyProperties] = useState([]);

  const [showLoading, setShowLoading] = useState(false);

  const [previousUrl, setPreviousUrl] = useState("disable");
  const [nextUrl, setNextUrl] = useState("disable");
  let { path, url } = useRouteMatch();

  const dispatch = useDispatch();
  const [token] = useToken();
  useEffect(() => {
    document.title = "سامانه اجاره بها - آگهی های من";
  }, []);
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
    dispatch(selectedPropertyDataHandler(data));
  };
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <div className="flex flex-col gap-4">
            {/* <div className="mx-8 bg-warmGray-100 h-[1px]"></div> */}
            {!showLoading ? (
              <div>
                {MyPropertiesList.length > 0 ? (
                  <>
                    <div className="m_grid-container pr-7 pt-6">
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
                    <p className=" font-medium ">
                      {" "}
                      آگهی ثبت شده ای وجود ندارد!
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="eightyvh flex items-center justify-center">
                <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
              </div>
            )}
          </div>
        </Route>
        {/* <Route path={`allProperties/:cardId`}>
          <PropertyDetails data={adData} />
        </Route> */}
      </Switch>
    </>
  );
};

export default MyProperties;
