import React, { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Convert Lat/Lng to 3D Cartesian Coordinates on a Sphere
const latLngToVector3 = (lat, lng, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    return new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
};

// Coordinates Phase Data
const LOCATIONS = [
    { name: "Global", radius: 8, lat: 20, lng: 0 },
    { name: "India", radius: 3.5, lat: 20.5937, lng: 78.9629 },
    { name: "Gujarat", radius: 2.5, lat: 22.2587, lng: 71.1924 },
    { name: "Ahmedabad", radius: 2.1, lat: 23.0225, lng: 72.5714 }
];

const ParticleGlobe = ({ globeRotationRef }) => {
    // Generate particles for a spherical shell
    const count = 6000;
    const [positions, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const sz = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const r = 2; // Radius of the globe
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);

            sz[i] = Math.random() * 0.015 + 0.005;
        }
        return [pos, sz];
    }, []);

    return (
        <group ref={globeRotationRef}>
            {/* Core Particle Sphere */}
            <Points positions={positions}>
                <PointMaterial
                    transparent
                    color="#DFD0B8"
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* Subtle Inner Glow */}
            <Sphere args={[1.98, 32, 32]}>
                <meshBasicMaterial color="#393E46" transparent opacity={0.3} />
            </Sphere>

            {/* Atmosphere/Fresnel Glow */}
            <Sphere args={[2.05, 64, 64]}>
                <meshPhongMaterial
                    transparent
                    opacity={0.1}
                    color="#DFD0B8"
                    envMapIntensity={0.4}
                    side={THREE.BackSide}
                />
            </Sphere>
        </group>
    );
};

const InteractiveGlobe = () => {
    const globeRotationRef = useRef();
    const [step, setStep] = useState(0);
    const { camera } = useThree();

    const targetCameraPos = useRef(new THREE.Vector3(0, 0, 8));
    const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

    const handleClick = (e) => {
        e.stopPropagation();
        const nextStep = (step + 1) % LOCATIONS.length;
        setStep(nextStep);

        const loc = LOCATIONS[nextStep];
        if (nextStep === 0) {
            targetCameraPos.current.set(0, 0, 8);
        } else {
            const targetVec = latLngToVector3(loc.lat, loc.lng, loc.radius);
            if (globeRotationRef.current) {
                targetVec.applyEuler(globeRotationRef.current.rotation);
            }
            targetCameraPos.current.copy(targetVec);
        }
    };

    useFrame(() => {
        camera.position.lerp(targetCameraPos.current, 0.05);
        camera.lookAt(targetLookAt.current);

        if (globeRotationRef.current && step === 0) {
            globeRotationRef.current.rotation.y += 0.002;
            globeRotationRef.current.rotation.x += 0.0005;
        }
    });

    const pinPos = latLngToVector3(LOCATIONS[3].lat, LOCATIONS[3].lng, 2.05);

    return (
        <group onClick={handleClick} className="cursor-pointer">
            <ParticleGlobe globeRotationRef={globeRotationRef} />

            {/* Red Pin for Ahmedabad */}
            {step === 3 && (
                <group ref={(g) => {
                    if (g && globeRotationRef.current) {
                        g.rotation.copy(globeRotationRef.current.rotation);
                    }
                }}>
                    <mesh position={pinPos}>
                        <sphereGeometry args={[0.04, 16, 16]} />
                        <meshBasicMaterial color="#ef4444" />
                    </mesh>
                    <mesh position={pinPos}>
                        <ringGeometry args={[0.06, 0.08, 32]} />
                        <meshBasicMaterial color="#ef4444" transparent opacity={0.6} side={THREE.DoubleSide} />
                    </mesh>
                </group>
            )}
        </group>
    );
};

const Scene3D = () => {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#DFD0B8" />
            <InteractiveGlobe />
        </>
    );
};

export default Scene3D;
