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
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative group cursor-pointer"
            >
                <div className="glass-dark p-6 rounded-2xl border-2 border-white/5 hover:border-primary-500/30 transition-all duration-300 backdrop-blur-xl">
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
                    <p className="text-center font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {skill.name}
                    </p>


                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 -z-10" />
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="relative py-20 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30">
                            <Zap className="text-yellow-400" size={32} />
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple inline-block">
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
                    <div className="glass-dark border border-gray-700 rounded-xl p-6 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-gray-500 ml-2">~/atul-singh/focus</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-primary-400">$</span>
                                <span className="text-gray-300">cat current_focus.txt</span>
                            </div>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="overflow-hidden"
                            >
                                <p className="text-accent-cyan flex items-center gap-2">
                                    <Crosshair size={16} className="text-accent-cyan flex-shrink-0" /> Practicing <span className="text-accent-orange font-bold">Data Structures & Algorithms</span> in <span className="text-primary-400">Java</span>
                                </p>
                                <p className="text-gray-500 mt-2 flex items-center gap-2"><BarChart3 size={14} className="flex-shrink-0" /> LeetCode: Solving problems daily</p>
                            </motion.div>
                            <div className="flex items-center gap-2 mt-4">
                                <span className="text-primary-400">$</span>
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-gray-400"
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
