"use client";

import { ShoppingCart, Factory, FileText, Shield, ExternalLink } from "lucide-react";
import Link from "next/link";
import { legalData } from "@/components/legal/legal-data";

export default function LegalDashboard() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      
      {/* Top Row - The Roles: Customers & Suppliers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Customer Documents Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-t-4 border-blue-500 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <ShoppingCart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {legalData.customers.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Essential agreements for our customers
                </p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {legalData.customers.documents.map((doc, index) => (
                <li key={index}>
                  <Link 
                    href={doc.href}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {doc.title}
                        </span>
                        <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {doc.description && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {doc.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Supplier Documents Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-t-4 border-orange-500 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <Factory className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {legalData.suppliers.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Partnership requirements and guidelines
                </p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {legalData.suppliers.documents.map((doc, index) => (
                <li key={index}>
                  <Link 
                    href={doc.href}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                  >
                    <FileText className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                          {doc.title}
                        </span>
                        <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {doc.description && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {doc.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Row - General Compliance */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            General Compliance
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Site policies and regulatory information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalData.generalCompliance.map((doc, index) => (
            <Link
              key={index}
              href={doc.href}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                  <Shield className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2 flex items-center gap-2">
                    {doc.title}
                    <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {doc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Row - Quality Trust Banner */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-300">
                Certified Network
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {legalData.qualityFramework.headline}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {legalData.qualityFramework.description}
            </p>
          </div>

          {/* Standards Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {legalData.qualityFramework.standards.map((standard, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {standard}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="h-5 w-5" />
              Request Quality Packet
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Get project-specific certifications and quality documentation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

