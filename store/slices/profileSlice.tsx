
import { User } from "@/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import api from "@/libs/Axios";



interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

export const getCurrentUser = createAsyncThunk<User, string, { rejectValue: string }>(
    '/user/:id',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.get<User>(`/user/${id}`);
            console.log(response);
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
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to load user data";
            });
    },
});

export default userSlice.reducer;

