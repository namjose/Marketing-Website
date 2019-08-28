import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Theme,
  createStyles,
  withStyles,
  Divider,
  Fab,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Icon
} from '@material-ui/core'
import classNames from 'classnames'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { Spring } from 'react-spring/renderprops'
import homepage from './images/homepage.jpg'
import about from './images/about.jpg'
import './index.scss'

const array = [1, 2, 3]

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${about})`,
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
    margin: '20px 0'
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
  fab: {
    marginTop: -30,
    boxShadow: '0 0 0 0',
    border: '2px solid white'
  },
  grid__item: {
    marginBottom: 50
  },

  media: {
    height: 300
  }
}))

const About = props => {
  const data = [1, 2, 3, 4]
  const classes = useStyles()
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
            ABOUT US
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="container__style">
        <Grid item xs={12} className={classes.grid__item}>
          <Typography variant="h5" className=" typography--title">
            A LITTLE ABOUT US
          </Typography>
          <Divider variant="middle" />
          <Typography className=" typography--sub">
            OF AN OR GAME GATE WEST FACE SHED. ﻿NO GREAT BUT MUSIC TOO OLD FOUND
            AROSE.
          </Typography>
          <Typography align="left">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
            Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
            non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
            nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
            egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci
            enim.
          </Typography>
          <br />
          <Typography align="left">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
            Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
            non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
            nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
            egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci
            enim.
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          {data.map(item => {
            return (
              <Grid key={item} item xs={12} lg={6}>
                <Card className="card card__border--left">
                  <CardContent>
                    <Grid container>
                      <div style={{ marginRight: 10 }}>
                        <img src="https://i.pravatar.cc/100?img=69" alt="new" />
                      </div>
                      <div style={{ width: '70%' }}>
                        <Typography color="textPrimary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </Typography>
                      </div>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <Grid container className="container__style">
        <Grid item xs={12} className={classes.grid__item}>
          <Typography variant="h5" className=" typography--title">
            MEET THE TEAM
          </Typography>
          <Divider variant="middle" />
          <Typography className=" typography--sub">
            OF AN OR GAME GATE WEST FACE SHED. ﻿NO GREAT BUT MUSIC TOO OLD FOUND
            AROSE.
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justify="center"
          alignItems="center"
          spacing={0}
          style={{ minHeight: '300' }}
        >
          {data.map(item => {
            return (
              <Grid item xs={12} md={6} lg={3}>
                <Card
                  className="card--centre card__border--bottom"
                  style={{ margin: '0px 5px' }}
                >
                  <CardActionArea>
                    <CardMedia
                      image="https://templatemag.com/demo/templates/Impact/images/team/team01.jpg"
                      title="Contemplative Reptile"
                      className={classes.media}
                    />
                  </CardActionArea>
                  <CardActionArea>
                    <div class="arrow-up__container">
                      <div class="arrow-up"></div>
                    </div>
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Lizard
                    </Typography>
                    <Typography gutterBottom color="textPrimary">
                      WEB DESIGN
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Grid container justify="center" alignItems="center">
                      <div class="icon__container--facebook">
                        <Icon className={classNames('fab fa-facebook-f')} />
                      </div>
                      <div class="icon__container--google">
                        <Icon className={classNames('fab fa-google')} />
                      </div>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}

export default About
