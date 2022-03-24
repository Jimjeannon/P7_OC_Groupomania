const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const likeController = require('../controllers/like')
const postController = require('../controllers/post')

const multer = require('../middlewar/multer');

router.get('/getAll', postController.allPublish);
router.get('/getOne', postController.onePublish);
router.get('/getMore', postController.morePublish);
router.put('/upadateOne/:id',auth, postController.updateOne);
router.post('/publish/:id',auth,multer, postController.publish);
router.delete('/delete/:idPost/:id',auth, postController.deletePublish);

router.get("/", likeController.numberlike);
router.post('/:id', likeController.like );
router.delete('/deletelike/:id', likeController.dislike );

module.exports = router;