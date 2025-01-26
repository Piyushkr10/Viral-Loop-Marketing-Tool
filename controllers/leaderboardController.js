const User = require('../models/userModel');
const redisClient = require('../config/redisClient');

exports.getLeaderboard = async (req, res) => {
    try {
        // Check Redis cache
        redisClient.get('leaderboard', async (err, data) => {
            if (err) throw err;

            if (data) {
                // If cached data exists
                res.status(200).json(JSON.parse(data));
            } else {
                // Fetch data from MongoDB
                const users = await User.find().sort({ referrals: -1 }).limit(10);
                const leaderboard = users.map((user) => ({
                    username: user.username,
                    referrals: user.referrals,
                }));

                // Store leaderboard in Redis cache for 60 seconds
                redisClient.setex('leaderboard', 60, JSON.stringify(leaderboard));
                res.status(200).json(leaderboard);
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching leaderboard' });
    }
};
