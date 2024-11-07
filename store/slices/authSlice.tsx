import api from '@/libs/Axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Types
interface UserLogin {
    success: boolean;
    message: string;
    firstName: string;
    email: string;
    profilePic: string;
    id: string;
    role: string;
    token: string;
}

interface AuthState {
    user: UserLogin | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

interface LoginCredentials {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface LoginResponse {
    user: UserLogin;
    token: string;
}



// Async Thunk Actions
export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials, { rejectValue: string }>(
    '/user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post<LoginResponse>('/user/login', credentials);


            if (credentials.rememberMe) {
                localStorage.setItem('token', response.data.token);
                Cookies.set('token', response.data.token, {
                    path: '/', // Cookie path
                    expires: 1, // Cookie expiration in days
                    secure: true, // Set to true if using HTTPS
                    sameSite: 'strict', // Prevents CSRF
                });
            } else {
                sessionStorage.setItem('token', response.data.token);
                Cookies.set('token', response.data.token, {
                    path: '/', // Cookie path
                    expires: 1, // Cookie expiration in days
                    secure: true, // Set to true if using HTTPS
                    sameSite: 'strict', // Prevents CSRF
                });
            }

            // Set token for subsequent requests
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Login failed');
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {

            // await api.post('/auth/logout');

            localStorage.removeItem('token');
            Cookies.remove('token');
            sessionStorage.removeItem('token');
            delete api.defaults.headers.common['Authorization'];

            return 'Logout successful';
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Logout failed');
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);



// Initial state
const initialState: AuthState = {
    user: null,
    token: typeof window !== 'undefined'
        ? localStorage.getItem('token') || sessionStorage.getItem('token')
        : null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
};

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        resetAuth: () => initialState,
    },
    extraReducers: (builder) => {
        // Login
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                state.error = null;

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Login failed';
                state.isAuthenticated = false;
            })

            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
                state.error = null;
            })
    },
});

// Actions
export const { clearError, resetAuth } = authSlice.actions;

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;

export default authSlice.reducer;