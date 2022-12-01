import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import useLoggedUser from "./customHooks/useLoggedUser";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLogged] = useLoggedUser();
  return (
    <div className="bg-warmGray-200">
      {isLogged ? <Dashboard /> : <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;
