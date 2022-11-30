import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../../../../customHooks/useToken";
import AdDetail from "../DetailsTab/rentdetail/AdDetail";
import MyProperyCard from "../DetailsTab/rentdetail/MyProperyCard";
import {
  updateListHandler,
  updateMyPropertyListHandler,
} from "../../../../redux/reducers/userProperty";
import { userLoginStepDenied } from "./../../../../redux/reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useLoggedUser from "../../../../customHooks/useLoggedUser";

const MyProperties = () => {
  const update = useSelector((state) => state.userProperty.update);
  const dispatch = useDispatch();
  const [token] = useToken();
  const [MyPropertiesList, setMyProperties] = useState([]);
  const [isLogged, setIsUserLogged] = useLoggedUser();

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
          console.log("axios get /api/my_properties data.data:", data);
          dispatch(updateMyPropertyListHandler(data));
          setMyProperties(data);
        })
        .catch((e) => {
          console.log("error in axios /api/my_properties", e);
          if (e.response.status == 401) {
            // dispatch(userLoginStepDenied("PhoneNumber_Step"));
            // dispatch(userLoginStepDenied("PhoneSms_Step"));
            // dispatch(userLoginStepDenied("Register_Step"));

            // window.localStorage.removeItem("user_logged");
            console.log("eeeeeeeeeeeeeee");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }, [token, update]);

  const [showDetail, setShowDetail] = useState(false);
  const [adData, setAdData] = useState([]);
  const handler = (data) => {
    setShowDetail(true);
    setAdData(data);
  };
  console.log(MyPropertiesList);
  const delHandler = (data) => {
    const Api_Url = process.env.REACT_APP_API_URL;
    try {
      axios
        .delete(`${Api_Url}/api/modify_properties/${data.id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_data) => {
          dispatch(updateListHandler());
          console.log("axios del /api/modify_properties data:", _data);
          toast.success("با موفقیت حذف شد", {
            position: "top-center",
            rtl: true,
            className: "m_toast",
          });
        })
        .catch((e) =>
          console.log("error in del /api/modify_properties data:", e)
        );
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="flex flex-row flex-wrap pr-6">
        {!!!!MyPropertiesList &&
          !showDetail &&
          MyPropertiesList.map((val, index) => (
            <MyProperyCard
              data={val}
              key={index}
              showHandler={handler}
              deleteHandler={delHandler}
            />
          ))}
        {MyPropertiesList.length == 0 && (
          <div className="m-auto text-xl bg-warmGray-300">
            شما آگهی ثبت نکرده اید!
          </div>
        )}
      </div>
      {showDetail && <AdDetail data={adData} />}
    </>
  );
};

export default MyProperties;
