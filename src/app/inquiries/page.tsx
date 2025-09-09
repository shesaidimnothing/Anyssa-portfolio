'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function Inquiries() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
  };

  return (
    <PageLayout>
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <AnimatedSection>
              <div>
                <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black mb-8">
                  Inquiries
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Ready to create something extraordinary? Let&apos;s discuss your project 
                  and explore how we can bring your vision to life.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">What to Expect</h3>
                  <p className="text-gray-600">
                    I&apos;ll review your inquiry within 24 hours and schedule a consultation 
                    to discuss your project in detail.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">My Process</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Initial consultation and project discovery</li>
                    <li>• Strategic planning and proposal development</li>
                    <li>• Design and development execution</li>
                    <li>• Launch and ongoing support</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div>
                  <h3 className="text-lg font-medium text-black mb-2">Contact Information</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>hello@anyssa.design</p>
                    <p>Available for freelance projects</p>
                    <p>Creative Designer</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Column - Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                >
                  <option value="">Select a project type</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="branding">Branding</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                >
                  <option value="">Select budget range</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry
              </motion.button>
            </form>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </PageLayout>
  );
}
