const { Model, DataTypes } = require("sequelize");  // Importing necessary modules from Sequelize
const sequelize = require("../config/connection");  // Importing the Sequelize instance from the connection configuration

class Post extends Model { }                      // Creating the Post model by extending Sequelize's Model class

Post.init(                                       // Initializing the Post model with attributes and options
  {
    id: {                                        // Defining the 'id' column
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle: {                                  // Defining the 'postTitle' column
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    postContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {                                     // Defining the 'userId' column with a foreign key reference to the 'id' column of the 'user' model
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    date_created: {                                // Defining the 'date_created' column
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,                 // Setting default value to current date and time
    },
  },
  {

    // Passing in the sequelize instance
    sequelize,
    timestamps: false,                             // Disabling timestamps (createdAt and updatedAt)
    freezeTableName: true,                         // Preventing pluralization of the table name
    underscored: true,                             // Using underscores instead of camelCase for attribute names
    modelName: "post",                             // Setting the model name
  }
);

module.exports = Post;                             // Exporting the Post model for use in other parts of the application
