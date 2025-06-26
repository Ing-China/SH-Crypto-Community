"use client";
import React from "react";
import { Card } from "@/components/Card";
import { FeatureCardProps } from "@/types";

export const FeaturesCard: React.FC<FeatureCardProps> = ({ item }) => {
  return (
    <Card className="h-full text-center p-6">
      <div className="text-5xl mb-6">{item.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
      <p className="text-gray-300 leading-relaxed">{item.description}</p>
    </Card>
  );
};
