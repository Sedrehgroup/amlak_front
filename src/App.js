import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import useLoggedUser from "./customHooks/useLoggedUser";
import RequestFromLessor from "./Components/Card/RequestFromLessor";
import imgFrame from "./assets/Images/Dashboard/Frame.png";
<<<<<<< HEAD
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> d6c27d298f2719159b73820a9af80d53ab825fa5

function App() {
  const [isLogged] = useLoggedUser();
  return (
    <div className="bg-warmGray-200">
      {/* <Dashboard /> */}

      {/* <RequestFromLessor
                imgPath={imgFrame}
                AdTitle="مسکونی 248 متر"
                TitleOfChatButton="گفتگو با مستأجر"
                mortgagePrice=" 810,000,000 تومان"
                rentalPrice="9,000,000 تومان"
                meterage="340 متر"
                stateTextColor="text-[#F97316]"
                stateBgColor="bg-[#FFEDD5]"
                requestState="درخواست اجاره"
                SecondButtonText="اطلاعات تماس مستأجر"
                MainButtonText="مشاهده درخواست"
            ></RequestFromLessor> */}

      <Router>
        <Routes>
          <Route path="/" element={isLogged ? <Dashboard /> : <Login />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
<<<<<<< HEAD
=======
      <ToastContainer />
>>>>>>> d6c27d298f2719159b73820a9af80d53ab825fa5
    </div>
  );
}

export default App;
