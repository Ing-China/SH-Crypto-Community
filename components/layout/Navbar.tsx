"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Events", href: "#events" },
    { name: "Teams", href: "#teams" },
    { name: "Partners", href: "#partners" },
    { name: "Community", href: "#community" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full z-50 bg-[var(--color-background)]/80 backdrop-blur-md border-b-2 border-[var(--color-primary)] shadow-[var(--shadow-card)]">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Clickable Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            >
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="SH Crypto Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-[var(--color-primary)]">
                SH Crypto
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-300 relative group"
                >
                  {item.name}
                  <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 border-[var(--color-primary)] bg-[var(--color-primary)] group-hover:w-full transition-all duration-300 shadow-[var(--shadow-card)]" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[var(--color-foreground)] relative z-[10001] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? null : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Half-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 z-[9998] md:hidden bg-black/50"
            onClick={closeMobileMenu}
          />

          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 h-full w-[70%] z-[9999] md:hidden bg-[var(--color-background)] shadow-2xl">
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={closeMobileMenu}
                className="text-[var(--color-foreground)] p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="h-full flex flex-col pt-16">
              {/* Clickable Logo Section in Mobile Menu */}
              <div className="px-6 pb-8 border-b border-[var(--color-border)]/30">
                <Link
                  href="/"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
                  onClick={closeMobileMenu}
                >
                  <div className="relative">
                    <Image
                      src="/images/logo.png"
                      alt="SH Crypto Logo"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[var(--color-primary)]">
                      SH Crypto
                    </h2>
                    <p className="text-xs text-[var(--color-muted)]">
                      Cambodia&apos;s Leading Crypto Community
                    </p>
                  </div>
                </Link>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 px-6 py-6">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-lg font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background-secondary)] transition-all duration-200 py-3 px-4 rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Footer Section */}
              <div className="px-6 py-6 border-t border-[var(--color-border)]/30">
                <p className="text-[var(--color-muted)] text-sm mb-3">
                  Join our community
                </p>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors text-sm py-1"
                  >
                    📱 Telegram
                  </a>
                  <a
                    href="#"
                    className="block text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors text-sm py-1"
                  >
                    💬 Discord
                  </a>
                  <a
                    href="#"
                    className="block text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors text-sm py-1"
                  >
                    📘 Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
