const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const User = connection.define("User",
{
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    logging: false,
    indexes:[{unique: true, fields: ["username"]}]
});

module.exports = { User };