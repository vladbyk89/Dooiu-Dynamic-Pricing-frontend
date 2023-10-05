import React from 'react';

interface Props {
    setShowToolTip: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExclamationMarkFull({ setShowToolTip }: Props) {
    return (
        <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                cursor: 'pointer',
            }}
            onMouseEnter={() => {
                setShowToolTip(true);
            }}
            onMouseLeave={() => {
                setShowToolTip(false);
            }}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.7 9.49926C18.7 11.9392 17.7308 14.2793 16.0054 16.0046C14.2801 17.73 11.94 18.6993 9.50005 18.6993C7.06006 18.6993 4.72 17.73 2.99467 16.0046C1.26933 14.2793 0.300049 11.9392 0.300049 9.49926C0.300049 7.05926 1.26933 4.71921 2.99467 2.99387C4.72 1.26854 7.06006 0.299255 9.50005 0.299255C11.94 0.299255 14.2801 1.26854 16.0054 2.99387C17.7308 4.71921 18.7 7.05926 18.7 9.49926ZM10.65 4.89926C10.65 5.20425 10.5289 5.49676 10.3132 5.71243C10.0976 5.92809 9.80505 6.04926 9.50005 6.04926C9.19505 6.04926 8.90254 5.92809 8.68688 5.71243C8.47121 5.49676 8.35005 5.20425 8.35005 4.89926C8.35005 4.59426 8.47121 4.30175 8.68688 4.08608C8.90254 3.87042 9.19505 3.74926 9.50005 3.74926C9.80505 3.74926 10.0976 3.87042 10.3132 4.08608C10.5289 4.30175 10.65 4.59426 10.65 4.89926ZM8.35005 8.34926C8.04505 8.34926 7.75254 8.47042 7.53688 8.68608C7.32121 8.90175 7.20005 9.19426 7.20005 9.49926C7.20005 9.80425 7.32121 10.0968 7.53688 10.3124C7.75254 10.5281 8.04505 10.6493 8.35005 10.6493V14.0993C8.35005 14.4043 8.47121 14.6968 8.68688 14.9124C8.90254 15.1281 9.19505 15.2493 9.50005 15.2493H10.65C10.955 15.2493 11.2476 15.1281 11.4632 14.9124C11.6789 14.6968 11.8 14.4043 11.8 14.0993C11.8 13.7943 11.6789 13.5017 11.4632 13.2861C11.2476 13.0704 10.955 12.9493 10.65 12.9493V9.49926C10.65 9.19426 10.5289 8.90175 10.3132 8.68608C10.0976 8.47042 9.80505 8.34926 9.50005 8.34926H8.35005Z'
                fill='#6f6f6f'
            />
        </svg>
    );
}
