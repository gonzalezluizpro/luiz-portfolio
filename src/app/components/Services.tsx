// src/components/Services.tsx
import React from 'react';
import { Server, Users, Clock } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "IT Infrastructure Management",
      description: "Expert support for Windows Server, Linux, Cloud platforms (AWS, Azure), and database systems"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Project Management & Agile Leadership",
      description: "Certified project manager with expertise in Scrum, PMBOK, and Management 3.0 methodologies"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Technical Support",
      description: "Comprehensive IT support with proven experience in international environments"
    }
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Services Offered</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} 
               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
 };