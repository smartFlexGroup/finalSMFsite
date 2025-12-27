import Link from "next/link";
import { 
  Cog, 
  Layers, 
  Box, 
  Factory, 
  Flame, 
  Zap, 
  Paintbrush, 
  Puzzle,
  ArrowRight
} from "lucide-react";

const capabilities = [
  {
    title: "CNC Machining",
    icon: Cog,
    href: "/capabilities/cnc-machining",
  },
  {
    title: "Sheet Metal",
    icon: Layers,
    href: "/capabilities/sheet-metal",
  },
  {
    title: "Additive Mfg",
    icon: Box,
    href: "/capabilities/additive-manufacturing",
  },
  {
    title: "Injection Molding",
    icon: Factory,
    href: "/capabilities/injection-molding",
  },
  {
    title: "Casting",
    icon: Flame,
    href: "/capabilities/casting",
  },
  {
    title: "Welding & Joining",
    icon: Zap,
    href: "/capabilities/welding-joining",
  },
  {
    title: "Finishing",
    icon: Paintbrush,
    href: "/capabilities/finishing",
  },
  {
    title: "Assembly",
    icon: Puzzle,
    href: "/capabilities/assembly",
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Smart Flex Group Capabilities
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            We serve original equipment manufacturers and product companies across multiple end-markets. 
            From prototype to production, we deliver value in an era of unprecedented change.
          </p>
          <Link 
            href="/capabilities" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Explore all capabilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Link
                key={capability.title}
                href={capability.href}
                className="group bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {capability.title}
                </h3>
                
                {/* Learn More Link (visible on hover) */}
                <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

