const router = require('express').Router();     // Importing the Router module from Express

const apiRoutes = require('./api');             // Importing the API routes
const homeRoutes = require('./homeRoutes');     // Importing the homeRoutes

router.use('/', homeRoutes);                    // Mounting the homeRoutes under the root path ('/')
router.use('/api', apiRoutes);                  // Mounting the apiRoutes under the '/api' path

module.exports = router;                        // Exporting the router for use in other parts of the application
