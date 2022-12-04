import "./App.css";
import Main from "./Components/Dashboard/Main";
import Login from "./Components/Login/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedHandler } from "./redux/reducers/login";
import { useEffect } from "react";
// import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import useToken from "./customHooks/useToken";
import axios from "axios";
// import ProtectedRoute from "./Components/Routs/ProtectedRoute";

function App() {
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const [token, setUpdate] = useToken();
  useEffect(() => {
    console.log("isUserLogged redux", isUserLogged);
    // if(!isUserLogged)
  }, [isUserLogged]);
  useEffect(() => {
    const Api_Url = process.env.REACT_APP_API_URL;
    return () => {
      setInterval(() => {
        if (!!!!token) {
          try {
            axios
              .post(
                `${Api_Url}/account/token/refresh/`,
                {
                  refresh: window.localStorage.getItem("REF_TOKEN"),
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then(({ data }) => {
                console.log(
                  "axios get account/token/refresh/ data.data:",
                  data
                );
                window.localStorage.setItem("ACC_TOKEN", data.access);
                setUpdate(Math.random());
              })
              .catch((e) => {
                console.log("error in axios account/token/refresh/", e);
              });
          } catch (error) {
            console.log("error", error);
          }
        }
      }, 120000);
    };
  }, []);

  return (
    <div className="bg-warmGray-200">
      {isUserLogged ? <Main /> : <Login />}
      {/* <Switch> */}
      {/* <Route exact path="/" component={isUserLogged && Main} /> */}
      {/* <Route exact path="/" component={Login} /> */}
      {/* <Route component={!isUserLogged ? Login : Main} /> */}
      {/* </Switch> */}
      {/* <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/app" component={Main} />
        <Route path="*" component={() => "404 Page Not Found"} />
      </Switch> */}
      <ToastContainer />
    </div>
  );
}

export default App;
