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
import RequestFromLessorPage from "./Panel/DetailsTab/rentdetail/RequestFromLessorPage";
import RequestFromTenantPage from "./Panel/DetailsTab/rentdetail/RequestFromTenantPage";
import RentedOnes from "./Panel/DetailsTab/rentdetail/RentedOnes";
import RentedAds from "./Panel/DetailsTab/rentdetail/RentedAds";
import MyProperties from "./Panel/Tabs/MyProperties";
import MyAdds from "./Panel/DetailsTab/rentdetail/MyProperyCard";
import SignContract from "./Panel/DetailsTab/rentdetail/SignContract";
import AllProperties from "./Panel/Tabs/AllProperties";

export default function Panel() {
  return (
    <div className="flex justify-start items-center">
      <div className="absolute right-0 bg-warmGray-100 rounded-tl-lg rounded-bl-lg">
        <Tabs forceRenderTabPanel defaultIndex={1}>
          <Tabs
            forceRenderTabPanel
            dir="rtl"
            className="flex flex-col items-end"
          >
            <TabList className="flex flex-col gap-y-4 pr-6 py-5">
              <Tab className="">
                <Counter />
              </Tab>
              <hr className="text-warmGray-400" />
              <Tab className="">
                <User />
              </Tab>
              <hr className="text-warmGray-400" />
              <Tab className="">
                <Messages />
              </Tab>
              <hr className="text-warmGray-400" />
              <p className="font-bold text-xl ">موجر</p>
              <Tab className="">
                <AddTab />
              </Tab>
              <Tab className="">
                <MyElement />
              </Tab>
              <Tab className="">
                <Requests />
              </Tab>
              <Tab className="">
                <Rents />
              </Tab>
              {/* </div> */}
              <hr className="text-warmGray-400" />

              {/* <div className="flex flex-col gap-y-2"> */}
              <p className="font-bold text-xl ">مستاجر</p>
              <Tab className="">
                <RentElement />
              </Tab>
              <Tab className="">
                <RenterRequest />
              </Tab>
              <Tab className="">
                <Rented />
              </Tab>
              {/* </div> */}
            </TabList>
            <span className="bg-main-200 text-sm w-fit p-1 rounded-bl-lg rounded-tr-lg mt-10">
              19 آبان 1401
            </span>

            <div>
              <div className="absolute top-0 right-full eightyfivevw">
                <TabPanel>
                  <RentDetail />{" "}
                </TabPanel>
                <TabPanel>
                  {/* <Link to="/UserFormDetail"> */}
                  <UserFormDetail />
                  {/* </Link> */}
                </TabPanel>
                <TabPanel>
                  <SignContract />

                  {/* <p>گفتگو</p> */}
                </TabPanel>
                <TabPanel>
                  <SubmitAdDetail />
                </TabPanel>
                <TabPanel>
                  <MyProperties />
                </TabPanel>
                <TabPanel>
                  <RequestFromLessorPage />
                </TabPanel>
                <TabPanel>
                  <RentedOnes />
                </TabPanel>
                <TabPanel>
                  <AllProperties />
                </TabPanel>
                <TabPanel>
                  <RequestFromTenantPage />
                </TabPanel>
                <TabPanel>
                  <RentedAds />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </Tabs>
      </div>
    </div>
  );
}
