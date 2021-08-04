import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Avatar,
  CardContent,
  Card,
} from '@material-ui/core';

const user = {
  avatar: '/static/images/dashboard.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};


const AboutUs = () => (
  <>
    <Helmet>
      <title>About Us</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'pxbackground.default',
        height: 50,
        width: 50,
        py: 3
      }}
    >
      
      <Container maxWidth="sm">
      <h1 style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background.default"
  }}></h1>
        <h1></h1>
        <img src={user.avatar}  width={1000} height={1000} mode='fit'/>
      </Container>
    </Box>
  </>
);

export default AboutUs;
