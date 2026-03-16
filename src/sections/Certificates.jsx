import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink, Calendar, Building2 } from 'lucide-react';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Single certificate - Hackathon Winner
    const certificates = [
        {
            id: 1,
            title: '1st Place Hackathon Winner',
            issuer: 'Hackathon Competition',
            date: '2024',
            image: '/assets/Hackathon  1st place certuficate crp.jpeg',
            icon: '🏆',
        },
        {
            id: 2,
            title: 'DevHeat Hackathon Participant',
            issuer: 'DevHeat',
            date: '2024',
            image: '/assets/DevHeat Hackathon.png',
            icon: '🔥',
        },
        {
            id: 3,
            title: 'DoppleGanger Hackathon Participant',
            issuer: 'DoppleGanger',
            date: '2024',
            image: '/assets/DoppleGanger Hackathon.png',
            icon: '👥',
        },
    ];

    const CertificateCard = ({ cert, index }) => {
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
                        {/* Certificate Image */}
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
                                        className="text-7xl opacity-80"
                                    >
                                        {cert.icon}
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
                        className="inline-block mb-4"
                    >
                        <span className="text-6xl">🏆</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-purple">Achievements</span>
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

                {/* Note for adding certificates */}
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

                {/* Modal */}
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
                                    <div className="text-6xl mb-4">{selectedCert.icon}</div>
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
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certificates;
