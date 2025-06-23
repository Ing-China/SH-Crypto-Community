import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CommunityStats, Feature } from "@/types";
import React from "react";

const Home = () => {
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

  const communityStats: CommunityStats[] = [
    { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
    { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
    { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
    { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
  ];

  return (
    <main className="min-h-screen">
      <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-crypto-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent animate-[var(--animate-float)] hover:drop-shadow-[0_0_3px_var(--color-primary)] transition-all duration-300 cursor-default">
              Cambodia&apos;s Leading Crypto Community
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of crypto enthusiasts, traders, and investors in
              Cambodia&apos;s most active cryptocurrency community. Learn,
              share, and grow together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
              {communityStats.map((stat, index) => (
                <Card
                  key={`${stat.platform}-${index}`}
                  className="text-center p-6"
                >
                  <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2">
                    {stat.members.toLocaleString()}
                  </h3>
                  <p className="text-white mb-3 lg:mb-4 text-sm lg:text-base">
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
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-dark-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
              What We Offer
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the comprehensive suite of tools and resources that make
              SH Crypto the premier destination for cryptocurrency enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <Card className="h-full text-center p-6">
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
    </main>
  );
};

export default Home;
