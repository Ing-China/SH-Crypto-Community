"use client";
import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { EventCardProps } from "@/types";

export const EventCard: React.FC<EventCardProps> = ({ item }) => {
  return (
    <Card>
      <div
        className="relative h-48 w-full overflow-hidden"
        style={{
          borderTopLeftRadius: "var(--radius-card)",
          borderTopRightRadius: "var(--radius-card)",
        }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium border bg-[var(--color-primary)] text-white">
            Meetup
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-400">
            <Calendar size={14} className="mr-2 text-yellow-500" />
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <Clock size={14} className="mr-2 text-yellow-500" />
            {item.time}
          </div>
          <div className="flex items-center text-xs text-gray-400">
            <MapPin size={14} className="mr-2 text-yellow-500" />
            {item.location.length > 20
              ? item.location.substring(0, 20) + "..."
              : item.location}
          </div>
          <div className="flex items-center text-xs">
            <div className="flex items-center text-gray-400">
              <User size={14} className="mr-2 text-yellow-500" />
              {item.attendees} attendees
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          href={`/events/${item.id}`}
          className="w-full !py-2 !rounded-xl text-sm !hover:scale-100 !active:scale-100"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};
