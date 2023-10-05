import React from 'react';

// ** Third party imports
import { MdLanguage } from 'react-icons/md';

// ** Custom components
import UserLanguages from '../ProfilePage/UserLanguages';

interface Props {
    languages: string[];
}

export default function Languages({ languages }: Props) {
    return (
        <div className='row'>
            <div className='oneSide'>
                <MdLanguage />
                <p>Speaks</p>
            </div>
            <div className='oneSides'>
                <UserLanguages languages={languages} />
            </div>
        </div>
    );
}
