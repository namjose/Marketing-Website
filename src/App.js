import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { connect } from "react-redux";
import classNames from "classnames";
import { createBrowserHistory } from "history";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import logo from "./logo.svg";
import "./App.scss";
import SideBar from "./containers/SideBar/SideBar";
import HeaderBar from "./containers/HeaderBar/HeaderBar.js";
import Homepage from "./containers/Home/Homepage.js";
import Articles from "./containers/Articles/Articles.js";
import Footer from "./containers/Footer/Footer";
import CreateBlog from "./containers/CreateBlogs/CreateBlogs";
import SignUp from "./containers/Auth/SignUp";
import SignIn from "./containers/Auth/SignIn";
import { auth, signOut } from "./firebase";
import { thunkSignIn, signInSuccesful } from "./actions/authActions";
import PrivateRoute from "./routes/PrivateRoute";
import Auth from "./containers/Auth/Auth";
import CreateBlogs from "./containers/CreateBlogs/CreateBlogs";

const drawerWidth = 240;
const styles = (theme: Theme) =>
  createStyles({
    content: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    }
  });

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount = () => {
    this.props.thunkSignIn();
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  _onSignOut = () => {
    this.setState({ open: false });
    signOut();
  };

  render() {
    const { classes, authState } = this.props;
    const { loggedIn, user } = authState;
    const { open } = this.state;
    return (
      <Router history={createBrowserHistory()}>
        <StylesProvider injectFirst>
          <Switch>
            <PrivateRoute auth={!loggedIn} path="/signUp" component={SignUp} />
            <PrivateRoute auth={!loggedIn} path="/signIn" component={SignIn} />
            <Router>
              <HeaderBar
                user={user}
                open={open}
                handleDrawerOpen={this.handleDrawerOpen}
              />
              <SideBar
                user={user}
                open={open}
                _onSignOut={this._onSignOut}
                handleDrawerClose={this.handleDrawerClose}
              />
              <div
                className={classNames("App", classes.content, {
                  [classes.contentShift]: open
                })}
              >
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route path="/articles" component={Articles} />
                  <PrivateRoute
                    auth={loggedIn}
                    path="/admin"
                    component={Auth}
                  />
                  <Route path="/createBlog" component={CreateBlogs} />
                </Switch>
              </div>
              <Footer />
            </Router>
          </Switch>
        </StylesProvider>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authState: state.auth
});

const mapDispatchToProps = {
  thunkSignIn,
  signInSuccesful
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
