import React from "react";
import classNames from "classnames";
import moment from "moment";
import {
  Grid,
  Typography,
  Button,
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Divider,
  Input,
  InputBase,
  Paper,
  IconButton,
  Icon,
  Link
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import imgA from "./assets/images/imgA.jpg";
import threedots from "./assets/icons/threedots.svg";
import "./index.scss";
import { firestore, storage } from "../../firebase";

const array = [1, 2];

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/mainImage.jpg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: 0,
      borderRadius: 3,
      color: "white",
      padding: "100",
      height: 400
    },
    title: {
      fontSize: 20,
      fontWeight: 600
    },
    title__small: {
      fontSize: 14,
      fontWeight: 600
    },
    item: {
      //   margin: "40px 0px",
      padding: "0px 150px"
    },
    button: {
      margin: 20,
      padding: 16
    },
    description: {
      fontWeight: 450,
      color: "#333",
      fontSize: 13,
      marginRight: theme.spacing(1)
    },
    divider: {
      margin: "20px 0"
    },
    icon: {
      marginRight: 2
    },
    tag: {
      margin: theme.spacing(1),
      marginLeft: 0,
      color: "#999"
    },
    typography: {
      fontWeight: "bold"
    }
  });

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      isLoading: true
    };
  }

  componentDidMount = async () => {
    // storage
    //   .refFromURL(
    //     "https://firebasestorage.googleapis.com/v0/b/testproject-b28f5.appspot.com/o/blogs%2F1eEAohnnFSD5EKzh0FCj%2Fmotor1.jpg?alt=media&token=2f183971-619d-4d41-b9ce-175ca8f49e6d"
    //   )
    //   .getDownloadURL()
    //   .then(url => console.log(url));

    const snapshot = await firestore
      .collection("blogs")
      .orderBy("createdAt", "desc")
      .get();

    const blogs = snapshot.docs.map(doc => {
      const id = doc.id;
      const data = doc.data();

      return { id, ...data };
    });

    this.setState({ blogs, isLoading: false });
  };

  _renderBlogs = () => {
    const { classes } = this.props;
    const { blogs } = this.state;
    if (blogs.length === 0) {
      return <div>No blogs found</div>;
    } else {
      return blogs.map(item => {
        return (
          <div
            style={{
              marginBottom: 70,
              boxShadow: "0 8px 20px rgba(0,0,0,.05)",
              borderRadius: 4
            }}
          >
            <img
              src={item.photoURL}
              style={{
                height: "auto",
                maxHeight: 600,
                maxWidth: "100%",
                borderRadius: "4px 4px 0 0"
              }}
            />
            <div style={{ textAlign: "left", padding: 35 }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1 }}>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                </div>
                <a href={`/admin/editBlogs/${item.id}`}>
                  <img src={threedots} alt="threedots" width={24} />
                </a>
              </div>
              <br />
              <Typography>{item.blog}</Typography>
              <br />
              <br />
              <Divider />
              <br />
              <br />
              <Grid container>
                <Grid item xs={12} md={2}>
                  <Typography className={classes.description}>
                    {moment
                      .unix(item.createdAt.seconds)
                      .format("MMMM DD, YYYY")}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography className={classes.description}>
                    KeyDesign
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  direction="row"
                  style={{ display: "flex" }}
                >
                  {item.tag.map(text => {
                    return (
                      <div>
                        <Typography className={classes.description}>
                          {text}
                        </Typography>
                      </div>
                    );
                  })}
                </Grid>
                {/* <Grid item xs={12} md={2}>
                  <Typography className={classes.description} align="right">
                    3 comments
                  </Typography>
                </Grid> */}
              </Grid>
              <br />
            </div>
          </div>
        );
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { blogs, isLoading } = this.state;
    return (
      <div>
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.item}>
            <Typography variant="h4" className="main_title">
              Our Blog
            </Typography>
            <Typography>
              The hardest part of starting up is starting out
            </Typography>
          </Grid>
        </Grid>
        <Grid
          style={{ margin: "60px 0px", padding: "0px 150px" }}
          container
          justify="center"
        >
          <Grid
            container
            item
            xs={9}
            direction="column"
            style={{
              display: "flex"
            }}
          >
            {isLoading ? <div>Loading ...</div> : this._renderBlogs()}
          </Grid>
          <Grid
            container
            item
            xs={3}
            direction="column"
            style={{
              display: "flex",
              paddingLeft: 60,
              textAlign: "left"
            }}
          >
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>SEARCH</Typography>
              <Divider className={classes.divider} />
              <Paper
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: "4px 4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 5px 15px rgba(0,0,0,.05)"
                }}
              >
                <InputBase
                  placeholder="Search"
                  style={{
                    flex: 1,
                    paddingLeft: 20
                  }}
                />
                <IconButton className={classes.iconButton} aria-label="Search">
                  <SearchIcon style={{ fontSize: 16 }} />
                </IconButton>
              </Paper>
            </div>
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>
                RECENT POSTS
              </Typography>
              <Divider className={classes.divider} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon
                  className={classNames(classes.icon, "fas fa-chevron-right")}
                  style={{ fontSize: 10 }}
                />
                <Link href="#" underline="none">
                  <Typography className={classes.description}>
                    Future design concept
                  </Typography>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon
                  className={classNames(classes.icon, "fas fa-chevron-right")}
                  style={{ fontSize: 10 }}
                />
                <Link href="#" underline="none">
                  <Typography className={classes.description}>
                    Future design concept
                  </Typography>
                </Link>
              </div>
            </div>
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>ARCHIVES</Typography>
              <Divider className={classes.divider} />
            </div>
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>TAGS</Typography>
              <Divider className={classes.divider} />
              <div style={{}}>
                <Button className={classes.tag} variant="outlined">
                  DEVELOPMENT
                </Button>
                <Button className={classes.tag} variant="outlined">
                  STUDY
                </Button>
                <Button className={classes.tag} variant="outlined">
                  GAME
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Articles);
