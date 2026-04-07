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
            badge: '🥇 Winner',
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
        },
    ];

    const certificates = [
        {
            id: 'c1',
            title: 'React JS Certification',
            issuer: 'React Mastery',
            date: '2026',
            image: reactCert,
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775496996/React_js_certifacte_Atul_Singh_totl7v.png',
            IconComponent: Atom,
        },
        {
            id: 'c2',
            title: 'Web Development Certification',
            issuer: 'Web Dev Mastery',
            date: '2026',
            image: webDevCert,
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775496994/Atul_Singh_Web_dev_v8eplb.png',
            IconComponent: Monitor,
        },
        {
            id: 'c3',
            title: 'Gemini for Workspace Certification',
            issuer: 'Google',
            date: '2026',
            image: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775537876/Atul_Singh_Gemini_for_workspace_certificate_cpd4km.png',
            cloudinaryLink: 'https://res.cloudinary.com/dv5jwhu5t/image/upload/v1775537876/Atul_Singh_Gemini_for_workspace_certificate_cpd4km.png',
            IconComponent: Globe,
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
                <div className="glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-900/20 via-dark-800 to-accent-purple/20 relative overflow-hidden">
                        <img
                            src={hack.image}
                            alt={hack.title}
                            className="w-full h-full object-contain bg-dark-900 transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Badge */}
                        {hack.badge && (
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${hack.gradient} shadow-lg`}>
                                {hack.badge}
                            </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <div className="flex items-center gap-2 text-primary-400">
                                <ExternalLink size={18} />
                                <span className="font-medium text-sm">View Certificate</span>
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary-500/30 rounded-tr-lg" />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${hack.gradient} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="text-white" size={20} />
                            </div>
                            <h3 className="text-lg font-bold group-hover:text-primary-400 transition-colors line-clamp-2">
                                {hack.title}
                            </h3>
                        </div>
                        <div className="space-y-2 mt-auto">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Building2 size={14} />
                                <span>{hack.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <Calendar size={14} />
                                <span>{hack.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${hack.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300 -z-10`} />
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
                <div className="glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                    {/* Certificate Preview */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-900/20 via-dark-800 to-accent-purple/20 relative overflow-hidden">
                        <div className="absolute inset-0">
                            {cert.image ? (
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain bg-dark-900"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full bg-dark-900">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="opacity-80"
                                    >
                                        <Icon className="text-primary-400" size={64} />
                                    </motion.div>
                                </div>
                            )}
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <div className="flex items-center gap-2 text-primary-400">
                                <ExternalLink size={18} />
                                <span className="font-medium text-sm">View Details</span>
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary-500/30 rounded-tr-lg" />
                    </div>

                    {/* Info */}
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                            {cert.title}
                        </h3>
                        <div className="space-y-2 mt-auto">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Building2 size={14} />
                                <span>{cert.issuer}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <Calendar size={14} />
                                <span>{cert.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-purple rounded-2xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300 -z-10" />
            </motion.div>
        );
    };

    return (
        <section id="certificates" className="relative py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* ───────── Hackathons Sub-Section ───────── */}
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
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 mb-4"
                    >
                        <Swords className="text-amber-400" size={32} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Achievements</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
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
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 border border-primary-500/30 mb-4"
                    >
                        <Medal className="text-primary-400" size={32} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple">Credentials</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
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
                                className="glass-dark rounded-3xl p-8 max-w-3xl w-full relative border border-white/10"
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
