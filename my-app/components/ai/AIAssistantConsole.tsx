'use client';

import { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, FileText, Zap, ShieldCheck, Microscope, Wrench, ClipboardCheck } from 'lucide-react';

type ConsoleMode = 'general' | 'materials' | 'medtech';

const quickPrompts = [
  "What materials are FDA-approved for Class II devices?",
  "Explain ISO 13485 requirements for our CNC parts",
  "DFM tips for thin-wall aluminum enclosures",
  "Compare anodizing vs powder coating for outdoor use"
];

const mockSources = [
  { name: "ISO_13485.pdf", icon: FileText, status: "verified" },
  { name: "CNC_Design_Guide.md", icon: Wrench, status: "verified" },
  { name: "FDA_Material_Database", icon: ShieldCheck, status: "verified" }
];

const mockAnswer = `Based on FDA guidance and ISO 13485 compliance standards, the following materials are pre-approved for Class II medical devices:

**Primary Materials:**
• 316L Stainless Steel - Excellent biocompatibility, corrosion resistance
• Medical-grade PEEK - High strength-to-weight, chemical resistance
• Ti-6Al-4V Titanium - Superior osseointegration properties
• USP Class VI Silicones - Flexible sealing applications

**Critical Manufacturing Notes:**
All materials must include Material Test Reports (MTRs) with full traceability. We recommend secondary passivation for stainless steel components to achieve Ra < 0.8μm surface finish per FDA guidelines.

**Recommended Next Steps:**
1. Verify device classification with your regulatory team
2. Request material certifications during RFQ phase
3. Schedule pre-production DFM review with our medical-device engineers`;

const engineerNote = "⚠️ Engineer's Take: For Class II devices, we strongly recommend scheduling a Design Review before production. Our medical-device specialists can validate your tolerances against FDA's Quality System Regulation (QSR) and help optimize for sterilization methods.";

export default function AIAssistantConsole() {
  const [mode, setMode] = useState<ConsoleMode>('general');
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [streamedText, setStreamedText] = useState('');

  // Character-by-character streaming effect
  useEffect(() => {
    if (hasResult && !isThinking) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < mockAnswer.length) {
          setStreamedText(mockAnswer.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 15); // Speed of typing effect
      return () => clearInterval(interval);
    }
  }, [hasResult, isThinking]);

  const handleAsk = (question?: string) => {
    const queryText = question || inputText;
    if (!queryText.trim()) return;

    // Reset and start thinking
    setHasResult(false);
    setStreamedText('');
    setIsThinking(true);

    // Simulate AI processing
    setTimeout(() => {
      setIsThinking(false);
      setHasResult(true);
    }, 2000);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputText(prompt);
    handleAsk(prompt);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Panel - Control Deck */}
      <div className="lg:col-span-4">
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 sticky top-24">
          {/* Mode Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Knowledge Domain
            </label>
            <div className="flex gap-2 p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setMode('general')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === 'general'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                General
              </button>
              <button
                onClick={() => setMode('materials')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === 'materials'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Materials
              </button>
              <button
                onClick={() => setMode('medtech')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === 'medtech'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                MedTech
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Your Question
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about materials, standards, DFM recommendations..."
              className="w-full h-32 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                  handleAsk();
                }
              }}
            />
            <button
              onClick={() => handleAsk()}
              disabled={!inputText.trim() || isThinking}
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white font-semibold rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              <Sparkles className="w-5 h-5" />
              {isThinking ? 'Analyzing...' : 'Ask AI Engineer'}
            </button>
          </div>

          {/* Quick Prompts */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Quick Prompts
            </label>
            <div className="flex flex-col gap-2">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickPrompt(prompt)}
                  disabled={isThinking}
                  className="text-left px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Workspace */}
      <div className="lg:col-span-8">
        <div className="bg-white dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm min-h-[500px]">
          {/* State A: Empty State */}
          {!isThinking && !hasResult && (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <Sparkles className="w-16 h-16 text-primary mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to assist.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-12 text-center max-w-md">
                Ask questions about materials, regulatory standards, DFM guidelines, or start an RFQ.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <ShieldCheck className="w-8 h-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Regulatory Checks
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      ISO, FDA, RoHS compliance validation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Microscope className="w-8 h-8 text-purple-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Material Selection
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Compare properties & certifications
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Zap className="w-8 h-8 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      DFM Analysis
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Optimize designs for manufacturability
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <ClipboardCheck className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      RFQ Prep
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Fast-track quote generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* State B: Thinking State */}
          {isThinking && (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-6"></div>
              </div>
              <div className="text-center space-y-3">
                <p className="text-xl font-semibold text-slate-900 dark:text-white animate-pulse">
                  Searching Knowledge Base...
                </p>
                <p className="text-slate-600 dark:text-slate-400 animate-pulse">
                  Analyzing ISO 13485, FDA guidelines, material databases...
                </p>
              </div>
            </div>
          )}

          {/* State C: Result State */}
          {!isThinking && hasResult && (
            <div className="space-y-6">
              {/* Sources Row */}
              <div>
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  Sources Consulted
                </h3>
                <div className="flex flex-wrap gap-3">
                  {mockSources.map((source, idx) => {
                    const Icon = source.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                      >
                        <Icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-800 dark:text-green-200">
                          {source.name}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* The Answer */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  AI Analysis
                </h3>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                    {streamedText}
                  </div>
                </div>
              </div>

              {/* Engineer's Note */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Engineer's Note
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                  {engineerNote}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex-1 min-w-[200px] px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors">
                  Start RFQ with this Info
                </button>
                <button className="flex-1 min-w-[200px] px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors">
                  Talk to Engineer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

