// React
import React, { useState } from 'react';

// Custom components
import ExclamationMarkFull from '@/app/components/icons/ExclamationMarkFull';

// Icons
import { SlPresent } from 'react-icons/sl';

interface Props {
    freeMinutes: number;
}

export default function FreeMinutes({ freeMinutes }: Props) {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <div className='row'>
            <div className='oneSide'>
                <SlPresent />
                <p>Free Minutes</p>
            </div>
            <div className='oneSide'>
                {showToolTip && (
                    <div className='toolTip'>
                        <p>Free minutes on first call with the expert.</p>
                    </div>
                )}
                <ExclamationMarkFull setShowToolTip={setShowToolTip} />
                <div className='amount'>
                    <h5>{freeMinutes} Min</h5>
                    <em>First Call</em>
                </div>
            </div>
        </div>
    );
}
