import { Sparkles, Lock, MessageCircle, FileText, AlertCircle, Package, CreditCard, AlertTriangle, Truck } from 'lucide-react';

export const supportData = {
  hero: {
    title: "How can we unblock you?",
    placeholder: "Search for 'Anodizing Specs', 'Lead Times', 'Invoice'..."
  },
  
  triageCards: [
    {
      title: "Technical Questions?",
      subtitle: "Instant answers on materials & standards.",
      action: "Ask AI Engineer",
      href: "/ai-assistant",
      icon: Sparkles,
      iconColor: "text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Order Status & QA",
      subtitle: "Track shipments & view inspection reports.",
      action: "Log in to Portal",
      href: "/login",
      icon: Lock,
      iconColor: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Start a New Build",
      subtitle: "Complex assembly? Talk to an architect.",
      action: "Chat with Expert",
      href: "#chat",
      icon: MessageCircle,
      iconColor: "text-green-400",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    }
  ],
  
  systemStatus: {
    platform: "Operational",
    network: "Active",
    leadTime: "3-5 Days"
  },
  
  commonIssues: [
    {
      category: "Billing",
      icon: CreditCard,
      links: [
        { label: "View Invoice History", href: "/billing/invoices" },
        { label: "Payment Methods", href: "/billing/payment" },
        { label: "Tax Certificates", href: "/billing/tax" },
        { label: "Billing Disputes", href: "/billing/disputes" }
      ]
    },
    {
      category: "Quality",
      icon: AlertTriangle,
      links: [
        { label: "QA Reports & Certifications", href: "/quality/reports" },
        { label: "Material Certifications", href: "/quality/materials" },
        { label: "Submit Quality Concern", href: "/quality/submit" },
        { label: "Return & Rework Process", href: "/quality/returns" }
      ]
    },
    {
      category: "Shipping",
      icon: Truck,
      links: [
        { label: "Track My Order", href: "/shipping/track" },
        { label: "Shipping Policies", href: "/shipping/policies" },
        { label: "International Shipping", href: "/shipping/international" },
        { label: "Expedited Options", href: "/shipping/expedited" }
      ]
    },
    {
      category: "Documentation",
      icon: FileText,
      links: [
        { label: "Technical Drawings", href: "/docs/drawings" },
        { label: "Capability Guides", href: "/docs/capabilities" },
        { label: "API Documentation", href: "/docs/api" },
        { label: "Download CAD Files", href: "/docs/cad" }
      ]
    }
  ]
};

