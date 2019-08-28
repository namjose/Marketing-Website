import React, { useContext, useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link, Icon } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import logoVN from './icons/vietnam.svg'
import logoEN from './icons/us.svg'
import logoSK from './icons/sk.svg'
import { LanguageContext } from '../../contexts/languageContext'

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
      flexGrow: 1
    },
    linkButton: {
      marginRight: theme.spacing(2),
      color: 'white',
      fontWeight: 600,
      borderRadius: 20
    },
    langIcon: {
      width: 24,
      height: 24,
      marginRight: theme.spacing(2)
    }
  })
)

const _renderAuthButton = classes => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default function HeaderBar(props) {
  const classes = useStyles()
  const { handleDrawerOpen, open, user } = props
  const { language, changeLanguage } = useContext(LanguageContext)
  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, { [classes.appBarShift]: open })}
        style={{
          backgroundColor: 'rgba(0,0,0,0.15)',
          // boxShadow: '0 10px 6px -6px #000',
          textAlign: 'left'
        }}
      >
        <Toolbar style={{ padding: '0px 100px' }}>
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
          <Typography
            variant="h4"
            color="textSecondary"
            className={classes.title}
          >
            TN WEBSITE
          </Typography>
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
          {user ? null : _renderAuthButton(classes)}
          <Link underline="none" onClick={() => changeLanguage('vn')}>
            <img src={logoVN} className={classes.langIcon} alt="vn" />
          </Link>
          <Link underline="none" onClick={() => changeLanguage('en')}>
            <img src={logoEN} className={classes.langIcon} alt="en" />
          </Link>
          <Link underline="none" href="/">
            <img src={logoSK} className={classes.langIcon} alt="kr" />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
