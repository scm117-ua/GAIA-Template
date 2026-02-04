import axios from 'axios';

// [Feature: Infrastructure] [Story: setup] [Ticket: AC-PLAYER-002-FE-T01]
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Centralized error handling could go here
        return Promise.reject(error);
    }
);
