'use client'

import React from 'react'
import Particles from "react-tsparticles";
import { particleOptions } from '../particles'
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesEffect = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);
    
    return (
        <Particles id="tsparticles" options={particleOptions as any} init={particlesInit} />
    )
}

export default ParticlesEffect