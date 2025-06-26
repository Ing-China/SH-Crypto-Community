"use client";
import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CommunityStatsCardProps } from "@/types";

export const CommunityStatsCard: React.FC<CommunityStatsCardProps> = ({
  item,
}) => {
  return (
    <Card className="text-center p-6">
      <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">{item.icon}</div>
      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2">
        {item.members.toLocaleString()}
      </h3>
      <p className="text-white mb-3 lg:mb-4 text-sm lg:text-base">
        {item.platform}
      </p>
      <Button
        href={item.joinUrl}
        size="sm"
        className="w-full !rounded-xl text-xs lg:text-sm"
      >
        Join {item.platform}
      </Button>
    </Card>
  );
};
