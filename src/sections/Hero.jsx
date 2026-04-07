import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Sparkles } from 'lucide-react';
import Scene3D from '../components/Scene3D';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen bg-[#222831] overflow-hidden">

            {/* 3D Background - Interactive Globe */}
            <div className="absolute inset-0 z-0">
                <Canvas gl={{ alpha: true, antialias: true }}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                    <Scene3D />
                </Canvas>
            </div>

            {/* Foreground Content - Extreme Z-Index to guarantee visibility */}
            <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none px-6">

                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-primary-500/30 shadow-lg pointer-events-auto"
                    >
                        <Sparkles className="text-primary-400" size={16} />
                        <span className="text-sm text-gray-200 font-medium tracking-wide">Open to Opportunities</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="pointer-events-auto"
                    >
                        <p className="text-primary-400 text-lg md:text-xl mb-4 font-bold tracking-widest uppercase">
                            Hello, I'm
                        </p>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                            Atul <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-[#DFD0B8]">Singh</span>
                        </h1>
                    </motion.div>

                    {/* Role & Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6 pointer-events-auto"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <Code className="text-primary-400" size={28} />
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-100 drop-shadow-md">
                                Full Stack Developer
                            </h2>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
                            {['MERN Stack', 'AI/ML', 'Data Analytics', 'DSA'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-5 py-2 bg-[#393E46]/80 backdrop-blur-md rounded-xl text-primary-400 text-sm font-bold border border-white/5 shadow-xl"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 pointer-events-auto"
                    >
                        <a
                            href="#contact"
                            className="group px-10 py-4 bg-primary-500 hover:bg-primary-600 rounded-2xl text-[#222831] font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            Let's Connect →
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1M-KgosmsjBlqrHooFwY8cjBi1T0Z-nqH/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 backdrop-blur-md rounded-2xl text-white font-bold hover:bg-white/10 transition-all duration-300 border border-primary-500/30 shadow-lg whitespace-nowrap"
                        >
                            View Resume
                        </a>

                        <a
                            href="#skills"
                            className="hidden sm:inline-block px-10 py-4 bg-white/5 backdrop-blur-md rounded-2xl text-white font-bold hover:bg-white/10 transition-all duration-300 border border-white/10 shadow-lg whitespace-nowrap"
                        >
                            Tech Stack
                        </a>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-[100]"
            >
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Scroll Down</span>
                <ChevronDown className="text-primary-400 animate-bounce" size={32} />
            </motion.div>

        </section>
    );
};

export default Hero;
