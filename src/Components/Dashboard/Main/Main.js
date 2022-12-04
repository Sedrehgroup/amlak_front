import React from "react";
import { Route, Switch } from "react-router-dom";
import ChatPage from "../../Chat/ChatPage";
import RequestsFromMe from "../Panel/DetailsTab/rentdetail/RequestsFromMe";
import RequestsToMe from "../Panel/DetailsTab/rentdetail/RequestsToMe";
import SignContract from "../Panel/DetailsTab/rentdetail/SignContract";
import SubmitProperty from "../Panel/DetailsTab/rentdetail/SubmitProperty";
import UserFormDetail from "../Panel/DetailsTab/UserFormDetail";
import AllProperties from "../Panel/Tabs/AllProperties";
import MyProperties from "../Panel/Tabs/MyProperties";

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <AllProperties />
        </Route>
        <Route path="/dashboard">
          <AllProperties />
        </Route>
        <Route path="/userinfo">
          <UserFormDetail />
        </Route>
        <Route path="/chat">
          <center>
            <ChatPage />
          </center>
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
          <center>AccepptedFromMe</center>
        </Route>
        <Route path="/allProperties">
          <AllProperties />
        </Route>
        <Route path="/requestsFromMe">
          <RequestsFromMe />
        </Route>
        <Route path="/accepptedForMe">
          <SignContract />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
