// src/features/auth/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/user/register', userData);
            console.log(response.data)
            // return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/login', credentials);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
