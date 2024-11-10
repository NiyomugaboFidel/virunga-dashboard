
import { User } from "@/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import api from "@/libs/Axios";



interface UsersState {
    users:  User[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

export const getAllUsers = createAsyncThunk<User[], { rejectValue: string }>(
    '/user/:id',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get<User[]>(`/user`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || 'Failed to get user info');
            }
            return rejectWithValue('An unexpected error occurred');
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to load user data";
            });
    },
});

export default userSlice.reducer;

