const express = require('express'),
  router = express.Router(),
  controllers = require('./posts-controllers.js');

router.param('id', controllers.interceptPostId);

router
  .route('/')
  .post(controllers.addPost)
  .get(controllers.getPosts);

router
  .route('/:id')
  .get(controllers.getPostById)
  .delete(controllers.deletePost)
  .put(controllers.updatePost);

module.exports = router;
