import React from 'react';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-purple-500/20">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold glow-text">CRACOTTE</h1>
                <div className="flex gap-6">
                    <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
}