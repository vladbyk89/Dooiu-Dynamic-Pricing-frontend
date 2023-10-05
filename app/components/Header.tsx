'use client';

import React, { useEffect, useState } from 'react';

// Redux
import { useAppSelector } from '@/lib/redux/hooks';
import { selectUser } from '@/lib/redux/slices/userSlice';

// NextJs
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

// Icons
import DooiuBlackIcon from './icons/DooiuBlackIcon';
import { BsChevronLeft } from 'react-icons/bs';

export default function Header() {
    const [returnActive, setReturnActive] = useState(false);
    const storeUser = useAppSelector(selectUser);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const pathArr = pathname.split('/');

        if (pathArr.length > 2) {
            setReturnActive(true);
        } else {
            setReturnActive(false);
        }
    }, [pathname]);

    return (
        <div className='header'>
            {returnActive && (
                <div onClick={() => router.back()} className='returnButton'>
                    <BsChevronLeft />
                    <p>Return</p>
                </div>
            )}
            <div className='logoBox'>
                <DooiuBlackIcon />
                <p>Dooiu</p>
            </div>
        </div>
    );
}
