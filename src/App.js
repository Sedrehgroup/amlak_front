import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedHandler } from "./redux/reducers/login";
import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

function App() {
  const isUserLogged = useSelector((state) => state.login.isUserLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  // check if user is logged before or not when page refresh
  useEffect(() => {
    console.log("redux isUserLogged", isUserLogged);
    return () => {
      const isLogged = window.localStorage.getItem("user_logged");
      console.log("window.localStorage", isLogged);
      if (!!!!isLogged & (isLogged == "true")) {
        console.log("dooooooooooone");
        dispatch(setUserIsLoggedHandler(true));
      }
    };
  }, []);
  useEffect(() => {
    if (isUserLogged) {
      history.push("/");
    }
    console.log("isUserLogged", isUserLogged);
  }, [isUserLogged]);
  return (
    <div className="bg-warmGray-200">
      {isUserLogged ? <Dashboard /> : <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;
