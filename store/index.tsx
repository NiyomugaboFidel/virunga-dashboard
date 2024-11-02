import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import authSlice from './slices/authSlice';

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    authConfig: authSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

// Export types
export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Optional: Create typed hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
