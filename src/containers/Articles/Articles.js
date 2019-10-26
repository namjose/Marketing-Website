import React from 'react'
import classNames from 'classnames'
import moment from 'moment'
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
  Link,
  Menu
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import imgA from './assets/images/imgA.jpg'
import threedots from './assets/icons/threedots.svg'
import './index.scss'
import { firestore, storage } from '../../firebase'
import Blog from './Blog'
import mainImage from './assets/images/mainImage.jpg'
import pallete from '../../assets/pallete'

const array = [1, 2]

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${mainImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border: 0,
      borderRadius: 3,
      color: 'white',
      padding: '100',
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
      padding: '0px 150px'
    },
    button: {
      margin: 20,
      padding: 16
    },
    divider: {
      margin: '20px 0'
    },
    icon: {
      marginRight: 2
    },
    typography: {
      fontWeight: 'bold'
    }
  })

class Articles extends React.Component {
  state = {
    blogs: [],
    searchBlogs: [],
    isLoading: true,
    searchText: ''
  }

  onInputChange = e => {
    const { blogs } = this.state
    const { name, value } = e.target
    let searchBlogs = blogs.filter(
      element =>
        element.title.toLowerCase().indexOf(value.trim().toLowerCase()) > -1
    )
    if (!value) {
      searchBlogs = blogs
    }
    this.setState({ [name]: value, searchBlogs: searchBlogs })
  }

  unsubscribeFromFirestore = null

  componentDidMount = async () => {
    // storage
    //   .refFromURL(
    //     "https://firebasestorage.googleapis.com/v0/b/testproject-b28f5.appspot.com/o/blogs%2F1eEAohnnFSD5EKzh0FCj%2Fmotor1.jpg?alt=media&token=2f183971-619d-4d41-b9ce-175ca8f49e6d"
    //   )
    //   .getDownloadURL()
    //   .then(url => console.log(url));

    this.unsubscribeFromFirestore = firestore
      .collection('blogs')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const blogs = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        this.setState({ blogs, searchBlogs: blogs, isLoading: false })
      })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore()
  }

  _openMenu = () => {
    return <Menu />
  }

  _renderBlogs = () => {
    const { classes } = this.props
    const { searchBlogs } = this.state
    if (searchBlogs.length === 0) {
      return <div>No blogs found</div>
    } else {
      return searchBlogs.map(item => {
        return <Blog key={item.id} classes={classes} item={item} />
      })
    }
  }

  render() {
    const { classes } = this.props
    const { blogs, isLoading } = this.state
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
        <Grid className="blog-container" container justify="space-between">
          <Grid
            container
            item
            xs={12}
            lg={8}
            direction="column"
            style={{
              display: 'flex'
            }}
          >
            {isLoading ? <div>Loading ...</div> : this._renderBlogs()}
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={3}
            direction="column"
            style={{
              display: 'flex',
              // paddingLeft: 60,
              textAlign: 'left'
            }}
            className="search_container"
          >
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>SEARCH</Typography>
              <Divider className={classes.divider} />
              <Paper
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  padding: '4px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,.05)'
                }}
              >
                <InputBase
                  placeholder="Search"
                  style={{
                    flex: 1,
                    paddingLeft: 20
                  }}
                  name="searchText"
                  value={this.state.searchText}
                  onChange={this.onInputChange}
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
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
                className="custom-link"
              >
                <Icon
                  className={classNames(classes.icon, 'fas fa-chevron-right')}
                  style={{ fontSize: 10, marginRight: 10 }}
                />
                <Typography>Future design concept</Typography>
              </div>
            </div>
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>ARCHIVES</Typography>
              <Divider className={classes.divider} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
                className="custom-link"
              >
                <Icon
                  className={classNames(classes.icon, 'fas fa-chevron-right')}
                  style={{ fontSize: 10, marginRight: 10 }}
                />
                <Typography>February 2016</Typography>
              </div>
            </div>
            <div style={{ marginBottom: 40 }}>
              <Typography className={classes.title__small}>TAGS</Typography>
              <Divider className={classes.divider} />
              <div style={{}}>
                {tags.map(tag => (
                  <Button
                    className="tag-button"
                    variant="outlined"
                    color="inherit"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Articles)

const tags = ['Development', 'Game', 'Technology', 'Study']
