export interface LegalDocument {
  title: string;
  href: string;
  description?: string;
}

export interface LegalCategory {
  title: string;
  icon: string;
  color: string;
  documents: LegalDocument[];
}

export interface QualityFramework {
  headline: string;
  description: string;
  standards: string[];
}

export const legalData = {
  customers: {
    title: "Customer Documents",
    icon: "ShoppingCart",
    color: "blue",
    documents: [
      {
        title: "Terms & Conditions of Sale",
        href: "/legal/documents/terms-conditions-sale.pdf",
        description: "Standard terms governing all product sales"
      },
      {
        title: "Standard NDA",
        href: "/legal/documents/nda.pdf",
        description: "Non-disclosure agreement template"
      },
      {
        title: "Warranty Policy",
        href: "/legal/documents/warranty-policy.pdf",
        description: "Product warranty terms and coverage"
      },
      {
        title: "Dispute Resolution",
        href: "/legal/documents/dispute-resolution.pdf",
        description: "Process for resolving contractual disputes"
      }
    ]
  },
  suppliers: {
    title: "Supplier Documents",
    icon: "Factory",
    color: "orange",
    documents: [
      {
        title: "Supplier Terms & Conditions",
        href: "/legal/documents/supplier-terms.pdf",
        description: "Terms for vendor partnerships"
      },
      {
        title: "Supplier Code of Conduct",
        href: "/legal/documents/supplier-code-of-conduct.pdf",
        description: "Ethical and compliance standards for suppliers"
      },
      {
        title: "Payment Schedules",
        href: "/legal/documents/payment-schedules.pdf",
        description: "Standard payment terms and schedules"
      },
      {
        title: "Quality Requirements",
        href: "/legal/documents/quality-requirements.pdf",
        description: "Manufacturing quality standards and expectations"
      }
    ]
  },
  generalCompliance: [
    {
      title: "Privacy Policy",
      href: "/legal/privacy-policy",
      description: "How we collect and protect your data"
    },
    {
      title: "Cookie Policy",
      href: "/legal/cookie-policy",
      description: "Information about cookies we use"
    },
    {
      title: "Terms of Use",
      href: "/legal/terms-of-use",
      description: "Rules for using our website and services"
    },
    {
      title: "Accessibility Statement",
      href: "/legal/accessibility",
      description: "Our commitment to digital accessibility"
    },
    {
      title: "CA Transparency Act",
      href: "/legal/ca-transparency-act",
      description: "California supply chain transparency disclosures"
    }
  ],
  qualityFramework: {
    headline: "Network Standards",
    description: "We utilize a vetted network of certified partners. Project-specific certifications available upon request.",
    standards: [
      "ISO 9001:2015",
      "AS9100D",
      "ISO 13485:2016",
      "ITAR Compliant",
      "NIST 800-171"
    ]
  }
};

