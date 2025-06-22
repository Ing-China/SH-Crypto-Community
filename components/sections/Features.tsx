"use client";
import React from "react";
import { Feature } from "@/types";
import { Card } from "../ui/Card";

const features: Feature[] = [
  {
    title: "Market Analysis",
    description:
      "Daily market insights, technical analysis, and trading signals from experienced analysts.",
    icon: "📈",
  },
  {
    title: "Education",
    description:
      "Comprehensive learning resources for beginners to advanced crypto enthusiasts.",
    icon: "🎓",
  },
  {
    title: "Community Support",
    description:
      "24/7 community support with experienced traders and crypto experts.",
    icon: "💬",
  },
  {
    title: "DeFi Opportunities",
    description:
      "Exclusive access to DeFi projects, yield farming strategies, and new token launches.",
    icon: "🚀",
  },
  {
    title: "Security First",
    description:
      "Learn about wallet security, safe trading practices, and avoiding common scams.",
    icon: "🔒",
  },
  {
    title: "Mobile Alerts",
    description:
      "Real-time price alerts and important market updates directly to your phone.",
    icon: "📱",
  },
];

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-dark-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
            What We Offer
          </h2>

          {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the comprehensive suite of tools and resources that make SH
            Crypto the premier destination for cryptocurrency enthusiasts.
          </p> */}

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and resources that make SH
            Crypto the premier destination for cryptocurrency enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title}>
              <Card className="h-full text-center">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
