import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
    return (
        <div className="relative min-h-screen bg-dark-900 text-white overflow-x-hidden">
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
                <Suspense fallback={
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-2xl gradient-text">Loading...</div>
                    </div>
                }>
                    <Hero />
                </Suspense>

                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
            </main>

            {/* Background Gradient Orbs */}
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-float" />
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }} />
        </div>
    );
}

export default App;
