'use client';

import { useRouter, usePathname } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';

import { selectUser } from '@/lib/redux/slices/userSlice';
import { useAppSelector } from '@/lib/redux/hooks';

interface AuthGuardProps {
    children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
    const user = useAppSelector(selectUser);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (user.email === '' && pathname !== '/' && pathname !== '/signIn') {
            router.replace('/');
        }
    }, [pathname]);
    return <>{children}</>;
}
