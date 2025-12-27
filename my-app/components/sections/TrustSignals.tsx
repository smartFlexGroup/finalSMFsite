import { Check } from "lucide-react";
import Link from "next/link";

export default function TrustSignals() {
  return (
    <section className="bg-white dark:bg-slate-950 pb-20">
      {/* Main Grid Container with Overlap */}
      <div className="relative z-20 mt-0 lg:-mt-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6">
        
        {/* Left Column - Text Content */}
        <div className="lg:col-span-5 pt-8 lg:pt-32">
          <h2 className="mb-6">
            Engineering-Led. Production-Ready.
          </h2>
          
          <p className="mb-6 text-lg">
            We bridge the gap between complex engineering and precision fabrication. Your parts are routed strictly to partners who match your specific quality requirements.
          </p>
          
          <Link 
            href="/quality-standards" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            See our Quality Standards
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Column - Overlapping Cards */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 - Blue Box */}
            <div className="bg-primary text-white p-8 rounded-lg shadow-xl">
              <h3 className="text-white mb-6">
                Network Velocity
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Avg. Quote Time: &lt; 24 Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>50+ Manufacturing Processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Unlimited Production Capacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Global Logistics Managed</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - White Box */}
            <div className="bg-white dark:bg-slate-900 text-foreground p-8 rounded-lg shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="mb-6">
                Vetted Quality Ecosystem
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
                  <span>ISO 9001:2015 Certified Partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
                  <span>AS9100D Capable Network</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
                  <span>ITAR Compliant Workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5 text-accent" />
                  <span>Strict NDA &amp; IP Protection</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

