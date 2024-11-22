// src/components/Hero.tsx
"use client"

import React from 'react';

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">IT Project Management & Support Solutions</h1>
        <p className="text-xl mb-8">16+ years of experience delivering enterprise-grade IT solutions</p>
        <div className="flex gap-4">
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};