"use client";
import React, { useState, useMemo } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/Button";
import { PartnerCard } from "@/components/PartnerCard";
import { PartnerCategoryFilter } from "@/components/PartnerCategoryFilter";
import { partnersData } from "@/data/partners";
import { partnerCategoriesData } from "@/data/partnerCategories";

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const filteredPartners = useMemo(() => {
    if (activeCategory === 1) {
      return partnersData;
    }

    const selectedCategory = partnerCategoriesData.find(
      (cat) => cat.id === activeCategory
    );
    if (!selectedCategory) return partnersData;

    return partnersData.filter(
      (partner) => partner.category === selectedCategory.label
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black">
      <div className="text-center max-w-4xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
          Partners
        </h2>
      </div>

      <div className="container mx-auto mb-8">
        <div className="flex flex-wrap gap-4">
          {partnerCategoriesData.map((category) => (
            <PartnerCategoryFilter
              key={category.id}
              item={category}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <PartnerCard key={index} item={partner} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8">
        <div className="container mx-auto text-center py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
            Partner With Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xltext-white mb-4 max-w-4xl mx-auto leading-relaxed">
            Become our strategic partner and help shape the future of crypto
            education in Cambodia. Collaborate with us to create impactful
            events, expand your brand presence, and connect with a passionate
            community of blockchain enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://t.me/senghour18"
              target="_blank"
              className="!flex !flex-row !items-center !justify-center !space-x-2"
            >
              <MessageSquare size={20} />
              <span>Become a Partner</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
