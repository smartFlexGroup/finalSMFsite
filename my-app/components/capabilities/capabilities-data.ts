/**
 * Data structure for Capabilities pages
 */

export interface CapabilityData {
  title: string;
  description: string;
  heroVideo: string;
  model3d?: string; // Optional 3D model path for CTA section
  stats: Array<{
    label: string;
    value: string;
  }>;
  overview: {
    heading: string;
    content: string;
    imageSrc: string;
  };
  specs: {
    materials: string[];
    finishes: string[];
  };
  guidelines: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

/**
 * CNC Machining Capability Data
 */
export const cncMachiningData: CapabilityData = {
  title: "Precision CNC Machining",
  description: "3, 4, and 5-axis milling and turning for complex geometries in metal and plastic.",
  heroVideo: "/videos/smartflexgroupCNCservices.mp4",
  stats: [
    {
      label: "Tolerance",
      value: "+/- 0.001 in"
    },
    {
      label: "Lead Time",
      value: "As fast as 3 days"
    },
    {
      label: "Materials",
      value: "50+ Metals & Plastics"
    }
  ],
  overview: {
    heading: "From Prototype to Production",
    content: "Our network utilizes high-speed automation and expert machinists to deliver parts that meet strict aerospace and medical standards.",
    imageSrc: "/images/cnc-machining-overview.jpg" // Placeholder
  },
  specs: {
    materials: [
      "Aluminum 6061",
      "Aluminum 7075",
      "Stainless Steel 303",
      "Stainless Steel 304",
      "Stainless Steel 316",
      "Delrin",
      "PEEK",
      "Titanium"
    ],
    finishes: [
      "As-Milled",
      "Anodize Type II",
      "Anodize Type III",
      "Bead Blast",
      "Powder Coat"
    ]
  },
  guidelines: [
    {
      title: "Corner Radii",
      description: "Avoid sharp internal corners. Use standard tool radii.",
      icon: "corner-radius" // Placeholder for icon identifier
    },
    {
      title: "Wall Thickness",
      description: "Maintain min 0.020in for metals.",
      icon: "wall-thickness" // Placeholder for icon identifier
    }
  ]
};

/**
 * Sheet Metal Fabrication Capability Data
 */
export const sheetMetalData: CapabilityData = {
  title: "Sheet Metal Fabrication",
  description: "Laser cutting, bending, and punching for enclosures and brackets.",
  heroVideo: "/videos/smartflexgroupsheetmetalfab.mp4",
  stats: [
    {
      label: "Tolerance",
      value: "+/- 0.005 in"
    },
    {
      label: "Lead Time",
      value: "3-5 Days"
    },
    {
      label: "Materials",
      value: "Aluminum, Steel, Copper"
    }
  ],
  overview: {
    heading: "Precision Cutting & Forming",
    content: "Our advanced laser cutting and CNC press brake equipment delivers precise sheet metal components for enclosures, brackets, and structural assemblies.",
    imageSrc: "/images/sheet-metal-overview.jpg"
  },
  specs: {
    materials: [
      "Aluminum 5052",
      "Aluminum 6061",
      "Cold Rolled Steel",
      "Stainless Steel 304",
      "Stainless Steel 316",
      "Copper",
      "Brass"
    ],
    finishes: [
      "Powder Coat",
      "Wet Paint",
      "Anodize",
      "Zinc Plating",
      "Chromate Conversion"
    ]
  },
  guidelines: [
    {
      title: "Bend Radius",
      description: "Maintain minimum bend radius of 1x material thickness for optimal results.",
      icon: "bend-radius"
    },
    {
      title: "Hole Spacing",
      description: "Keep hole edges at least 2x material thickness from bends.",
      icon: "hole-spacing"
    }
  ]
};

/**
 * Additive Manufacturing Capability Data
 */
export const additiveData: CapabilityData = {
  title: "Additive Manufacturing",
  description: "Industrial 3D printing (SLA, SLS, FDM, DMLS) for rapid prototyping.",
  heroVideo: "/videos/smartflexgroupadditivemanufacturing.mp4",
  stats: [
    {
      label: "Layer Height",
      value: "0.05 mm"
    },
    {
      label: "Lead Time",
      value: "24 Hours"
    },
    {
      label: "Processes",
      value: "SLA, SLS, MJF, DMLS"
    }
  ],
  overview: {
    heading: "Rapid Prototyping to Production",
    content: "Our industrial 3D printing capabilities enable fast iteration and complex geometries impossible with traditional manufacturing. From concept validation to low-volume production.",
    imageSrc: "/images/additive-manufacturing-overview.jpg"
  },
  specs: {
    materials: [
      "ABS",
      "Nylon (PA12)",
      "TPU (Flexible)",
      "ASA",
      "Resin (Standard & Tough)",
      "Aluminum (DMLS)",
      "Stainless Steel 316L",
      "Titanium Ti64"
    ],
    finishes: [
      "As-Printed",
      "Sanded & Polished",
      "Vapor Smoothing",
      "Dyed",
      "Painted"
    ]
  },
  guidelines: [
    {
      title: "Support Structures",
      description: "Design with self-supporting angles under 45° to minimize support material.",
      icon: "support"
    },
    {
      title: "Wall Thickness",
      description: "Maintain minimum 0.8mm walls for FDM, 0.4mm for SLA/SLS.",
      icon: "wall-thickness"
    }
  ]
};

/**
 * Injection Molding Capability Data
 */
export const injectionMoldingData: CapabilityData = {
  title: "Injection Molding",
  description: "Rapid tooling and production molding for scalable plastic parts.",
  heroVideo: "/videos/smartflexgroupinjectionmolding.mp4",
  stats: [
    {
      label: "Mold Life",
      value: "100k+ Shots"
    },
    {
      label: "Lead Time",
      value: "10-15 Days"
    },
    {
      label: "Resins",
      value: "Thermoplastics & LSR"
    }
  ],
  overview: {
    heading: "From Prototype to High Volume",
    content: "Rapid aluminum tooling for prototypes and bridge production, plus hardened steel molds for high-volume manufacturing. Our injection molding services scale with your product.",
    imageSrc: "/images/injection-molding-overview.jpg"
  },
  specs: {
    materials: [
      "ABS",
      "Polycarbonate (PC)",
      "Nylon (PA6/PA66)",
      "Acetal (Delrin)",
      "PEEK",
      "Polypropylene (PP)",
      "TPE/TPU",
      "Liquid Silicone Rubber (LSR)"
    ],
    finishes: [
      "As-Molded",
      "Textured (SPI Standards)",
      "High Polish",
      "Painted",
      "Overmolded"
    ]
  },
  guidelines: [
    {
      title: "Draft Angles",
      description: "Add 1-3° draft on vertical walls to facilitate mold release.",
      icon: "draft"
    },
    {
      title: "Wall Thickness",
      description: "Maintain uniform wall thickness (typically 1.2-3mm) to prevent sink marks.",
      icon: "wall-thickness"
    }
  ]
};

/**
 * Casting Capability Data
 */
export const castingData: CapabilityData = {
  title: "Casting",
  description: "Die casting and urethane casting for complex metal and plastic geometries.",
  heroVideo: "/videos/smartflexgroupdiecasting.mp4",
  stats: [
    {
      label: "Tolerance",
      value: "+/- 0.002 in"
    },
    {
      label: "Lead Time",
      value: "2-4 Weeks"
    },
    {
      label: "Materials",
      value: "Aluminum, Zinc, Urethane"
    }
  ],
  overview: {
    heading: "Complex Geometries Made Simple",
    content: "Die casting for high-volume metal parts and urethane casting for low-volume prototypes. Ideal for complex shapes, undercuts, and parts requiring excellent surface finish.",
    imageSrc: "/images/casting-overview.jpg"
  },
  specs: {
    materials: [
      "Aluminum A380",
      "Aluminum 413",
      "Zinc Zamak 3",
      "Zinc Zamak 5",
      "Urethane (Shore 30A-80D)",
      "Magnesium AZ91D"
    ],
    finishes: [
      "As-Cast",
      "Machined",
      "Powder Coat",
      "Anodize (Aluminum)",
      "Chrome Plating"
    ]
  },
  guidelines: [
    {
      title: "Wall Thickness",
      description: "Maintain 2-4mm wall thickness for die casting; 1.5-6mm for urethane.",
      icon: "wall-thickness"
    },
    {
      title: "Draft Angles",
      description: "Use minimum 1-2° draft angles on all vertical surfaces.",
      icon: "draft"
    }
  ]
};

/**
 * Welding & Joining Capability Data
 */
export const weldingData: CapabilityData = {
  title: "Welding & Joining",
  description: "Certified TIG/MIG welding for structural frames and complex assemblies.",
  heroVideo: "/videos/smartflexgroupweldingservices.mp4",
  stats: [
    {
      label: "Certifications",
      value: "AWS D1.1, D1.2"
    },
    {
      label: "Methods",
      value: "TIG, MIG, Spot"
    },
    {
      label: "Capacity",
      value: "Large Frame Assembly"
    }
  ],
  overview: {
    heading: "Certified Structural Welding",
    content: "Our certified welders deliver high-quality TIG, MIG, and spot welding for structural frames, enclosures, and complex assemblies. Full NDT inspection available.",
    imageSrc: "/images/welding-overview.jpg"
  },
  specs: {
    materials: [
      "Aluminum",
      "Stainless Steel",
      "Mild Steel",
      "Chromoly",
      "Inconel",
      "Titanium"
    ],
    finishes: [
      "Weld Cleanup",
      "Ground Smooth",
      "Powder Coat",
      "Anodize",
      "Passivation"
    ]
  },
  guidelines: [
    {
      title: "Joint Design",
      description: "Design for full-penetration welds where structural integrity is critical.",
      icon: "joint"
    },
    {
      title: "Material Prep",
      description: "Ensure clean, oxide-free surfaces for aluminum welding.",
      icon: "prep"
    }
  ]
};

/**
 * Finishing Services Capability Data
 */
export const finishingData: CapabilityData = {
  title: "Finishing Services",
  description: "Surface treatments including Anodizing, Powder Coat, Passivation, and Plating.",
  heroVideo: "/videos/smartflexgroupfinishingservices.mp4",
  stats: [
    {
      label: "Types",
      value: "Anodize, Chem Film, Paint"
    },
    {
      label: "Specs",
      value: "MIL-SPEC Available"
    },
    {
      label: "Batch Size",
      value: "1 to 10,000+"
    }
  ],
  overview: {
    heading: "Premium Surface Treatments",
    content: "Our finishing partners provide MIL-SPEC and commercial surface treatments to enhance corrosion resistance, appearance, and wear properties. Full lot traceability and certifications available.",
    imageSrc: "/images/finishing-overview.jpg"
  },
  specs: {
    materials: [
      "Aluminum Anodizing",
      "Steel Plating",
      "Stainless Passivation",
      "Powder Coating (All Metals)",
      "Electropolishing",
      "Chemical Film (Chem Film)"
    ],
    finishes: [
      "Anodize Type II (Clear/Color)",
      "Anodize Type III (Hardcoat)",
      "Powder Coat (RAL Colors)",
      "Zinc Plating",
      "Nickel Plating",
      "Chromate Conversion (Alodine)"
    ]
  },
  guidelines: [
    {
      title: "Finish Thickness",
      description: "Account for finish buildup: Type II adds ~0.0002in, powder coat adds ~0.002-0.004in.",
      icon: "thickness"
    },
    {
      title: "Masking",
      description: "Identify critical surfaces requiring masking (threads, tight-tolerance features).",
      icon: "masking"
    }
  ]
};

/**
 * Assembly & Integration Capability Data
 */
export const assemblyData: CapabilityData = {
  title: "Assembly & Integration",
  description: "Full electromechanical assembly, kitting, and hardware installation.",
  heroVideo: "/videos/smartflexgroupassemblyservices.mp4",
  stats: [
    {
      label: "Facility",
      value: "ESD Safe"
    },
    {
      label: "Services",
      value: "Kitting, Wiring, Box Build"
    },
    {
      label: "QA",
      value: "Functional Testing"
    }
  ],
  overview: {
    heading: "Complete Product Assembly",
    content: "From simple hardware installation to complex electromechanical assemblies, our ESD-safe facility handles kitting, wiring, box builds, and functional testing. Reduce your supply chain complexity.",
    imageSrc: "/images/assembly-overview.jpg"
  },
  specs: {
    materials: [
      "Mechanical Assembly",
      "Electromechanical Assembly",
      "Box Build",
      "Wire Harness Assembly",
      "PCB Integration",
      "Final Packaging"
    ],
    finishes: [
      "Functional Testing",
      "Quality Inspection",
      "Custom Packaging",
      "Kitting",
      "Serialization & Labeling"
    ]
  },
  guidelines: [
    {
      title: "Documentation",
      description: "Provide detailed assembly drawings, BOMs, and work instructions.",
      icon: "documentation"
    },
    {
      title: "Testing Requirements",
      description: "Define clear acceptance criteria and functional test procedures.",
      icon: "testing"
    }
  ]
};

/**
 * Capability data registry
 * Add new capabilities here as they are created
 */
export const capabilitiesData: Record<string, CapabilityData> = {
  'cnc-machining': cncMachiningData,
  'sheet-metal': sheetMetalData,
  'additive-manufacturing': additiveData,
  'injection-molding': injectionMoldingData,
  'casting': castingData,
  'welding-joining': weldingData,
  'finishing': finishingData,
  'assembly': assemblyData,
};

/**
 * Helper function to get capability data by slug
 */
export function getCapabilityData(slug: string): CapabilityData | undefined {
  return capabilitiesData[slug];
}

