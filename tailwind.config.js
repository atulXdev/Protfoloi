/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#7C5CFC', // Electric Purple
                    500: '#6442E8', // slightly darker
                    600: '#4D29D6', 
                },
                accent: {
                    cyan: '#00D4FF',
                    purple: '#7C5CFC',
                    pink: '#EC4899',
                },
                dark: {
                    900: '#0B0F19', // Pure base
                    800: '#111827', // Card dark
                    700: '#1F2937', // Elevated card
                    600: '#374151',
                }
            },
            fontFamily: {
                sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'spin-slow': 'spin 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.2), 0 0 20px rgba(124, 92, 252, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.4), 0 0 35px rgba(124, 92, 252, 0.4)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(50px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #7C5CFC, #00D4FF)',
            }
        },
    },
    plugins: [],
}
