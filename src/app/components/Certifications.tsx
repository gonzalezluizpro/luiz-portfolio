// src/components/Certifications.tsx
import React from 'react';
import { Award } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: "CAPM Certification",
      organization: "Project Management Institute",
      icon: <Award className="w-12 h-12 text-blue-600 mb-4" />
    },
    {
      title: "PSM I",
      organization: "Professional Scrum Master",
      icon: <Award className="w-12 h-12 text-blue-600 mb-4" />
    },
    {
      title: "Cloud Certified",
      organization: "AWS & Azure",
      icon: <Award className="w-12 h-12 text-blue-600 mb-4" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Certifications & Credentials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} 
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow text-center hover:shadow-lg transition-shadow">
            {cert.icon}
            <h3 className="font-semibold mb-2 text-black">{cert.title}</h3>
            <p className="text-black">{cert.organization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};