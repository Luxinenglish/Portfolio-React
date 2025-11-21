import React from 'react';

export default function BackgroundEffects({ mousePos }) {
    return (
        <>
            {/* Cursor glow effect */}
            <div
                className="fixed inset-0 pointer-events-none z-30 opacity-50"
                style={{
                    background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent)`,
                }}
            />

            {/* Animated background particles */}
            <div className="fixed inset-0 opacity-20 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-purple-500"
                        style={{
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                            animationDelay: Math.random() * 5 + 's',
                        }}
                    />
                ))}
            </div>
        </>
    );
}