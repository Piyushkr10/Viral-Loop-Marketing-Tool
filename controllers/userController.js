const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (req, res) => {
    const { username } = req.body;
    const referralCode = `REF-${uuidv4().slice(0, 8)}`;

    try {
        const user = new User({ username, referralCode });
        await user.save();
        res.status(201).json({ message: 'User created', referralCode: user.referralCode });
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
};
