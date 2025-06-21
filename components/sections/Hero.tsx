"use client";
import React from "react";
import { motion } from "framer-motion";
import { CommunityStats } from "@/types";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const communityStats: CommunityStats[] = [
  { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
  { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
  { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
  { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
];

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-crypto-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-orange-500 bg-clip-text text-transparent animate-float"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cambodia&apos;s Leading Crypto Community
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of crypto enthusiasts, traders, and investors in
            Cambodia&apos;s most active cryptocurrency community. Learn, share,
            and grow together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8 py-4">
              Join Community
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </motion.div>

          {/* Community Stats - 4 Cards in One Line */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {communityStats.map((stat, index) => (
              <Card key={`${stat.platform}-${index}`} className="text-center">
                <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
                  {stat.icon}
                </div>
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-primary-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {stat.members.toLocaleString()}
                </motion.h3>
                <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base">
                  {stat.platform}
                </p>
                <Button
                  href={stat.joinUrl}
                  size="sm"
                  className="w-full text-xs lg:text-sm"
                >
                  Join {stat.platform}
                </Button>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Crypto Symbols */}
      <CryptoBackground />
    </section>
  );
};

const CryptoBackground: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  // Use fixed values to prevent hydration mismatch
  const cryptoElements = React.useMemo(() => {
    const symbols = ["₿", "Ξ", "₳", "◊", "⟐", "※", "◈", "◇"];
    const positions = [
      { left: 15, top: 20, symbol: "₿", duration: 12, delay: 0 },
      { left: 85, top: 30, symbol: "Ξ", duration: 10, delay: 2 },
      { left: 25, top: 70, symbol: "₳", duration: 14, delay: 1 },
      { left: 75, top: 60, symbol: "◊", duration: 11, delay: 3 },
      { left: 45, top: 15, symbol: "⟐", duration: 13, delay: 4 },
      { left: 65, top: 80, symbol: "※", duration: 9, delay: 1.5 },
    ];
    return positions;
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cryptoElements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-400/20 text-2xl"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
          }}
          animate={{
            y: [-20, -100],
            rotate: [0, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
          }}
        >
          {element.symbol}
        </motion.div>
      ))}
    </div>
  );
};
