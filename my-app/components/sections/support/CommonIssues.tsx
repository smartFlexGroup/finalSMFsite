"use client";

import { supportData } from '@/components/support/support-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommonIssues() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Common Issues & Resources
          </h2>
          <p className="text-xl text-slate-600">
            Quick links to frequently requested information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportData.commonIssues.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center justify-between gap-2 text-slate-600 hover:text-slate-900 group transition-colors"
                    >
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Still need help?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist with any questions or concerns
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Support
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Browse Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

