import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink, Calendar, Building2, Trophy, Flame, Users, Monitor, Atom, Swords, Zap, Medal, Globe } from 'lucide-react';

import webDevCert from '../assets/certificates/Atul Singh Web dev.png';
import reactCert from '../assets/certificates/React js certifacte Atul Singh.png';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const hackathons = [
        {
            id: 'h1',
            title: 'Electrosphere Hackathon — 1st Place',
            issuer: 'Electrosphere',
            date: '2026',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775497140/Hackathon_1st_place_certuficate_crp_e10h1k.jpg',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775497140/Hackathon_1st_place_certuficate_crp_e10h1k.jpg',
            IconComponent: Trophy,
            gradient: 'from-amber-500 to-yellow-600',
            badge: 'Winner',
            deployedLink: '',
            repoLink: '',
            isHackathon: true,
            problemStatement: 'Visually impaired individuals face major challenges in independent navigation due to lack of real-time environmental awareness and guidance systems.',
            solution: 'Developed an AI-powered assistive navigation system using YOLOv8 for real-time object detection. The system provides voice-based directional guidance such as obstacle alerts, human detection, and path instructions (left/right/forward), enabling safe mobility without human assistance.\n\nOutcome:\n• Achieved 1st Place among competing teams\n• Built a real-time, scalable assistive solution\n• Demonstrated strong integration of Computer Vision + Voice AI\n• Potential for real-world deployment in accessibility tech',
        },
        {
            id: 'h2',
            title: 'DevHeat Hackathon',
            issuer: 'DevHeat',
            date: '2026',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775496993/DevHeat_Hackathon_czgjzl.png',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775496993/DevHeat_Hackathon_czgjzl.png',
            IconComponent: Flame,
            gradient: 'from-orange-500 to-red-600',
            badge: 'Participant',
            deployedLink: '',
            repoLink: '',
            isHackathon: true,
            problemStatement: 'Recruiters spend significant time manually reviewing resumes, often missing qualified candidates due to inefficient filtering systems.',
            solution: 'Built an AI Resume Analyzer using RAG (Retrieval-Augmented Generation) to intelligently evaluate resumes against job descriptions. The system extracts skills, scores relevance, and provides actionable feedback.\n\nOutcome:\n• Automated resume screening process\n• Improved candidate-job matching accuracy\n• Showcased practical use of LLMs + RAG architecture\n• Reduced recruiter effort significantly',
        },
        {
            id: 'h3',
            title: 'DoppelGanger Hackathon',
            issuer: 'DoppelGanger',
            date: '2026',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775496995/DoppleGanger_Hackathon_xd7nyw.png',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775496995/DoppleGanger_Hackathon_xd7nyw.png',
            IconComponent: Users,
            gradient: 'from-violet-500 to-purple-600',
            badge: 'Participant',
            deployedLink: '',
            repoLink: '',
            isHackathon: true,
            problemStatement: 'Participants were challenged to build innovative solutions addressing real-world problems through collaborative team efforts.',
            solution: 'Developed a creative technology solution as part of a competitive hackathon environment, demonstrating teamwork, rapid prototyping, and technical problem-solving skills.',
        },
        {
            id: 'h4',
            title: 'Fin-O Paytm Hackathon',
            issuer: 'DTU & Paytm',
            date: '2026',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776339897/Fin_O_paytm_hackthon_DTU_nyjmn9.jpg',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776339897/Fin_O_paytm_hackthon_DTU_nyjmn9.jpg',
            IconComponent: Flame,
            gradient: 'from-blue-500 to-indigo-600',
            badge: 'Participant',
            deployedLink: '',
            repoLink: '',
            isHackathon: true,
            problemStatement: 'Small merchants struggle with managing customer credit, transaction records, and communication, often relying on outdated tools like physical notebooks (Khata systems).',
            solution: 'Designed a digital merchant ecosystem integrated with Paytm-like infrastructure, enabling customer credit tracking, trust-based scoring system, and automated billing & payment reminders via notifications.\n\nOutcome:\n• Digitized traditional Khata system\n• Improved financial transparency for merchants\n• Enhanced customer trust through structured credit tracking\n• Built a scalable fintech solution for small businesses',
        },
        {
            id: 'h5',
            title: 'Devcation Hackathon',
            issuer: 'IIT Delhi (GDG)',
            date: '2026',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776339905/Devcation_IIT_Delhi_hackathon_certificate_page-0001_sybogo.jpg',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1776339905/Devcation_IIT_Delhi_hackathon_certificate_page-0001_sybogo.jpg',
            IconComponent: Flame,
            gradient: 'from-red-500 to-pink-600',
            badge: 'Participant',
            deployedLink: '',
            repoLink: '',
            isHackathon: true,
            problemStatement: 'Traditional crowdfunding platforms lack transparency, leading to trust issues and misuse of funds.',
            solution: 'Developed a Web3-based crowdfunding platform using blockchain technology to ensure transparent transactions, smart contract-based fund release, and immutable donation tracking.\n\nOutcome:\n• Increased donor trust via blockchain transparency\n• Eliminated fund misuse risks\n• Demonstrated real-world application of Web3 + Smart Contracts\n• Built a decentralized and secure funding system',
        },
    ];

    const certificates = [
        {
            id: 'c1',
            title: 'Web Development Certification',
            issuer: 'Certified Course',
            date: '2024',
            image: webDevCert,
            cloudinaryLink: '',
            IconComponent: Monitor,
            description: 'Comprehensive certification covering full-stack web development principles, responsive design, and practical applications.',
            isCertificate: true
        },
        {
            id: 'c2',
            title: 'React JS Certification',
            issuer: 'Certified Course',
            date: '2024',
            image: reactCert,
            cloudinaryLink: '',
            IconComponent: Atom,
            description: 'Advanced React.js certification covering hooks, state management, component architecture, and modern frontend development.',
            isCertificate: true
        },
        {
            id: 'c3',
            title: 'Gemini for Workspace',
            issuer: 'Google',
            date: '2024',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775537876/Atul_Singh_Gemini_for_workspace_certificate_cpd4km.png',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775537876/Atul_Singh_Gemini_for_workspace_certificate_cpd4km.png',
            IconComponent: Zap,
            description: 'Google certification for Gemini AI integration with Workspace tools, covering AI-powered productivity features and enterprise applications.',
            isCertificate: true
        },
    ];

    /* ── Hackathon Card ── */
    const HackathonCard = ({ hack, index }) => {
        const Icon = hack.IconComponent;
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCert(hack)}
                className="group cursor-pointer relative h-full"
            >
                <div
                    className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-400"
                    style={{ background: '#111827', border: '1px solid rgba(124,92,252,0.15)' }}
                    onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.45)'; e.currentTarget.style.boxShadow = '0 0 35px rgba(124,92,252,0.2), 0 20px 60px rgba(0,0,0,0.5)'; e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)'; }}
                    onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.15)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                    {/* Image */}
                    <div className="aspect-[4/3] relative overflow-hidden" style={{ background: '#0B0F19' }}>
                        <img
                            src={hack.image}
                            alt={hack.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Badge */}
                        {hack.badge && (
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${hack.gradient} shadow-lg`}>
                                {hack.badge === 'Winner' ? '🏆' : '🚀'} {hack.badge}
                            </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                            style={{ background: 'linear-gradient(to top, rgba(11,15,25,0.9) 0%, transparent 100%)' }}>
                            <div className="flex items-center gap-2" style={{ color: '#7C5CFC' }}>
                                <ExternalLink size={18} />
                                <span className="font-medium text-sm">View Certificate</span>
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: 'rgba(124,92,252,0.4)' }} />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${hack.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                <Icon className="text-white" size={20} />
                            </div>
                            <h3 className="text-lg font-bold line-clamp-2" style={{ color: '#E5E7EB' }}>
                                {hack.title}
                            </h3>
                        </div>
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
                                <Building2 size={14} />
                                <span>{hack.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                                <Calendar size={14} />
                                <span>{hack.date}</span>
                            </div>
                        </div>

                        {/* Action Links */}
                        {(hack.deployedLink || hack.repoLink || hack.cloudinaryLink) && (
                            <div className="flex gap-2 mt-auto flex-wrap">
                                {hack.deployedLink && (
                                    <a
                                        href={hack.deployedLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200"
                                        style={{ background: 'linear-gradient(135deg,#7C5CFC,#00D4FF)' }}
                                    >
                                        <ExternalLink size={12} /> Live
                                    </a>
                                )}
                                {hack.repoLink && (
                                    <a
                                        href={hack.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                                        style={{ background: 'rgba(124,92,252,0.12)', border: '1px solid rgba(124,92,252,0.3)', color: '#7C5CFC' }}
                                    >
                                        <Globe size={12} /> GitHub
                                    </a>
                                )}
                                {hack.cloudinaryLink && (
                                    <a
                                        href={hack.cloudinaryLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                                        style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', color: '#FBBF24' }}
                                    >
                                        <Award size={12} /> Certificate
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    /* ── Certificate Card ── */
    const CertificateCard = ({ cert, index }) => {
        const Icon = cert.IconComponent;
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer relative h-full"
            >
                <div
                    className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-400"
                    style={{ background: '#111827', border: '1px solid rgba(124,92,252,0.15)' }}
                    onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(0,212,255,0.4)'; e.currentTarget.style.boxShadow = '0 0 35px rgba(0,212,255,0.15), 0 20px 60px rgba(0,0,0,0.5)'; e.currentTarget.style.transform = 'translateY(-8px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(124,92,252,0.15)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                    {/* Certificate Preview */}
                    <div className="aspect-[4/3] relative overflow-hidden" style={{ background: '#0B0F19' }}>
                        <div className="absolute inset-0">
                            {cert.image ? (
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="opacity-70">
                                        <Icon style={{ color: '#7C5CFC' }} size={64} />
                                    </motion.div>
                                </div>
                            )}
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                            style={{ background: 'linear-gradient(to top, rgba(11,15,25,0.9) 0%, transparent 100%)' }}>
                            <div className="flex items-center gap-2" style={{ color: '#00D4FF' }}>
                                <ExternalLink size={18} />
                                <span className="font-medium text-sm">View Details</span>
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: 'rgba(0,212,255,0.4)' }} />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold mb-2 line-clamp-2" style={{ color: '#E5E7EB' }}>
                            {cert.title}
                        </h3>
                        <div className="space-y-2 mt-auto">
                            <div className="flex items-center gap-2 text-sm" style={{ color: '#9CA3AF' }}>
                                <Building2 size={14} />
                                <span>{cert.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                                <Calendar size={14} />
                                <span>{cert.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="certificates" className="relative py-20 px-6 overflow-hidden" style={{ background: '#0B0F19' }}>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.07) 0%, transparent 70%)' }} />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">

                {/* ───────── Hackathons Sub-Section ───────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono tracking-[3px] uppercase mb-3" style={{ color: '#FBBF24' }}>Battle-tested</p>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                        style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', boxShadow: '0 0 25px rgba(251,191,36,0.15)' }}
                    >
                        <Swords style={{ color: '#FBBF24' }} size={30} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#E5E7EB' }}>
                        Hackathon <span style={{ background: 'linear-gradient(135deg,#FBBF24,#F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Achievements</span>
                    </h2>
                    <div className="section-divider mb-4" />
                    <p className="max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Competing, collaborating, and building under pressure
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {hackathons.map((hack, index) => (
                        <HackathonCard key={hack.id} hack={hack} index={index} />
                    ))}
                </div>

                {/* ───────── Certifications Sub-Section ───────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono tracking-[3px] uppercase mb-3" style={{ color: '#00D4FF' }}>Credentials</p>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                        style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)', boxShadow: '0 0 25px rgba(0,212,255,0.15)' }}
                    >
                        <Medal style={{ color: '#00D4FF' }} size={30} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#E5E7EB' }}>
                        Certificates &amp; <span className="gradient-text">Credentials</span>
                    </h2>
                    <div className="section-divider mb-4" />
                    <p className="max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Continuous learning journey through professional courses and certifications
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.id} cert={cert} index={index} />
                    ))}
                </div>

                {/* Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark rounded-full border border-primary-500/20 text-sm text-gray-400">
                        <Award size={16} className="text-primary-400" />
                        <span>Click on any certificate to view details</span>
                    </div>
                </motion.div>

                {/* ───────── Modal ───────── */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="glass-dark rounded-3xl p-8 max-w-3xl w-full relative border border-white/10 max-h-[90vh] overflow-y-auto"
                                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(124,92,252,0.4) transparent' }}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all"
                                >
                                    <X size={20} />
                                </button>

                                <div className="mb-6">
                                    <div className="mb-4">
                                        {selectedCert.IconComponent ? (
                                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedCert.gradient || 'from-primary-500/20 to-accent-purple/20'}`}>
                                                <selectedCert.IconComponent className="text-white" size={28} />
                                            </div>
                                        ) : (
                                            <Award className="text-primary-400" size={48} />
                                        )}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple">
                                        {selectedCert.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Building2 size={16} />
                                            <span>{selectedCert.issuer}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{selectedCert.date}</span>
                                        </div>
                                    </div>

                                    {/* Render detailed Info for Certificates vs Hackathons */}
                                    <div className="mt-4 text-gray-300 text-sm">
                                        {selectedCert.isCertificate && selectedCert.description && (
                                            <div>
                                                <p className="font-medium text-white mb-1">Description:</p>
                                                <p className="leading-relaxed">{selectedCert.description}</p>
                                            </div>
                                        )}
                                        {selectedCert.isHackathon && (
                                            <div className="space-y-4">
                                                {selectedCert.problemStatement && (
                                                    <div>
                                                        <p className="font-medium text-white mb-1">Problem Statement:</p>
                                                        <p className="leading-relaxed">{selectedCert.problemStatement}</p>
                                                    </div>
                                                )}
                                                {selectedCert.solution && (
                                                    <div>
                                                        <p className="font-medium text-white mb-1">Solution & Outcome:</p>
                                                        <p className="leading-relaxed whitespace-pre-line">{selectedCert.solution}</p>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-4 pt-2">
                                                    {selectedCert.repoLink && (
                                                        <a href={selectedCert.repoLink} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline flex items-center gap-1">
                                                            Project Repo
                                                        </a>
                                                    )}
                                                    {selectedCert.demoVideo && (
                                                        <a href={selectedCert.demoVideo} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline flex items-center gap-1">
                                                            Demo Video
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="aspect-[4/3] bg-gradient-to-br from-primary-900/20 via-dark-800 to-accent-purple/20 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
                                    {selectedCert.image ? (
                                        <img
                                            src={selectedCert.image}
                                            alt={selectedCert.title}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="text-center space-y-4">
                                            <Award size={80} className="text-primary-400 opacity-50 mx-auto" />
                                            <div>
                                                <p className="text-gray-400 font-medium">Certificate Image Placeholder</p>
                                                <p className="text-sm text-gray-600 mt-2">Add your actual certificate images here</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* View Full Certificate Button */}
                                {selectedCert.cloudinaryLink && (
                                    <div className="mt-6 flex justify-center">
                                        <a
                                            href={selectedCert.cloudinaryLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-purple text-white font-semibold hover:shadow-lg hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
                                        >
                                            <ExternalLink size={18} />
                                            View Full Certificate
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certificates;
