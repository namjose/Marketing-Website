import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import CreateBlogs from "../CreateBlogs/CreateBlogs";
import EditBlogs from "../EditBlogs/EditBlogs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = props => {
  const { url } = props.match;
  // console.log(url);
  return (
    <React.Fragment>
      <Route exact path={`${url}/createBlog`} component={CreateBlogs} />
      <Route exact path={`${url}/editBlogs/:id`} component={EditBlogs} />
    </React.Fragment>
  );
};

export default Auth;
