import React from "react";
import Image from "next/image";
import { Facebook, Github, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aboutLinks = [
    { name: "Events", href: "#events" },
    { name: "Our Teams", href: "#teams" },
    { name: "Our Members", href: "#members" },
  ];

  const resourceLinks = [
    { name: "Our Partners", href: "#partners" },
    { name: "Support Us", href: "#support" },
  ];

  const socialLinks = [
    {
      name: "Facebook Group",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Join Discord",
      href: "#",
      icon: MessageCircle,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
  ];

  return (
    <footer className="bg-black text-white py-16 border-t border-[var(--color-primary)]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="SH Crypto Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[var(--color-primary)]">
                SH Crypto
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Cambodia&apos;s largest community of crypto enthusiasts and
              blockchain developers building the future together.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">About Us</h3>
            <ul className="space-y-4">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Join Us</h3>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-primary)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} SH Crypto. All rights reserved.
            </p>

            {/* Additional Links */}
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className="text-gray-500 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-500 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
