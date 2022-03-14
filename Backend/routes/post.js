const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const likeController = require('../controllers/like')
const postController = require('../controllers/post')

const multer = require('../middlewar/multer');

router.post('/publish/',auth,multer, postController.publish);
router.put('/upadateOne/:id',auth, postController.updateOne);
router.get('/getAll', postController.allPublish);
router.get('/getOne', postController.onePublish);
router.delete('/delete/:id', postController.deletePublish);

router.post('/:id', likeController.like );

module.exports = router;