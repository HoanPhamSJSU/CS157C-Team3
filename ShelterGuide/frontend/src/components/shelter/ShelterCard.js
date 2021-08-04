import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import DirectionsIcon from '@material-ui/icons/Directions';
import MCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import MCardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200,
    width: '100%'
  }
});

export default function ShelterCard({ shelterDetail, distances, ...rest }) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    console.log('Typed = ${e.target.value}');
    // setPassword(e.target.value);
  };

  return (
    <MCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={shelterDetail.imageUrl}
          title="Contemplative Reptile"
        />
        <MCardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: 3
            }}
          >
            <CardMedia
              alt="Product"
              image={shelterDetail.imageUrl}
              variant="square"
            />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {shelterDetail.shelter_name}
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            {shelterDetail.description}
          </Typography>
        </MCardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <DirectionsIcon
                color="action"
                onClick={() => window.open(`${shelterDetail.website}`)}
              />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {shelterDetail.distance}
                {/* {distances.distance} */}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Rating
                name="half-rating"
                value={parseFloat(shelterDetail.rating_score)}
                precision={0.5}
              />
            </Grid>
          </Grid>
        </Box>
      </CardActions>
    </MCard>
  );
}
