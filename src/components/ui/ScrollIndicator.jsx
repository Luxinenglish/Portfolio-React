import React from 'react';

export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-purple-400 rounded-full"></div>
            </div>
        </div>
    );
}