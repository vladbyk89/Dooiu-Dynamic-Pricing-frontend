import { UserType } from '@/lib/redux/slices/userSlice';
import React from 'react';

interface Props {
    user: UserType;
    setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenWarning: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DynamicPriceButton({
    user,
    setOpenInfo,
    setOpenWarning,
}: Props) {
    return (
        <button
            onClick={() => {
                if (!user.dynamicPricing.isActive) {
                    setOpenInfo(true);
                } else {
                    setOpenWarning(true);
                }
            }}
            className='activateDynamicPricingBtn'
            style={{
                backgroundColor: user.dynamicPricing.isActive
                    ? '#46b485'
                    : '#222222',
            }}
        >
            {user.dynamicPricing.isActive
                ? 'Deactivate Dynamic Pricing'
                : 'Activate Dynamic Pricing'}
        </button>
    );
}
