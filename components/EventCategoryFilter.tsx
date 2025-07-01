"use client";

import React from "react";
import { Button } from "@/components/Button";
import { EventCategoryProps } from "@/types";

export const EventCategoryFilter: React.FC<EventCategoryProps> = ({
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
      <span className="ml-2 text-xs">({item.count})</span>
    </Button>
  );
};
