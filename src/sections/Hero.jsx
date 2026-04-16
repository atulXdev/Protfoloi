import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download, Sparkles, Code2, Zap, Brain } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Scene3D from '../components/Scene3D';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const stats = [
        { icon: Code2, label: 'Projects', value: '10+', color: '#7C5CFC' },
        { icon: Zap, label: 'Hackathons', value: '4+', color: '#00D4FF' },
        { icon: Brain, label: 'Certs', value: '4', color: '#22C55E' },
    ];

    return (
        <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center" style={{ background: '#0B0F19' }}>

            {/* ── Ambient Orbs ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="orb-1 absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.18) 0%, transparent 70%)' }} />
                <div className="orb-2 absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)' }} />
                {/* Grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-40" />
            </div>

            {/* ── 3D Background ── */}
            <div className="absolute inset-0 z-0">
                <Canvas gl={{ alpha: true, antialias: true }}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                    <Scene3D />
                </Canvas>
                <div className="absolute inset-0 z-0" style={{ background: 'rgba(11,15,25,0.55)' }} />
            </div>

            {/* ── Foreground Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-16 md:mt-0">

                {/* Left: Text */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
                        style={{ background: 'rgba(124,92,252,0.12)', border: '1px solid rgba(124,92,252,0.35)' }}>
                        <Sparkles size={15} style={{ color: '#7C5CFC' }} className="animate-pulse" />
                        <span className="text-sm font-medium tracking-wide" style={{ color: '#E5E7EB' }}>Open to Opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-none">
                        <span style={{ color: '#E5E7EB' }}>Hi, I'm </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(124,92,252,0.5)]">
                            Atul Singh
                        </span>
                    </motion.h1>

                    {/* Typing Animation */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 h-12 mb-5">
                        <Code2 style={{ color: '#00D4FF' }} size={22} />
                        <span className="text-xl md:text-2xl font-bold" style={{ color: '#9CA3AF' }}>
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer', 2500,
                                    'MERN Stack Expert', 2500,
                                    'AI/ML Enthusiast', 2500,
                                    'Problem Solver', 2500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p variants={itemVariants} className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: '#9CA3AF' }}>
                        Building scalable and innovative digital solutions. Transforming complex
                        problems into <span style={{ color: '#7C5CFC' }}>elegant</span>,{' '}
                        <span style={{ color: '#00D4FF' }}>user-centric</span> experiences.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-neon px-8 py-4 rounded-2xl text-white font-bold flex items-center justify-center gap-2 group"
                        >
                            View My Work
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </motion.a>

                        <motion.a
                            href="https://drive.google.com/file/d/1M-KgosmsjBlqrHooFwY8cjBi1T0Z-nqH/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-ghost px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group"
                            style={{ color: '#E5E7EB' }}
                        >
                            <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Mini Stats */}
                    <motion.div variants={itemVariants} className="flex gap-6 mt-10">
                        {stats.map(({ icon: Icon, label, value, color }) => (
                            <div key={label} className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                                    <Icon size={16} style={{ color }} />
                                </div>
                                <div>
                                    <p className="text-base font-bold text-white leading-none">{value}</p>
                                    <p className="text-xs" style={{ color: '#6B7280' }}>{label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                        {/* Glow rings */}
                        <div className="absolute inset-[-12px] rounded-full animate-pulse"
                            style={{ background: 'conic-gradient(from 0deg, #7C5CFC, #00D4FF, #7C5CFC)', opacity: 0.15 }} />
                        <div className="absolute inset-[-4px] rounded-full"
                            style={{ background: 'conic-gradient(from 180deg, #7C5CFC, #00D4FF, #EC4899, #7C5CFC)', opacity: 0.5 }} />

                        {/* Image */}
                        <div className="absolute inset-0 rounded-full overflow-hidden p-[3px] bg-gradient-to-br from-[#7C5CFC] to-[#00D4FF] shadow-[0_0_60px_rgba(124,92,252,0.4)]">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0F19]">
                                <img
                                    src={profileImg}
                                    alt="Atul Singh"
                                    className="w-full h-full object-cover scale-110 object-top hover:scale-120 transition-transform duration-700"
                                    style={{ filter: 'brightness(1.05) contrast(1.04)' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Floating chips */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-5 -right-5 px-3 py-2 rounded-2xl shadow-xl flex items-center gap-2"
                            style={{ background: 'rgba(17,24,39,0.9)', border: '1px solid rgba(124,92,252,0.35)', backdropFilter: 'blur(12px)' }}
                        >
                            <span className="text-xl">🚀</span>
                            <span className="text-xs font-bold text-white">Builder</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 14, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                            className="absolute -bottom-5 -left-5 px-3 py-2 rounded-2xl shadow-xl flex items-center gap-2"
                            style={{ background: 'rgba(17,24,39,0.9)', border: '1px solid rgba(0,212,255,0.35)', backdropFilter: 'blur(12px)' }}
                        >
                            <span className="text-xl">⚡</span>
                            <span className="text-xs font-bold" style={{ color: '#00D4FF' }}>Available</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-20"
            >
                <span className="text-[10px] uppercase tracking-[3px]" style={{ color: '#6B7280' }}>Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
                    style={{ borderColor: 'rgba(124,92,252,0.5)' }}>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1 h-1.5 rounded-full"
                        style={{ background: '#7C5CFC' }}
                    />
                </div>
            </motion.div>

            {/* Bottom neon line */}
            <div className="absolute bottom-0 left-0 right-0 neon-line" />
        </section>
    );
};

export default Hero;
