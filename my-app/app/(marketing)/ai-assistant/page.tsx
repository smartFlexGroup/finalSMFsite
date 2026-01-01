import AIAssistantConsole from "@/components/ai/AIAssistantConsole";
import { FileText, BookOpen, Shield, Wrench, Database, FlaskConical } from "lucide-react";

const knowledgeLibrary = [
  {
    title: "ISO 13485:2016",
    category: "Medical Device QMS",
    icon: Shield,
    color: "text-blue-500"
  },
  {
    title: "FDA 21 CFR Part 820",
    category: "Quality System Regulation",
    icon: FileText,
    color: "text-purple-500"
  },
  {
    title: "Material Properties DB",
    category: "1,200+ Materials",
    icon: Database,
    color: "text-green-500"
  },
  {
    title: "DFM Best Practices",
    category: "Process-Specific Guides",
    icon: Wrench,
    color: "text-amber-500"
  },
  {
    title: "RoHS & REACH Compliance",
    category: "Environmental Standards",
    icon: FlaskConical,
    color: "text-teal-500"
  },
  {
    title: "Surface Finish Standards",
    category: "Ra, Rz, ISO 1302",
    icon: BookOpen,
    color: "text-rose-500"
  }
];

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Cinematic Video Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/smartflexgroupaiassistant.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Your Engineering Co-Pilot
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
            Instant answers on materials, standards, and manufacturing—powered by decades of production knowledge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="text-white/80 text-sm">ISO 13485</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="text-white/80 text-sm">FDA Compliance</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="text-white/80 text-sm">DFM Analysis</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <span className="text-white/80 text-sm">Material Selection</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Console - Floating with Overlap Effect */}
      <section className="relative z-20 -mt-32 px-4 md:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <AIAssistantConsole />
        </div>
      </section>

      {/* Knowledge Library Preview */}
      <section className="bg-slate-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built on Verified Knowledge
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI Engineer is trained on industry-standard documentation, regulatory guidelines, 
              and real-world manufacturing data from thousands of successful builds.
            </p>
          </div>

          {/* Knowledge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeLibrary.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-slate-50 dark:bg-slate-900 ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-900 dark:text-blue-200 font-medium">
                <span className="font-bold">Always Verified:</span> Every response cites its sources. 
                Our engineers review and update the knowledge base continuously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
