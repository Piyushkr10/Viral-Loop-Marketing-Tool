import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signUp = (data) => API.post('/users/signup', data);
export const processReferral = (data) => API.post('/referrals', data);
export const fetchLeaderboard = () => API.get('/leaderboard');
