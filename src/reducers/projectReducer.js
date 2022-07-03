import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: []};

//Project slice
export const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setNotes(state, action) {
            state.projects = action.payload;
        }
    }
});

export const { setNotes } = projectSlice.actions;

export default projectSlice.reducer;
