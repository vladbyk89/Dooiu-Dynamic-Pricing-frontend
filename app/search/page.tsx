'use client';

import React, { useEffect, useState } from 'react';

// NextJs
import Image from 'next/image';
import Link from 'next/link';

// Third party
import axios from 'axios';

// Redux
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { selectUser } from '@/lib/redux/slices/userSlice';
import { initiateExperts } from '@/lib/redux/slices/experts';

// Styles
import '../styles/experts/expertsPage.scss';

// Types
import { UserType } from '@/lib/redux/slices/userSlice';
import Loader from '../components/Loader';
import ImageBox from '../components/ImageBox';

export default function Experts() {
    const dispatch = useAppDispatch();
    const storeUser = useAppSelector(selectUser);

    const [experts, setExperts] = useState<UserType[]>([]);

    useEffect(() => {
        const getAllExperts = async () => {
            const response = await axios.get('api/users/get-users');

            const data = response.data.users as UserType[];

            const expertsToShow = data.filter(
                (user) => user._id !== storeUser._id
            );
            dispatch(initiateExperts(expertsToShow));

            setExperts(expertsToShow);
        };

        getAllExperts();
    }, []);

    return experts.length === 0 ? (
        <Loader />
    ) : (
        <main className='expertsMain'>
            <h1>Our Experts</h1>
            <div className='usersContainer'>
                {experts.map((user) => (
                    <Link
                        href={{ pathname: 'search/' + user._id }}
                        className='userCard'
                        key={user._id}
                    >
                        <h2
                            style={{
                                textAlign: 'center',
                                fontSize: '1.1rem',
                            }}
                        >
                            {user.firstName} {user.lastName}
                        </h2>
                        <ImageBox size={100} imageUrl={user.imageUrl} />
                        <p
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            {user.serviceCategory}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
