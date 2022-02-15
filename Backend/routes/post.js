const express = require('express');
const router = express.Router();
const auth =  require('../middlewar/auth');
const postController = require('../controllers/post')

router.post('/publish',auth, postController.publish);
router.put('/upadateOne',auth, postController.updateOne);
router.get('/getAll', postController.allPublish);
router.get('/getOne', postController.onePublish);
router.delete('/delete',auth, postController.deletePublish);
module.exports = router;