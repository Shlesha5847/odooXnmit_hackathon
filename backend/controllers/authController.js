const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");


module.exports.registerUser = async function (req, res) {
  try {
    let { name, email, password } = req.body;

    // check if already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).send("User already exists, please log in");

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create user
    user = await User.create({ name, email, password: hash });

    // generate JWT token
    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Login User
module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("Email or Password incorrect");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Email or Password incorrect");

    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
