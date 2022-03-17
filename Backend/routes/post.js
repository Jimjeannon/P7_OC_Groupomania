const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const likeController = require('../controllers/like')
const postController = require('../controllers/post')

const multer = require('../middlewar/multer');

router.post('/publish/:id',auth,multer, postController.publish);
router.put('/upadateOne/:id',auth, postController.updateOne);
router.get('/getAll', postController.allPublish);
router.get('/getMore', postController.morePublish);
router.get('/getOne', postController.onePublish);
router.delete('/delete/:id',auth, postController.deletePublish);

router.post('/:id', likeController.like );
router.delete('/deletelike/:id', likeController.dislike );
router.get("/", likeController.numberlike)
module.exports = router;