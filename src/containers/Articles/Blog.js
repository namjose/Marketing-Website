import React from 'react'
import moment from 'moment'
import {
  Grid,
  Typography,
  Divider,
  IconButton,
  Icon,
  Link,
  Menu,
  MenuItem
} from '@material-ui/core'
import { connect } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import imgA from './assets/images/imgA.jpg'
import './index.scss'
import { firestore, storage } from '../../firebase'
import SimpleMenu from '../../components/Menu/Menu'

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    // console.log(this.props.loggedIn);
  }

  _removeBlog = async () => {
    const {
      item: { id }
    } = this.props

    await firestore.doc(`blogs/${id}`).delete()
  }

  _renderMenu = () => {
    const { item, loggedIn } = this.props
    if (loggedIn) {
      return <SimpleMenu item={item} _removeBlog={this._removeBlog} />
    }
  }

  render() {
    const { classes, item } = this.props
    return (
      <div
        style={{
          marginBottom: 70,
          boxShadow: '0 8px 20px rgba(0,0,0,.05)',
          borderRadius: 4
        }}
      >
        <img
          src={item.photoURL}
          style={{
            height: 'auto',
            maxHeight: 600,
            maxWidth: '100%',
            borderRadius: '4px 4px 0 0'
          }}
        />
        <div style={{ textAlign: 'left', padding: 35 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <Typography className={classes.title}>{item.title}</Typography>
            </div>
            {this._renderMenu()}
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
                {moment.unix(item.createdAt.seconds).format('MMMM DD, YYYY')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography className={classes.description}>KeyDesign</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              direction="row"
              style={{ display: 'flex' }}
            >
              {item.tag.map((text, index) => {
                return (
                  <div key={index}>
                    <Typography className={classes.description}>
                      {text}
                    </Typography>
                  </div>
                )
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
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(Blog)
