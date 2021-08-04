import { v4 as uuid } from 'uuid';
import Axios from "axios";
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React, { useEffect, useState } from "react";

const products = [
  {
    id: uuid(),
    name: 'HomeFirst',
    imageUrl: '/static/images/products/shelter3.png',
    rating: '5 stars',
    updatedAt: moment().subtract(2, 'hours'),
    links: 'http://localhost:5000/api/Shelters/' + uuid()
  },
  {
    id: uuid(),
    name: 'Family Supportive Housing',
    imageUrl: '/static/images/products/shelter1.png',
    rating: '4.8 stars',
    updatedAt: moment().subtract(2, 'hours'),
    links: 'http://www.familysupportivehousing.org/'
  },
  {
    id: uuid(),
    name: 'CityTeam - Mens Shelter',
    imageUrl: '/static/images/products/shelter2.png',
    rating: '4.7 stars',
    updatedAt: moment().subtract(3, 'hours'),
    links: 'https://cityteam.org/san-jose/'
  },
  {
    id: uuid(),
    name: 'Montgomery Street Inn',
    imageUrl: '/static/images/products/shelter4.jpg',
    rating: '4 stars',
    updatedAt: moment().subtract(5, 'hours'),
    links: 'https://www.lifemoves.org/directory/montgomery-street-inn/'
  },
  {
    id: uuid(),
    name: ' Sobrato House Youth Center',
    imageUrl: '/static/images/products/shelter7.jpg',
    rating: '3.5 stars',
    updatedAt: moment().subtract(9, 'hours'),
    links: 'https://charitieshousing.org/sobrato-house-youth-center/'
  },
  //
  {
    id: uuid(),
    name: 'WeHOPE',
    imageUrl: '/static/images/products/shelter8.jpg',
    rating: '4.0 stars',
    updatedAt: moment().subtract(10, 'hours'),
    links: 'https://www.wehope.org/'
  },
  {
    id: uuid(),
    name: 'LifeMoves | Villa',
    imageUrl: '/static/images/products/food7.jpg',
    rating: '3.5 stars',
    updatedAt: moment().subtract(12, 'hours'),
    links: 'http://www.lifemoves.org/'
  },
  {
    id: uuid(),
    name: 'LifeMoves | Haven Family House',
    imageUrl: '/static/images/products/shelter11.jpg',
    rating: '3.5 stars',
    updatedAt: moment().subtract(14, 'hours'),
    links:
      'http://lifemoves.org/our-solution-works/our-services/family-services/haven-family-house/'
  },
  {
    id: uuid(),
    name: 'LifeMoves | Julian Street Inn',
    imageUrl: '/static/images/products/food7.jpg',
    rating: '3.5 stars',
    updatedAt: moment().subtract(15, 'hours'),
    links:
      'http://lifemoves.org/our-solution-works/our-services/single-adult-services/julian-street-inn/'
  },
  {
    id: uuid(),
    name: 'Dilly Dilly Homeless Shelter',
    imageUrl: '/static/images/products/shelter9.jpg',
    rating: '3.5 stars',
    updatedAt: moment().subtract(17, 'hours'),
    links: 'http://www.abodeservices.org/'
  }
];

function LatestShelters(props) {
  const [offeredShelters, setShelters] = useState([]);
  const [isLoading, setLoading] = useState(false);


  const isShelterEmpty =
    !offeredShelters || (offeredShelters && offeredShelters.length === 0);

  const fetchShelters= () => {
    setLoading(true);
    fetch('http://localhost:5000/api/shelters')
      .then((res) => res.json())
      .then((data) => {
        setShelters(data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };

  useEffect(() => {
    fetchShelters();
  }, []);

  

  return (
    <Card>
      <CardHeader
        title="Nearest Shelter"
      />
      <Divider />
      <List>
      {offeredShelters.map((shelter) => (
        
          <ListItem>
            <ListItemAvatar>
              <img
                alt={shelter.shelter_name}
                src={shelter.imageUrl}
                style={{
                  height: 48,
                  width: 48
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={shelter.shelter_name}
              secondary={
                <Rating name="half-rating" defaultValue={shelter.rating_score} precision={0.5} />
            }
            ></ListItemText>
            <IconButton
              edge="end"
              size="small"
              onClick={() => window.open(`./shelters/ + ${shelter._id}`)}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      ></Box>
    </Card>
  );
}
export default LatestShelters;