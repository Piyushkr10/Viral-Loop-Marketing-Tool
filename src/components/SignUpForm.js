import React, { useState } from 'react';
import { signUp } from '../services/api';

const SignUpForm = ({ setReferralCode }) => {
    const [username, setUsername] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await signUp({ username });
            setReferralCode(response.data.referralCode);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUpForm;
