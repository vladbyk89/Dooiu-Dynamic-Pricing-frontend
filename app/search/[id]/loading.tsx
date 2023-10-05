import React from 'react';

import Loader from '@/app/components/Loader';

export default function Loading() {
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
            <Loader />
        </div>
    );
}
