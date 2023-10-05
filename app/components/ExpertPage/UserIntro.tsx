import React from 'react';

// Icons
import CalendarIcon from '@/app/components/icons/CalendarIcon';
import SolidStar from '@/app/components/icons/SolidStar';

// NextJs
import Link from 'next/link';

// Types
import { UserType } from '@/lib/redux/slices/userSlice';
import ImageBox from '../ImageBox';

interface Props {
    user: UserType;
}

export default function UserIntro({ user }: Props) {
    return (
        <div className='userIntro'>
            <ImageBox imageUrl={user.imageUrl} size={130} />
            <h3 style={{ fontWeight: '500', color: '#fafaf9' }}>
                {user.firstName} {user.lastName}
            </h3>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <SolidStar />
                    <p>{user.rating}</p>
                    <b style={{ color: '#b5b0b0', fontSize: '1.1rem' }}>
                        Rating
                    </b>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <CalendarIcon />
                    <Link href=''>Schedule Call</Link>
                </div>
            </div>
        </div>
    );
}
