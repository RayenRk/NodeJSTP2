// Create router for authentification
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    // destructing username and password from request body
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registred succesfuly" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
    const payload = {
        user: {
        id: User.id,
        username: User.username,
        password: User.password,
        },
    };
    jwt.sign(payload, process.env.SECRET_KEY, (error, token) => {
        if (error) throw error;
        res.json({ token });
    });
    res.render("home", { data });
});

module.exports = router;
