import React from 'react';

// ** Third party imports
import { HiOutlineLocationMarker } from 'react-icons/hi';

interface Props {
    location: {
        city: string;
        country: string;
        continent: string;
    };
}

export default function Location({ location }: Props) {
    return (
        <div className='row'>
            <div className='oneSide'>
                <HiOutlineLocationMarker />
                <p>Location</p>
            </div>
            <div className='oneSide'>
                From
                <b>
                    {location.city}, {location.country}
                </b>
            </div>
        </div>
    );
}
