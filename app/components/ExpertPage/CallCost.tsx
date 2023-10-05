// React
import React, { useState } from 'react';

// Custom components
import ExclamationMarkFull from '@/app/components/icons/ExclamationMarkFull';

// Icons
import { LuDollarSign } from 'react-icons/lu';

interface Props {
    halfHourPrice: number;
    dynamicPricing: {
        isActive: boolean;
        minPrice: number;
        dynamicPrice: number;
    };
}

export default function CallCost({ halfHourPrice, dynamicPricing }: Props) {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <div className='row'>
            <div className='oneSide'>
                <LuDollarSign />
                <p>Call Cost</p>
            </div>
            <div className='oneSide'>
                {showToolTip && (
                    <div className='toolTip'>
                        {/* Change tooltip text if dynamic pricing not on */}
                        {dynamicPricing.isActive ? (
                            <>
                                <p>Price suggested by Dooiu's technology.</p>
                            </>
                        ) : (
                            <p>The price is set by the expert</p>
                        )}
                    </div>
                )}
                <ExclamationMarkFull setShowToolTip={setShowToolTip} />
                <div className='amount'>
                    <h5>
                        $
                        {dynamicPricing.isActive
                            ? dynamicPricing.dynamicPrice.toFixed(2)
                            : halfHourPrice.toFixed(2)}
                    </h5>
                    <em>USD/30min</em>
                </div>
            </div>
        </div>
    );
}
