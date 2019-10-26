import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'
import classNames from 'classnames'
import { createBrowserHistory } from 'history'
import { Theme, createStyles, withStyles, Icon } from '@material-ui/core'
import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import logo from './logo.svg'
import './App.scss'
import SideBar from './containers/SideBar/SideBar'
import HeaderBar from './containers/HeaderBar/HeaderBar.js'
import Homepage from './containers/Home/Homepage.js'
import Articles from './containers/Articles/Articles.js'
import Footer from './containers/Footer/Footer'
import CreateBlog from './containers/CreateBlogs/CreateBlogs'
import SignUp from './containers/Auth/SignUp'
import SignIn from './containers/Auth/SignIn'
import { auth, signOut } from './firebase'
import { thunkSignIn, signInSuccesful } from './actions/authActions'
import PrivateRoute from './routes/PrivateRoute'
import Auth from './containers/Auth/Auth'
import CreateBlogs from './containers/CreateBlogs/CreateBlogs'
import About from './containers/About/About'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { LanguageContextProvider } from './contexts/languageContext'
import pallete from './assets/pallete'

const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: pallete.primary_color
    },
    secondary: {
      main: '#f5f5f5'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)'
    }
  },
  typography: {
    fontFamily: 'Work Sans, Roboto'
  }
})

const drawerWidth = 240
const styles = (theme: Theme) =>
  createStyles({
    content: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: drawerWidth
    }
  })

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      navBackground: false
    }
  }

  navRef = React.createRef()

  componentDidMount = () => {
    document.addEventListener('scroll', this.handleScroll)

    this.props.thunkSignIn()
  }

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const show = window.scrollY > 120
    if (this.navRef.current !== show) {
      this.setState({ navBackground: show })
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  _onSignOut = () => {
    this.setState({ open: false })
    signOut()
  }

  render() {
    const { classes, authState } = this.props
    const { loggedIn, user } = authState
    const { open, navBackground } = this.state
    return (
      <Router history={createBrowserHistory()}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <LanguageContextProvider>
              <Switch>
                <PrivateRoute
                  auth={!loggedIn}
                  path="/signUp"
                  component={SignUp}
                />
                <PrivateRoute
                  auth={!loggedIn}
                  path="/signIn"
                  component={SignIn}
                />
                <Route>
                  <HeaderBar
                    navBackground={navBackground}
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
                    className={classNames('App', classes.content, {
                      [classes.contentShift]: open
                    })}
                  >
                    <Switch>
                      <Route exact path="/" component={Homepage} />
                      <Route exact path="/about" component={About} />
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
                </Route>
              </Switch>
            </LanguageContextProvider>
          </StylesProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  authState: state.auth
})

const mapDispatchToProps = {
  thunkSignIn,
  signInSuccesful
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
