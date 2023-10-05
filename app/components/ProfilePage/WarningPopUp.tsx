import React from 'react';

import { useAppDispatch } from '@/lib/redux/hooks';
import { updateDynamicPricing } from '@/lib/redux/slices/userSlice/thunks';
import { deactivateDynamicPricing } from '@/lib/redux/slices/userSlice';

interface Props {
    setOpenWarning: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
}

export default function WarningPopUp({ setOpenWarning, email }: Props) {
    const dispatch = useAppDispatch();

    return (
        <div className='dynamicPricingInfoWindow'>
            <div className='dynamicPricingInfoInnerWindow'>
                <p
                    style={{
                        textAlign: 'center',
                        color: '#fe3b1f',
                    }}
                >
                    Are you sure you want to deactivate dynamic pricing?
                </p>
                <div className='buttonBox'>
                    <button
                        onClick={() => {
                            dispatch(
                                updateDynamicPricing({
                                    email,
                                    dynamicPricing: {
                                        minPrice: 0,
                                        isActive: false,
                                        dynamicPrice: 0,
                                    },
                                })
                            );
                            setOpenWarning(false);
                        }}
                    >
                        Yes please
                    </button>
                    <button onClick={() => setOpenWarning(false)}>
                        No, it was a mistake
                    </button>
                </div>
            </div>
        </div>
    );
}
