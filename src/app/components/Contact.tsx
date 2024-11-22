"use client"

import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">Connect With Me</h2>
          
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:gonzalezluizpro@gmail.com" 
                   className="text-blue-600 hover:text-blue-800">
                  gonzalezluizpro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <p className="font-semibold text-gray-900">LinkedIn</p>
                <a href="https://www.linkedin.com/in/luizgonzalezpro/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-600 hover:text-blue-800">
                  luizgonzalezpro
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            I am always open to discussing new projects and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};