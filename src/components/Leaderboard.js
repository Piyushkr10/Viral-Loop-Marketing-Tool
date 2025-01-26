import React, { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../services/api';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const loadLeaderboard = async () => {
            try {
                const response = await fetchLeaderboard();
                setLeaderboard(response.data);
            } catch (error) {
                console.error('Error fetching leaderboard:', error);
            }
        };

        loadLeaderboard();
    }, []);

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Referrals</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.referrals}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
