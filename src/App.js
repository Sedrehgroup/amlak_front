import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
