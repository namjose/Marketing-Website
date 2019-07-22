import React from "react";
import {
  Button,
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlideDialog = props => {
  const { openDialog, _handleToggleDialog } = props;

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={_handleToggleDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Create new blog"}
        </DialogTitle>
        <DialogContent style={{ minWidth: 400 }}>
          <DialogContentText id="alert-dialog-slide-description">
            Error
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={_handleToggleDialog} color="primary">
            Disagree
          </Button>
          <Button onClick={_handleToggleDialog} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SlideDialog;
