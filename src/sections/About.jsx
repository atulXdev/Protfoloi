import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, TrendingUp, Terminal } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
    const stats = [
        { icon: Code2, label: 'Role', value: 'Full Stack Dev', color: 'text-primary-400' },
        { icon: Terminal, label: 'Status', value: 'College Student', color: 'text-accent-cyan' },
        { icon: Database, label: 'Certificates', value: '4+', color: 'text-accent-purple' },
    ];

    const highlights = [
        {
            icon: Code2,
            title: 'MERN Stack Expert',
            description: 'Building scalable web applications with MongoDB, Express, React, and Node.js',
            gradient: 'from-green-500 to-emerald-600',
        },
        {
            icon: Brain,
            title: 'AI/ML Enthusiast',
            description: 'Exploring machine learning, deep learning, and data science with Python',
            gradient: 'from-purple-500 to-pink-600',
        },
        {
            icon: TrendingUp,
            title: 'Data Analytics',
            description: 'Transforming data into insights using NumPy, Pandas, and visualization tools',
            gradient: 'from-blue-500 to-cyan-600',
        },
    ];

    return (
        <section id="about" className="relative py-20 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left: Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="glass-dark p-8 rounded-2xl border border-white/5">
                            <div className="flex items-start gap-4 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -5 }}
                                    className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary-500/30 flex-shrink-0 shadow-lg shadow-primary-500/20"
                                >
                                    <img src={profileImg} alt="Atul Singh" className="w-full h-full object-cover object-[center_top] scale-110" />
                                </motion.div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Atul Singh</h3>
                                    <p className="text-gray-400 font-mono text-sm">{'<FullStackDeveloper />'}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                I'm a passionate developer and college student with a love for creating
                                <span className="text-primary-400 font-semibold"> innovative solutions</span>.
                                My expertise spans across the <span className="text-accent-cyan font-semibold">MERN Stack</span>,
                                and I'm constantly exploring <span className="text-accent-purple font-semibold">AI/ML</span> and
                                <span className="text-accent-pink font-semibold"> Data Analytics</span>.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                With proficiency in <span className="font-mono text-primary-400">Python, JavaScript, TypeScript, Java,</span> and
                                <span className="font-mono text-primary-400"> C++</span>, I build projects that solve real-world problems
                                while continuously sharpening my problem-solving skills through DSA practice.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ y: -5 }}
                                        className="glass-dark p-4 rounded-xl text-center border border-white/5 hover:border-primary-500/30 transition-all"
                                    >
                                        <Icon className={`mx-auto mb-2 ${stat.color}`} size={24} />
                                        <p className="text-xl font-bold text-white mb-1">{stat.value}</p>
                                        <p className="text-xs text-gray-500">{stat.label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative"
                                >
                                    <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                                                <Icon className="text-white" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 bg-gradient-to-r ${item.gradient} -z-10`} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Code Snippet Showcase - USP Element */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-dark border border-gray-700 rounded-xl p-6 font-mono text-sm overflow-hidden"
                >
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-3">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-500 ml-2">philosophy.js</span>
                    </div>
                    <div className="space-y-1 text-sm">
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">passion</span> = <span className="text-green-400">"Building innovative solutions"</span>;</div>
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">goal</span> = <span className="text-green-400">"Impact through technology"</span>;</div>
                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">approach</span> = <span className="text-green-400">"Learn, Build, Share"</span>;</div>
                        <div className="pt-2"><span className="text-gray-500">// Always ready for new challenges</span></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
