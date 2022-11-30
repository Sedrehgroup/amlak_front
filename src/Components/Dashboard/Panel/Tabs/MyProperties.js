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

const MyProperties = () => {
  const update = useSelector((state) => state.userProperty.update);
  const dispatch = useDispatch();
  const [token] = useToken();
  const [MyPropertiesList, setMyProperties] = useState([]);

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
        .catch((e) => console.log("error in axios /users/otp_register", e));
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
              isShown={true}
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
