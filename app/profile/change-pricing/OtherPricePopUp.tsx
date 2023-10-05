import React from 'react';

interface Props {
    chosenPrice: number;
    setChosenPrice: React.Dispatch<React.SetStateAction<number>>;
    setOtherPricePopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OtherPricePopUp({
    chosenPrice,
    setChosenPrice,
    setOtherPricePopUp,
}: Props) {
    return (
        <div className='popUpPriceEnter'>
            <h2>Set your own price</h2>
            <label htmlFor='otherPriceInput' className='otherPriceLabel'>
                Price for a 30-minute call
                <b>$</b>
                {/* make sure user input only numbers */}
                <input
                    type='text'
                    name='otherPriceInput'
                    id='otherPriceInput'
                    placeholder='29.99'
                    value={chosenPrice == 0 ? '' : chosenPrice}
                    onChange={(e) => {
                        const result = e.target.value.replace(/[^0-9]/gi, '');

                        setChosenPrice(Number(result));
                    }}
                />
            </label>
            <button
                className='otherPriceContinueBtn'
                disabled={chosenPrice === 0}
                style={{
                    backgroundColor: chosenPrice === 0 ? '#00000040' : 'black',
                    cursor: chosenPrice === 0 ? 'not-allowed' : 'pointer',
                }}
                onClick={() => setOtherPricePopUp(false)}
            >
                Continue
            </button>
            <button
                onClick={() => {
                    setChosenPrice(0);
                    setOtherPricePopUp(false);
                }}
                className='cancelBtn'
            >
                Cancel
            </button>
        </div>
    );
}
