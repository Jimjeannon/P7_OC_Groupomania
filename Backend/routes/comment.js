const express = require('express');
const router = express.Router();
const comController = require('../controllers/comment');
const auth =  require('../middlewar/auth');

router.post('/:id', comController.comment);
router.get('/all', comController.allComment);
router.put('/modif',auth, comController.modifCom);
router.delete('/delete/:idCom/:id',auth, comController.delete);

module.exports = router;
