import Image from 'next/image';
import React from 'react';

interface Props {
    imageUrl: string;
    size: number;
}

export default function ImageBox({ imageUrl, size }: Props) {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Image
                alt='user-image'
                src={imageUrl}
                fill
                objectFit='cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
        </div>
    );
}
