const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

module.exports = async function (req, res, next) {
  // check if token exists
  if (!req.cookies.token) {
    return res.status(401).send("You need to login first");
  }

  try {
    // verify token
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    // fetch user from DB using email (since you stored email in payload)
    const user = await userModel
      .findOne({ email: decoded.email })
      .select("-password"); // exclude password

    if (!user) {
      return res.status(401).send("User not found");
    }

    req.user = user; // attach user to request
    next();
  } catch (err) {
    return res.status(401).send("Invalid or expired token");
  }
};
