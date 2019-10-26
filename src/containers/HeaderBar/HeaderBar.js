import React, { useContext, useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link, Icon, Menu, MenuItem, Badge } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import logoVN from './icons/vietnam.svg'
import logoEN from './icons/us.svg'
import logoSK from './icons/sk.svg'
import { LanguageContext } from '../../contexts/languageContext'
import './index.scss'
import { ReactComponent as Diamond } from '../../assets/svg/diamond.svg'

import * as translationEN from '../../translations/en'
import * as translationVN from '../../translations/vn'

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hide: {
      display: 'none'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -theme.spacing(3)
    },
    title: {
      marginLeft: theme.spacing(2),
      flexGrow: 1,
      fontFamily: 'Montserrat'
    },
    linkButton: {
      marginRight: theme.spacing(2),
      color: 'white',
      fontWeight: 600,
      borderRadius: 20,
      fontSize: 14,
      [theme.breakpoints.down('md')]: {
        color: '#000000'
      }
    },
    langIcon: {
      width: 24,
      height: 24,
      marginRight: theme.spacing(2)
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      }
    }
  })
)

const _renderAuthButton = classes => {
  return (
    <div className="route_container">
      <Button
        className={classes.linkButton}
        color="inherit"
        variant="outlined"
        href="/signIn"
      >
        Login
      </Button>
      <Button
        className={classes.linkButton}
        color="inherit"
        variant="outlined"
        href="/signUp"
      >
        Sign Up
      </Button>
    </div>
  )
}

export default function HeaderBar(props) {
  const classes = useStyles()
  const { handleDrawerOpen, open, user, navBackground } = props
  const { language, changeLanguage } = useContext(LanguageContext)

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = () => {
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <Link href="/" className={classes.linkButton} underline="none">
            {(() => {
              if (language === 'vn') {
                return translationVN.nav.home
              } else {
                return translationEN.nav.home
              }
            })()}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about" className={classes.linkButton} underline="none">
            {(() => {
              if (language === 'vn') {
                return translationVN.nav.about
              } else {
                return translationEN.nav.about
              }
            })()}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="/articles"
            className={classes.linkButton}
            underline="none"
          >
            {(() => {
              if (language === 'vn') {
                return translationVN.nav.article
              } else {
                return translationEN.nav.article
              }
            })()}
          </Link>
        </MenuItem>
      </Menu>
    )
  }

  const renderRoute = () => {
    return (
      <div className="route_container">
        <Link href="/" className={classes.linkButton} underline="none">
          {(() => {
            if (language === 'vn') {
              return translationVN.nav.home
            } else {
              return translationEN.nav.home
            }
          })()}
        </Link>
        <Link href="/about" className={classes.linkButton} underline="none">
          {(() => {
            if (language === 'vn') {
              return translationVN.nav.about
            } else {
              return translationEN.nav.about
            }
          })()}
        </Link>
        <Link href="/articles" className={classes.linkButton} underline="none">
          {(() => {
            if (language === 'vn') {
              return translationVN.nav.article
            } else {
              return translationEN.nav.article
            }
          })()}
        </Link>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
        style={{
          backgroundColor: navBackground ? 'rgba(0,0,0,0.8)' : 'transparent',
          boxShadow: navBackground
            ? '0 7px 15px -7px rgba(0, 0, 0, 0.04)'
            : '0 0 0 0 #000',
          textAlign: 'left'
        }}
      >
        <Toolbar
        // style={{ padding: '0px 100px' }}
        >
          {user ? (
            <IconButton
              edge="start"
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
              onClick={handleDrawerOpen}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <Diamond
              style={{
                width: 30,
                height: 30
              }}
              fill="#fff"
            />
            {/* <Typography
              noWrap
              variant="h4"
              color="textSecondary"
              className={classes.title}
              style={{ color: '#fff' }}
            >
              MARKETING WEBSITE
            </Typography> */}
          </div>
          <div className={classes.sectionDesktop}>
            {renderRoute()}
            {user ? null : _renderAuthButton(classes)}

            <div className="route_container">
              <Link underline="none" onClick={() => changeLanguage('vn')}>
                <img src={logoVN} className={classes.langIcon} alt="vn" />
              </Link>
              <Link underline="none" onClick={() => changeLanguage('en')}>
                <img src={logoEN} className={classes.langIcon} alt="en" />
              </Link>
              <Link underline="none" href="/">
                <img src={logoSK} className={classes.langIcon} alt="kr" />
              </Link>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon color="secondary" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu()}
    </div>
  )
}
