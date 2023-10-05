// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit';

import user from './slices/userSlice';
import experts from './slices/experts';

// ** Reducers
export const store = configureStore({
    reducer: {
        user,
        experts,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
