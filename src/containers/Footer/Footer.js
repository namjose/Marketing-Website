import React, { Component } from 'react'
import classNames from 'classnames'
import {
  Grid,
  Typography,
  Button,
  Theme,
  createStyles,
  withStyles,
  Icon,
  Link
} from '@material-ui/core'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: 'black',
      color: 'white',
      padding: '50px 0'
    },
    icon: {
      margin: `0 ${theme.spacing(2)}px`,
      width: '100%'
    }
  })

const Footer = props => {
  const { classes } = props
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        {/* <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20
          }}
        >
          <Link href="#" color="inherit">
            <Icon className={classNames(classes.icon, "fab fa-facebook-f")} />
          </Link>
          <Link href="#" color="inherit">
            <Icon className={classNames(classes.icon, "fab fa-google")} />
          </Link>
          <Link href="#" color="inherit">
            <Icon
              className={classNames(classes.icon, "fab fa-instagram")}
              style={{ fontSize: 25 }}
            />
          </Link>
        </Grid> */}
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography>Copyright © TN Website. All rights reserved.</Typography>
          <Typography>Design - TemplateFlip</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Footer)
