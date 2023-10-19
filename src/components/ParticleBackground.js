import React, { useEffect } from 'react';
import particlesJS from 'particles.js';

function ParticleBackground() {

    useEffect(() => {
        particlesJS('particles-js', {
            // Configure Particle.js options here
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: '#FFFFFF',
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: 3,
                    random: true,
                },
                move: {
                    enable: true,
                    speed: 2,
                },
            },
        });
    }, []);

    return <div id="particles-js" className="fixed top-0 left-0 w-full h-full z-0" />;
}

export default ParticleBackground;
