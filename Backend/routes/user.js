const express = require('express');
const router = express.Router();


// Importation du middleware
const img = require('../controllers/image')
const userCtrl = require('../controllers/user');
const validEmail = require('../middlewar/email');
const validPass = require('../middlewar/password');
const auth =  require('../middlewar/auth');
const limitTry = require ('../middlewar/limit') 
const multer = require('../middlewar/multer');
// Creation des routes user avec les middleware

router.post('/signup',validEmail, validPass, userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete/:id',auth, userCtrl.delete); {}
router.put('/update', userCtrl.update);
router.get('/profile/:id',auth, userCtrl.getOneUser);
router.post('/image/:id',multer,auth, img.uploadImage);



module.exports = router;