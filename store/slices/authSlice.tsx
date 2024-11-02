// src/store/slices/authSlice.ts
import { api } from '@/libs/Axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Types
interface User {
    success: boolean;
    message: string;
    firstName: string;
    email: string;
    profilePic: string;
    id: string; 
    token: string;
  }

interface AuthState {
    user: User | null;
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
    user: User;
    token: string;
}



// Async Thunk Actions
export const loginUser = createAsyncThunk<LoginResponse, LoginCredentials, { rejectValue: string }>(
    '/user/logi',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post<LoginResponse>('/user/login', credentials);
            
            // Store token in localStorage if rememberMe is true
            if (credentials.rememberMe) {
                localStorage.setItem('token', response.data.token);
            } else {
                sessionStorage.setItem('token', response.data.token);
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
            // Optional: Call logout endpoint if your API requires it
            // await api.post('/auth/logout');
            
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            delete api.defaults.headers.common['Authorization'];
            
            return null;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Logout failed');
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);


// export const getCurrentUser = createAsyncThunk<User, void, { rejectValue: string }>(
//     'auth/getCurrentUser',
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await api.get<User>('/auth/me');
//             return response.data;
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 return rejectWithValue(error.response?.data?.message || 'Failed to get user info');
//             }
//             return rejectWithValue('An unexpected error occurred');
//         }
//     }
// );

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
            
            // // Get Current User
            // .addCase(getCurrentUser.pending, (state) => {
            //     state.isLoading = true;
            //     state.error = null;
            // })
            // .addCase(getCurrentUser.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.user = action.payload;
            //     state.isAuthenticated = true;
            //     state.error = null;
            // })
            // .addCase(getCurrentUser.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.error = action.payload || 'Failed to get user info';
            //     state.isAuthenticated = false;
            // });
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