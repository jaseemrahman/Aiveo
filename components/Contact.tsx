
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('Please fill in all fields');
      return;
    }

    if (formData.message.length > 500) {
      setStatus('Message cannot exceed 500 characters');
      return;
    }

    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with premium AI solutions? Let's discuss how our cutting-edge 
            technology and exceptional quality can drive your success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-sm"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none text-sm"
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded font-medium transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>

              {status && (
                <div className={`text-center py-2 ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

          <div className="lg:pl-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-mail-line text-lg text-black"></i>
                    </div>
                    <span className="ml-3 text-gray-700">aiveoglobal@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-phone-line text-lg text-black"></i>
                    </div>
                    <span className="ml-3 text-gray-700">+971-123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mt-1">
                      <i className="ri-map-pin-line text-lg text-black"></i>
                    </div>
                    <span className="ml-3 text-gray-700">Sheikh Zayed Road, Al Wasl, Dubai, United Arab Emirates</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Why Choose AIVEO?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium AI-powered solutions</li>
                  <li>• Exceptional quality and attention to detail</li>
                  <li>• Cutting-edge technology implementation</li>
                  <li>• Proven track record of success</li>
                  <li>• Dedicated support and maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
