import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isUserLogged = useSelector((state) => state.login.isUserLogged);

  return (
    <Route
      {...rest}
      render={(props) => {
        const to = {
          pathname: "/",
          state: {
            from: props.location,
          },
        };
        if (isUserLogged) return <Component {...props} />;
        else return <Redirect to={to} />;
      }}
    />
  );
};

export default ProtectedRoute;
