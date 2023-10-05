/* Core */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { UserType } from '../userSlice';

const expertsInitState: UserType[] = [];

export const expertsSlice = createSlice({
    name: 'experts',
    initialState: { value: expertsInitState },
    reducers: {
        initiateExperts: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { initiateExperts } = expertsSlice.actions;

export const selectExperts = (state: RootState) => state.experts.value;

export default expertsSlice.reducer;
