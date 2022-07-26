const express = require('express');
const router = express.Router();

/* controlador */
const userController = require('../controllers/userController');

/* /users */
router.get('/register',userController.register);
router.get('/login',userController.login);
router.get('/profile',userController.profile);



module.exports = router;