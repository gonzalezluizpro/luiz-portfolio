'use client';

import React, { useState } from 'react';

interface TestimonialForm {
  name: string;
  role: string;
  company: string;
  comment: string;
}

export const Testimonials = () => {
  const [formData, setFormData] = useState<TestimonialForm>({
    name: '',
    role: '',
    company: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      console.log('Testimonial submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        role: '',
        company: '',
        comment: ''
      });
      
      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from organizations we&apos;ve helped with their IT management and support needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Testimonial
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
            </button>
          </form>

          {showSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for sharing your testimonial!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;