var express = require('express');
var router = express.Router();

//const usersController = require('../controllers/UsersController')

const {validationRules, UsersController} = require("../controllers/UsersController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout:'layout' });
});

router.get('/users', UsersController.getAllUsers)


//Add
router.get('/addUser', (req, res) => {
  res.render('adduser')
})


//update
router.get('/addUser/:id', UsersController.getUser);

router.post('/adduser', validationRules, UsersController.addUser);

router.post('/adduser/:id', validationRules, UsersController.updateUser);

router.delete('/deleteuser/:id', UsersController.deleteUser);

module.exports = router;
