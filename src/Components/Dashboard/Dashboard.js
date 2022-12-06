import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatPage from "../Chat/ChatPage";
import RequestsFromMe from "./Panel/Tabs/RequestsFromMe";
import RequestsToMe from "./Panel/Tabs/RequestsToMe";
import SubmitProperty from "./Panel/Tabs/SubmitProperty";
import UserFormDetail from "./Panel/Tabs/UserFormDetail";
import AllProperties from "./Panel/Tabs/AllProperties";
import MyProperties from "./Panel/Tabs/MyProperties";
import Counter from "./Panel/Tabs/Counter";
import Contracts from "./Panel/Tabs/Contracts";
const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <AllProperties /> */}
          <Counter />
        </Route>
        <Route path="/dashboard">
          {/* <AllProperties /> */}
          <Counter />
        </Route>
        <Route path="/userinfo">
          <UserFormDetail />
        </Route>
        <Route path="/chat">
          <center>
            <ChatPage />
          </center>
        </Route>
        <Route path="/contracts">
          <Contracts />
        </Route>
        <Route path="/submitProperty">
          <SubmitProperty />
        </Route>
        <Route path="/myProperties">
          <MyProperties />
        </Route>
        <Route path="/requestsToMe">
          <RequestsToMe />
        </Route>
        <Route path="/accepptedFromMe">
          <center>اجاره داده شده ها</center>
          {/* <AccepptedFromMe/> */}
        </Route>
        <Route path="/allProperties">
          <AllProperties />
        </Route>
        <Route path="/requestsFromMe">
          <RequestsFromMe />
        </Route>
        <Route path="/accepptedForMe">
          <center>آگهی های ثبت شده</center>
          {/* <AccepptedForMe/> */}
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
