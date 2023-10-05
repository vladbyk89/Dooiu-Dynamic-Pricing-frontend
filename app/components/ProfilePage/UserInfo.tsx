import React from 'react';

// ** Custom components
import Categories from './Categories';
import UserLanguages from './UserLanguages';

// ** Icons
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuBriefcase } from 'react-icons/lu';
import { MdModeEditOutline, MdLanguage } from 'react-icons/md';

// ** Types
import { UserType } from '@/lib/redux/slices/userSlice';

interface Props {
    user: UserType;
}

export default function UserInfo({ user }: Props) {
    return (
        <div className='profileDesc'>
            <h2>Profile</h2>
            <div className='infoRow'>
                <HiOutlineLocationMarker /> {user.location.city},
                <b>{user.location.country}</b>
            </div>
            <div className='infoRow'>
                <MdLanguage /> <UserLanguages languages={user.languages} />
            </div>
            <div className='infoRow'>
                <LuBriefcase />
                <Categories serviceCategory={user.serviceCategory} />
            </div>
            <a href=''>
                <MdModeEditOutline /> Edit
            </a>
        </div>
    );
}
