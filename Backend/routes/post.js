const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const postController = require('../controllers/post')
const multer = require('../middlewar/multer');

router.post('/publish/:id',auth,multer, postController.publish);
router.put('/upadateOne',auth, postController.updateOne);
router.get('/getAll', postController.allPublish);
router.get('/getOne', postController.onePublish);
router.delete('/delete/:id',auth, postController.deletePublish);
module.exports = router;