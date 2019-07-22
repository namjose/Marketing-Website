import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { auth } = props;
  return (
    <Route
      {...props}
      render={innerProps =>
        auth ? <Component {...innerProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
