import { UserType } from '@/lib/redux/slices/userSlice';
import React from 'react';

interface Props {
    user: UserType;
}

export default function ChargePrice({ user }: Props) {
    const pricePerMin = user.staticPrice / 30;

    return user.dynamicPricing.isActive ? (
        <>
            <h3>Dynamic price activated</h3>
            <h4>Price: ${user.dynamicPricing.dynamicPrice} USD</h4>
            <p>
                ${(user.dynamicPricing.dynamicPrice / 30).toFixed(2)} USD per
                minute
            </p>
        </>
    ) : (
        <>
            <h4>Price for 30 min</h4>
            <h3>${user.staticPrice.toFixed(2)} USD</h3>
            <p>Equal to ${pricePerMin.toFixed(2)} per minute</p>
        </>
    );
}
