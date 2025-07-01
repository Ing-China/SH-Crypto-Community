import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aboutLinks = [
    { name: "Events", href: "/events" },
    { name: "Teams", href: "/teams" },
    { name: "Community", href: "/community" },
  ];

  const resourceLinks = [{ name: "Partners", href: "/partners" }];

  const socialLinks = [
    {
      name: "SH News",
      href: "https://t.me/shcryptonews",
    },
    {
      name: "Community Chat",
      href: "https://t.me/+bPccAJZxQ0c1YjBl",
    },
    {
      name: "Crypto Lesson",
      href: "https://t.me/Shcryptolesson",
    },
    {
      name: "Facebook Page",
      href: "https://www.facebook.com/profile.php?id=61575519645004",
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 border-t border-[var(--color-primary)]">
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
                  width={40}
                  height={40}
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
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">About Us</h3>
            <ul className="space-y-4">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
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
                  {social.href.startsWith("http") ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                    >
                      {social.name}
                    </a>
                  ) : (
                    <Link
                      href={social.href}
                      className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-300 text-sm"
                    >
                      {social.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-primary)] mt-16 py-6">
          <div className="flex justify-center items-center">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} SH Crypto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
