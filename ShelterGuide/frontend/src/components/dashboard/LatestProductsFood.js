import { v4 as uuid } from 'uuid';
import moment from 'moment';
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

const products = [
  {
    id: uuid(),
    name: 'Marthas Kitchen',
    imageUrl: '/static/images/products/food1.jpg',
    rating:'5 stars',
    updatedAt: moment().subtract(2, 'hours'),
    links: 'https://www.marthas-kitchen.org/'
  },
  {
    id: uuid(),
    name: 'Loaves & Fishes',
    imageUrl: '/static/images/products/food2.jpg',
    rating:'4.8 stars',
    updatedAt: moment().subtract(2, 'hours'),
    links: 'https://www.loavesfishes.org/'
  },
  {
    id: uuid(),
    name: 'Salvation Army',
    imageUrl: '/static/images/products/food3.jpg',
    rating:'4.7 stars',
    updatedAt: moment().subtract(3, 'hours'),
    links: 'https://siliconvalley.salvationarmy.org/silicon_valley/'
  },
  {
    id: uuid(),
    name: 'The Health Trust Food Basket',
    imageUrl: '/static/images/products/food4.jpg',
    rating:'4 stars',
    updatedAt: moment().subtract(5, 'hours'),
    links: 'https://healthtrust.org/'
  },
  {
    id: uuid(),
    name: 'Santa Maria Urban Ministry',
    imageUrl: '/static/images/products/food5.jpg',
    rating:'3.5 stars',
    updatedAt: moment().subtract(9, 'hours'),
    links: 'https://www.santamariasj.org/'
  }
]
  //
  

const LatestProductsFood = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Best Overall Food Banks"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${product.updatedAt.fromNow()}`}
          />
          <IconButton
            edge="end"
            size="small"
            onClick={() => window.open(product.links)}
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
    >
    </Box>
  </Card>
);

export default LatestProductsFood;
