import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Briefcase, Film, Youtube } from 'lucide-react';

import streamNovaImg from '../assets/projects/StreamNova.png';
import leadTwinImg from '../assets/projects/LeadTwin.png';
import leadBeastImg from '../assets/projects/LeadBeast.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'StreamNova',
            description: 'Global seamless content streaming platform with modern video cataloging and user-friendly interface.',
            technologies: ['React', 'JavaScript', 'CSS', 'Vercel'],
            deployedLink: 'https://stream-nova-golobal-tv.vercel.app/',
            githubLink: '#',
            youtubeLink: 'https://www.youtube.com/embed/8msbBovZEJI?si=YdGF7sSBrFrhD5GI',
            gradient: 'from-[#0ea5e9] to-[#3b82f6]',
            image: streamNovaImg,
        },
        {
            id: 2,
            title: 'LeadTwin',
            description: 'AI-powered lead conversion tool for businesses. Enhances sales pipelines through intelligent data insights.',
            technologies: ['React', 'AI/ML', 'Tailwind', 'Next.js'],
            deployedLink: 'https://lead-twin-ai.vercel.app/',
            githubLink: '#',
            youtubeLink: '',
            gradient: 'from-[#8b5cf6] to-[#ec4899]',
            image: leadTwinImg,
        },
        {
            id: 3,
            title: 'LeadBeast',
            description: 'Comprehensive lead management auth and analytics dashboard that handles secure logins and data access.',
            technologies: ['React', 'Authentication', 'Analytics', 'UI/UX'],
            deployedLink: 'https://lead-beast.vercel.app/auth/login',
            githubLink: '#',
            youtubeLink: '',
            gradient: 'from-[#10b981] to-[#0ea5e9]',
            image: leadBeastImg,
        },
    ];

    const ProjectCard = ({ project, index }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative h-full"
            >
                <div className="glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                    {/* Header with Image */}
                    <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.div>

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
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
                            {project.youtubeLink && (
                                <motion.a
                                    href={project.youtubeLink.replace('/embed/', '/watch?v=').split('?si=')[0]}
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
                        </div>

                        {/* Sparkle Effect */}
                        <div className="absolute top-4 right-4">
                            <Sparkles className="text-white/30 group-hover:text-white/60 transition-colors" size={24} />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 flex-1">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                            <a
                                href={project.deployedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-primary-500 to-accent-purple text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 rounded-lg glass border border-white/10 text-gray-300 text-sm font-semibold hover:border-gray-400 transition-all flex items-center justify-center gap-2"
                            >
                                <Github size={16} />
                                Code
                            </a>
                            {project.youtubeLink && (
                                <a
                                    href={project.youtubeLink.replace('/embed/', '/watch?v=').split('?si=')[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-2 px-4 rounded-lg glass border border-red-500/20 text-red-400 text-sm font-semibold hover:border-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <Youtube size={16} />
                                </a>
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
        <section id="projects" className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 border border-primary-500/30 mb-4"
                    >
                        <Briefcase className="text-primary-400" size={32} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore my portfolio of web applications showcasing modern design and functionality
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Video Demonstrations */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 mt-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 mb-4"
                    >
                        <Film className="text-red-400" size={32} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple">Demonstrations</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'StockPilot Demonstration', url: 'https://www.youtube.com/embed/8msbBovZEJI?si=YdGF7sSBrFrhD5GI' },
                        { title: 'InsideFpv Clone', url: 'https://www.youtube.com/embed/nMLfDMz-Ztg?si=wnLQWegJdrfCHqhJ' },
                        { title: 'Zee5 Clone', url: 'https://www.youtube.com/embed/mN31UwreqGY?si=4smF_JxFEPSBHVUI' }
                    ].map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-md flex items-center gap-3">
                                <Youtube size={18} className="text-red-400 flex-shrink-0" />
                                <h4 className="font-bold text-gray-200 line-clamp-1 truncate">{video.title}</h4>
                            </div>
                            <div className="aspect-video w-full bg-black/80 flex-grow relative">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
