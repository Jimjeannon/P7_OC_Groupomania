const express = require('express');
const auth =  require('../middlewar/auth');
const router = express.Router();
const likeController = require('../controllers/like')
const postController = require('../controllers/post')

const multer = require('../middlewar/multer');

//Routes pour les posts

router.get('/getAll', postController.allPublish);
router.post('/publish/:id',auth,multer, postController.publish);
router.delete('/delete/:idPost/:id',auth, postController.deletePublish);

//Routes pour les likes

router.get("/", likeController.numberlike);
router.get("/:id", likeController.selectLike);
router.post('/:id', likeController.like );
router.delete('/deletelike/:id/:postId', likeController.dislike );

module.exports = router;