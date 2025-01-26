const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    referralCode: { type: String, unique: true, required: true },
    rewards: { type: Number, default: 0 },
    referrals: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
