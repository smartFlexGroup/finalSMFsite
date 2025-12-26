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
    { title: "CNC Machining", description: "Tight-tolerance parts in metals & plastics.", icon: Cog, tags: ["prototype", "bridge", "production", "tolerance", "complex"], href: "/capabilities/cnc-machining" },
    { title: "Sheet Metal", description: "Laser + bend + hardware for brackets & panels.", icon: Layers, tags: ["prototype", "bridge", "production", "tolerance", "cosmetic", "complex"], href: "/capabilities/sheet-metal" },
    { title: "Additive Mfg", description: "Fast prototypes & complex geometry.", icon: Box, tags: ["prototype"], href: "/capabilities/additive-manufacturing" },
    { title: "Injection Molding", description: "Repeatable plastic parts & bridge tools.", icon: Factory, tags: ["bridge", "production", "cosmetic"], href: "/capabilities/injection-molding" },
    { title: "Casting", description: "Cost-effective shapes for low-to-mid volume.", icon: Flame, tags: ["cosmetic"], href: "/capabilities/casting" },
    { title: "Welding & Joining", description: "Fixtured TIG/MIG for robust assemblies.", icon: Zap, tags: ["complex"], href: "/capabilities/welding-joining" },
    { title: "Finishing", description: "Anodize, passivate, paint, polish & more.", icon: Paintbrush, tags: ["prototype", "tolerance", "cosmetic"], href: "/capabilities/finishing" },
    { title: "Assembly", description: "Kitting, sub-assemblies, and integration.", icon: Puzzle, tags: ["bridge", "production", "tolerance", "complex"], href: "/capabilities/assembly" }
  ],
  trustBar: [
    { title: "Inspection Reports", icon: ClipboardCheck, href: "/capabilities/inspection-reports" },
    { title: "Material Certs", icon: FileBadge, href: "/capabilities/material-certs" },
    { title: "First Article Support", icon: Ruler, href: "/capabilities/first-article-support" },
    { title: "Packaging & Logistics", icon: Truck, href: "/capabilities/packaging-logistics" }
  ]
};

export const solutionsData = {
  title: "Solutions",
  layout: "solutions-layout",
  featured: {
    title: "End-to-End Programs",
    description: "White-glove teams for complex builds — manufacturing + engineering when needed.",
    icon: Workflow,
    primaryBtn: { label: "Start Your Project", href: "/start-project" },
    secondaryBtn: { label: "Contact Sales", href: "/contact" }
  },
  columns: [
    {
      title: "PROGRAMS",
      items: [
        { title: "Design-to-Manufacture", icon: Compass, href: "/solutions/design-to-manufacture" },
        { title: "New Product Introduction", icon: Rocket, href: "/solutions/new-product-introduction" },
        { title: "Turnkey Contract Manufacturing", icon: Factory, href: "/solutions/turnkey-contract-manufacturing" },
        { title: "Supply Chain Management", icon: Network, href: "/solutions/supply-chain-management" }
      ]
    },
    {
      title: "ENGINEERING & DEV",
      items: [
        { title: "Medical Device Dev", icon: Stethoscope, href: "/solutions/medical-device-development" },
        { title: "Biotech Instrument Dev", icon: Microscope, href: "/solutions/biotech-instrument-development" },
        { title: "Custom Automation", icon: Bot, href: "/solutions/custom-automation" },
        { title: "Commercial Product Dev", icon: Package, href: "/solutions/commercial-product-development" },
        { title: "Software Dev", icon: Code, href: "/solutions/software-development" }
      ]
    },
    {
      title: "MARKETS WE SUPPORT",
      items: [
        { title: "Healthcare & Life Sciences", icon: HeartPulse, href: "/solutions/healthcare-life-sciences" },
        { title: "Aerospace & Defense", icon: Plane, href: "/solutions/aerospace-defense" },
        { title: "Industrial Equipment", icon: Anvil, href: "/solutions/industrial-equipment" },
        { title: "Automotive & Mobility", icon: Car, href: "/solutions/automotive-mobility" },
        { title: "Tech & Infrastructure", icon: Server, href: "/solutions/tech-infrastructure" }
      ]
    }
  ],
  footer: [
    { title: "Prototyping", href: "/solutions/prototyping" },
    { title: "Mechanical Engineering", href: "/solutions/mechanical-engineering" },
    { title: "CAD Drafting", href: "/solutions/cad-drafting" },
    { title: "Reverse Engineering", href: "/solutions/reverse-engineering" },
    { title: "Manufacturing Documentation", href: "/solutions/manufacturing-documentation" }
  ]
};

