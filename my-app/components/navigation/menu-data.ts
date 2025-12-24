import { 
  CreditCard, Terminal, ShieldAlert, Zap, Share2, Globe, Wallet, 
  Repeat, FileText, BarChart, Database, Building2, Rocket, Bot, 
  Bitcoin, ShoppingBag, Landmark, BarChart3, Globe2, Smartphone, 
  Store, Layers, RefreshCw, Cpu, Lightbulb, Plane, Umbrella, Film, 
  Heart, ShoppingCart, AppWindow, Handshake, LifeBuoy, PenTool, Tag, 
  BookOpen, Briefcase, Mail, Calendar, Book, Newspaper, Award, Code2, 
  Activity, PackageCheck, Workflow, Compass, Stethoscope, Microscope, 
  Package, Code, HeartPulse, Anvil, Car, Server, Factory, Network,
  Cog, Box, Paintbrush, Puzzle, ClipboardCheck, FileBadge, Ruler, Truck, Flame,
  Sparkles, Search, Palette, FileCheck, FoldVertical, Users, FileBox, Video, MessageCircle, Component,
  DraftingCompass, HandCoins, ShieldCheck, LogIn
} from "lucide-react";

export const capabilitiesData = {
  title: "Capabilities",
  layout: "capabilities-layout",
  hero: {
    title: "Human Engineering. Precision Fabrication.",
    subhead: "Every RFQ is engineer-reviewed. We protect your IP, match the right manufacturing partners, and deliver a single ready-to-approve proposal.",
    video: "/videos/smartflexgrouphomevideo.mp4",
    primaryBtn: "Start an RFQ",
    secondaryBtn: "Talk to an Engineer"
  },
  chips: [
    { id: "prototype", label: "Prototype", microcopy: "Fast-turn prototyping with DFM feedback — engineered for the next iteration." },
    { id: "bridge", label: "Bridge Production", microcopy: "Stabilize the design and lock the process — smooth handoff from prototype to repeat builds." },
    { id: "production", label: "Production", microcopy: "Consistent, scalable builds — controlled sourcing, documentation, and delivery reliability." },
    { id: "tolerance", label: "Tight Tolerance", microcopy: "Precision-first builds — engineering review, inspection planning, and spec-driven execution." },
    { id: "cosmetic", label: "Cosmetic Finish", microcopy: "Appearance-critical parts — finish requirements managed and verified before delivery." },
    { id: "complex", label: "Complex Assemblies", microcopy: "Multi-process builds — we coordinate suppliers, assembly steps, and quality checkpoints." }
  ],
  defaultMicrocopy: "Engineer-reviewed sourcing for fabricated components — from prototype to production.",
  cards: [
    { title: "CNC Machining", description: "Tight-tolerance parts in metals & plastics.", icon: Cog, tags: ["prototype", "bridge", "production", "tolerance", "complex"] },
    { title: "Sheet Metal", description: "Laser + bend + hardware for brackets & panels.", icon: Layers, tags: ["prototype", "bridge", "production", "tolerance", "cosmetic", "complex"] },
    { title: "Additive Mfg", description: "Fast prototypes & complex geometry.", icon: Box, tags: ["prototype"] },
    { title: "Injection Molding", description: "Repeatable plastic parts & bridge tools.", icon: Factory, tags: ["bridge", "production", "cosmetic"] },
    { title: "Casting", description: "Cost-effective shapes for low-to-mid volume.", icon: Flame, tags: ["cosmetic"] },
    { title: "Welding & Joining", description: "Fixtured TIG/MIG for robust assemblies.", icon: Zap, tags: ["complex"] },
    { title: "Finishing", description: "Anodize, passivate, paint, polish & more.", icon: Paintbrush, tags: ["prototype", "tolerance", "cosmetic"] },
    { title: "Assembly", description: "Kitting, sub-assemblies, and integration.", icon: Puzzle, tags: ["bridge", "production", "tolerance", "complex"] }
  ],
  trustBar: [
    { title: "Inspection Reports", icon: ClipboardCheck },
    { title: "Material Certs", icon: FileBadge },
    { title: "First Article Support", icon: Ruler },
    { title: "Packaging & Logistics", icon: Truck }
  ]
};

