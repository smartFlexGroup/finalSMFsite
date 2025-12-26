"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from './footer-data';
import { useCookieConsent } from '@/context/CookieContext';
import { useAccessibility } from '@/context/AccessibilityContext';

const Footer = () => {
  const { contactInfo, socialLinks, linkGroups, bottomLinks } = footerData;
  const currentYear = new Date().getFullYear();
  const { openModal } = useCookieConsent();
  const { togglePanel } = useAccessibility();

  return (
    <footer className="bg-[#032c48] border-t border-[#04395e]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          
          {/* Left Column - Company Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/SFGLOGO.png"
                alt="SmartFlex Group Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>

            {/* Tagline */}
            <h3 className="text-lg font-semibold text-white">
              {contactInfo.tagline}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed">
              {contactInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-medium text-white">
                {contactInfo.address}
              </p>
              <p>
                Phone: <a href={`tel:${contactInfo.phone}`} className="hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Columns - Link Groups */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {linkGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="text-sm font-bold text-white mb-4 tracking-wider">
                    {group.title}
                  </h4>
                  <ul className="space-y-3">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-300">
              © {currentYear} SmartFlex Group. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {bottomLinks.map((link, index) => {
                // Special handling for Cookies Preferences and Accessibility
                if (link.special === 'cookies') {
                  return (
                    <button
                      key={index}
                      onClick={openModal}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  );
                }
                
                if (link.special === 'accessibility') {
                  return (
                    <button
                      key={index}
                      onClick={togglePanel}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  );
                }

                // Regular links
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

