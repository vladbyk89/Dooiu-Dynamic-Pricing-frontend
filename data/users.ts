const categories = [
    'Architecture and Engineering Services',
    'Entertainment, Sports, Gaming, Travel, Fashion',
    'Health, Mental Health and Fitness',
    'Personal Coaching and Personal Life',
    'Social Media',
    'Financial and Legal Services',
    'Business Management, Marketing, Product and HR',
    'Music, Photography, Audio and Visual Services',
    'IT, Data and Analytical Services',
    'Writing and Language Services',
];

export const users = [
    {
        id: '7bb97937-a1c3-401b-9fff-6bff3ef5e549',
        firstName: 'Vladislav',
        lastName: 'Bykanov',
        email: 'vladislav123@gmail.com',
        password: '12345678',
        location: {
            country: 'The Netherlands',
            city: 'Heerenveen',
            continent: 'Europe',
        },
        imageUrl:
            'https://pbs.twimg.com/media/Cx4M034UkAAKSLO?format=webp&name=medium',
        staticPrice: 15,
        freeMinutes: 10,
        dynamicPricing: {
            isActive: true,
            minPrice: 15,
            dynamicPrice: 0,
        },
        serviceCategory: 'Entertainment, Sports, Gaming, Travel, Fashion',
        rating: 3,
        languages: ['English', 'Russian', 'Hebrew', 'Dutch'],
    },
    {
        firstName: 'Cris',
        lastName: 'berstein',
        email: 'cris123@gmail.com',
        password: '12345678',
        location: {
            country: 'Chile',
            city: 'Santiago',
            continent: 'South-America',
        },
        imageUrl:
            'https://media.licdn.com/dms/image/C4E03AQHMa5470H8XQA/profile-displayphoto-shrink_800_800/0/1625708682946?e=1700092800&v=beta&t=ZfpiB5_X2cyED3KgoMKxtZ_a7im20W_1fQTy7uHre-M',
        staticPrice: 35,
        freeMinutes: 15,
        dynamicPricing: {
            isActive: false,
            minPrice: 0,
            dynamicPrice: 0,
        },
        serviceCategory: 'Architecture and Engineering Services',
        rating: 5,
        languages: ['English', 'Spanish'],
        id: 'ec23d152-6c83-4e7f-83f2-a3e2820898ac',
    },
    {
        firstName: 'Hayim',
        lastName: 'Makabee',
        email: 'hayim123@gmail.com',
        password: '12345678',
        location: {
            country: 'Israel',
            city: 'Haifa',
            continent: 'Asia',
        },
        imageUrl:
            'https://media.licdn.com/dms/image/C4D03AQEzP6mVshGMZw/profile-displayphoto-shrink_800_800/0/1565332917041?e=1700092800&v=beta&t=_Gd8qu923Q5q4J6SmU_WcbUlIFnWWaVhKCaAMAuO-_U',
        staticPrice: 30,
        freeMinutes: 5,
        dynamicPricing: {
            isActive: true,
            minPrice: 15,
            dynamicPrice: 27.5,
        },
        serviceCategory: 'IT, Data and Analytical Services',
        rating: 4,
        languages: ['Hebrew', 'English', 'Spanish'],
        id: 'ba3523e7-56fc-4f5b-99fd-2cafd010404b',
    },
];
