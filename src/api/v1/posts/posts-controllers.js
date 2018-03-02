const PostsModel = require('./posts-model.js');

exports.interceptPostId = (req, res, next, id) => {
  PostsModel.findById(id, (err, data) => {
    if (err) {
      return next(new Error('could not get post id'));
    }

    req.post = data;
    next();
  });
};

exports.addPost = (req, res, next) => {
  const post = req.body,
    newPost = new PostsModel(post);

  newPost.save((err, data) => {
    if (err) {
      return next(new Error('could not save post'));
    }

    res.status(200).json(data);
  });
};

exports.getPosts = (req, res, next) => {
  PostsModel.find((err, info) => {
    if (err) {
      return next(new Error('could not fetch posts'));
    }

    let updatedData = [];

    info.forEach(post => {
      let data = post,
        { date } = data,
        newDate = new Date(date),
        formattedDate = newDate.toDateString();

      data = data.toJSON();
      data.newDate = formattedDate;

      updatedData.push(data);
    });

    res.status(200).json(updatedData);
  });
};

exports.getPostById = (req, res, next) => {
  if (!req.post) {
    return next(new Error('could not get post by id'));
  }

  let data = req.post,
    { date } = data,
    newDate = new Date(date),
    formattedDate = newDate.toDateString();

  data = data.toJSON();
  data.newDate = formattedDate;

  res.status(200).json(data);
};

exports.deletePost = (req, res, next) => {
  const postId = req.post._id;

  PostsModel.remove({ _id: postId }, err => {
    if (err) {
      return next(new Error('could not delete post'));
    }

    res.status(200).json(req.post);
  });
};

exports.updatePost = (req, res, next) => {
  const postId = req.post._id,
    newPost = req.body;

  PostsModel.update({ _id: postId }, newPost, { new: true }, err => {
    if (err) {
      return next(new Error('could not update post'));
    }
  });

  res.status(200).json(newPost);
};
