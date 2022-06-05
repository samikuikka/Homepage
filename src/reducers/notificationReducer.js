import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    severity: 'error',
    message: ''
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            state.open = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        closeNotification(state) {
            state.open = false;
            state.message = '';
        }
    }
});

export const { setNotification, closeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;