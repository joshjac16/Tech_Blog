const { Model, DataTypes } = require("sequelize");  // Importing necessary modules from Sequelize
const sequelize = require("../config/connection");  // Importing the Sequelize instance from the connection configuration

class Comment extends Model { }                     // Creating the Comment model by extending Sequelize's Model class

Comment.init(                                       // Initializing the Comment model with attributes and options
  {
    id: {                                           // Defining the 'id' column
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentContent: {                               // Defining the 'commentContent' column
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {                                  // Defining the 'dateCreated' column
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    userId: {                                       // Defining the 'userId' column with a foreign key reference to the 'id' column of the 'user' model
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    postId: {                                      // Defining the 'postId' column with a foreign key reference to the 'id' column of the 'post' model
      type: DataTypes.INTEGER,
      references: {
        model: "post",                             // Referencing the 'post' model
        key: "id",                                 // Referencing the 'id' column of the 'post' model
      },
    },
  },
  {
    sequelize,                                     // Passing in the sequelize instance
    timestamps: false,                             // Disabling timestamps (createdAt and updatedAt)
    freezeTableName: true,                         // Preventing pluralization of the table name
    underscored: true,                             // Using underscores instead of camelCase for attribute names
    modelName: "comment",                          // Setting the model name
  }
);

module.exports = Comment;                          // Exporting the Comment model for use in other parts of the application
