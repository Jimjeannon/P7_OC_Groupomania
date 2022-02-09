const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const postController = require('../controllers/post')

router.post('/publish', postController.publish);
router.put('/upadateOne', postController.updateOne);
router.get('/getAll', postController.allPublish);
router.get('/getOne', postController.onePublish);
router.delete('/delete', postController.deletePublish);
module.exports = router;