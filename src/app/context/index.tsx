'use client'
import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
    welcomeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    tokenomicsRef: React.RefObject<HTMLDivElement>;
    benefitsRef: React.RefObject<HTMLDivElement>;
    roadmapRef: React.RefObject<HTMLDivElement>;
    footerRef: React.RefObject<HTMLDivElement>;
    scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  }

  const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function useScroll() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const welcomeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const tokenomicsRef = useRef<HTMLDivElement>(null);
    const benefitsRef = useRef<HTMLDivElement>(null);
    const roadmapRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
        }
    };

    const value = {
        welcomeRef,
        aboutRef,
        tokenomicsRef,
        benefitsRef,
        roadmapRef,
        footerRef,
        scrollToRef,
    };

    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}
