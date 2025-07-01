"use client";
import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CommunityStatsCardProps } from "@/types";

export const CommunityStatsCard: React.FC<CommunityStatsCardProps> = ({
  item,
}) => {
  const getPlatformIcon = () => {
    return item.platformType === "telegram" ? "💬" : "📘";
  };

  const getPlatformColor = () => {
    return item.platformType === "telegram"
      ? "bg-blue-500/20 text-blue-300"
      : "bg-purple-500/20 text-purple-300";
  };

  return (
    <Card className="text-center p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="text-3xl lg:text-4xl">{item.icon}</div>
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${getPlatformColor()}`}
        >
          {item.badge}
        </div>
      </div>

      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2">
        {item.members.toLocaleString()}
      </h3>

      <p className="text-white font-semibold text-sm lg:text-base mb-4">
        {item.platform}
      </p>

      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-lg">{getPlatformIcon()}</span>
        <span className="text-xs text-gray-400 capitalize">
          {item.platformType}
        </span>
      </div>

      <Button
        href={item.joinUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        className="w-full !rounded-xl text-xs lg:text-sm"
      >
        Join {item.platformType === "telegram" ? "Group" : "Page"}
      </Button>
    </Card>
  );
};
