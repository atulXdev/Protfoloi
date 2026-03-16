import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/atulXdev',
            label: 'GitHub',
            color: 'hover:text-gray-300'
        },
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/atul-singh-987b0b394/',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        },
        {
            icon: Twitter,
            href: 'https://twitter.com/atulsingh',
            label: 'Twitter',
            color: 'hover:text-sky-400'
        },
        {
            icon: Code2,
            href: 'https://leetcode.com/atulsingh',
            label: 'LeetCode',
            color: 'hover:text-amber-400'
        },
    ];

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', message: 'Sending message...' });

        try {
            const response = await fetch('http://localhost:5005/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Success! Your message has been sent.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'Could not reach server. Check backend status.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="relative py-20 px-6 bg-dark-800/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto rounded-full mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Let's connect and discuss how we can work together on exciting projects
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>

                        <div className="space-y-6 mb-8">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 text-gray-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                                    <Mail className="text-primary-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold text-primary-400">atul.kumar.singh.cg@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 text-gray-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center">
                                    <MapPin className="text-accent-purple" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-semibold">India</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-gray-400 mb-4">Follow me on:</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                                            aria-label={social.label}
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-6 py-4 glass-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-6 py-4 glass-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full px-6 py-4 glass-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                                required
                            />
                        </div>

                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                        status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                            'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                                    }`}
                            >
                                {status.message}
                            </motion.div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                            className={`w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl text-white font-semibold shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <Send size={20} />
                            )}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-gray-800 text-center"
                >
                    <p className="text-gray-500">
                        © 2024 <span className="text-primary-400 font-semibold">Atul Singh</span>.
                        Crafted with passion and code.
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                        Built with React, Three.js, Framer Motion & Tailwind CSS
                    </p>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -z-10" />
        </footer>
    );
};

export default Contact;
