import React from 'react';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';

const ReferralDashboard = ({ referralCode }) => {
    const shareMessage = `Join this platform using my referral code: ${referralCode}`;

    return (
        <div className="referral-dashboard">
            <h3>Your Referral Code</h3>
            <p><strong>{referralCode}</strong></p>
            <WhatsappShareButton url={shareMessage} title="Invite your friends!">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
};

export default ReferralDashboard;
