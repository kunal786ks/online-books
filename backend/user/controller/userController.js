const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helper/tokenService");

const addUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({
        message: "Bad request",
      });
    }

    const alreadyExists = await User.findOne({ email });

    if (alreadyExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    const newUserResponse = {
      id:newUser._id,
      userName: newUser.userName,
      email: newUser.email,
    }
    const token = generateToken(newUser);
    return res.status(201).json({
      newUser:newUserResponse,
      token,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Bad Request",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User with this email not exists",
      });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(400).json({
        message: "Password incorrect",
      });
    }
    const userResponse = {
      id:user._id,
      userName: user.userName,
      email: user.email,
    }
    const token = generateToken(user);
    return res.status(200).json({
      userResponse,
      token,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { addUser, getUser };
