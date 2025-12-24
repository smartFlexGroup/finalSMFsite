"use client";

import React from "react";

interface MenuTriggerProps {
  label: string;
  isOpen: boolean;
  isScrolled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

export default function MenuTrigger({
  label,
  isOpen,
  isScrolled,
  onClick,
  onMouseEnter,
}: MenuTriggerProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`
        px-4 py-2 
        text-sm font-medium
        transition-colors duration-200
        bg-transparent
        rounded-md
        ${isOpen ? "text-white" : "text-white hover:text-white/80"}
      `}
    >
      {label}
    </button>
  );
}
