const User = require('../models/userModel');

exports.processReferral = async (req, res) => {
    const { referralCode } = req.body;

    try {
        const user = await User.findOne({ referralCode });

        if (user) {
            user.rewards += 10;
            user.referrals += 1;
            await user.save();
            res.status(200).json({ message: 'Referral processed', rewards: user.rewards });
        } else {
            res.status(404).json({ error: 'Referral code not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error processing referral' });
    }
};
