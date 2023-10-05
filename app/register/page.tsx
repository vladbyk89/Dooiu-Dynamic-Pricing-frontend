'use client';

import axios from 'axios';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Select from 'react-select';

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: {
        country: string;
        city: string;
        continent: string;
    };
    imageUrl: string;
    staticPrice: number;
    freeMinutes: number;
    serviceCategory: string;
    languages: string[];
}

export default function page() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data);

        await axios.post('/api/users/register', data);

        // reset();
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                padding: '5vw',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '1rem',
            }}
        >
            <label htmlFor='firstName'>
                First Name:{' '}
                <input
                    type='text'
                    id='firstName'
                    placeholder='John'
                    {...register('firstName')}
                />
            </label>
            <label htmlFor='lastName'>
                Last Name:{' '}
                <input
                    type='text'
                    id='lastName'
                    placeholder='Doe'
                    {...register('lastName')}
                />
            </label>
            <label htmlFor='email'>
                Email:{' '}
                <input
                    type='email'
                    id='email'
                    placeholder='john123@gmail.com'
                    {...register('email')}
                />
            </label>
            <label htmlFor='password'>
                Password:{' '}
                <input
                    type='password'
                    id='password'
                    placeholder='***********'
                    {...register('password')}
                />
            </label>
            <label htmlFor='location' style={{ width: '100%' }}>
                Location:{' '}
                <input
                    style={{ width: '20%' }}
                    type='text'
                    {...register('location.city')}
                    placeholder='New York'
                />
                <input
                    style={{ width: '20%' }}
                    type='text'
                    {...register('location.country')}
                    placeholder='USA'
                />
                <input
                    style={{ width: '20%' }}
                    type='text'
                    {...register('location.continent')}
                    placeholder='North America'
                />
            </label>
            <label htmlFor='imageUrl' style={{ width: '100%' }}>
                Image URL:{' '}
                <input
                    style={{ width: '100%' }}
                    id='imageUrl'
                    type='text'
                    {...register('imageUrl')}
                    placeholder='https://example.com/image.png'
                />
            </label>

            <label htmlFor='staticPrice'>
                Price per 30 minutes call:{' '}
                <input
                    type='number'
                    id='staticPrice'
                    placeholder='12.5'
                    {...register('staticPrice')}
                />
            </label>
            <label htmlFor='freeMinutes'>
                Free minutes on first call:{' '}
                <input
                    type='number'
                    id='freeMinutes'
                    placeholder='5'
                    {...register('freeMinutes')}
                />
            </label>
            <label htmlFor='serviceCategory'>
                Service Category:{' '}
                <select {...register('serviceCategory')} id='serviceCategory'>
                    <option value=''>Select your field</option>
                    <option value='Architecture and Engineering Services'>
                        Architecture and Engineering Services
                    </option>
                    <option value='Entertainment, Sports, Gaming, Travel, Fashion'>
                        Entertainment, Sports, Gaming, Travel, Fashion
                    </option>
                    <option value='Health, Mental Health and Fitness'>
                        Health, Mental Health and Fitness
                    </option>
                    <option value='Personal Coaching and Personal Life'>
                        Personal Coaching and Personal Life
                    </option>
                    <option value='Social Media'>Social Media</option>
                    <option value='Financial and Legal Services'>
                        Financial and Legal Services
                    </option>
                    <option value='Business Management, Marketing, Product and HR'>
                        Business Management, Marketing, Product and HR
                    </option>
                    <option value='Music, Photography, Audio and Visual Services'>
                        Music, Photography, Audio and Visual Services
                    </option>
                    <option value='IT, Data and Analytical Services'>
                        IT, Data and Analytical Services
                    </option>
                    <option value='Writing and Language Services'>
                        Writing and Language Services
                    </option>
                </select>
            </label>
            <label htmlFor='languages'>
                Native Language:{' '}
                <input type='text' {...register('languages')} />
            </label>

            <button type='submit'>Submit</button>
        </form>
    );
}
