"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Community", href: "#community" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Custom PNG */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              {/* Option 1: Using Next.js Image component (Recommended) */}
              <div className="relative">
                <Image
                  src="/images/logo.png" // Updated path for images folder
                  alt="SH Crypto Logo"
                  width={60} // Adjust size as needed
                  height={60} // Adjust size as needed
                  className="object-contain"
                  priority // Loads immediately for better performance
                />
              </div>

              {/* Optional: Keep text alongside logo */}
              <span className="text-xl font-bold text-[var(--color-primary)]">
                SH Crypto
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-300 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
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
      </motion.nav>

      {/* Half-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 z-[9998] md:hidden bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* Slide-in Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[70%] z-[9999] md:hidden bg-[var(--color-background)] shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, type: "tween" }}
            >
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
                {/* Logo Section in Mobile Menu */}
                <div className="px-6 pb-8 border-b border-[var(--color-border)]/30">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {/* Logo in Mobile Menu */}
                    <div className="relative">
                      <Image
                        src="/images/logo.png" // Updated path for images folder
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
                  </motion.div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-6">
                  <nav className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="block text-lg font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background-secondary)] transition-all duration-200 py-3 px-4 rounded-lg"
                        onClick={closeMobileMenu}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </nav>
                </div>

                {/* Footer Section */}
                <motion.div
                  className="px-6 py-6 border-t border-[var(--color-border)]/30"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
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
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
