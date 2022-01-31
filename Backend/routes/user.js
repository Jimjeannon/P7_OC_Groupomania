const express = require('express');
const router = express.Router();

// Importation du middleware

const userCtrl = require('../controllers/user');
const validEmail = require('../middlewar/email')
const validPass = require('../middlewar/password')
const limitTry = require ('../middlewar/limit') 
// Creation des routes user avec les middleware

router.post('/signup', validEmail, validPass, userCtrl.signup);
router.post('/login', limitTry.limiter, userCtrl.login);


module.exports = router;