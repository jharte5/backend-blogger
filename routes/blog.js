const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/blog', (req, res) => {
  const newBlog = new Blog();
  newBlog.title = req.body.title;
  newBlog.author = req.body.author;
  newBlog.subject = req.body.subject;
  newBlog.article = req.body.article;
  newBlog.save().then((blog) => {
    return res.json(blog);
  });
});

router.get('/blogs', (req, res) => {
  Blog.find({}).then((blogs) => {
    blogs.reverse();
    return res.json(blogs);
  });
});

router.get('/blog/:id', (req, res) => {
  Blog.findById({ _id: req.params.id }).then((blog) => {
    return res.json(blog);
  });
});

router.put('/blog/:id', (req, res) => {
  Blog.findById({ _id: req.params.id }).then((blog) => {
    blog.author = req.body.author ? req.body.author : blog.author;
    blog.title = req.body.title ? req.body.title : blog.title;
    blog.subject = req.body.subject ? req.body.subject : blog.subject;
    blog.article = req.body.article ? req.body.article : blog.article;
    blog.save().then((blog) => res.json(blog));
  });
});

router.delete('/blog/:id', (req, res) => {
  Blog.findByIdAndDelete({ _id: req.params.id }).then(
    res.json({ message: 'deleted' })
  );
});

module.exports = router;
