import React from "react";
import {
  Grid,
  Typography,
  Button,
  Theme,
  createStyles,
  withStyles,
  TextField,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  InputLabel,
  FormHelperText
} from "@material-ui/core";
import SlideDialog from "./SlideDialog";
import { firestore } from "../../firebase";

const MAX_WORDS = 500;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const names = ["BOOK", "GAME", "FRONT END", "BACK END", "MACHINE LEARNING"];

function getStyles(name, tag) {
  return {
    fontWeight: tag.indexOf(name) === -1 ? "normal" : "bold"
  };
}

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
      fontSize: 13
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
    },
    formControl: {
      minWidth: 150,
      maxWidth: 500
    },
    paperrProps: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    },
    button: {
      margin: 20,
      padding: 16
    }
  });

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class EditBlogs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      blog: "",
      title: "",
      tag: [],
      wordCount: MAX_WORDS,
      openDialog: false
    };
  }

  componentDidMount = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const blogRef = firestore
      .doc(`blogs/${id}`)
      .get()
      .then(result => {
        // console.log(result.data());
        const { blog, tag, title } = result.data();
        const length = blog.trim().length;
        this.setState({ blog, tag, title, wordCount: MAX_WORDS - length });
      });
  };

  _handleToggleDialog = () => {
    this.setState(prevState => ({
      openDialog: !prevState.openDialog
    }));
  };

  _handleChange = event => {
    const { name, value } = event.target;
    const length = value.trim().length;
    this.setState(prevState => {
      this.setState({ [name]: value, wordCount: MAX_WORDS - length });
    });
  };

  _handleSelectChange = event => {
    const { value } = event.target;
    this.setState({ tag: value });
  };

  _handleSubmit = event => {
    event.preventDefault();
    const {
      match: {
        params: { id }
      }
    } = this.props;
    // const blogRef = firestore.doc(`blogs/${id}`);

    const { blog, title, tag } = this.state;

    const blogRef = firestore.collection("blogs").doc(id);

    if (blog && title && tag.length !== 0) {
      const item = { blog, title, tag };
      blogRef.update(item).then(result => {
        console.log(result);
        // this.props.history.push("/articles");
      });

      // window.location.reload();
    } else {
      this._handleToggleDialog();
    }
  };

  _handleDialog = () => {};

  render() {
    const {
      classes,
      match: {
        params: { id }
      }
    } = this.props;

    const { blog, title, wordCount, tag, openDialog } = this.state;
    return (
      <div>
        <SlideDialog
          openDialog={openDialog}
          _handleToggleDialog={this._handleToggleDialog}
        />
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.item}>
            <Typography variant="h4" className={classes.typography}>
              Write Blog
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex"
          }}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={9}
            style={{
              margin: "70px 0",
              boxShadow: "0 8px 20px rgba(0,0,0,.05)",
              borderRadius: 4
            }}
          >
            <div style={{ textAlign: "left", padding: 35 }}>
              <form onSubmit={this._handleSubmit}>
                <Typography className={classes.title}>Write Blog</Typography>
                <br />
                <TextField
                  label="Blog Title"
                  helperText="Title of Blog"
                  value={title}
                  name="title"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onChange={this._handleChange}
                />
                <br />
                <TextField
                  label="Paragraph"
                  helperText={`Max words ${wordCount}`}
                  multiline
                  rows="20"
                  value={blog}
                  name="blog"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  onChange={this._handleChange}
                />
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <FormControl
                    //   style={{ flex: 1 }}
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel
                      style={{ backgroundColor: "white", padding: "0 2px" }}
                      htmlFor="outlined-age-native-simple"
                    >
                      Tags
                    </InputLabel>
                    <Select
                      style={{
                        "&:focus": {
                          backgroundColor: "white"
                        }
                      }}
                      multiple
                      value={tag}
                      onChange={this._handleSelectChange}
                      name="tag"
                      input={<OutlinedInput id="select-multiple" />}
                      MenuProps={MenuProps}
                    >
                      {names.map(name => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, tag)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Tag Names</FormHelperText>
                  </FormControl>
                  <Button
                    type="submit"
                    style={{ flex: 1, maxWidth: 160, maxHeight: 55 }}
                    variant="contained"
                    color="primary"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EditBlogs);
