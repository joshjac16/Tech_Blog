const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const projectRoutes = require("./postRoutes.js");
const commentRoutes = require("./commentRoutes.js");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
