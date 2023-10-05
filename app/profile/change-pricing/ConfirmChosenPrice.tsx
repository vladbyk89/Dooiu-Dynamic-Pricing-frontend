import React from 'react';

// Redux
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectUser } from '@/lib/redux/slices/userSlice';
import { updateStaticPrice } from '@/lib/redux/slices/userSlice/thunks';

// NextJs
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Props {
    chosenPrice: number;
    setConfirmPrice: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmChosenPrice({
    chosenPrice,
    setConfirmPrice,
}: Props) {
    // Hooks
    const router = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const handleConfirm = async () => {
        const data = {
            email: user.email,
            staticPrice: chosenPrice,
        };
        
        await dispatch(updateStaticPrice(data));

        router.replace('/profile');
    };

    const priceAfterFee = Math.round(chosenPrice * 2 * 0.94);
    const fee = chosenPrice * 2 * 0.06;
    return (
        <div className='confirmPriceWindow'>
            <h1>Confirm Chosen Price</h1>
            <p style={{ textAlign: 'center' }}>
                This is how much you will charge someone who wants to use your
                expertise.
            </p>
            <div className='finalPrice card'>
                <p style={{ fontSize: '1.3rem', fontWeight: '500' }}>
                    Price for a 30-Minute
                </p>
                <p
                    style={{
                        color: '#005eb8',
                        fontSize: '1.3rem',
                        fontWeight: '500',
                    }}
                >
                    ${priceAfterFee}
                </p>
                <em style={{ color: '#007aff' }}>
                    Equals to: <b>${(priceAfterFee / 60).toFixed(2)} USD</b> per
                    minute
                </em>
            </div>
            <div className='serviceFee card'>
                <p style={{ fontSize: '1.3rem', fontWeight: '500' }}>
                    Dooiu Service Fee
                </p>
                <div className='feeBreakDown'>
                    <p className='feePercent'>6%</p>
                    <div>
                        <p>Equal to:</p>
                        <p>
                            <b>${(fee / 60).toFixed(2)} USD</b> Per Minute
                        </p>
                        <p>
                            <b>${fee.toFixed(2)} USD</b> Per Hour
                        </p>
                    </div>
                </div>
            </div>
            <button
                onClick={handleConfirm}
                style={{
                    color: 'white',
                    backgroundColor: 'black',
                    fontWeight: '400',
                }}
            >
                Confirm
            </button>
            <button
                onClick={() => {
                    setConfirmPrice(false);
                }}
            >
                Cancel
            </button>
        </div>
    );
}
