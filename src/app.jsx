import React from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import BackgroundEffects from './components/ui/BackgroundEffects';
import { useMousePosition } from './hooks/useMousePosition';

export default function App() {
    const mousePos = useMousePosition();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden">
            <BackgroundEffects mousePos={mousePos} />
            <Navigation />
            <HeroSection mousePos={mousePos} />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}