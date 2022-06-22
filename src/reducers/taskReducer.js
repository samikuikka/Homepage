import { createSlice } from '@reduxjs/toolkit';

const initialState = { tasks: [] }

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getTasks(state, action) {
            state.tasks = action.payload
        }
    }
});

export const { getTasks } = taskSlice.actions;

export default taskSlice.reducer;