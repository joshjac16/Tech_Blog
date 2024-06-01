const router = require("express").Router();            // Importing the Router module from Express
const userRoutes = require("./userRoutes.js");         // Importing userRoutes module for handling user-related routes
const postRoutes = require("./postRoutes.js");         // Importing postRoutes module for handling post-related routes
const commentRoutes = require("./commentRoutes.js");   // Importing commentRoutes module for handling comment-related routes

router.use("/users", userRoutes);                      // Mounting userRoutes under the "/users" path
router.use("/post", postRoutes);                       // Mounting postRoutes under the "/post" path
router.use("/comments", commentRoutes);                // Mounting commentRoutes under the "/comments" path

module.exports = router;                               // Exporting the router for use in other parts of the application


