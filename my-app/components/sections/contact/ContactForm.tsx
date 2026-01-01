'use client';

import { motion } from 'framer-motion';
import { Send, Fingerprint, CheckCircle } from 'lucide-react';
import { useState } from 'react';

type VerificationState = 'idle' | 'scanning' | 'verified';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });

  const [verificationState, setVerificationState] = useState<VerificationState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleVerification = () => {
    if (verificationState === 'idle') {
      setVerificationState('scanning');
      
      // Simulate biometric scan
      setTimeout(() => {
        setVerificationState('verified');
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (verificationState !== 'verified') {
      return;
    }
    
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Send us a message.
          </h2>
          <p className="text-xl text-gray-400">
            Prefer email? Fill out the form below and a specialist will reach out within 24 hours.
          </p>
        </motion.div>

        {/* Form Card - Holographic Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Outer glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Form Container */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              {/* Top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Grid for inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="John"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="Smith"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  {/* Job Title */}
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="Engineering Manager"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Work Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Topic - Full Width */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
                    Topic <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  >
                    <option value="" className="bg-slate-900">Select a topic...</option>
                    <option value="quote" className="bg-slate-900">Quote Request</option>
                    <option value="engineering" className="bg-slate-900">Engineering Support</option>
                    <option value="partnership" className="bg-slate-900">Supplier Partnership</option>
                    <option value="general" className="bg-slate-900">General Inquiry</option>
                  </select>
                </div>

                {/* Message - Full Width */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Biometric Verification */}
                <div className="pt-4">
                  <motion.div
                    onClick={handleVerification}
                    className={`relative h-14 rounded-lg border flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 ${
                      verificationState === 'idle'
                        ? 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-blue-500 hover:text-blue-400 cursor-pointer'
                        : verificationState === 'scanning'
                        ? 'border-blue-500 text-blue-400 bg-blue-500/10 cursor-default'
                        : 'border-green-500 text-green-400 bg-green-500/10 cursor-default'
                    }`}
                    whileHover={verificationState === 'idle' ? { scale: 1.01 } : {}}
                    whileTap={verificationState === 'idle' ? { scale: 0.99 } : {}}
                  >
                    {/* Scanner Bar Animation (only visible during scanning) */}
                    {verificationState === 'scanning' && (
                      <motion.div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{
                          duration: 1.5,
                          repeat: 1,
                          ease: "linear"
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-3">
                      {verificationState === 'idle' && (
                        <>
                          <Fingerprint className="w-6 h-6" />
                          <span className="font-semibold">Click to Verify Humanity</span>
                        </>
                      )}
                      
                      {verificationState === 'scanning' && (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Fingerprint className="w-6 h-6" />
                          </motion.div>
                          <span className="font-semibold">Scanning...</span>
                        </>
                      )}
                      
                      {verificationState === 'verified' && (
                        <>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                          >
                            <CheckCircle className="w-6 h-6 fill-green-400" />
                          </motion.div>
                          <span className="font-semibold">Verification Complete</span>
                        </>
                      )}
                    </div>

                    {/* Pulse effect for verified state */}
                    {verificationState === 'verified' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-green-400 rounded-lg"
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={verificationState !== 'verified'}
                    className={`w-full font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all duration-200 ${
                      verificationState === 'verified'
                        ? 'bg-primary hover:bg-blue-600 text-white cursor-pointer'
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
                    }`}
                    whileHover={verificationState === 'verified' ? { y: -2, scale: 1.01 } : {}}
                    whileTap={verificationState === 'verified' ? { scale: 0.98 } : {}}
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-500 text-center pt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>
                  . We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