export const solutionsData = {
  title: "Solutions",
  layout: "solutions-layout",
  featured: {
    title: "End-to-End Programs",
    description: "White-glove teams for complex builds — manufacturing + engineering when needed.",
    icon: Workflow,
    primaryBtn: "Start Your Project",
    secondaryBtn: "Contact Sales"
  },
  columns: [
    {
      title: "PROGRAMS",
      items: [
        { title: "Design-to-Manufacture", icon: Compass },
        { title: "New Product Introduction", icon: Rocket },
        { title: "Turnkey Contract Manufacturing", icon: Factory },
        { title: "Supply Chain Management", icon: Network }
      ]
    },
    {
      title: "ENGINEERING & DEV",
      items: [
        { title: "Medical Device Dev", icon: Stethoscope },
        { title: "Biotech Instrument Dev", icon: Microscope },
        { title: "Custom Automation", icon: Bot },
        { title: "Commercial Product Dev", icon: Package },
        { title: "Software Dev", icon: Code }
      ]
    },
    {
      title: "MARKETS WE SUPPORT",
      items: [
        { title: "Healthcare & Life Sciences", icon: HeartPulse },
        { title: "Aerospace & Defense", icon: Plane },
        { title: "Industrial Equipment", icon: Anvil },
        { title: "Automotive & Mobility", icon: Car },
        { title: "Tech & Infrastructure", icon: Server }
      ]
    }
  ],
  footer: [
    "Prototyping",
    "Mechanical Engineering",
    "CAD Drafting",
    "Reverse Engineering",
    "Manufacturing Documentation"
  ]
};

export const howWeDeliverData = {
  title: "How We Deliver",
  layout: "developers-layout",
  featured: {
    title: "White-Glove Delivery",
    description: "One team manages your RFQ end-to-end — from review to a final Smart Flex quote.",
    icon: PackageCheck,
    primaryBtn: "Start an RFQ",
    secondaryBtn: "Talk to an Engineer"
  },
  columns: [
    {
      title: "THE PROCESS",
      items: [
        "Submit an RFQ",
        "Engineering Review",
        "IP Protection",
        "Supplier Sourcing",
        "Quote Comparison",
        "Final Proposal"
      ]
    },
    {
      title: "WHAT YOU GET",
      items: [
        "Tracking Number + Updates",
        "One Ready-to-Approve Quote",
        "Accept / Decline in Portal"
      ]
    },
    {
      title: "COMPLEX PROJECTS",
      items: [
        "Design-to-Manufacture Support",
        "Prototyping Support",
        "Supply Chain Management"
      ]
    }
  ]
};

export const resourcesData = {
  title: "Resources",
  layout: "resources-layout",
  searchPlaceholder: "Search guides, materials, finishes, tolerances...",
  aiPanel: {
    title: "Ask the Engineer",
    sub: "AI-powered answers from our engineering library.",
    placeholder: "Ask about ISO 13485, FDA 820...",
    chips: ["RFQ Checklist", "Tolerances", "MedTech Regs"],
    action: "Try AI Assistant"
  },
  columns: [
    {
      title: "LEARN",
      items: [
        { title: "DFM Guides", icon: "BookOpen" },
        { title: "Tolerances & GD&T", icon: "Ruler" },
        { title: "Materials Library", icon: "Layers" },
        { title: "Finishes & Coatings", icon: "Palette" },
        { title: "Quality Docs Explained", icon: "FileCheck" },
        { title: "Regulatory (MedTech)", icon: "FileCheck" }
      ]
    },
    {
      title: "REFERENCE",
      items: [
        { title: "RFQ Checklist", icon: "ClipboardCheck" },
        { title: "Mold Design Guide", icon: "Component" },
        { title: "Sheet Metal Rules", icon: "FoldVertical" },
        { title: "Hardware Standards", icon: "Ruler" }
      ]
    },
    {
      title: "EXPLORE",
      items: [
        { title: "Customer Stories", icon: "Users" },
        { title: "Sample Deliverables", icon: "FileBox" },
        { title: "Webinars & Events", icon: "Video" },
        { title: "Blog / Insights", icon: "Newspaper" }
      ]
    }
  ],
  footer: [
    { title: "Talk to an Engineer", icon: "MessageCircle" },
    { title: "Support Center", icon: "LifeBuoy" },
    { title: "Contact Sales", icon: "Mail" }
  ]
};

export const joinNetworkData = {
  title: "Join Network",
  layout: "join-network-layout",
  hero: {
    title: "Fill Your Capacity. Expand Your Reach.",
    subhead: "We bring the sales to you. No bidding wars, just vetted, high-value programs delivered to your portal.",
    video: "/videos/smartflexgrouphomevideo.mp4",
    primaryBtn: "Apply to Join",
    secondaryBtn: "Partner Stories"
  },
  columns: [
    {
      title: "FOR MANUFACTURERS",
      icon: Factory,
      items: ["Machine Shop Partners", "Contract Manufacturers", "Material Suppliers", "Quality Standards"]
    },
    {
      title: "FOR ENGINEERS",
      icon: DraftingCompass,
      items: ["Design & Engineering Firms", "Specialized Consultants", "Collaborative Programs"]
    }
  ],
  referralBanner: {
    title: "The Referral Partner Program",
    description: "Monetize your network. Earn commissions on every project you bring to Smart Flex.",
    cta: "Start Earning",
    icon: HandCoins
  },
  footer: [
    { title: "Partner Portal Login", icon: LogIn },
    { title: "Onboarding Guide", icon: FileText },
    { title: "Supplier Code of Conduct", icon: ShieldCheck }
  ]
};

