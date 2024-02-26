// Create router for authentification
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        // destructing username and password from request body
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User registred succesfuly' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);

module.exports = router;