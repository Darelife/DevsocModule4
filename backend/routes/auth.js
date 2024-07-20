const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json("User not found");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).json("Wrong password");
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "24h",
    });
    const { password, ...info } = user._doc;
    res.cookie("token", token).status(200).json(info);
    // res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/logout", (req, res) => {
  try {
    res.clearCookie("token", { sameSite: "none", secure: true });
    res.status(200).json("Logged out");
  } catch (err) {
    res.status(500).json(err);
  }
});

// export default router;
module.exports = router;
