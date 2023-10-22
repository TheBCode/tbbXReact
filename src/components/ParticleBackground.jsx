import React, { useEffect } from 'react';



import Particles from "particles.js";
import particlesConfig from "./config/particles-config.js";

function ParticleBackground() {

    // useEffect(() => {
    //     ParticlesJS('particles-js', {
    //         // Configure Particle.js options here
    //         particles: {
    //             number: {
    //                 value: 80,
    //                 density: {
    //                     enable: true,
    //                     value_area: 800,
    //                 },
    //             },
    //             color: {
    //                 value: '#FFFFFF',
    //             },
    //             shape: {
    //                 type: 'circle',
    //             },
    //             size: {
    //                 value: 3,
    //                 random: true,
    //             },
    //             move: {
    //                 enable: true,
    //                 speed: 2,
    //             },
    //         },
    //     });
    // }, []);

    return (
        <Particles params={particlesConfig}  ></Particles>
    );
}

export default ParticleBackground;
