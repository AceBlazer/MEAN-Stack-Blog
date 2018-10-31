const User = require('../models/user');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const express = require ('express');
const router = express.Router();

router.post('/newBlog', (req, res, next) => {
    if (!req.body.title) {
      res.json({ success: false, message: 'Blog title is required.' });
    } else {
      if (!req.body.body) {
        res.json({ success: false, message: 'Blog body is required.' });
      } else {
        if (!req.body.createdBy) {
          res.json({ success: false, message: 'Blog creator is required.' });
        } else {
          const blog = new Blog({
            title: req.body.title,
            body: req.body.body,
            createdBy: req.body.createdBy
          });
          blog.save((err) => {
            if (err) {
              if (err.errors) {
                if (err.errors.title) {
                  res.json({ success: false, message: err.errors.title.message });
                } else {
                  if (err.errors.body) {
                    res.json({ success: false, message: err.errors.body.message });
                  } else {
                    res.json({ success: false, message: err });
                  }
                }
              } else {
                res.json({ success: false, message: err });
              }
            } else {
              res.json({ success: true, message: 'Blog saved!' });
            }
          });
        }
      }
    }
});


router.get('/allBlogs', (req,res, next) => {
	Blog.find({}, (err, blogs) => {
		if (err) {
			res.json({success: false, msg: err});
		} else {
			if (!blogs) {
				res.json({success: false, msg: 'No blogs!'});
			} else {
				res.json({success: true, blogs: blogs});
			}
		}
	}).sort({'_id': -1}); //ejdod lawlin
});

router.get('/singleBlog/:id', (req,res, next) => {
    if (!req.params.id) {
      res.json({ success: false, message: 'No blog ID was provided.' });
    } else {
      Blog.findOne({ _id: req.params.id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid blog id' });
        } else {
          if (!blog) {
            res.json({ success: false, message: 'Blog not found.' });
          } else {
            res.json({ success: true, blog: blog });
          }
        }
      });
    }
});

//mise a jr (put)
router.put('/updateBlog', (req,res, next) => {
    if (!req.body._id) {
      res.json({ success: false, message: 'No blog id provided' });
    } else {
      Blog.findOne({ _id: req.body._id }, (err, blog) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid blog id' });
        } else {
          if (!blog) {
            res.json({ success: false, message: 'Blog id was not found.' });
          } else {
					blog.title = req.body.title;
                    blog.body = req.body.body;
                    blog.save((err) => {
                      if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err });
                        }
                      } else {
                        res.json({ success: true, message: 'Blog Updated!' });
                      }
                    });
          }
        }
      });
    }
});

//delete
router.delete('/deleteBlog/:id', (req,res,next) => {
	if (!req.params.id) {
		res.json({ success: false, message: 'No blog id provided' });
    } else {
		Blog.findOne({_id: req.params.id}, (err,blog) => {
			if (err) {
				res.json({ success: false, message: err });
			} else {
				if (!blog) {
					res.json({ success: false, message: 'blog not found' });
				} else {
					blog.remove((err) => {
						if (err) {
							res.json({ success: false, message: err });
						} else {
							res.json({ success: true, message: 'Deleted' });
						}
					});
				}
			}
		});
	}
});


router.post('/comment', (req, res) => {
  // Check if comment was provided in request body
     if (!req.body.comment) {
       res.json({ success: false, message: 'No comment provided' }); // Return error message
     } else {
       // Check if id was provided in request body
       if (!req.body.id) {
         res.json({ success: false, message: 'No id was provided' }); // Return error message
       } else {
         // Use id to search for blog post in database
         Blog.findOne({ _id: req.body.id }, (err, blog) => {
           // Check if error was found
           if (err) {
             res.json({ success: false, message: 'Invalid blog id' }); // Return error message
           } else {
             // Check if id matched the id of any blog post in the database
             if (!blog) {
               res.json({ success: false, message: 'Blog not found.' }); // Return error message
             } else {

                     // Add the new comment to the blog post's array
                     blog.comments.push({
                       comment: req.body.comment, // Comment field
                       commentator: req.body.username // Person who commented
                     });
                     // Save blog post
                     blog.save((err) => {
                       // Check if error was found
                       if (err) {
                         res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                       } else {
                         res.json({ success: true, message: 'Comment saved' }); // Return success message
                       }
                     });
                   } }

         });
       }
     }
 });


router.put('/likeBlog', (req,res,next) => {
  if (!req.body.id) {
    res.json({success:false, message: 'blog id not provided'});
  } else {
    Blog.findOne({_id: req.body.id}, (err,blog) => {
      if (err) {
        res.json({success:false, message: 'invalid blog id'});
      } else {
        if (!blog) {
          res.json({success:false, message: 'blog not found'});
        } else {
            if (blog.likedBy.includes(req.body.username)) {
              res.json({success:false, message: 'you already liked it'});
            } else {
              if(blog.dislikedBy.includes(req.body.username)) {
                blog.dislikes--;
                const arrayIndex = blog.dislikedBy.indexOf(req.body.username);
                blog.dislikedBy.splice(arrayIndex, 1);
                blog.likes++;
                blog.likedBy.push(req.body.username);
                blog.save((err) => {
                  if (err) {
                    res.json({success:false, message: err});
                  } else {
                    res.json({success:false, message: 'blog liked'});
                  }
                });
              } else {
                blog.likes++;
                blog.likedBy.push(req.body.username);
                blog.save((err) => {
                  if (err) {
                    res.json({success:false, message: err});
                  } else {
                    res.json({success:false, message: 'blog liked'});
                  }
                });
              }
            }
        }
      }
    });
  }
});


router.put('/dislikeBlog', (req,res,next) => {
  if (!req.body.id) {
    res.json({success:false, message: 'blog id not provided'});
  } else {
    Blog.findOne({_id: req.body.id}, (err,blog) => {
      if (err) {
        res.json({success:false, message: 'invalid blog id'});
      } else {
        if (!blog) {
          res.json({success:false, message: 'blog not found'});
        } else {
            if (blog.dislikedBy.includes(req.body.username)) {
              res.json({success:false, message: 'you already disliked it'});
            } else {
              if(blog.likedBy.includes(req.body.username)) {
                blog.likes--;
                const arrayIndex = blog.likedBy.indexOf(req.body.username);
                blog.likedBy.splice(arrayIndex, 1);
                blog.dislikes++;
                blog.dislikedBy.push(req.body.username);
                blog.save((err) => {
                  if (err) {
                    res.json({success:false, message: err});
                  } else {
                    res.json({success:false, message: 'blog disliked'});
                  }
                });
              } else {
                blog.dislikes++;
                blog.dislikedBy.push(req.body.username);
                blog.save((err) => {
                  if (err) {
                    res.json({success:false, message: err});
                  } else {
                    res.json({success:false, message: 'blog disliked'});
                  }
                });
              }
            }
        }
      }
    });
  }
});


module.exports = router;
