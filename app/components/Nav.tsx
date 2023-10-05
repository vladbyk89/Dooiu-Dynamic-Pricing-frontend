'use client';

/* Core */
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Redux
import { useAppSelector } from '@/lib/redux/hooks';
import { selectUser } from '@/lib/redux/slices/userSlice';

// Icons
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';
import CallsIcon from './icons/CallsIcon';
import ProfileIcon from './icons/ProfileIcon';

export default function Nav() {
    const storeUser = useAppSelector(selectUser);
    const pathname = usePathname();
    const basePath = pathname.split('/')[1];

    if (storeUser._id === '')
        return <div style={{ backgroundColor: 'black' }}></div>;

    return (
        <nav className='nav'>
            <Link className='link' href='/'>
                <HomeIcon fill={basePath === '' ? '#fe3b1f' : '#909090'} />
            </Link>
            <Link className='link' href='/search'>
                <SearchIcon
                    fill={basePath === 'search' ? '#fe3b1f' : '#909090'}
                />
            </Link>
            <Link className='link' href='/calls'>
                <CallsIcon
                    fill={basePath === 'calls' ? '#fe3b1f' : '#909090'}
                />
            </Link>
            <Link className='link' href='/profile'>
                <ProfileIcon
                    fill={basePath === 'profile' ? '#fe3b1f' : '#909090'}
                />
            </Link>
        </nav>
    );
}
