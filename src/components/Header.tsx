"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "OUR CEREAL", href: "/products" },
  { label: "ABOUT PETE", href: "/about" },
  { label: "THE METABOLIC GROUP", href: "/metabolic" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navigation - Centered floating bar */}
      <header className="w-full flex justify-center py-4 z-40">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center bg-cream">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 xl:px-10 py-3 font-haggler text-brown font-bold text-sm xl:text-base uppercase tracking-wide hover:bg-brown hover:text-cream transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 bg-cream"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-[3px] bg-brown rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`block h-[3px] bg-brown rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block h-[3px] bg-brown rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-brown/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream border-l-[4px] border-brown transform transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b-[3px] border-brown bg-orange">
            <span className="font-haggler text-brown font-black text-xl uppercase">MENU</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 bg-cream border-[3px] border-brown rounded-sm hover:bg-pink transition-all duration-200"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-brown">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-5 py-4 font-haggler text-brown font-bold text-lg uppercase tracking-wide border-[3px] border-brown bg-white hover:bg-orange transition-all duration-200 ${isMenuOpen ? "animate-slideIn" : ""}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t-[3px] border-brown bg-green">
            <p className="text-center font-haggler text-brown font-bold text-sm uppercase">
              THE SMOOTH START FOR LITTLE LEGENDS
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
