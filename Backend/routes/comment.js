const express = require('express');
const router = express.Router();
const comController = require('../controllers/comment')

router.post('/', comController.comment);
router.put('/modif', comController.modifCom);
router.delete('/delete', comController.delete);
router.post('/like', comController.likeComment);

module.exports = router;
