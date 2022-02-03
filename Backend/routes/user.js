const express = require('express');
const router = express.Router();

// Importation du middleware

const userCtrl = require('../controllers/user');
const validEmail = require('../middlewar/email')
const validPass = require('../middlewar/password')
const auth =  require('../middlewar/auth')
// Creation des routes user avec les middleware

router.post('/signup', userCtrl.signup);


module.exports = router;