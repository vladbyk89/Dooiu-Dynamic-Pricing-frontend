'use client';

import React from 'react';

import { Circles } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Circles
                height='80'
                width='80'
                color='#fe3b1f'
                ariaLabel='circles-loading'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
            />
        </div>
    );
}
