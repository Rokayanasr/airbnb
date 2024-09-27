import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser(state, { payload }) {
            state.name = payload.name;
            state.email = payload.email;
            state.isAuthenticated = true;
        },
        loginUser(state, { payload }) {
            state.name = payload.name;
            state.email = payload.email;
            state.isAuthenticated = true;
        },
        logoutUser(state) {
            state.name = '';
            state.email = '';
            state.isAuthenticated = false;
        },
        updateUser(state, { payload }) {
            state.name = payload.name;
            state.email = payload.email;
        },
        setLoading(state, { payload }) {
            state.loading = payload;
        },
        setError(state, { payload }) {
            state.error = payload;
        },
    }
});

export const { 
    registerUser, 
    loginUser, 
    logoutUser, 
    updateUser, 
    setLoading, 
    setError 
} = authSlice.actions;

export default authSlice.reducer;
