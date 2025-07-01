"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink, Trophy, Users } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { PartnerCardProps } from "@/types";

export const PartnerCard: React.FC<PartnerCardProps> = ({ item }) => {
  return (
    <Card>
      <div
        className="relative h-48 w-full overflow-hidden flex items-center justify-center"
        style={{
          borderTopLeftRadius: "var(--radius-card)",
          borderTopRightRadius: "var(--radius-card)",
        }}
      >
        <div className="relative w-45 h-45">
          <Image
            src={item.logo}
            alt={`${item.name} logo`}
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium border bg-[var(--color-primary)] text-white">
            {item.tier}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-400">
            <Trophy size={14} className="mr-2 text-yellow-500" />
            Partner Tier: {item.tier}
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <Users size={14} className="mr-2 text-yellow-500" />
            {item.sponsorship_count} Sponsorship
            {item.sponsorship_count !== 1 ? "s" : ""}
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <ExternalLink size={14} className="mr-2 text-yellow-500" />
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              {item.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>

        <Button
          variant="primary"
          className="w-full !py-2 !rounded-xl text-sm"
          href={item.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
      </div>
    </Card>
  );
};
