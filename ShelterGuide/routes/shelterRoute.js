const express = require('express');
const router = express.Router();
const shelterController = require('../controllers/shelterController');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');



router.get('/', awaitHandlerFactory(shelterController.getAllShelters)); // localhost:3000/api/users
router.get('/shelter/:id', awaitHandlerFactory(shelterController.getShelterById)); // localhost:3000/api/users/id/1
// router.get('/username/:username', auth(), awaitHandlerFactory(userController.getUserByuserName)); // localhost:3000/api/v1/users/usersname/julia
// router.get('/whoami', auth(), awaitHandlerFactory(userController.getCurrentUser)); // localhost:3000/api/v1/users/whoami
// router.post('/', createUserSchema, awaitHandlerFactory(userController.createUser)); // localhost:3000/api/v1/users
// router.patch('/id/:id', auth(Role.Admin), updateUserSchema, awaitHandlerFactory(userController.updateUser)); // localhost:3000/api/v1/users/id/1 , using patch for partial update
// router.delete('/id/:id', auth(Role.Admin), awaitHandlerFactory(userController.deleteUser)); // localhost:3000/api/v1/users/id/1


// router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin)); // localhost:3000/api/v1/users/login

module.exports = router;
