import React from 'react';

interface Props {
    languages: string[];
}

export default function UserLanguages({ languages }: Props) {
    return (
        <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            {languages.map((lang, index) => {
                if (index === languages.length - 1) {
                    return 'and ' + lang;
                } else if (index === languages.length - 2) {
                    return lang + ' ';
                } else {
                    return lang + ', ';
                }
            })}
        </div>
    );
}
