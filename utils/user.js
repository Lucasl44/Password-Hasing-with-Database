require("dotenv").config();
const bcrypt = require("bcrypt")
const { User } = require("../models/users");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const register = async ({username, password}) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    await User.create({username: username, password: hash});
};
const login = async ({username, password}) => {
    let user = await User.findOne({where: {username}});
    if (!user) {
        return "No username to match"
    }
    const matched = await bcrypt.compare(password, user.password);
    if (matched) {
        return "Password and username match";
    } else {
        return "Incorrect Password";
    }
};

module.exports = { register, login };