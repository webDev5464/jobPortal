// src/features/auth/authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/user/register', userData);
            // console.log(response.data)
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post('/api/user/login', credentials);
            const token = response.data.token;

            // Dispatch verifyUser thunk with the token
            dispatch(verifyUser(token));

            return { token };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const verifyUser = createAsyncThunk(
    'auth/verifyUser',
    async (token, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/user/auth', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post('/api/user/logout', {}, {
                withCredentials: true,
            });
            let token = response.data.token;
            dispatch(verifyUser(token));

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);