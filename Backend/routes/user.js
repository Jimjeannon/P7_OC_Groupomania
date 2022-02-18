const express = require('express');
const router = express.Router();


// Importation du middleware
const img = require('../controllers/image')
const userCtrl = require('../controllers/user');
const validEmail = require('../middlewar/email');
const validPass = require('../middlewar/password');
const auth =  require('../middlewar/auth');
const multer = require('../middlewar/multer');
const limitTry = require ('../middlewar/limit') 
// Creation des routes user avec les middleware

router.post('/signup',validEmail, validPass, userCtrl.signup);
router.post('/login',validPass, limitTry.limiter, userCtrl.login);
router.delete('/delete',auth, userCtrl.delete);
router.put('/update',auth, userCtrl.update);
router.get('/profile/:id', userCtrl.getOneUser);
router.post('/image', multer, img.uploadImage);


module.exports = router;