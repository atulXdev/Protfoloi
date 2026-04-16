import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, TrendingUp, Layers, Terminal, GitBranch } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: 'MERN Stack Developer',
            description: 'Architecting scalable, responsive, and performance-optimized web applications utilizing MongoDB, Express, React, and Node.js.',
            gradient: 'from-[#7C5CFC] to-[#5B3FD6]',
            glow: 'rgba(124, 92, 252, 0.3)',
            border: 'rgba(124, 92, 252, 0.25)',
        },
        {
            icon: Brain,
            title: 'AI/ML Enthusiast',
            description: 'Designing intelligent systems and leveraging machine learning/deep learning algorithms to solve complex data-driven challenges.',
            gradient: 'from-[#00D4FF] to-[#0095B6]',
            glow: 'rgba(0, 212, 255, 0.3)',
            border: 'rgba(0, 212, 255, 0.25)',
        },
        {
            icon: TrendingUp,
            title: 'Data Analytics',
            description: 'Extracting actionable insights from raw datasets using advanced statistical methods and modern visualization tools.',
            gradient: 'from-[#22C55E] to-[#16A34A]',
            glow: 'rgba(34, 197, 94, 0.3)',
            border: 'rgba(34, 197, 94, 0.25)',
        },
    ];

    const whatIDo = [
        { icon: Layers, text: 'Full-Stack Web Apps', color: '#7C5CFC' },
        { icon: Terminal, text: 'REST API Design', color: '#00D4FF' },
        { icon: GitBranch, text: 'Open Source', color: '#22C55E' },
        { icon: Brain, text: 'ML Experiments', color: '#EC4899' },
    ];

    return (
        <section id="about" className="relative py-24 px-6 overflow-hidden" style={{ background: '#0B0F19' }}>
            {/* Background glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.08) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 grid-pattern opacity-20" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono tracking-[3px] uppercase mb-3" style={{ color: '#7C5CFC' }}>Get to know me</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-5">
                        <span style={{ color: '#E5E7EB' }}>Professional </span>
                        <span className="gradient-text">Overview</span>
                    </h2>
                    <div className="section-divider" />
                </motion.div>

                {/* Intro Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <div className="relative p-8 md:p-10 rounded-3xl overflow-hidden"
                        style={{ background: '#111827', border: '1px solid rgba(124,92,252,0.2)' }}>
                        {/* Corner orbs */}
                        <div className="absolute top-0 left-0 w-40 h-40 rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.15) 0%, transparent 70%)', transform: 'translate(-30%,-30%)' }} />
                        <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full"
                            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)', transform: 'translate(30%,30%)' }} />

                        <h3 className="text-2xl md:text-3xl font-bold mb-2 relative z-10" style={{ color: '#E5E7EB' }}>
                            Atul Singh
                            <span className="text-base font-normal ml-3" style={{ color: '#6B7280' }}>| Software Engineer</span>
                        </h3>

                        <p className="text-lg md:text-xl leading-relaxed mb-5 font-light relative z-10" style={{ color: '#9CA3AF' }}>
                            I am a dedicated full-stack developer specializing in creating high-performance, robust, and
                            user-centric digital experiences. Bridging the gap between design and intricate engineering,
                            I strive to build scalable applications that drive meaningful business outcomes.
                        </p>

                        <p className="leading-relaxed text-base font-light relative z-10" style={{ color: '#6B7280' }}>
                            Strong foundations in{' '}
                            <span className="font-mono px-2 py-0.5 rounded text-sm" style={{ color: '#7C5CFC', background: 'rgba(124,92,252,0.1)' }}>MERN</span>,{' '}
                            competitive programming, and modern machine learning concepts.
                        </p>

                        {/* What I Do row */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 relative z-10">
                            {whatIDo.map(({ icon: Icon, text, color }) => (
                                <motion.div
                                    key={text}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}
                                >
                                    <Icon size={14} />
                                    {text}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 3 Highlight Cards */}
                <div className="grid md:grid-cols-3 gap-7">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative h-full"
                            >
                                <div
                                    className="p-7 rounded-3xl h-full flex flex-col items-start transition-all duration-400"
                                    style={{
                                        background: '#111827',
                                        border: `1px solid ${item.border}`,
                                        boxShadow: `0 0 0 rgba(0,0,0,0)`,
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = `0 0 40px ${item.glow}, 0 20px 60px rgba(0,0,0,0.4)`;
                                        e.currentTarget.style.border = `1px solid ${item.border.replace('0.25', '0.5')}`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                                        e.currentTarget.style.border = `1px solid ${item.border}`;
                                    }}
                                >
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                                        <Icon className="text-white" size={26} />
                                    </div>

                                    <h4 className="text-xl font-bold mb-3 transition-all duration-300" style={{ color: '#E5E7EB' }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-sm leading-relaxed font-light flex-1" style={{ color: '#9CA3AF' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
