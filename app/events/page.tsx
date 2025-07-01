"use client";
import React, { useState, useMemo } from "react";
import { EventCard } from "@/components/EventCard";
import { EventCategoryFilter } from "@/components/EventCategoryFilter";
import { eventsData } from "@/data/events";
import { eventCategoriesData } from "@/data/eventCategories";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const filteredEvents = useMemo(() => {
    if (activeCategory === 1) {
      return eventsData;
    }

    const selectedCategory = eventCategoriesData.find(
      (cat) => cat.id === activeCategory
    );
    if (!selectedCategory) return eventsData;

    return eventsData.filter(
      (event) => event.category === selectedCategory.label
    );
  }, [activeCategory]);

  return (
    <div className="bg-black pb-20">
      <div className="text-center max-w-4xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
          Events
        </h2>
      </div>

      <div className="container mx-auto mb-8">
        <div className="flex flex-wrap gap-4">
          {eventCategoriesData.map((category) => (
            <EventCategoryFilter
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
            {filteredEvents.map((event) => (
              <EventCard key={event.id} item={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
