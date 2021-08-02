import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ShelterCard from 'src/components/shelter/ShelterCard';
import products from 'src/__mocks__/products';

const product = 
  {
    id: '60ddd3fb6409b5220ece2510',
    name: 'HomeFirst',
    description:'Emergency Housing Consortium is a leading provider of services, shelter, and housing opportunities to the homeless and those at risk of homelessness in Santa Clara County.',
    imageUrl: '/static/images/products/shelter3.png',
    rating: '5 stars'
  }
;

const ProductList = () => (
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
          <Grid
            container
            spacing={3}
          >
              <Grid
                item
                key={product.id}
                lg={12}
                md={6}
                xs={12}
              >
                <ShelterCard product={product} />
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
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
