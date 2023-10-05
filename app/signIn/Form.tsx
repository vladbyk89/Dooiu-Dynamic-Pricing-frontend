import React from 'react';

export default function Form() {
    const initUser = { email: '', password: '' };
    // const [userInfo, setUserInfo] = useState(initUser);
    // const [isActive, setIsActive] = useState(false);
    // const handleSubmit = async () => {
    //     if (!isActive) return;

    //     const user = await axios
    //         .post('/api/users/login', userInfo)
    //         .then((res) => {
    //             dispatch(initiateUser(res.data.user));
    //             return res.data.user;
    //         })
    //         .catch((err) => {
    //             setErrorMsg(err.response.data.error);
    //         });

    //     if (!user) return;

    //     setUserInfo(initUser);

    //     router.back();
    // };

    // useEffect(() => {
    //     if (userInfo.email.length > 5 && userInfo.password.length > 5) {
    //         setIsActive(true);
    //     } else {
    //         setIsActive(false);
    //     }
    // }, [userInfo]);
    return (
        <div>
            Form
            {/* <div className='signInForm'>
                <label htmlFor='emailInput'>
                    Email:{' '}
                    <input
                        type='email'
                        id='emailInput'
                        name='emailInput'
                        placeholder='john123@gmail.com'
                        value={userInfo.email}
                        onChange={(e) =>
                            setUserInfo(
                                (prev) =>
                                    (prev = {
                                        ...prev,
                                        email: e.target.value,
                                    })
                            )
                        }
                    />
                </label>
                <label htmlFor='passwordInput'>
                    Password:{' '}
                    <input
                        type='password'
                        id='passwordInput'
                        name='passwordInput'
                        placeholder='********'
                        value={userInfo.password}
                        onChange={(e) =>
                            setUserInfo(
                                (prev) =>
                                    (prev = {
                                        ...prev,
                                        password: e.target.value,
                                    })
                            )
                        }
                    />
                </label>
                <button
                    onClick={handleSubmit}
                    style={{
                        cursor: isActive ? 'pointer' : 'not-allowed',
                        backgroundColor: isActive ? '#222222' : '#444444',
                    }}
                    type='submit'
                >
                    Sign-In
                </button>
            </div> */}
        </div>
    );
}
