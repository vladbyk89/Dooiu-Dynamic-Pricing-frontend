/* Core */
import { createSlice } from '@reduxjs/toolkit';

/* Instruments */
import { RootState } from '../..';

// Thunks
import { updateStaticPrice, fetchUser,updateDynamicPricing } from './thunks';

export interface UserType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: {
        country: string;
        city: string;
        continent: string;
    };
    imageUrl: string;
    staticPrice: number;
    freeMinutes: number;
    dynamicPricing: {
        isActive: boolean;
        minPrice: number;
        dynamicPrice: number;
    };
    serviceCategory: string;
    rating: number;
    languages: string[];
}

// const userInitState: UserType = {
//     _id: '6506e82d2b17cfb053c43cc6',
//     firstName: 'Vladislav',
//     lastName: 'Bykanov',
//     email: 'vladi@gmail.com',
//     password: '12345678',
//     location: {
//         country: 'The Netherlands',
//         city: 'Heerenveen',
//         continent: 'Europe',
//     },
//     imageUrl:
//         'https://pbs.twimg.com/media/Cx4M034UkAAKSLO?format=webp&name=medium',
//     staticPrice: 22.75,
//     freeMinutes: 10,
//     dynamicPricing: {
//         isActive: false,
//         minPrice: 0,
//         dynamicPrice: 0,
//     },
//     serviceCategory: 'Entertainment, Sports, Gaming, Travel, Fashion',
//     rating: 3,
//     languages: ['English', 'Russian', 'Hebrew', 'Dutch'],
// };

const userInitState: UserType = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: {
        country: '',
        city: '',
        continent: '',
    },
    imageUrl: '',
    staticPrice: NaN,
    freeMinutes: NaN,
    dynamicPricing: {
        isActive: false,
        minPrice: NaN,
        dynamicPrice: NaN,
    },
    serviceCategory: '',
    rating: NaN,
    languages: [''],
};

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: userInitState, isLoading: false },
    reducers: {
        initiateUser: (state, action) => {
            state.value = action.payload;
        },
        resetUser: (state) => {
            state.value = userInitState;
        },
        activateDynamicPricing: (state, action) => {
            state.value.dynamicPricing = action.payload;
        },
        deactivateDynamicPricing: (state) => {
            state.value.dynamicPricing.isActive = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(updateStaticPrice.fulfilled, (state, action) => {
            state.value.staticPrice = action.payload;
        });
        builder.addCase(updateDynamicPricing.fulfilled, (state, action) => {
            state.value.dynamicPricing = action.payload;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export const {
    initiateUser,
    resetUser,
    activateDynamicPricing,
    deactivateDynamicPricing,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default userSlice.reducer;
