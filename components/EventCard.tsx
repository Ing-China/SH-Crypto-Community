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
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border ${
              item.status === "upcoming"
                ? "bg-green-500/30 text-green-300 border-green-500/50"
                : "bg-gray-500/30 text-gray-300 border-gray-500/50"
            }`}
          >
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
          <p className="text-xs text-gray-300">by {item.organizer}</p>
        </div>
      </div>

      <div className="p-4">
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
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center text-gray-400">
              <User size={14} className="mr-2 text-yellow-500" />
              {item.attendees}/{item.maxAttendees} attendees
            </div>
            <div className="font-semibold text-yellow-500">{item.price}</div>
          </div>
        </div>

        <Button
          variant={
            item.status === "completed" || item.attendees >= item.maxAttendees
              ? "secondary"
              : "primary"
          }
          className={`w-full !py-2 !rounded-xl text-sm !hover:scale-100 !active:scale-100 ${
            item.status === "completed"
              ? "!bg-gray-600/30 !text-gray-500 !cursor-not-allowed"
              : item.attendees >= item.maxAttendees
              ? "!bg-orange-500/30 !text-orange-400 !cursor-not-allowed"
              : ""
          }`}
          onClick={
            item.status === "completed" || item.attendees >= item.maxAttendees
              ? undefined
              : () => {}
          }
        >
          {item.status === "completed"
            ? "Event Completed"
            : item.attendees >= item.maxAttendees
            ? "Fully Booked"
            : "Register Now"}
        </Button>
      </div>
    </Card>
  );
};
