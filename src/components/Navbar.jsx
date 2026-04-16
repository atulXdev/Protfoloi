import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Certificates', href: '#certificates', id: 'certificates' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/atulXdev', label: 'GitHub', color: 'hover:text-white' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/atul-singh-987b0b394/', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Twitter, href: 'https://x.com/AtulCodes', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: Code2, href: 'https://leetcode.com/u/atul_singh_cg/', label: 'LeetCode', color: 'hover:text-amber-400' },
    ];

    // Track scroll for navbar blur intensity & active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navItems.map(item => item.id);
            for (const sectionId of sections.reverse()) {
                const el = document.getElementById(sectionId);
                if (el && window.scrollY >= el.offsetTop - 100) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3"
        >
            <div className={`max-w-7xl mx-auto rounded-2xl px-5 py-3 transition-all duration-500 ${
                scrolled
                    ? 'bg-[rgba(11,15,25,0.85)] backdrop-blur-xl border border-[rgba(124,92,252,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(124,92,252,0.1)]'
                    : 'bg-transparent border border-transparent'
            }`}>
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <motion.a href="#home" whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C5CFC] to-[#00D4FF] flex items-center justify-center shadow-[0_0_20px_rgba(124,92,252,0.4)]">
                                <span className="text-white font-bold text-sm tracking-wider">AS</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] rounded-full border-2 border-[#0B0F19] shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                        </div>
                        <div className="hidden md:block">
                            <p className="font-bold text-lg leading-none text-white">Atul Singh</p>
                            <p className="text-[11px] font-mono" style={{ color: '#00D4FF' }}>Full Stack Developer</p>
                        </div>
                    </motion.a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.id;
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.07 }}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                                        isActive
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-lg"
                                            style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.3)' }}
                                            transition={{ type: 'spring', duration: 0.4 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                    {/* Hover underline */}
                                    {!isActive && (
                                        <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-[#7C5CFC] to-[#00D4FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    )}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Social + Mobile toggle */}
                    <div className="flex items-center gap-2">
                        {/* Social Links (Desktop) */}
                        <div className="hidden md:flex items-center gap-1">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 ${social.color} transition-all duration-300`}
                                        style={{ background: 'rgba(255,255,255,0.04)' }}
                                        aria-label={social.label}
                                    >
                                        <Icon size={17} />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Mobile button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-gray-300 transition-all"
                            style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.3)' }}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden mt-4 pt-4 border-t overflow-hidden"
                            style={{ borderColor: 'rgba(124,92,252,0.2)' }}
                        >
                            <div className="flex flex-col gap-1 mb-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                                            activeSection === item.id
                                                ? 'text-white bg-[rgba(124,92,252,0.2)]'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="flex gap-2 pt-2">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                                            style={{ background: 'rgba(255,255,255,0.05)' }}
                                        >
                                            <Icon size={17} />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