export const howWeDeliverData = {
  title: "How We Deliver",
  layout: "developers-layout",
  featured: {
    title: "White-Glove Delivery",
    description: "One team manages your RFQ end-to-end — from review to a final Smart Flex quote.",
    icon: PackageCheck,
    primaryBtn: { label: "Start an RFQ", href: "/start-rfq" },
    secondaryBtn: { label: "Talk to an Engineer", href: "/talk-to-engineer" }
  },
  columns: [
    {
      title: "THE PROCESS",
      items: [
        { label: "Submit an RFQ", href: "/how-we-deliver/process#submit" },
        { label: "Engineering Review", href: "/how-we-deliver/process#review" },
        { label: "IP Protection", href: "/how-we-deliver/process#ip-protection" },
        { label: "Supplier Sourcing", href: "/how-we-deliver/process#sourcing" },
        { label: "Quote Comparison", href: "/how-we-deliver/process#quote-comparison" },
        { label: "Final Proposal", href: "/how-we-deliver/process#proposal" }
      ]
    },
    {
      title: "WHAT YOU GET",
      items: [
        { label: "Tracking Number + Updates", href: "/how-we-deliver/what-you-get" },
        { label: "One Ready-to-Approve Quote", href: "/how-we-deliver/what-you-get" },
        { label: "Accept / Decline in Portal", href: "/how-we-deliver/what-you-get" }
      ]
    },
    {
      title: "COMPLEX PROJECTS",
      items: [
        { label: "Design-to-Manufacture Support", href: "/solutions/design-to-manufacture" },
        { label: "Prototyping Support", href: "/solutions/prototyping" },
        { label: "Supply Chain Management", href: "/solutions/supply-chain-management" }
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
    action: { label: "Try AI Assistant", href: "/ai-assistant" }
  },
  columns: [
    {
      title: "LEARN",
      items: [
        { title: "DFM Guides", icon: "BookOpen", href: "/resources/dfm-guides" },
        { title: "Tolerances & GD&T", icon: "Ruler", href: "/resources/tolerances-gdt" },
        { title: "Materials Library", icon: "Layers", href: "/resources/materials" },
        { title: "Finishes & Coatings", icon: "Palette", href: "/resources/finishes-coatings" },
        { title: "Quality Docs Explained", icon: "FileCheck", href: "/resources/quality-docs" },
        { title: "Regulatory (MedTech)", icon: "FileCheck", href: "/resources/regulatory-medtech" }
      ]
    },
    {
      title: "REFERENCE",
      items: [
        { title: "RFQ Checklist", icon: "ClipboardCheck", href: "/resources/rfq-checklist" },
        { title: "Mold Design Guide", icon: "Component", href: "/resources/mold-design-guide" },
        { title: "Sheet Metal Rules", icon: "FoldVertical", href: "/resources/sheet-metal-rules" },
        { title: "Hardware Standards", icon: "Ruler", href: "/resources/hardware-standards" }
      ]
    },
    {
      title: "EXPLORE",
      items: [
        { title: "Customer Stories", icon: "Users", href: "/resources/customer-stories" },
        { title: "Sample Deliverables", icon: "FileBox", href: "/resources/sample-deliverables" },
        { title: "Webinars & Events", icon: "Video", href: "/resources/webinars-events" },
        { title: "Blog / Insights", icon: "Newspaper", href: "/resources/blog" }
      ]
    }
  ],
  footer: [
    { title: "Talk to an Engineer", icon: "MessageCircle", href: "/talk-to-engineer" },
    { title: "Support Center", icon: "LifeBuoy", href: "/support" },
    { title: "Contact Sales", icon: "Mail", href: "/contact" }
  ]
};

export const joinNetworkData = {
  title: "Join Network",
  layout: "join-network-layout",
  hero: {
    title: "Fill Your Capacity. Expand Your Reach.",
    subhead: "We bring the sales to you. No bidding wars, just vetted, high-value programs delivered to your portal.",
    video: "/videos/smartflexgrouphomevideo.mp4",
    primaryBtn: { label: "Apply to Join", href: "/join-network/apply" },
    secondaryBtn: { label: "Partner Stories", href: "/join-network/partner-stories" }
  },
  columns: [
    {
      title: "FOR MANUFACTURERS",
      icon: Factory,
      items: [
        { label: "Machine Shop Partners", href: "/join-network/manufacturers/machine-shops" },
        { label: "Contract Manufacturers", href: "/join-network/manufacturers/contract-manufacturing" },
        { label: "Material Suppliers", href: "/join-network/manufacturers/material-suppliers" },
        { label: "Quality Standards", href: "/join-network/quality-standards" }
      ]
    },
    {
      title: "FOR ENGINEERS",
      icon: DraftingCompass,
      items: [
        { label: "Design & Engineering Firms", href: "/join-network/engineers/design-firms" },
        { label: "Specialized Consultants", href: "/join-network/engineers/consultants" },
        { label: "Collaborative Programs", href: "/join-network/engineers/collaborative-programs" }
      ]
    }
  ],
  referralBanner: {
    title: "The Referral Partner Program",
    description: "Monetize your network. Earn commissions on every project you bring to Smart Flex.",
    cta: { label: "Start Earning", href: "/join-network/referral-program" },
    icon: HandCoins
  },
  footer: [
    { title: "Partner Portal Login", icon: LogIn, href: "/login" },
    { title: "Onboarding Guide", icon: FileText, href: "/join-network/onboarding-guide" },
    { title: "Supplier Code of Conduct", icon: ShieldCheck, href: "/join-network/code-of-conduct" }
  ]
};

