'use client';

// ** React Imports
import React from 'react';

// ** redux
import { selectExperts } from '@/lib/redux/slices/experts';
import { useAppSelector } from '@/lib/redux/hooks';

// ** Styles
import '../../styles/experts/expertProfile.scss';

// ** Custom Components
import UserIntro from '../../components/ExpertPage/UserIntro';
import CallCost from '../../components/ExpertPage/CallCost';
import FreeMinutes from '../../components/ExpertPage/FreeMinutes';
import Location from '../../components/ExpertPage/Location';
import Languages from '../../components/ExpertPage/Languages';
import Skills from '../../components/ExpertPage/Skills';
import { LuMessageSquare } from 'react-icons/lu';

export default function page({ params }: { params: { id: string } }) {
    const users = useAppSelector(selectExperts);

    const user = users.find((user) => user._id === params.id);

    if (!user)
        return (
            <h1 style={{ textAlign: 'center', marginTop: '20vh' }}>
                Something went wrong. Please try again later.
            </h1>
        );

    return (
        <main className='expertProfile'>
            <UserIntro user={user} />
            <CallCost
                halfHourPrice={user.staticPrice}
                dynamicPricing={user.dynamicPricing}
            />
            <FreeMinutes freeMinutes={user.freeMinutes} />
            <Location location={user.location} />
            <Languages languages={user.languages} />
            <Skills serviceCategory={user.serviceCategory} />
            <div className='row'>
                <div className='oneSide'>
                    <LuMessageSquare />
                    Review
                </div>
            </div>
        </main>
    );
}
