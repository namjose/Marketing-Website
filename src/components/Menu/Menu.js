import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link, ButtonBase } from "@material-ui/core";

import threedots from "./threedots.svg";

export default class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRemove = async () => {
    await this.props._removeBlog();
    this.handleRemove();
  };

  handleClose = async () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { item } = this.props;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonBase
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <img src={threedots} alt="threedots" width={24} />
        </ButtonBase>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>
            <Link
              color="inherit"
              underline="none"
              href={`/admin/editBlogs/${item.id}`}
            >
              Edit
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleRemove}>Remove</MenuItem>
        </Menu>
      </div>
    );
  }
}
