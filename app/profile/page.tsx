'use client';

// ** React
import React, { useState } from 'react';

// NextJs
import Link from 'next/link';

// ** Styles
import '../styles/profile/profileStyle.scss';

//** Redux */
import { useAppSelector } from '@/lib/redux/hooks';
import { selectUser } from '@/lib/redux/slices/userSlice';

// ** Third party
import { MdModeEditOutline } from 'react-icons/md';
import { LuDollarSign } from 'react-icons/lu';
import { BiRefresh } from 'react-icons/bi';
import { SlPresent } from 'react-icons/sl';

// ** Custom components
import UserInfo from '../components/ProfilePage/UserInfo';
import WarningPopUp from '../components/ProfilePage/WarningPopUp';
import ActivatePopUp from '../components/ProfilePage/ActivatePopUp';
import ImageBox from '../components/ImageBox';
import ChargePrice from '../components/ProfilePage/ChargePrice';
import DynamicPriceButton from '../components/ProfilePage/DynamicPriceButton';

export default function Profile() {
    const user = useAppSelector(selectUser);

    // Use State
    const [openInfo, setOpenInfo] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);

    return (
        <div className='profilePage'>
            <div className='user'>
                <ImageBox size={80} imageUrl={user.imageUrl} />
                <div className='userIntroduction'>
                    <h2>Hello!</h2>
                    <h3>
                        {user.firstName} {user.lastName}
                    </h3>
                    <Link href=''>
                        <MdModeEditOutline /> Edit info
                    </Link>
                </div>
            </div>

            <div className='charge pricing'>
                <div className='iconBox'>
                    <LuDollarSign />
                </div>
                {/* Show different text when dynamic price is activated */}
                <ChargePrice user={user} />
                {!user.dynamicPricing.isActive && (
                    <Link href='/profile/change-pricing'>
                        <BiRefresh />
                        Change
                    </Link>
                )}
            </div>

            <div className='freeMin pricing'>
                <div className='iconBox'>
                    <SlPresent />
                </div>
                <h4>Free minutes</h4>
                <h3>{user.freeMinutes} minutes</h3>
                <p>Free minutes on first call</p>
                <Link href=''>
                    <BiRefresh />
                    Change
                </Link>
            </div>

            <UserInfo user={user} />

            <DynamicPriceButton
                setOpenInfo={setOpenInfo}
                setOpenWarning={setOpenWarning}
                user={user}
            />

            {/* Dynamic Pricing pop up window */}
            {openInfo && <ActivatePopUp setOpenInfo={setOpenInfo} />}

            {/* Open warning for deactivating dynamic pricing */}
            {openWarning && (
                <WarningPopUp
                    setOpenWarning={setOpenWarning}
                    email={user.email}
                />
            )}
        </div>
    );
}
