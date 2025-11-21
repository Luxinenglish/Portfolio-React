import React from 'react';
import { Music, Gamepad2, Car, Code } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text">About Me</h2>

                <div className="backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 md:p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <p className="text-base md:text-xl leading-relaxed mb-6">
                        Hello! I'm <span className="text-purple-400 font-semibold">Asuna Cracotte™</span>, a passionate singer and gamer.
                        I also love cars and motorbikes. I actually work in informatic and I'm the secretary of{' '}
                        <span className="text-purple-400 font-semibold">APLOSN</span>{' '}
                        (A little association who brings up the aspects of Open Source and cybersecurity).
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-8">
                        <div className="p-4 md:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                            <Music className="w-7 h-7 md:w-8 md:h-8 text-purple-400 mb-3" />
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Music Lover</h3>
                            <p className="text-sm md:text-base text-gray-400">Enthusiastic singer and cover creator</p>
                        </div>

                        <div className="p-4 md:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                            <Gamepad2 className="w-7 h-7 md:w-8 md:h-8 text-purple-400 mb-3" />
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Gaming Lover</h3>
                            <p className="text-sm md:text-base text-gray-400">Passionate gamer playing a bunch of video games</p>
                        </div>

                        <div className="p-4 md:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                            <Car className="w-7 h-7 md:w-8 md:h-8 text-purple-400 mb-3" />
                            <h3 className="text-lg md:text-xl font-semibold mb-2">Cars & Motorbikes lover</h3>
                            <p className="text-sm md:text-base text-gray-400">Love for cars and motorbikes</p>
                        </div>

                        <div className="p-4 md:p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                            <Code className="w-7 h-7 md:w-8 md:h-8 text-purple-400 mb-3" />
                            <h3 className="text-lg md:text-xl font-semibold mb-2">IT worker</h3>
                            <p className="text-sm md:text-base text-gray-400">Working in IT and promoting Open Source with my association</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}