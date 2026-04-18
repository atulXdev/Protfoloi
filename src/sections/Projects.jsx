import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Briefcase, Layers, Youtube, Figma, Filter } from 'lucide-react';

import streamNovaImg from '../assets/projects/StreamNova.png';
import leadBeastImg from '../assets/projects/LeadBeast.png';

const Projects = () => {

    const [activeFilter, setActiveFilter] = useState('clone');

    const filters = [
        { key: 'clone', label: 'Clone Projects', icon: Layers, color: '#00D4FF' },
        { key: 'industry', label: 'Industry Level', icon: Briefcase, color: '#7C5CFC' },
        { key: 'figma', label: 'Figma Designs', icon: Figma, color: '#A259FF' },
    ];

    const allProjects = {
        industry: [
            {
                id: 'i1',
                title: 'StreamNova',
                description: 'Global seamless content streaming platform with modern video cataloging and user-friendly interface.',
                technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
                deployedLink: 'https://stream-nova-golobal-tv.vercel.app/',
                githubLink: 'https://github.com/atulXdev/StreamNova.git',
                youtubeLink: '',
                gradient: 'from-[#0ea5e9] to-[#3b82f6]',
                image: streamNovaImg,
            },
            {
                id: 'i2',
                title: 'LeadBeast',
                description: 'Comprehensive lead management auth and analytics dashboard that handles secure logins and data access.',
                technologies: ['React', 'Authentication', 'Analytics', 'UI/UX'],
                deployedLink: 'https://lead-twin-qmti6mrkl-amrit-rajs-projects-8b398498.vercel.app/',
                githubLink: 'https://github.com/atulXdev/LeadTwin-Ai.git',
                youtubeLink: '',
                gradient: 'from-[#10b981] to-[#0ea5e9]',
                image: leadBeastImg,
            },
            {
                id: 'i3',
                title: 'AvsarSetu',
                description: 'Advanced full-stack application bridging business processes with seamless connectivity and user management.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                deployedLink: 'https://ayusynk-clone-atulsingh.netlify.app/',
                githubLink: 'https://github.com/atulXdev/Ayusynk-clone.git',
                youtubeLink: '',
                gradient: 'from-[#f59e0b] to-[#ea580c]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776362706/ChatGPT_Image_Apr_16_2026_11_33_55_PM_ywhijd.png',
            },
        ],
        clone: [
            {
                id: 'c1',
                title: 'SunNxt Clone',
                description: 'A frontend replication of the SunNxt streaming service platform, complete with video interface.',
                technologies: ['React', 'Tailwind CSS', 'API Integration'],
                deployedLink: 'https://sunnxt-clone-atulsingh.netlify.app/',
                githubLink: 'https://github.com/atulXdev/SunNxt-clone.git',
                youtubeLink: 'https://youtu.be/bnaQznwn0ws?si=vPrZzpK_69-_MQ_T',
                gradient: 'from-[#eab308] to-[#ca8a04]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776357135/Screenshot_44_gc5ait.png',
            },
            {
                id: 'c2',
                title: 'Zee5 Clone',
                description: 'Recreation of the Zee5 web interface, demonstrating complex layout structures.',
                technologies: ['React', 'CSS'],
                deployedLink: 'https://zee5clone-atulsingh.netlify.app/',
                githubLink: 'https://github.com/atulXdev/Zee5-clone.git',
                youtubeLink: 'https://youtu.be/mN31UwreqGY?si=7WJgyWHWjSdgn08t',
                gradient: 'from-[#8b5cf6] to-[#6d28d9]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776357297/Screenshot_45_yvpy3j.png',
            },
            {
                id: 'c3',
                title: 'Oracle Clone',
                description: 'A pixel-perfect UI clone of the Oracle corporate homepage.',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                deployedLink: 'https://oracle-clone-atulsingh.netlify.app/',
                githubLink: 'https://github.com/atulXdev/oracle-clone.git',
                youtubeLink: '',
                gradient: 'from-[#ef4444] to-[#b91c1c]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776357487/Screenshot_48_vozfsc.png',
            },
            {
                id: 'c4',
                title: 'AyuSynk Clone',
                description: 'A UI clone representing the AyuSynk product suite interface.',
                technologies: ['React', 'Tailwind CSS'],
                deployedLink: 'https://ayusynk-clone-atulsingh.netlify.app/',
                githubLink: 'https://github.com/atulXdev/Ayusynk-clone.git',
                youtubeLink: 'https://youtu.be/M10K47zNBnc?si=DV2OUnDG1eEMOGzj',
                gradient: 'from-[#14b8a6] to-[#0f766e]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776357480/Screenshot_47_coxair.png',
            },
            {
                id: 'c5',
                title: 'InsideFpv Clone',
                description: 'An interactive clone of the InsideFpv drone application interface.',
                technologies: ['React', 'CSS Modularity'],
                deployedLink: 'https://insidefpv-clone-atul.netlify.app/',
                githubLink: 'https://github.com/atulXdev/InsideFpv-clone.git',
                youtubeLink: 'https://youtu.be/nMLfDMz-Ztg?si=lMmJWL6Cc-5CzZu-',
                gradient: 'from-[#64748b] to-[#334155]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776357472/Screenshot_46_aqyems.png',
            },
        ],
        figma: [
            {
                id: 'f1',
                title: 'StreamVibe',
                description: 'A sleek streaming platform UI design crafted in Figma with modern layouts and vibrant visual hierarchy.',
                technologies: ['Figma', 'UI Design', 'Prototyping'],
                figmaLink: 'https://www.figma.com/design/pEYwl7MrgUIxRhnU82VhUy/StreamVibe?node-id=0-1&p=f',
                gradient: 'from-[#A259FF] to-[#7C5CFC]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776446434/ChatGPT_Image_Apr_17_2026_10_50_15_PM_qqfpzz.png',
            },
            {
                id: 'f2',
                title: 'Flight Booking',
                description: 'An interactive flight booking prototype with full user flow, from search to confirmation screens.',
                technologies: ['Figma', 'Prototyping', 'UX Flow'],
                figmaLink: 'https://www.figma.com/proto/uEy3jcvzF62eLWXcykT6uX/Flight-booking-figma?page-id=0%3A1&node-id=7-181&starting-point-node-id=4%3A2&t=XjQ7i2Zzj5jbfOwV-1',
                gradient: 'from-[#0ea5e9] to-[#A259FF]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776446549/ChatGPT_Image_Apr_17_2026_10_52_13_PM_mxg2sj.png',
            },
            {
                id: 'f3',
                title: 'Jio Cinema',
                description: 'A comprehensive Figma design for the Jio Cinema platform featuring rich content layouts and streaming UX.',
                technologies: ['Figma', 'UI Design', 'Visual Design'],
                figmaLink: 'https://www.figma.com/design/kysklnV5yGcVIwQ58hnTGo/Jio-Cinema-Figma-Design?node-id=0-1&t=w4MnMFft3SM5kvwY-1',
                gradient: 'from-[#ec4899] to-[#A259FF]',
                image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776446627/ChatGPT_Image_Apr_17_2026_10_53_33_PM_pcuj51.png',
            },
        ],
    };

    const currentProjects = allProjects[activeFilter] || [];
    const activeFilterData = filters.find(f => f.key === activeFilter);

    const ProjectCard = ({ project, index, isFigma }) => {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative h-full flex flex-col"
            >
                <div
                    className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
                    style={{
                        background: '#111827',
                        border: '1px solid rgba(124,92,252,0.15)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.45)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(124,92,252,0.15), 0 20px 60px rgba(0,0,0,0.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                    {/* Header with Image or Gradient Placeholder */}
                    <div className={`relative h-48 sm:h-56 overflow-hidden flex-shrink-0 ${!project.image ? `bg-gradient-to-br ${project.gradient}` : 'bg-[#0B0F19]'}`}>
                        {project.image ? (
                            <>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(11,15,25,0.7) 100%)' }} />
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center opacity-80 backdrop-blur-sm">
                                <Layers size={48} className="text-white/50" />
                            </div>
                        )}

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                            {isFigma ? (
                                <motion.a
                                    href={project.figmaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500/80 transition-all"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Figma size={20} />
                                </motion.a>
                            ) : (
                                <>
                                    {project.deployedLink && (
                                        <motion.a
                                            href={project.deployedLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/80 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={20} />
                                        </motion.a>
                                    )}
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gray-700/80 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                    )}
                                    {project.youtubeLink && (
                                        <motion.a
                                            href={project.youtubeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600/80 transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Youtube size={20} />
                                        </motion.a>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Sparkle Effect */}
                        <div className="absolute top-4 right-4">
                            <Sparkles className="text-white/30 group-hover:text-white/60 transition-colors" size={24} />
                        </div>

                        {/* Figma Badge */}
                        {isFigma && (
                            <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5"
                                style={{ background: 'rgba(162,89,255,0.25)', color: '#D4BBFF', border: '1px solid rgba(162,89,255,0.4)', backdropFilter: 'blur(8px)' }}>
                                <Figma size={10} />
                                Figma
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300" style={{ color: '#E5E7EB' }}>
                            {project.title}
                        </h3>
                        <p className="mb-4 flex-1 text-sm sm:text-base" style={{ color: '#9CA3AF' }}>
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs rounded-full font-medium"
                                    style={{
                                        background: isFigma ? 'rgba(162,89,255,0.1)' : 'rgba(124,92,252,0.1)',
                                        color: isFigma ? '#A259FF' : '#7C5CFC',
                                        border: `1px solid ${isFigma ? 'rgba(162,89,255,0.25)' : 'rgba(124,92,252,0.25)'}`,
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 sm:gap-3 flex-wrap">
                            {isFigma ? (
                                <a
                                    href={project.figmaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 px-3 rounded-lg text-white text-xs sm:text-sm font-semibold text-center transition-all duration-300 flex items-center justify-center gap-1.5"
                                    style={{ background: 'linear-gradient(135deg, #A259FF, #7C5CFC)', boxShadow: '0 0 20px rgba(162,89,255,0.3)' }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(162,89,255,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(162,89,255,0.3)'; e.currentTarget.style.transform = 'none'; }}
                                >
                                    <Figma size={16} />
                                    View in Figma
                                </a>
                            ) : (
                                <>
                                    {project.deployedLink && (
                                        <a
                                            href={project.deployedLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2 px-3 rounded-lg text-white text-xs sm:text-sm font-semibold text-center transition-all duration-300 flex items-center justify-center gap-1.5"
                                            style={{ background: 'linear-gradient(135deg, #7C5CFC, #00D4FF)', boxShadow: '0 0 20px rgba(124,92,252,0.3)' }}
                                            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(124,92,252,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(124,92,252,0.3)'; e.currentTarget.style.transform = 'none'; }}
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2 px-3 rounded-lg glass border border-white/10 text-gray-300 text-xs sm:text-sm font-semibold hover:border-gray-400 transition-all flex items-center justify-center gap-1.5"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.youtubeLink && (
                                        <a
                                            href={project.youtubeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2 px-3 rounded-lg glass border border-red-500/20 text-red-400 text-xs sm:text-sm font-semibold hover:border-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-1.5"
                                        >
                                            <Youtube size={16} />
                                            Video
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 -z-10`} />
            </motion.div>
        );
    };

    return (
        <section id="projects" className="relative py-20 px-4 sm:px-6" style={{ background: '#0B0F19' }}>
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.06) 0%, transparent 70%)' }} />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }} />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm font-mono tracking-[3px] uppercase mb-3" style={{ color: '#7C5CFC' }}>Portfolio</p>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                        style={{ background: 'rgba(124,92,252,0.12)', border: '1px solid rgba(124,92,252,0.35)', boxShadow: '0 0 25px rgba(124,92,252,0.2)' }}
                    >
                        <Briefcase style={{ color: '#7C5CFC' }} size={30} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#E5E7EB' }}>
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="section-divider mb-4" />
                    <p className="max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Explore my work across full-stack development, UI clones, and design prototypes.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14"
                >
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.key;
                        const Icon = filter.icon;
                        return (
                            <motion.button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer"
                                style={{
                                    background: isActive
                                        ? `linear-gradient(135deg, ${filter.color}22, ${filter.color}11)`
                                        : 'rgba(255,255,255,0.03)',
                                    border: `1px solid ${isActive ? filter.color + '55' : 'rgba(255,255,255,0.08)'}`,
                                    color: isActive ? filter.color : '#9CA3AF',
                                    boxShadow: isActive ? `0 0 25px ${filter.color}15, 0 4px 15px rgba(0,0,0,0.2)` : 'none',
                                }}
                            >
                                <Icon size={18} />
                                {filter.label}
                                {isActive && (
                                    <motion.span
                                        layoutId="filterCount"
                                        className="ml-1 px-2 py-0.5 rounded-full text-[11px] font-bold"
                                        style={{ background: filter.color + '25', color: filter.color }}
                                    >
                                        {allProjects[filter.key].length}
                                    </motion.span>
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
                    >
                        {currentProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isFigma={activeFilter === 'figma'}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Projects;
