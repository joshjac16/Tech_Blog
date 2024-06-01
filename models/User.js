// Import necessary modules
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");                    // Assuming this file connects to your database
const bcrypt = require("bcrypt");
class User extends Model {
  checkPassword(loginPw) {                                            // Method to check if the provided password matches the hashed password stored in the instance
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(                                                            // Initialize the User model with Sequelize
  {
    id: {                                                             // Define model attributes
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {                                                          // Define hooks to execute before creating or updating a user
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);   // Hash the password before creating a new user
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(                 // Hash the password before updating a user
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

    // Define Sequelize options
    sequelize,
    timestamps: false,                                                // Disable timestamps (createdAt and updatedAt columns)
    freezeTableName: true,                                            // Prevent Sequelize from pluralizing table names
    underscored: true,                                                // Use snake_case for column names
    modelName: "user",                                                // Name of the model in Sequelize
  }
);
module.exports = User;                                                // Export the User model
