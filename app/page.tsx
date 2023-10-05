'use client';

// NextJs
import Link from 'next/link';

// Redux
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { selectUser, resetUser } from '@/lib/redux/slices/userSlice';
import { selectExperts } from '@/lib/redux/slices/experts';
import ExpertMainPage from './components/HomePage/ExpertMainPage';

// Styles
import style from './styles/home/home.module.scss';

export default function Home() {
    // Hooks
    const storeUser = useAppSelector(selectUser);
    const storeExperts = useAppSelector(selectExperts);
    const dispatch = useAppDispatch();

    const expertWithActiveDynamicPrice = storeExperts.find(
        (user) => user.dynamicPricing.isActive
    );
    const expertWithNonActiveDynamicPrice = storeExperts.find(
        (user) => !user.dynamicPricing.isActive
    );

    if (
        !expertWithActiveDynamicPrice ||
        !expertWithNonActiveDynamicPrice ||
        !storeUser._id
    ) {
        return (
            <main className={style.mainWithSignIn}>
                <Link href='/signIn' className={style.signInLink}>
                    Sign-In
                </Link>
            </main>
        );
    }

    return (
        <main className={style.homePageMain}>
            <h3>Recommended Experts</h3>
            <div className={style.recommendedExpertsBox}>
                <ExpertMainPage user={expertWithActiveDynamicPrice} />
                <ExpertMainPage user={expertWithNonActiveDynamicPrice} />
            </div>
            {storeUser.email !== '' && (
                <button
                    className={style.signOutButton}
                    onClick={() => dispatch(resetUser())}
                >
                    Sign-Out
                </button>
            )}
        </main>
    );
}
