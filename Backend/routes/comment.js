const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const comController = require('../controllers/comment');

router.post('/:id', comController.comment);
router.get('/all', comController.allComment);
router.delete('/delete/:idCom/:id',auth, comController.delete);

module.exports = router;
