// React
import React from 'react';

// NextJs
import Link from 'next/link';

interface Props {
    setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ActivatePopUp({ setOpenInfo }: Props) {
    return (
        <div className='dynamicPricingInfoWindow'>
            <div className='dynamicPricingInfoInnerWindow'>
                <p>
                    The dynamic pricing feature in Dooiu is designed to optimize
                    your earnings by automatically adjusting prices according to
                    the preferences of the individual seeking to connect with
                    you. This will help you maximize profits on our platform.
                </p>
                <div className='buttonBox'>
                    <button>
                        <Link
                            style={{ textDecoration: 'none' }}
                            href='profile/activate-dynamic-pricing'
                        >
                            Continue
                        </Link>
                    </button>
                    <button onClick={() => setOpenInfo(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
