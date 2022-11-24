import React from "react";

import Elements from "../../assets/Images/Dashboard/Elements.svg";
import Rent from "../../assets/Images/Dashboard/Rents.svg";

import { Link } from "react-router-dom";
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
import SubmitAdDetail from "./Panel/DetailsTab/rentdetail/SubmitAdDetail";

export default function Panel() {
  return (
    <div className="fifteenvw right-1 absolute bg-white  rounded-tl-lg rounded-bl-lg">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabPanel>
          <Tabs forceRenderTabPanel dir="rtl">
            <TabList>
              <Tab>
                <Counter />
              </Tab>

              {/* <Link to="/user"> */}
              <Tab>
                <User />
              </Tab>
              {/* </Link> */}

              {/* <Tab> */}
              {/* <Link to="/User"> */}
              {/* <User /> */}
              {/* </Link> */}
              {/* </Tab> */}
              <Tab>
                <Messages />
              </Tab>
              <p className="h-10">موجر</p>
              <Tab>
                <AddTab />
              </Tab>
              <Tab>
                <MyElement />
              </Tab>
              <Tab>
                <Requests />
              </Tab>
              <Tab>
                <Rents />
              </Tab>
              <p className="h-10">مستاجر</p>
              <Tab>
                <RentElement />
              </Tab>
              <Tab>
                <RenterRequest />
              </Tab>
              <Tab>
                <Rented />
              </Tab>
              <div className="bg-primary-500 w-20 float-left rounded-bl-lg">
                19 آبان 1401
              </div>
            </TabList>
            <div>
              <div className="absolute top-0 right-full eightyfivevw">
                <TabPanel>
                  <p>1</p>
                  <img src={Counter} alt="" />
                </TabPanel>
                <TabPanel>
                  {/* <Link to="/UserFormDetail"> */}
                  <UserFormDetail />
                  {/* </Link> */}
                </TabPanel>
                <TabPanel>
                  <p>3</p>
                  <img src={AddTab} alt="" />
                </TabPanel>
                <TabPanel>
                  <SubmitAdDetail />
                </TabPanel>
                <TabPanel>
                  <p>55</p>
                  <img src={Request} alt="" />
                </TabPanel>
                <TabPanel>
                  <p>66</p>
                  <img src={Rent} alt="" />
                </TabPanel>
                <TabPanel>
                  <p>77</p>
                  <img src={Elements} alt="" />
                </TabPanel>
                <TabPanel>
                  <RentDetail />
                </TabPanel>
                <TabPanel>
                  <p>99</p>
                  <img src={Rent} alt="" />
                </TabPanel>
                <TabPanel>
                  <p>10</p>
                  <img src={Rent} alt="" />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}
