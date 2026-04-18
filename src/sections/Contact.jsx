import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socialLinks = [
        { icon: Github,   href: 'https://github.com/atulXdev',                             label: 'GitHub',   color: '#E5E7EB', glow: 'rgba(229,231,235,0.25)' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/atul-singh-987b0b394/',        label: 'LinkedIn', color: '#60A5FA', glow: 'rgba(96,165,250,0.25)' },
        { icon: Twitter,  href: 'https://x.com/AtulCodes',                                     label: 'Twitter',  color: '#38BDF8', glow: 'rgba(56,189,248,0.25)' },
        { icon: Code2,    href: 'https://leetcode.com/u/atul_singh_cg/',                                    label: 'LeetCode', color: '#FBBF24', glow: 'rgba(251,191,36,0.25)' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: 'info', message: 'Sending message...' });

        try {
            await emailjs.sendForm(
                'service_486cuxm',
                'template_gihh1mu',
                formRef.current,
                '_EA4mOkg8iJvk1I3y'
            );
            setStatus({ type: 'success', message: "Message sent! I'll get back to you soon 🚀" });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="relative py-24 px-6 overflow-hidden" style={{ background: '#0B0F19' }}>

            {/* Ambient orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="orb-1 absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,252,0.1) 0%, transparent 70%)' }} />
                <div className="orb-2 absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }} />
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
                    <p className="text-sm font-mono tracking-[3px] uppercase mb-3" style={{ color: '#7C5CFC' }}>Let's collaborate</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-5">
                        <span style={{ color: '#E5E7EB' }}>Get In </span>
                        <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="section-divider mb-4" />
                    <p className="max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
                        Let's connect and discuss how we can work together on exciting projects
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">

                    {/* Left: Info + Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-8" style={{ color: '#E5E7EB' }}>Let's Talk</h3>

                        {/* Location */}
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: 'rgba(124,92,252,0.12)', border: '1px solid rgba(124,92,252,0.3)' }}>
                                <MapPin style={{ color: '#7C5CFC' }} size={20} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: '#6B7280' }}>Location</p>
                                <p className="font-semibold" style={{ color: '#E5E7EB' }}>India 🇮🇳</p>
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: '#6B7280' }}>Connect with me</p>
                            <div className="flex gap-3 flex-wrap">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.15, y: -4 }}
                                            whileTap={{ scale: 0.92 }}
                                            className="flex flex-col items-center gap-2"
                                            aria-label={social.label}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                                                style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.border = `1px solid ${social.color}50`;
                                                    e.currentTarget.style.boxShadow = `0 0 20px ${social.glow}`;
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }}
                                            >
                                                <Icon size={20} style={{ color: social.color }} />
                                            </div>
                                            <span className="text-xs" style={{ color: '#6B7280' }}>{social.label}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
                            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse flex-shrink-0" />
                            <span className="text-sm font-medium" style={{ color: '#22C55E' }}>
                                Currently available for freelance &amp; internship roles
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#6B7280' }}>Your Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="e.g. John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-5 py-4 rounded-xl text-sm font-medium input-neon"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#6B7280' }}>Email Address</label>
                            <input
                                type="email"
                                name="from_email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-5 py-4 rounded-xl text-sm font-medium input-neon"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: '#6B7280' }}>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project or opportunity..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full px-5 py-4 rounded-xl text-sm font-medium input-neon resize-none"
                                required
                            />
                        </div>

                        {/* Status Toast */}
                        <AnimatePresence>
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                    className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${
                                        status.type === 'success'
                                            ? 'bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.3)] text-[#22C55E]'
                                            : status.type === 'error'
                                            ? 'bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.3)] text-red-400'
                                            : 'bg-[rgba(124,92,252,0.08)] border border-[rgba(124,92,252,0.3)] text-[#7C5CFC]'
                                    }`}
                                >
                                    {status.type === 'success'
                                        ? <CheckCircle2 size={18} />
                                        : <AlertCircle size={18} />
                                    }
                                    {status.message}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                            className={`w-full px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2.5 transition-all duration-300 ${
                                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                            style={{
                                background: 'linear-gradient(135deg, #7C5CFC, #00D4FF)',
                                boxShadow: isSubmitting ? 'none' : '0 0 25px rgba(124,92,252,0.4)',
                            }}
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <Send size={18} />
                            )}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </div>

                {/* Neon Divider */}
                <div className="neon-line mb-10" />

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                        © 2025{' '}
                        <span className="gradient-text font-semibold">Atul Singh</span>.
                        {' '}Crafted with passion and code.
                    </p>
                    <p className="text-xs mt-1.5" style={{ color: '#4B5563' }}>
                        Built with React · Three.js · Framer Motion · Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
