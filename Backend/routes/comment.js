const express = require('express');
const router = express.Router();
const comController = require('../controllers/comment');
const auth =  require('../middlewar/auth');

router.post('/:id', comController.comment);
router.put('/modif',auth, comController.modifCom);
router.delete('/delete/:id', comController.delete);
router.get('/all', comController.allComment);

module.exports = router;
