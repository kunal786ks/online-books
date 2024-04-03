const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helper/tokenService");
const cloudinary = require("../helper/cloudinary");

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
      id: newUser._id,
      userName: newUser.userName,
      email: newUser.email,
      phone: newUser.userPhone,
      address: newUser.userAddress,
      webiste: newUser.userWebsite,
    };
    const token = generateToken(newUser);
    newUser.userImage = `http://localhost:8081${newUser.userImage}`;
    await newUser.save();
    return res.status(201).json({
      newUser: newUserResponse,
      userImage: newUser.userImage,
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
      id: user._id,
      userName: user.userName,
      email: user.email,
      phone: user.userPhone,
      address: user.userAddress,
      webiste: user.userWebsite,
    };
    const token = generateToken(user);
    return res.status(200).json({
      userResponse,
      userImage: user.userImage,
      token,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const uplaodUserImage = async (req, res) => {
  try {
    const id = req.params.userId;
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const { image } = req.body;
    const uploadImage = await cloudinary.uploader.upload(
      image,
      {
        upload_preset: "unsigned_url",
        public_id: "",
        allowed_formats: ["png", "jpg", "jpeg", "jfif"],
      },
      function (error, result) {
        if (error) {
          console.log(error, "this is error");
          return;
        }
        console.log(result, "this is the result");
      }
    );
    existingUser.userImage = uploadImage.secure_url;
    await existingUser.save();
    return res.status(200).json({
      existingUser,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const updateGeneralInfo = async (req, res) => {
  try {
    const id = req.params.userId;
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    const { email, phone, website, address } = req.body;
    existingUser.email = email;
    existingUser.userPhone = phone;
    existingUser.userWebsite = website;
    existingUser.userAddress = address;
    await existingUser.save();

    const user = {
      email: existingUser.email,
      phone: existingUser.userPhone,
      address: existingUser.userAddress,
      webiste: existingUser.userWebsite,
    };

    return res.status(200).json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params.userId;
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({
        message: "Bad request",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    existingUser.password = hashedPassword;
    await existingUser.save();

    return res.status(200).json({
      message: "Password updated successfully",
    });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  addUser,
  getUser,
  uplaodUserImage,
  updateGeneralInfo,
  updatePassword,
};
