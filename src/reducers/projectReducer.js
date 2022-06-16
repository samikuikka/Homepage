import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: [] }

//Project slice
export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getNotes(state, action) {
            state.projects = action.payload;
        }
    }
});

export const { getNotes } = projectSlice.actions;

export default projectSlice.reducer;
