const express = require('express');
const router = express.Router();
const comController = require('../controllers/comment');
const auth =  require('../middlewar/auth');

router.post('/', comController.comment);
router.put('/modif',auth, comController.modifCom);
router.delete('/delete',auth, comController.delete);
router.post('/like',auth, comController.likeComment);

module.exports = router;
