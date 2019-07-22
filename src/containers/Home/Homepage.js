import React from "react";
import {
  Grid,
  Typography,
  Button,
  Theme,
  createStyles,
  withStyles,
  Divider,
  Fab
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Spring } from "react-spring/renderprops";

const array = [1, 2, 3];

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/homepage.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: 0,
      borderRadius: 3,
      color: "white",
      padding: "100",
      height: 500
    },
    typography: {
      fontWeight: "bold"
    },
    textOnImage: {
      fontWeight: "bold",
      textShadow: "rgba(0, 0, 0, 0.4) 0px 10px 20px"
    },
    item: {
      margin: "40px 0px",
      padding: "0px 150px"
    },
    button: {
      margin: 20,
      padding: 16
    },
    description: {
      fontWeight: 600
    },
    card: {
      display: "flex",
      margin: 10,
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/card1.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: 340,
      color: "white",
      padding: "0px 30px",
      paddingBottom: 30,
      alignItems: "flex-end",
      borderRadius: 12
    },
    fab: {
      marginTop: -30,
      boxShadow: "0 0 0 0",
      border: "2px solid white"
    }
  });

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderObjectivePart = index => {
    const { classes } = this.props;
    return (
      <Grid item xs={12} md={3} className={classes.card}>
        <div>
          <Typography style={{ fontWeight: 600, fontSize: 22 }}>
            Respect
          </Typography>
          <Typography>We respect human beings opinions and choices</Typography>
        </div>
      </Grid>
    );
  };

  _renderIntro = () => {
    const { classes } = this.props;
    return (
      <Spring from={{ marginLeft: -1000 }} to={{ marginLeft: 0 }}>
        {props => (
          <Grid style={props} item xs={12} className={classes.item}>
            <Typography
              variant="h5"
              className={classes.typography}
              align="left"
            >
              We are fixing how people manage their social networks. So we have
              to find the right people to make
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              className={classes.button}
            >
              View Available Articles
            </Button>
          </Grid>
        )}
      </Spring>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.item}>
            <Typography variant="h2" className={classes.textOnImage}>
              WE PREPARE STARTUPS FOR ACCELERATORS
            </Typography>
          </Grid>
        </Grid>
        <Fab
          onClick={() =>
            window.scrollTo({
              top: 700,
              left: 0,
              behavior: "smooth"
            })
          }
          color="inherit"
          className={classes.fab}
        >
          <ArrowDownwardIcon fontSize="inherit" />
        </Fab>
        <Grid style={{ margin: "60px 0px" }} container justify="center">
          <div>
            {this._renderIntro()}
            <Divider />
            <Grid
              container
              item
              xs={12}
              justify="space-between"
              className={classes.item}
              style={{ height: 360 }}
            >
              {array.map((item, index) => this._renderObjectivePart(index))}
            </Grid>
            <Divider />
            <Grid container item xs={12} className={classes.item}>
              <Grid item xs={12}>
                <Typography variant="h3">Take a look at our intro</Typography>
                <br />
                <br />
                <Typography style={{ padding: "0 200px" }}>
                  Add your app screenshots below. Make sure to make them lively
                  by putting them inside real device mockups Replace this text
                  to describe the screenshots of your app.
                </Typography>
                <br />
                <iframe
                  width="600"
                  height="345"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
