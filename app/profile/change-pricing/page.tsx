'use client';

// ** React
import React, { useState } from 'react';

// ** Styles
import '../../styles/profile/pricingStyle.scss';

// ** NextJs
import Link from 'next/link';

// ** Custom components
import CalculatorIcon from '@/app/components/icons/CalculatorIcon';
import OtherPricePopUp from './OtherPricePopUp';
import ConfirmChosenPrice from './ConfirmChosenPrice';

export default function ChangePricing() {
    const blueColor = '#005eb7';

    const priceOptions = {
        low: 9,
        mid: 18,
        high: 30,
    };

    // ** Use State
    const [chosenPrice, setChosenPrice] = useState(0);
    const [otherPricePopUp, setOtherPricePopUp] = useState(false);
    const [confirmPrice, setConfirmPrice] = useState(false);

    const buttonStyle = {
        width: '100%',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.2rem',
        padding: '.5rem',
        marginTop: 'auto',
        backgroundColor: chosenPrice !== 0 ? '#222222' : '#22222240',
        cursor: chosenPrice !== 0 ? 'pointer' : 'default',
    };

    return (
        <main className='changePricePage'>
            {/* Show price choises */}
            {!confirmPrice && (
                <>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>
                            Choose your price for a
                        </h2>
                        <h2 style={{ textAlign: 'center' }}>30-min call</h2>
                    </div>
                    <p style={{ textAlign: 'center' }}>
                        This is how much you will charge someone who wants to
                        pay to talk to you.
                    </p>
                    <div className='priceOptions'>
                        <div
                            className='price'
                            onClick={() => setChosenPrice(priceOptions.low)}
                            style={{
                                backgroundColor:
                                    chosenPrice === priceOptions.low
                                        ? blueColor
                                        : 'white',
                                color:
                                    chosenPrice === priceOptions.low
                                        ? 'white'
                                        : 'black',
                            }}
                        >
                            <b>${priceOptions.low}</b>/30min
                        </div>
                        <div
                            className='price'
                            onClick={() => setChosenPrice(priceOptions.mid)}
                            style={{
                                backgroundColor:
                                    chosenPrice === priceOptions.mid
                                        ? blueColor
                                        : 'white',
                                color:
                                    chosenPrice === priceOptions.mid
                                        ? 'white'
                                        : 'black',
                            }}
                        >
                            <b>${priceOptions.mid}</b>/30min
                        </div>
                        <div
                            className='price'
                            onClick={() => setChosenPrice(priceOptions.high)}
                            style={{
                                backgroundColor:
                                    chosenPrice === priceOptions.high
                                        ? blueColor
                                        : 'white',
                                color:
                                    chosenPrice === priceOptions.high
                                        ? 'white'
                                        : 'black',
                            }}
                        >
                            <b>${priceOptions.high}</b>/30min
                        </div>
                        <div
                            className='price'
                            onClick={() => {
                                setChosenPrice(0);
                                setOtherPricePopUp(true);
                            }}
                        >
                            <b>Other</b>
                        </div>
                    </div>
                    {chosenPrice !== 0 && (
                        <div className='messageBox'>
                            <CalculatorIcon fontSize={40} />
                            <div>
                                <p>Equivalant of charging approximately</p>
                                <h3 style={{ color: blueColor }}>
                                    ${chosenPrice * 2} per hour
                                </h3>
                            </div>
                        </div>
                    )}
                    <button
                        disabled={chosenPrice === 0}
                        className='continueBtn'
                        style={buttonStyle}
                        onClick={() => setConfirmPrice(true)}
                    >
                        Continue
                    </button>
                    <div className='linkBox'>
                        <p>Not sure how to set your prices?</p>
                        <p>
                            No worries,{' '}
                            <Link
                                href='/profile/activate-dynamic-pricing'
                                style={{ color: blueColor }}
                                className='dynamicPricingLink'
                            >
                                click here
                            </Link>{' '}
                            and we'll help you.
                        </p>
                    </div>
                    {otherPricePopUp && (
                        <OtherPricePopUp
                            chosenPrice={chosenPrice}
                            setChosenPrice={setChosenPrice}
                            setOtherPricePopUp={setOtherPricePopUp}
                        />
                    )}
                </>
            )}
            {/* Show confirm chosen price page */}
            {confirmPrice && (
                <ConfirmChosenPrice
                    setConfirmPrice={setConfirmPrice}
                    chosenPrice={chosenPrice}
                />
            )}
        </main>
    );
}
