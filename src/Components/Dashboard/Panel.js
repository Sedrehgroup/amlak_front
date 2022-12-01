import React from "react";

import Elements from "../../assets/Images/Dashboard/Elements.svg";
import Rent from "../../assets/Images/Dashboard/Rents.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Counter from "./Panel/Tabs/Counter";
import AddTab from "./Panel/Tabs/AddTab";
import User from "./Panel/Tabs/User";
import Messages from "./Panel/Tabs/Messages";
import MyElement from "./Panel/Tabs/MyElement";
import Requests from "./Panel/Tabs/Requests";
import Rents from "./Panel/Tabs/Rents";
import RentElement from "./Panel/Tabs/RentElement";
import RenterRequest from "./Panel/Tabs/RenterRequest";
import Rented from "./Panel/Tabs/Rented";

import UserFormDetail from "./Panel/DetailsTab/UserFormDetail";
import RentDetail from "./Panel/DetailsTab/RentDetail";
import SubmitProperty from "./Panel/DetailsTab/rentdetail/SubmitProperty";
import RequestsToMe from "./Panel/DetailsTab/rentdetail/RequestsToMe";
import RequestsFromMe from "./Panel/DetailsTab/rentdetail/RequestsFromMe";
import RentedOnes from "./Panel/DetailsTab/rentdetail/RentedOnes";
import RentedAds from "./Panel/DetailsTab/rentdetail/RentedAds";
import MyProperties from "./Panel/Tabs/MyProperties";
import MyAdds from "./Panel/DetailsTab/rentdetail/MyProperyCard";
import SignContract from "./Panel/DetailsTab/rentdetail/SignContract";
import AllProperties from "./Panel/Tabs/AllProperties";
import useTimeDateFa from "../../customHooks/useTimeDateFa";
import { useSelector } from "react-redux";

export default function Panel() {
  const [date] = useTimeDateFa();
  const showSignContract = useSelector(
    (state) => state.userProperty.showSignContract
  );
  const TabContents = [
    {
      path: "/dashboard",
      component: <AllProperties />,
    },
    {
      path: "/userinfo",
      component: <UserFormDetail />,
    },
    {
      path: "/chat",
      component: <center>صفحه چت</center>,
    },
    {
      path: "/submitProperty",
      component: <SubmitProperty />,
    },
    {
      path: "/myProperties",
      component: <MyProperties />,
    },
    {
      path: "/requestsToMe",
      component: <RequestsToMe />,
    },
    {
      path: "/accepptedFromMe",
      component: <center>AccepptedFromMe</center>,
    },
    {
      path: "/allProperties",
      component: <AllProperties />,
    },
    {
      path: "/requestsFromMe",
      component: <RequestsFromMe />,
    },
    {
      path: "/accepptedForMe",
      component: <center>AccepptedForMe</center>,
    },
  ];
  return (
    <>
      <Router>
        <div className="flex justify-start items-center">
          <div className="absolute right-0 top-8 bg-warmGray-100 rounded-tl-lg rounded-bl-lg">
            <Tabs forceRenderTabPanel defaultIndex={1}>
              <Tabs
                forceRenderTabPanel
                dir="rtl"
                className="flex flex-col items-end"
              >
                <TabList className="flex flex-col gap-y-4 pr-6 py-5">
                  <Tab>
                    <Link to="/dashboard">
                      <Counter />
                    </Link>
                  </Tab>
                  <hr className="text-warmGray-400" />
                  <Tab>
                    <Link to="/userinfo">
                      <User />
                    </Link>
                  </Tab>
                  <hr className="text-warmGray-400" />
                  <Tab>
                    <Link to="/chat">
                      <Messages />
                    </Link>
                  </Tab>
                  <hr className="text-warmGray-400" />
                  <p className="font-bold text-xl ">موجر</p>
                  <Tab>
                    <Link to="/submitProperty">
                      <AddTab />
                    </Link>
                  </Tab>
                  <Tab>
                    <Link to="/myProperties">
                      <MyElement />
                    </Link>
                  </Tab>
                  <Tab>
                    <Link to="/requestsToMe">
                      <Requests />
                    </Link>
                  </Tab>
                  <Tab>
                    <Link to="/accepptedFromMe">
                      <Rents />
                    </Link>
                  </Tab>
                  <hr className="text-warmGray-400" />
                  <p className="font-bold text-xl ">مستاجر</p>
                  <Tab>
                    <Link to="/allProperties">
                      <RentElement />
                    </Link>
                  </Tab>
                  <Tab>
                    <Link to="/requestsFromMe">
                      <RenterRequest />
                    </Link>
                  </Tab>
                  <Tab>
                    <Link to="/accepptedForMe">
                      <Rented />
                    </Link>
                  </Tab>
                </TabList>
                <span className="bg-main-200 text-sm w-fit p-1 rounded-bl-lg rounded-tr-lg mt-10">
                  {date.day}
                  {date.month}
                  {date.year}
                </span>

                <div>
                  <div className="absolute top-0 right-full eightyfivevw">
                    {TabContents.map((val, index) => (
                      <TabPanel key={index}>
                        <Routes>
                          <Route
                            exact
                            path={val.path}
                            element={val.component}
                          />
                        </Routes>
                      </TabPanel>
                    ))}

                    {/* <TabPanel> */}
                    {/* {showSignContract ? <SignContract /> : <RequestsToMe />} */}
                    {/* </TabPanel> */}
                  </div>
                </div>
              </Tabs>
            </Tabs>
          </div>
        </div>
      </Router>
    </>
  );
}
