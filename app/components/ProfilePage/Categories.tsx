import React from 'react';

interface Props {
    serviceCategory: string;
}

export default function Categories({ serviceCategory }: Props) {
    const skillsString = serviceCategory.includes('and')
        ? serviceCategory.replace('and', ',')
        : serviceCategory;

    const skillsArr = skillsString.trim().split(',').slice(0, 3);

    const skillStyle = {
        backgroundColor: '#76818d',
        color: 'white',
        fontWeight: '500',
        padding: '0.2rem 1rem',
        borderRadius: '75px 75px 75px 75px / 75px 75px 75px 75px',
        fontSize: '0.8rem',
    };

    return (
        <div
            className='skills'
            style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '10px',
            }}
        >
            <div style={{ display: 'flex', gap: '5px' }}>
                {skillsArr.map((skill, index) => (
                    <p key={index} style={skillStyle}>
                        {skill}
                    </p>
                ))}
            </div>
        </div>
    );
}
