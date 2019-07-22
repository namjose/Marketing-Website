import React from "react";
import classNames from "classnames";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Link,
  Typography,
  Icon,
  ButtonBase
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { signOut } from "../../firebase";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  typography: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const SideBar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerClose, user } = props;
  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={open}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        {user ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <Icon
              className={classNames(classes.typography, "fas fa-user-circle")}
            />
            <Typography style={{ fontWeight: "bold" }}>
              {user.email.substring(0, user.email.indexOf("@"))}
            </Typography>
          </div>
        ) : null}
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Create Blog"].map((text, index) => (
          <Link
            key={index}
            underline="none"
            href="/admin/createBlog"
            color="inherit"
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <div
        className={classes.drawerHeader}
        style={{ cursor: "pointer" }}
        onClick={props._onSignOut}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <Icon
            className={classNames(classes.typography, "fas fa-power-off")}
          />
          <Typography style={{ fontWeight: "bold" }}>Sign out</Typography>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
