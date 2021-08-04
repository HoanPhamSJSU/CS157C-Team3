import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ShelterCard from 'src/components/shelter/ShelterCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import React, {useState, useEffect} from "react";

const shelter = {
  id: '60ddd3fb6409b5220ece2510',
  name: 'HomeFirst',
  description:
    'Emergency Housing Consortium is a leading provider of services, shelter, and housing opportunities to the homeless and those at risk of homelessness in Santa Clara County.',
  imageUrl: '/static/images/products/shelter3.png',
  rating_score: '4'
};


const ProductList = () => {
  let { id } = useParams();
  const [shelterDetail, setShelterDetail] = useState('');

  const gettingShelter = () => {
    fetch("http://localhost:5000/api/shelters/"+ id)
    .then(res => res.json())
    .then(result => {
      setShelterDetail(result);
    });
  };
  useEffect(() => {
    gettingShelter();
  }, []);


  return (
    <>
      <Helmet>
        <title>Shelters List</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          {/* <ProductListToolbar /> */}
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              <Grid item key={shelterDetail.id} lg={12} md={6} xs={12}>
                <ShelterCard shelterDetail={shelterDetail} />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
