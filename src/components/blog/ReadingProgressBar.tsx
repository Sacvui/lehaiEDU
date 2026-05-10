'use client';

import React, { useEffect, useState } from 'react';

export function ReadingProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentScroll / scrollHeight).toFixed(4)));
            }
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none">
            <div 
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-transform duration-75 ease-out"
                style={{ 
                    transform: `scaleX(${progress})`,
                    transformOrigin: 'left'
                }}
            />
        </div>
    );
}
