import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import XLogo from '@/components/icons/XLogo';

export const footerData = {
  contactInfo: {
    tagline: "Your Idea, Our Network, One Launchpad.",
    description: "We align global design talent and proven manufacturers with innovators like you who need custom manufactured parts made. From prototyping through production runs, our vetted network ensures quality, competitive pricing, and reliability—so you can focus on bringing your ideas to life.",
    address: "11501 Dublin Blvd STE 200, Dublin, CA 94568 - USA",
    phone: "925-392-8139",
    email: "support@smartflexgroup.com",
  },
  
  socialLinks: [
    { icon: Linkedin, href: "https://www.linkedin.com/company/smartflexgroup", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/smartflexgroup", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/smartflexgroup", label: "Instagram" },
    { icon: XLogo, href: "https://twitter.com/smartflexgroup", label: "X" },
    { icon: Youtube, href: "https://www.youtube.com/smartflexgroup", label: "YouTube" },
  ],
  
  linkGroups: [
    {
      title: "CAPABILITIES",
      links: [
        { label: "CNC Machining", href: "/capabilities/cnc-machining" },
        { label: "Sheet Metal", href: "/capabilities/sheet-metal" },
        { label: "Additive Mfg", href: "/capabilities/additive-manufacturing" },
        { label: "Injection Molding", href: "/capabilities/injection-molding" },
        { label: "Casting", href: "/capabilities/casting" },
        { label: "Welding & Joining", href: "/capabilities/welding-joining" },
        { label: "Finishing", href: "/capabilities/finishing" },
        { label: "Assembly", href: "/capabilities/assembly" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About us", href: "/about" },
        { label: "How SFG works", href: "/how-sfg-works" },
        { label: "Why us", href: "/why-us" },
        { label: "Profiles we partner with", href: "/partners/profiles" },
        { label: "The innovators", href: "/partners/innovators" },
        { label: "Careers", href: "/careers" },
        { label: "Quality assurance", href: "/quality-assurance" },
      ],
    },
    {
      title: "INFORMATION",
      links: [
        { label: "Contact us", href: "/contact" },
        { label: "Customer resource", href: "/resources/customer" },
        { label: "Supplier resources", href: "/resources/supplier" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "QUICK LINKS",
      links: [
        { label: "Getting started", href: "/get-started" },
        { label: "Upload My CAD", href: "/upload-cad" },
        { label: "Quote Request", href: "/quote-request" },
        { label: "Privacy & data protection", href: "/privacy-policy" },
      ],
    },
  ],
  
  bottomLinks: [
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Legal", href: "/legal" },
    { label: "Site Map", href: "/site-map" },
    { label: "CA Transparency Act", href: "/ca-transparency" },
    { label: "Cookies Preferences", href: "#", special: "cookies" },
    { label: "Accessibility", href: "#", special: "accessibility" },
  ],
};

