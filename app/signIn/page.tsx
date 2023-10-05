'use client';

// React
import React, { useEffect, useState } from 'react';

// Styles
import style from '../styles/signIn/signIn.module.scss';

// Redux
import { useAppDispatch } from '@/lib/redux/hooks';
import { initiateExperts } from '@/lib/redux/slices/experts';

// Third party
import { useRouter } from 'next/navigation';
import { UserType, initiateUser } from '@/lib/redux/slices/userSlice';
import axios from 'axios';

// Custom Components
import Loader from '../components/Loader';
import ImageBox from '../components/ImageBox';

export default function SignIn() {
    // Hooks
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState(false);
    const [experts, setExperts] = useState<UserType[]>([]);

    const login = async (email: string, password: string) => {
        const data = {
            email,
            password,
        };

        const user = await axios
            .post('/api/users/login', data)
            .then((res) => {
                dispatch(initiateUser(res.data.user));

                const filter = experts.filter(
                    (user) => user._id !== res.data.user._id
                );

                dispatch(initiateExperts(filter));

                return res.data.user;
            })
            .catch((err) => {
                setErrorMsg(err.response.data.error);
            });

        if (!user) return;

        router.back();
    };

    useEffect(() => {
        const getAllExperts = async () => {
            const response = await axios.get('api/users/get-users');

            const data = response.data.users as UserType[];

            dispatch(initiateExperts(data));

            setExperts(data);
        };

        getAllExperts();
    }, []);

    return experts.length === 0 ? (
        <Loader />
    ) : (
        <main className={style.signInPage}>
            <h2>Choose a user to sign in</h2>
            <div className={style.expertsBox}>
                {experts.map((user) => (
                    <button
                        onClick={() => login(user.email, user.password)}
                        className={style.signInUser}
                        key={user._id}
                    >
                        <h2>
                            {user.firstName} {user.lastName}
                        </h2>
                        <ImageBox size={100} imageUrl={user.imageUrl} />
                        <p>{user.serviceCategory}</p>
                    </button>
                ))}
            </div>
            {errorMsg && <h4 style={{ color: 'red' }}>An Error accured</h4>}
        </main>
    );
}
