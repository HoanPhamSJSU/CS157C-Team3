var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDatabase = require('./db/db-connection');
// const app = express();


app.use(cors()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
// app.use(authRoute);
connectDatabase(); 
// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();             
// Hoan
const {
  loadShelterController, loadShelterControllerById
} = require('./controllers/shelterController');

// const {
//   loadRankingController, loadRankingControllerById
// } = require('./controllers/rankingController');
//Hoan



router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); 
});

app.use('/api', router);
router.route('/shelters').get(loadShelterController);
router.route('/shelters/:id').get(loadShelterControllerById);

// router.route('/ranking').get(loadRankingController);
// router.route('/ranking/:id').get(loadRankingControllerById);

// 404 handler
// 404 error

// app.all('*', (req, res, next) => {
//   const err = new HttpException(404, 'Endpoint Not Found');
//   next(err);
// });

// router.route('/shelters/:id').get(loadEventControllerById);

app.listen(5000,() => {
   console.log("Server started on Port 5000");
})


module.exports = app;