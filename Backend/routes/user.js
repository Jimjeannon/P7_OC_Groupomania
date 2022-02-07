const express = require('express');
const router = express.Router();

// Importation du middleware
const img = require('../controllers/image')
const userCtrl = require('../controllers/user');
const validEmail = require('../middlewar/email');
const validPass = require('../middlewar/password');
const auth =  require('../middlewar/auth');
const multer = require('../middlewar/multer');
// Creation des routes user avec les middleware

router.post('/signup', userCtrl.signup);
router.delete('/delete', userCtrl.delete);
router.put('/update', userCtrl.update);
router.get('/login', userCtrl.login);
router.get('/profile/:id', userCtrl.getOneUser);
router.post('/image', multer, img.uploadImage);

module.exports = router;