import React from 'react';

// Icons
import { LuBriefcase } from 'react-icons/lu';

interface Props {
    serviceCategory: string;
}

export default function Skills({ serviceCategory }: Props) {
    const skillsString = serviceCategory.includes('and')
        ? serviceCategory.replace('and', ',')
        : serviceCategory;

    const skillsArr = skillsString.trim().split(',');

    const skillStyle = {
        backgroundColor: '#0e1113',
        color: 'white',
        fontWeight: '500',
        padding: '0.2rem 1rem',
        borderRadius: '75px 75px 75px 75px / 75px 75px 75px 75px',
        fontSize: '.8rem',
    };

    return (
        <div className='row'>
            <div className='oneSide'>
                <LuBriefcase />
                <p>Skills</p>
            </div>
            <div className='oneSide'>
                <div className='skills'>
                    {skillsArr.map((skill, index) => (
                        <p key={index} style={skillStyle}>
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
