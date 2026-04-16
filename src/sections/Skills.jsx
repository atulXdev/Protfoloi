import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap, Crosshair, BarChart3 } from 'lucide-react';
import TechLogos from '../components/TechLogos';

const Skills = () => {
    const skills = {
        'Full Stack Development': [
            { name: 'MongoDB', logo: 'MongoDB', level: 85 },
            { name: 'Express.js', logo: 'Express', level: 80 },
            { name: 'React', logo: 'React', level: 90 },
            { name: 'Node.js', logo: 'NodeJS', level: 85 },
        ],
        'AI & Machine Learning': [
            { name: 'TensorFlow', logo: 'TensorFlow', level: 70 },
            { name: 'PyTorch', logo: 'PyTorch', level: 65 },
            { name: 'Scikit-learn', logo: 'ScikitLearn', level: 75 },
            { name: 'Pandas', logo: 'Pandas', level: 80 },
        ],
        'Programming Languages': [
            { name: 'Python', logo: 'Python', level: 85 },
            { name: 'JavaScript', logo: 'JavaScript', level: 90 },
            { name: 'TypeScript', logo: 'TypeScript', level: 80 },
            { name: 'Java', logo: 'Java', level: 75 },
            { name: 'C++', logo: 'CPlusPlus', level: 70 },
        ],
        'Data Analytics & Databases': [
            { name: 'NumPy', logo: 'NumPy', level: 80 },
            { name: 'Matplotlib', logo: 'Matplotlib', level: 75 },
            { name: 'MySQL', logo: 'MySQL', level: 85 },
            { name: 'PostgreSQL', logo: 'PostgreSQL', level: 80 },
        ],
    };

    const SkillCard = ({ skill, index, categoryIndex }) => {
        const LogoComponent = TechLogos[skill.logo];

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: categoryIndex * 0.05 + index * 0.02, type: 'spring', stiffness: 100 }}
                className="relative group cursor-pointer"
            >
                <div
                    className="p-6 rounded-2xl transition-all duration-300"
                    style={{ background: '#111827', border: '1px solid rgba(124,92,252,0.15)' }}
                    onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.5)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(124,92,252,0.2), 0 10px 40px rgba(0,0,0,0.4)'; e.currentTarget.style.transform = 'scale(1.05) translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.15)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                    {/* Logo */}
                    <div className="relative mb-4 flex items-center justify-center">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-16 h-16 flex items-center justify-center"
                        >
                            {LogoComponent && <LogoComponent />}
                        </motion.div>
                    </div>

                    {/* Skill Name */}
                    <p className="text-center font-semibold mb-2 transition-all duration-200" style={{ color: '#E5E7EB' }}>
                        {skill.name}
                    </p>

                    {/* Proficiency bar */}
                    <div className="w-full h-1 rounded-full mt-2" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-1 rounded-full"
                            style={{ background: 'linear-gradient(90deg, #7C5CFC, #00D4FF)' }}
                        />
                    </div>
                    <p className="text-right text-[10px] mt-1 font-mono" style={{ color: '#6B7280' }}>{skill.level}%</p>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="relative py-20 px-6 overflow-hidden" style={{ background: '#0B0F19' }}>
            {/* Background Effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.07) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 grid-pattern opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono tracking-[3px] uppercase mb-3" style={{ color: '#7C5CFC' }}>Tools &amp; Technologies</p>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                        style={{ background: 'rgba(124,92,252,0.12)', border: '1px solid rgba(124,92,252,0.35)', boxShadow: '0 0 25px rgba(124,92,252,0.2)' }}
                    >
                        <Zap style={{ color: '#7C5CFC' }} size={30} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#E5E7EB' }}>
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <div className="section-divider mb-4" />
                    <p className="max-w-2xl mx-auto text-lg" style={{ color: '#9CA3AF' }}>
                        Proficient in modern technologies across the full development spectrum
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                        <div key={category}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <h3
                                    className="text-xl font-bold inline-block"
                                    style={{ background: 'linear-gradient(135deg, #7C5CFC, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                                >
                                    {category}
                                </h3>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {skillList.map((skill, index) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                        categoryIndex={categoryIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* DSA Highlight - Terminal Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 relative"
                >
                    <div className="rounded-xl p-6 font-mono text-sm"
                        style={{ background: '#111827', border: '1px solid rgba(124,92,252,0.25)' }}>
                        <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(124,92,252,0.15)' }}>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="ml-2" style={{ color: '#6B7280' }}>~/atul-singh/focus</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span style={{ color: '#7C5CFC' }}>$</span>
                                <span style={{ color: '#9CA3AF' }}>cat current_focus.txt</span>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="overflow-hidden"
                            >
                                <p className="flex items-center gap-2" style={{ color: '#00D4FF' }}>
                                    <Crosshair size={16} className="flex-shrink-0" /> Practicing{' '}
                                    <span className="font-bold" style={{ color: '#FBBF24' }}>Data Structures &amp; Algorithms</span>
                                    {' '}in <span style={{ color: '#7C5CFC' }}>Java</span>
                                </p>
                                <p className="mt-2 flex items-center gap-2" style={{ color: '#6B7280' }}>
                                    <BarChart3 size={14} className="flex-shrink-0" /> LeetCode: Solving problems daily
                                </p>
                            </motion.div>
                            <div className="flex items-center gap-2 mt-4">
                                <span style={{ color: '#7C5CFC' }}>$</span>
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    style={{ color: '#9CA3AF' }}
                                >
                                    _
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
