import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        registerUser(state, { payload }) {
            state.name = payload.name;
            state.email = payload.email;
        },
        loginUser(state, { payload }) {
            state.name = payload.name;
            state.email = payload.email;
        }
    }
})

export const { registerUser, loginUser } = userSlice.actions
export default userSlice.reducer
