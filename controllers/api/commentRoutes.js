const router = require('express').Router();   // Importing Express router
const { Comment } = require('../../models');  // Importing the Comment model from the models directory
const withAuth = require('../../utils/auth'); // Importing the withAuth middleware function from the utils directory for authentication


router.post('/:id', withAuth, async (req, res) => {   // POST route to create a new comment
  try {

    // console.log("UserId", req.session.user_id)
    const newComment = await Comment.create({   // Creating a new comment using the Comment model's create method
      ...req.body,
      userId: req.session.user_id,
    });


    res.status(200).json(newComment);  // Sending a successful response with the newly created comment data
  } catch (err) {

    res.status(400).json(err);        // Sending an error response if there's an error during comment creation
  }
});



router.delete('/:id', withAuth, async (req, res) => {  // DELETE route to delete a comment by its ID
  try {
    
    const commentData = await Comment.destroy({        // Attempting to delete the comment with the specified ID and owned by the current user
      where: {
        id: req.params.id,                             // Specifying comment ID from request parameters
        user_id: req.session.user_id,                  // Ensuring that only the owner of the comment can delete it
      },
    });

    
    if (!commentData) {                                // Sending a 404 response if no comment is found with the specified ID
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    
    res.status(200).json(commentData);                 // Sending a successful response with the deleted comment data
  } catch (err) {
   
    res.status(500).json(err);                         // Sending a 500 response if there's an error during comment deletion
  }
});

module.exports = router;                               // Exporting the router for use in other parts of the application

