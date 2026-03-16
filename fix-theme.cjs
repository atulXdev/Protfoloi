const fs = require('fs');
const path = require('path');

// 1. Fix tailwind.config.js
let twPath = path.join(__dirname, 'tailwind.config.js');
let twContent = fs.readFileSync(twPath, 'utf8');

twContent = twContent.replace(
    /colors:\s*\{\s*primary:\s*\{[\s\S]*?\},\s*accent:\s*\{[\s\S]*?\},\s*dark:\s*\{[\s\S]*?\}\s*\}/m,
    `colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#00ff66', // Neon Green Light
                    500: '#00cc55', // Neon Green Base
                    600: '#009940', // Neon Green Dark
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                accent: {
                    cyan: '#00ff66', 
                    purple: '#ffd700', 
                    pink: '#ffea00', 
                    orange: '#ffaa00', 
                },
                dark: {
                    900: '#050505',
                    800: '#0a0a0a',
                    700: '#111111',
                    600: '#1a1a1a',
                }
            }`
);
fs.writeFileSync(twPath, twContent);

// 2. Fix index.css
let cssPath = path.join(__dirname, 'src', 'index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace('background: linear-gradient(135deg, #22c55e 0%, #eab308 50%, #d97706 100%);', 'background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);');
cssContent = cssContent.replace('text-shadow: -2px 0 #22c55e; /* Neon Green */', 'text-shadow: -2px 0 #00ff66; /* Neon Green */');
cssContent = cssContent.replace('text-shadow: -2px 0 #eab308; /* Gold */', 'text-shadow: -2px 0 #ffd700; /* Gold */');
cssContent = cssContent.replace('background: linear-gradient(180deg, #22c55e, #eab308);', 'background: linear-gradient(180deg, #00ff66, #009940);');
cssContent = cssContent.replace('background: linear-gradient(180deg, #4ade80, #facc15);', 'background: #ffd700;');
cssContent = cssContent.replace('border: 2px solid #22c55e;', 'border: 2px solid #00ff66;');
cssContent = cssContent.replace('background: rgba(34, 197, 94, 0.3);', 'background: rgba(0, 255, 102, 0.3);');

fs.writeFileSync(cssPath, cssContent);

// 3. Fix Scene3D.jsx
let scenePath = path.join(__dirname, 'src', 'components', 'Scene3D.jsx');
let sceneContent = fs.readFileSync(scenePath, 'utf8');
sceneContent = sceneContent.replace('color="#09090b" // Dark core', 'color="#030303" // Dark core');
sceneContent = sceneContent.replace('emissive="#15803d" // Deep green edge glow', 'emissive="#00aa44" // Deep green edge glow');
sceneContent = sceneContent.replace('color="#eab308" /> {/* Gold */}', 'color="#ffd700" /> {/* Gold */}');
sceneContent = sceneContent.replace('color="#22c55e" /> {/* Neon Green */}', 'color="#00ff66" /> {/* Neon Green */}');
fs.writeFileSync(scenePath, sceneContent);

// 4. Component Fixes
const filesToFix = [
    'src/components/Navbar.jsx',
    'src/sections/Hero.jsx',
    'src/sections/About.jsx',
    'src/sections/Projects.jsx',
    'src/sections/Skills.jsx',
    'src/sections/Certificates.jsx',
    'src/sections/Contact.jsx'
];

filesToFix.forEach(file => {
    let filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace muddy background gradients with sleek green
    content = content.replace(/from-primary-600 to-accent-orange/g, 'from-primary-400 to-primary-600');
    content = content.replace(/from-primary-500 to-accent-orange/g, 'from-primary-400 to-primary-600');

    // Replace text gradients with sleek pure gold
    content = content.replace(/from-primary-500 via-accent-pink to-accent-orange/g, 'from-accent-purple to-accent-orange');
    content = content.replace(/from-primary-500 to-accent-orange/g, 'from-accent-purple to-accent-orange');

    fs.writeFileSync(filePath, content);
});

console.log('Fixed theme successfully!');
