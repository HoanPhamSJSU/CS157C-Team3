var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

  

var router = express.Router();     

require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDatabase = require('./db/db-connection');
const authRoute = require('./routes/auth');


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
app.use(authRoute);
connectDatabase(); 

// Login Route
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Shelter application." });
});

// User
const {
  signupController,
  signinController,
  currentUser,
  gettingUserInfo,
  updateUserInfo
} = require('./controllers/authController');

const { validate } = require('./validators')
const { rules: registrationRules } = require('./validators/auth/register')
const { rules: loginRules } = require('./validators/auth/login')
const { auth } = require('./middleware/auth')

// ROUTES FOR OUR API
var port = process.env.PORT || 7000 || 5000;        // set our port
// =============================================================================

     
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
  console.log('Routing to API');
  next(); 
});

app.use('/api', router);

router.route('/register').post([registrationRules, validate], signupController);
router.route('/currentuser').get(currentUser);
router.route('/gettingUserInfo/:id').get(gettingUserInfo);

router.route('/updateUserInfo').post(updateUserInfo);
router.route('/signin').post([loginRules, validate], signinController);

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