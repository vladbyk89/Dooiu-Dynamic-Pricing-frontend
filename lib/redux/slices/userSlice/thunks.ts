import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (data: { email: string; password: string }) => {
        const res = await axios.post('/api/users/login', {
            email: data.email,
            password: data.password,
        });

        return res.data.user;
    }
);

export const updateStaticPrice = createAsyncThunk(
    'user/updateStaticPrice',
    async (data: { email: string; staticPrice: number }) => {
        const res = await axios.patch('/api/users/updateStaticPrice', data);

        return res.data.updatedUser.staticPrice;
    }
);

export const updateDynamicPricing = createAsyncThunk(
    'user/updateDynamicPricing',
    async ({
        email,
        dynamicPricing,
    }: {
        email: string;
        dynamicPricing: {
            minPrice: number;
            isActive: boolean;
            dynamicPrice: number;
        };
    }) => {
        await axios.patch('/api/users/updateDynamicPricing', {
            email,
            dynamicPricing,
        });

        return dynamicPricing;
    }
);
