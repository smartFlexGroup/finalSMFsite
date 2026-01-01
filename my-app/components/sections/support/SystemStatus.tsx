"use client";

import { supportData } from '@/components/support/support-data';
import { Activity, Wifi, Clock } from 'lucide-react';

export default function SystemStatus() {
  const statusItems = [
    {
      label: 'Platform',
      value: supportData.systemStatus.platform,
      icon: Activity,
      isActive: true
    },
    {
      label: 'Network',
      value: supportData.systemStatus.network,
      icon: Wifi,
      isActive: true
    },
    {
      label: 'Lead Time',
      value: supportData.systemStatus.leadTime,
      icon: Clock,
      isActive: false
    }
  ];

  return (
    <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {statusItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 p-6 hover:bg-white/5 transition-colors"
            >
              <div className="relative">
                <item.icon className="w-6 h-6 text-white/80" />
                {item.isActive && (
                  <>
                    {/* Pulsing dot */}
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </>
                )}
              </div>
              
              <div>
                <div className="text-white/60 text-sm font-medium">{item.label}</div>
                <div className="text-white text-lg font-semibold">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

