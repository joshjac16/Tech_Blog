const router = require("express").Router();                   // Importing the Router module from Express
const { Post, User, Comment } = require("../models");         // Importing the Post, User, and Comment models from the models directory
const withAuth = require("../utils/auth");                    // Importing the withAuth middleware function from the utils directory for authentication

router.get("/", async (req, res) => {                         // Route to render the homepage
  try {

    const postData = await Post.findAll({                     // Finding all posts and including associated user data
      include: [
        {
          model: User,
        },
      ],
    });


    const posts = postData.map((post) => post.get({ plain: true }));    // Mapping post data to plain objects


    res.render("homepage", {                                   // Rendering the homepage template with post data and login status
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);                                 // Sending a 500 response if there's an error
  }
});

router.get("/post/:id", async (req, res) => {                  // Route to render a specific post page
  try {
    const postData = await Post.findByPk(req.params.id, {      // Finding a specific post by its ID and including associated user and comment data
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          required: false
        }
      ],
    });

    let isCreator = false;                                     // Checking if the current user is the creator of the post
    if (req.session.user_id === postData.user_id) {
      isCreator = true;
    }
    console.log(postData)

    const post = postData.get({ plain: true });                // Getting plain object representation of the post data
    console.log(post)

    res.render("post", {                                       // Rendering the post template with post data and login status
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);                                 // Sending a 500 response if there's an error
  }
});


router.get("/profile", withAuth, async (req, res) => {         // Route to render the user's profile page
  try {

    const userData = await User.findByPk(req.session.user_id, {    // Finding the user by their ID and including associated post data
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    // console.log(user);

    res.render("profile", {                                    // Rendering the profile template with user data and login status
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);                                 // Sending a 500 response if there's an error

  }
});

router.get("/login", (req, res) => {                           // Route to render the login page

  if (req.session.logged_in) {                                 // Redirecting to the profile page if the user is already logged in
    res.redirect("/profile");
    return;
  }

  res.render("login");    // Rendering the login page
});

module.exports = router;  // Exporting the router for use in other parts of the application
