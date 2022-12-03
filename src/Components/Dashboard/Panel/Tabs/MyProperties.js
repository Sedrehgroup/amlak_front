import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../../../../customHooks/useToken";
import AdDetail from "../DetailsTab/rentdetail/AdDetail";
import MyProperyCard from "../DetailsTab/rentdetail/MyProperyCard";
import {
  updateListHandler,
  updateMyPropertyListHandler,
} from "../../../../redux/reducers/userProperty";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "react-spinkit";

const MyProperties = () => {
  const update = useSelector((state) => state.userProperty.update);
  const [MyPropertiesList, setMyProperties] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [adData, setAdData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();
  const [token] = useToken();

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
            dispatch(updateMyPropertyListHandler(data));
            setMyProperties(data);
            setShowLoading(false);
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

  const handler = (data) => {
    setShowDetail(true);
    setAdData(data);
  };
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
  return (
    <>
      {!showLoading ? (
        <div className="m_grid-container  pr-6 ">
          {!!!!MyPropertiesList &&
            !showDetail &&
            MyPropertiesList.map((val, index) => (
              <div key={index}>
                <MyProperyCard
                  data={val}
                  key={index}
                  showHandler={handler}
                  deleteHandler={delHandler}
                  isShown={true}
                />
              </div>
            ))}
          {MyPropertiesList.length == 0 && (
            <div className="m-auto text-xl bg-warmGray-300">
              شما آگهی ثبت نکرده اید!
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center eightyvh">
          <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
        </div>
      )}
      {showDetail && <AdDetail data={adData} />}
    </>
  );
};

export default MyProperties;
