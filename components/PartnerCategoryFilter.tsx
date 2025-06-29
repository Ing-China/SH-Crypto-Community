"use client";

import React from "react";
import { Button } from "@/components/Button";
import { PartnerCategoryProps } from "@/types";

export const PartnerCategoryFilter: React.FC<PartnerCategoryProps> = ({
  item,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <Button
      size="sm"
      variant={activeCategory === item.id ? "primary" : "secondary"}
      className={`!py-2 !rounded-xl text-sm !hover:scale-100 !active:scale-100 ${
        activeCategory === item.id ? "" : "!bg-gray-600/30 !text-gray-500"
      }`}
      onClick={() => onCategoryChange(item.id)}
    >
      {item.label}
      <span className="ml-2 text-xs opacity-75">({item.count})</span>
    </Button>
  );
};