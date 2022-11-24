import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import useLoggedUser from "./customHooks/useLoggedUser";

function App() {
  const [isLogged] = useLoggedUser();
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isLogged ? <Dashboard /> : <Login />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
