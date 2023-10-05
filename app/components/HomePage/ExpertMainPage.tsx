import React, { useState } from 'react';

// Redux state
import { UserType } from '@/lib/redux/slices/userSlice';

// NextJs
import Link from 'next/link';

// Icons
import ExclamationMarkFull from '../icons/ExclamationMarkFull';
import SolidStar from '../icons/SolidStar';

// Styles
import style from '../../styles/home/home.module.scss';
import ImageBox from '../ImageBox';

interface Props {
    user: UserType;
}

export default function ExpertMainPage({ user }: Props) {
    const [showToolTip, setShowToolTip] = useState(false);

    return (
        <div className={style.expertBox}>
            <h3 style={{ fontWeight: '500', color: '#fafaf9' }}>
                <Link href={'search/' + user._id}>
                    {user.firstName} {user.lastName}
                </Link>
            </h3>
            <ImageBox imageUrl={user.imageUrl} size={100} />
            <div className={style.callCost}>
                Call Cost:
                <p className={style.text}>
                    $
                    {user.dynamicPricing.isActive
                        ? user.dynamicPricing.dynamicPrice
                        : user.staticPrice}{' '}
                    USD <ExclamationMarkFull setShowToolTip={setShowToolTip} />
                </p>
            </div>
            <div className={style.toolTip}>
                {user.dynamicPricing.isActive && showToolTip && (
                    <p style={{ textAlign: 'center' }}>Suggested by Dooiu</p>
                )}
                {!user.dynamicPricing.isActive && showToolTip && (
                    <p style={{ textAlign: 'center' }}>Price Is set by user</p>
                )}
            </div>
            <p className={style.text}>{user.serviceCategory}</p>
            <p className={style.text}>
                <SolidStar /> {user.rating} Rating
            </p>
        </div>
    );
}
