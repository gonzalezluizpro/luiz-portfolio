// src/components/Expertise.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Expertise = () => {
  const expertise = [
    "Windows Server & Active Directory",
    "Cloud Platforms (AWS, Azure)",
    "Database Management (SQL, Oracle)",
    "DevOps Practices",
    "Agile Methodologies",
    "IT Service Management (ITIL)",
    "Cross-functional Team Leadership",
    "Generative AI Implementation"
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item, index) => (
            <div key={index} 
                 className="flex items-center gap-2 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-black">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
