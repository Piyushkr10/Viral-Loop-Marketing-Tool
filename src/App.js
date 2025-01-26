import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import ReferralDashboard from './components/ReferralDashboard';
import Leaderboard from './components/Leaderboard';
import './App.css';

const App = () => {
    const [referralCode, setReferralCode] = useState('');

    return (
        <div className="app">
            <h1>Viral Loop Marketing Tool</h1>
            <SignUpForm setReferralCode={setReferralCode} />
            {referralCode && <ReferralDashboard referralCode={referralCode} />}
            <Leaderboard />
        </div>
    );
};

export default App;

