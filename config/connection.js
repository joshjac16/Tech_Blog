// Importing Sequelize library for interacting with databases
const Sequelize = require('sequelize');
// Importing dotenv library 
require('dotenv').config();

// Declaring a variable to hold the Sequelize instance
let sequelize;

// Checking if a JAWSDB_URL environment variable is set for heroku
if (process.env.JAWSDB_URL) {
   // If JAWSDB_URL is set, create a Sequelize instance using it
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // If JAWSDB_URL is not set, create a Sequelize instance using local database configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,    // Database name 
    process.env.DB_USER,    // Database user
    process.env.DB_PASSWORD,// Database password
    {
      host: 'localhost',  // Database host
      dialect: 'mysql',   // Database dialect - MySQL
      port: 3306          // Database port
    }
  );
}

// Exporting the Sequelize instance for use in other parts of the application
module.exports = sequelize;