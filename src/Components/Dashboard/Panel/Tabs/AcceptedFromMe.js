// اجاره داده شده ها از سمت موجر
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Spinner from "react-spinkit";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import useToken from "../../../../customHooks/useToken";
import imgFrame from "./../../../../assets/Images/Dashboard/Frame.png";
import { setUserIsLoggedHandler } from "../../../../redux/reducers/login";
import ToMeRequestCard from "../../../Card/ToMeRequestCard";
import RequestDetails from "../AddOns/RequestDetails";
import { updateListHandler } from "../../../../redux/reducers/userProperty";
import { toast } from "react-toastify";
import ContractCard from "../AddOns/ContractCard";
import SignContract from "../AddOns/SignContract";

// صفحه قراردادها

const AcceptedFromMe = () => {
  const [contractsList, setContractsList] = useState([]);
  const [update, setUpdate] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const { path, url } = useRouteMatch();
  const _update = useSelector((state) => state.user.update);
  const user_id = useSelector((state) => state.user.user_id);

  const [token] = useToken();
  const [signData, setSignData] = useState({});

  const Api_Url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    if (!!!!token) {
      try {
        setShowLoading(true);
        axios
          .get(`${Api_Url}/api/contract/list_create_contract/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            console.log("axios /api/contract/list_create_contract:", data);
            setContractsList(
              data.filter(
                (value) =>
                  value.landlord_signature &&
                  value.tenant_signature &&
                  value.contract_landlord_information.id == user_id
              )
            );
            setShowLoading(false);
          })
          .catch((e) => {
            console.log("error in axios /api/contract/list_create_contract", e);
            setShowLoading(false);

            if (e.response.status == 401) {
              //dispatch(setUserIsLoggedHandler(false));
              // window.localStorage.setItem("user_logged", "false");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token, update, _update]);
  const passDataToSignContract = (data) => {
    setSignData(data);
  };

  return (
    <Switch>
      <Route exact path={path}>
        {!showLoading ? (
          <div className="">
            {contractsList.length > 0 &&
              contractsList.map((value, index) => (
                <div key={index}>
                  <ContractCard
                    data={value}
                    imgPath={imgFrame}
                    passDataToSignContract={() => passDataToSignContract(value)}
                  />
                </div>
              ))}
            {contractsList.lenght == 0 && (
              <div className="m-auto text-center text-xl">
                شما قراردادی ندارید!
              </div>
            )}
          </div>
        ) : (
          <div className="eightyvh flex items-center justify-center">
            <Spinner name="folding-cube" color="#FF731D" fadeIn="none" />
          </div>
        )}
      </Route>
      <Route path={`${path}/:signContract`}>
        <SignContract data={signData} />
      </Route>
    </Switch>
  );
};

export default AcceptedFromMe;
