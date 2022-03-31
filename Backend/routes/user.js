const express = require('express');
const router = express.Router();


// Importation du middleware

const auth =  require('../middlewar/auth');
const img = require('../controllers/image');
const multer = require('../middlewar/multer');
const userCtrl = require('../controllers/user');
const limitTry = require ('../middlewar/limit'); 
const validEmail = require('../middlewar/email');
const validPass = require('../middlewar/password');

// Creation des routes user avec les middleware

router.put('/update/:id', userCtrl.update);
router.delete('/delete/:id', userCtrl.delete); 
router.get('/profile/:id',auth, userCtrl.getOneUser);
router.post('/image/:id',multer,auth, img.uploadImage);
router.post('/signup',validEmail, validPass, userCtrl.signup);
router.post('/login',validEmail, validPass, limitTry.limiter, userCtrl.login);

module.exports = router;