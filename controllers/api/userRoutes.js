const router = require("express").Router();                // Importing the Router module from Express
const { User } = require("../../models");                  // Importing the User model from the models directory

router.post("/", async (req, res) => {                     // Route for user signup
  try {
  // console.log("Signup", req.body);   
    const userData = await User.create(req.body);          // Creating a new user using the User model's create method

    req.session.save(() => {                               // Saving user session data
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);                      // Sending a successful response with user data
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {                 // Route for user login
  try {
    const userData = await User.findOne({                   // Finding a user by their username
      where: { userName: req.body.userName },        
    });

    if (!userData) {                                        // If no user is found, sending an error response
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);  // Checking if the entered password is valid

    if (!validPassword) {                                    // If password is invalid, sending an error response
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {                                 // Saving user session data
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });    // Sending a successful response with user data
    });
  } catch (err) {
    res.status(400).json(err);                               // Sending an error response if there's an error during login
  }
});

router.post("/logout", (req, res) => {                      // Route for user logout
  if (req.session.logged_in) {                              // Checking if the user is logged in
    req.session.destroy(() => {                             // Destroying the session and logging out the user
      res.status(204).end();
    });
  } else {
    res.status(404).end();                                  // Sending a 404 response if no user is logged in
  }
});

module.exports = router;  // Exporting the router for use in other parts of the application
