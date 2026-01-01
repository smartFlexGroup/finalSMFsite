import SupportHero from '@/components/sections/support/SupportHero';
import SystemStatus from '@/components/sections/support/SystemStatus';
import SupportTriage from '@/components/sections/support/SupportTriage';
import CommonIssues from '@/components/sections/support/CommonIssues';

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero with Search */}
      <SupportHero />
      
      {/* System Status Bar - overlaps bottom of hero */}
      <SystemStatus />
      
      {/* Triage Cards with Hover Effects */}
      <SupportTriage />
      
      {/* Common Issues Grid */}
      <CommonIssues />
    </div>
  );
}

