"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────────
 * Types
 * ───────────────────────────────────────────────────────────────────────────── */
interface NavLink {
  label: string;
  href: string;
}

interface ScrollProgressProps {
  progress: number;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Data
 * ───────────────────────────────────────────────────────────────────────────── */
const navLinks: NavLink[] = [
  { label: "OUR CEREAL", href: "/#products" },
  { label: "ABOUT PETE", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Subcomponents
 * ───────────────────────────────────────────────────────────────────────────── */

/** Scroll progress indicator bar */
function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-lg">
      <div
        className="absolute inset-0 bg-cream/20 rounded transition-all duration-150 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/** Desktop navigation link with hover effect */
function NavLinkItem({ link }: { link: NavLink }) {
  return (
    <Link
      href={link.href}
      className="relative overflow-hidden rounded px-4 py-2 text-sm font-medium text-cream/80 transition-colors duration-150 ease-in-out hover:text-cream"
    >
      <span className="absolute inset-0 rounded bg-cream/20 w-0 hover:w-full transition-all duration-150 ease-in-out" />
      <span className="relative z-10 font-haggler uppercase tracking-wide">
        {link.label}
      </span>
    </Link>
  );
}

/** Mobile menu button */
function MobileMenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="md:hidden min-h-11 rounded px-4 py-3 text-sm font-medium text-cream/80 transition-colors duration-150 ease-in-out hover:bg-cream/10 hover:text-cream font-haggler uppercase tracking-wide"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? "Close" : "Menu"}
    </button>
  );
}

/** CTA button */
function CTAButton() {
  return (
    <Link
      href="/shop"
      className="rounded-lg border border-black/5 bg-cream px-3 py-2 text-xs font-bold uppercase tracking-wide text-brown transition-colors duration-150 ease-in-out hover:bg-cream-dark sm:px-4 sm:text-sm font-haggler"
    >
      Shop Now
    </Link>
  );
}

/** Mobile menu drawer */
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#4D0F00]/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-cream shadow-lg transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#4D0F00]/20 bg-[#4D0F00]">
          <span className="font-haggler text-cream font-bold text-xl uppercase">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cream/10 hover:bg-cream/20 transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="p-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 font-haggler text-[#4D0F00] font-bold text-lg uppercase tracking-wide rounded-lg hover:bg-[#4D0F00]/10 transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={onClose}
            className="block px-4 py-3 mt-4 font-haggler text-cream font-bold text-lg uppercase tracking-wide rounded-lg bg-[#FF6F98] hover:bg-[#ff5a87] transition-colors text-center"
          >
            Shop Now
          </Link>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-brown/20">
          <p className="text-center font-haggler text-brown/60 font-medium text-sm uppercase">
            The Smooth Start for Little Legends
          </p>
        </div>
      </div>
    </div>
  );
}

/** Close icon */
function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 text-cream"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Main Component
 * ───────────────────────────────────────────────────────────────────────────── */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  // Track scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full flex justify-center py-4 px-4">
        {/* Floating pill navigation */}
        <div className="relative rounded-lg border border-[#4D0F00] bg-[#4D0F00] p-1 shadow-lg overflow-hidden">
          {/* Scroll progress bar */}
          <ScrollProgress progress={scrollProgress} />

          <div className="flex items-center gap-x-1 gap-y-1">
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center">
              {navLinks.map((link) => (
                <NavLinkItem key={link.href} link={link} />
              ))}
            </nav>

            {/* Mobile menu button */}
            <MobileMenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* CTA button */}
            <CTAButton />
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
