const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAllBlogs',  (req,res) => {
  // res.render('getBlogs')
  Blog.find({objectID})
  .then((blogs) => {
    return res.render('showBlogs', {blogs: blogs})
  })
  .catch(err => res.status(500).json({message:'server error', err}));
});

module.exports = router;
