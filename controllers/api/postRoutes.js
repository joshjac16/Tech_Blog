const router = require("express").Router();                            // Importing the Router module from Express
const { Post, Comment } = require("../../models");                     // Importing the Post and Comment models from the models directory
const withAuth = require("../../utils/auth");                          // Importing the withAuth middleware function from the utils directory for authentication

router.post("/", withAuth, async (req, res) => {                       // POST route to create a new post
  try {
    // console.log(req.body);
    const newPost = await Post.create({                                // Creating a new post using the Post model's create method
      ...req.body,                                                     // Extracting post data from request body
      userId: req.session.user_id,                                     // Associating the post with the current user
    });

    res.status(200).json(newPost);                                     // Sending a successful response with the newly created post data
  } catch (err) {
    res.status(400).json(err);                                         // Sending an error response if there's an error during post creation
  }
});
router.post('/:id/comments', withAuth, async (req, res) => {           // POST route to create a new comment for a specific post
 
  try {
    const newComment = await Comment.create({                          // Creating a new comment using the Comment model's create method
      ...req.body,                                                     // Extracting comment data from request body
      userId: req.session.user_id,                                     // Associating the comment with the current user
      postId: req.params.id,                                           // Associating the comment with the specified post
    });
    res.status(200).json(newComment);                                  // Sending a successful response with the newly created comment data
  } catch (err) {
    console.log(err);                                                  // Sending an error response if there's an error during comment creation
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {                  // DELETE route to delete a post by its ID
  try {
    const postData = await Post.destroy({                              // Attempting to delete the post with the specified ID and owned by the current user
      where: {
        id: req.params.id,                                             // Specifying post ID from request parameters
        userId: req.session.user_id,                                   // Ensuring that only the owner of the post can delete it
      },
    });

    if (!postData) {                                                   // Sending a 404 response if no post is found with the specified ID
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);                                    // Sending a successful response with the deleted post data
  } catch (err) {
    res.status(500).json(err);                                         // Sending a 500 response if there's an error during post deletion
  }
});

module.exports = router;                                               // Exporting the router for use in other parts of the application
