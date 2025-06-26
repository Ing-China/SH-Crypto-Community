import React from "react";
import { CommunityStatsCard } from "@/components/CommunityStatsCard";
import { FeaturesCard } from "@/components/FeaturesCard";
import { communityStatsData } from "@/data/communityStats";
import { featuresData } from "@/data/features";

const Home = () => {
  return (
    <main className="min-h-screen bg-black">
      <section className="pt-12 sm:pt-16 lg:pt-20 not-only:relative overflow-hidden bg-crypto-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
        </div>

        <div className="container mx-auto z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent animate-[var(--animate-float)] hover:drop-shadow-[0_0_3px_var(--color-primary)] transition-all duration-300 cursor-default">
              Cambodia&apos;s Leading Crypto Community
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of crypto enthusiasts, traders, and investors in
              Cambodia&apos;s most active cryptocurrency community. Learn,
              share, and grow together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
              {communityStatsData.map((stat) => (
                <CommunityStatsCard key={stat.id} item={stat} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-dark-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center pb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
              What We Offer
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Discover the comprehensive suite of tools and resources that make
              SH Crypto the premier destination for cryptocurrency enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature) => (
              <FeaturesCard key={feature.id} item={feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
