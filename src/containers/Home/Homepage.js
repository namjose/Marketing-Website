import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Theme,
  createStyles,
  withStyles,
  Divider,
  Fab
} from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { Spring } from 'react-spring/renderprops'
import homepage from './images/homepage.jpg'
import card1 from './images/card1.jpg'
import './index.scss'

const aboutList = ['Marketing', 'Development', 'Security', 'Design']

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${homepage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border: 0,
      borderRadius: 3,
      color: 'white',
      padding: '100',
      height: 500
    },
    typography: {
      fontWeight: 600
    },
    textOnImage: {
      fontWeight: 'bold',
      textShadow: 'rgba(0, 0, 0, 0.4) 0px 10px 20px'
    },
    item: {
      margin: '40px 0px',
      padding: '0px 150px'
    },
    button: {
      margin: 20,
      padding: 16
    },
    description: {
      fontWeight: 600
    },
    card: {
      display: 'flex',
      margin: 10,
      backgroundImage: `url(${card1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: 340,
      color: 'white',
      padding: '0px 30px',
      paddingBottom: 30,
      alignItems: 'flex-end',
      borderRadius: 12
    },
    fab: {
      marginTop: -30,
      boxShadow: '0 0 0 0',
      border: '2px solid white',
      backgroundColor: '#0b35ef',
      color: '#FFF'
    }
  })

class Homepage extends React.Component {
  _renderObjectivePart = index => {
    const { classes } = this.props
    return (
      <Grid item xs={12} md={3} className={classes.card}>
        <div>
          <Typography style={{ fontWeight: 600, fontSize: 22 }}>
            Respect
          </Typography>
          <Typography>We respect human beings opinions and choices</Typography>
        </div>
      </Grid>
    )
  }

  _renderIntro = () => {
    const { classes } = this.props
    return (
      <Spring from={{ marginLeft: -1000 }} to={{ marginLeft: 0 }}>
        {props => (
          <Grid style={props} item xs={12} className={classes.item}>
            <Typography
              variant="h2"
              className={classes.typography}
              align="center"
            >
              We are fixing how people manage their social networks. So we have
              to find the right people to make
            </Typography>
            <Button
              variant="contained"
              color="inherit"
              className={classes.button}
              onClick={() => {
                this.props.history.push('/articles')
              }}
            >
              View Available Articles
            </Button>
          </Grid>
        )}
      </Spring>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <div className="slide">
          <Grid
            container
            justify="center"
            alignItems="center"
            className="titleWrapper"
          >
            <Typography variant="h2" className="main_heading">
              WE PREPARE STARTUPS FOR ACCELERATORS
            </Typography>
            <Typography style={{ margin: '50px 0px' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
              ad minim veniam.
            </Typography>
            <Button
              className="custom-button"
              variant="contained"
              color="inherit"
            >
              FIND MORE
            </Button>
          </Grid>
        </div>
        <Fab
          onClick={() =>
            window.scrollTo({
              top: 740,
              left: 0,
              behavior: 'smooth'
            })
          }
          color="inherit"
          className="fab-custom"
        >
          <ArrowDownwardIcon fontSize="inherit" />
        </Fab>
        <section id="about" class="section">
          <div className="container">
            <h2 className="section-heading">
              The hardest part of starting up is starting out
            </h2>
            <p className="section-subheading">
              Surrounded by smart, passionate people and with the best tools and
              approaches at your disposal, you’ll take giant leaps toward
              creating a business, becoming a founder and connecting.
            </p>
            <Grid container style={{ marginTop: 12 }}>
              {aboutList.map(item => {
                return (
                  <Grid item xs={12} md={3} key={item} className="column_inner">
                    <div className="iconbox-customimg">
                      <img
                        width="45"
                        height="45"
                        src="https://www.keydesign-themes.com/incubator/startup/wp-content/uploads/sites/6/2015/11/startup-security.png"
                        class="attachment-full"
                        alt=""
                      />
                    </div>
                    <Typography className="service-heading">{item}</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </Typography>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </section>
        <section id="quote" class="section parallax with-overlay">
          <div class="parallax-overlay" />
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            className="quote-container"
          >
            <Typography
              variant="h3"
              style={{
                marginBottom: 15,
                fontWeight: 600,
                maxWidth: 700,
                zIndex: 3
              }}
            >
              “Incubator is a great resource for startups considering getting
              off the ground in the best way.”
            </Typography>
            <Typography style={{ fontWeight: 600, zIndex: 3 }}>
              Bruce Sutton
            </Typography>
            <Typography style={{ fontStyle: 'italic', zIndex: 3 }}>
              Co-founder of StartUps
            </Typography>
          </Grid>
        </section>
        <section id="our-team" class="section">
          <div class="container">
            <Typography variant="h2" className="main_heading">
              The best team available
            </Typography>
            <p className="section-subheading">
              We understand the success secrets of the world's most successful
              business teams.
            </p>
            <Grid container>
              {[1, 2, 3, 4].map(item => {
                return (
                  <Grid
                    key={item}
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    className="column_inner"
                  >
                    <div class="team-member">
                      <div class="team-content">
                        <div class="team-image">
                          <img
                            width="190"
                            height="190"
                            src="https://www.keydesign-themes.com/incubator/startup-green/wp-content/uploads/sites/15/2016/01/raymond-turner-team.png"
                            class="attachment-full"
                            alt=""
                            srcset="https://www.keydesign-themes.com/incubator/startup-green/wp-content/uploads/sites/15/2016/01/raymond-turner-team.png 190w, https://www.keydesign-themes.com/incubator/startup-green/wp-content/uploads/sites/15/2016/01/raymond-turner-team-150x150.png 150w"
                            sizes="(max-width: 190px) 100vw, 190px"
                          />
                          <div class="team-content-hover">
                            <h5>Raymond Turner</h5>
                            <span class="team-subtitle">Cloud Manager</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco,
                              consectetur adipisicing elit, sed do eiusmod.
                            </p>
                          </div>
                        </div>
                        <h5>Raymond Turner</h5>
                        <span class="team-subtitle">Cloud Manager</span>
                      </div>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </section>
      </div>
    )
  }
}

export default withStyles(styles)(Homepage)
