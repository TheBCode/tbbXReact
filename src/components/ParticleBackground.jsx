import React, { useEffect } from 'react';

import ParticlesJS from "particles.js";
import particlesConfig from "./config/particles-config.js";

function ParticleBackground() {

    useEffect(() => {
        return (
            <ParticlesJS params={particlesConfig}></ParticlesJS>
        )
    })
}

export default ParticleBackground;
