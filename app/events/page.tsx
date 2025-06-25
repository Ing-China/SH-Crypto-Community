"use client";
import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, User, MessageSquare } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Blockchain Workshop 2025",
      date: "2025-07-15",
      time: "2:00 PM",
      location: "Phnom Penh Tech Hub",
      description:
        "Learn the fundamentals of blockchain development with hands-on coding sessions. Perfect for beginners and intermediate developers.",
      attendees: 45,
      maxAttendees: 60,
      status: "upcoming",
      price: "Free",
      organizer: "SH Crypto Education Team",
      featured: true,
      image: "/images/demo.png",
      category: "workshop",
    },
    {
      id: 2,
      title: "DeFi Trading Strategies",
      date: "2025-07-22",
      time: "6:00 PM",
      location: "Online Event",
      description:
        "Advanced trading strategies and risk management in decentralized finance. Experienced traders will share their insights.",
      attendees: 78,
      maxAttendees: 100,
      status: "upcoming",
      price: "$25",
      organizer: "Trading Team",
      featured: true,
      image: "/images/demo.png",
      category: "trading",
    },
    {
      id: 3,
      title: "NFT Creator Meetup",
      date: "2025-08-05",
      time: "4:00 PM",
      location: "Siem Reap Creative Space",
      description:
        "Connect with NFT artists and creators to share experiences and collaborate on new projects.",
      attendees: 32,
      maxAttendees: 50,
      status: "upcoming",
      price: "Free",
      organizer: "Creative Team",
      image: "/images/demo.png",
      category: "meetup",
    },
    {
      id: 4,
      title: "Cryptocurrency Security Seminar",
      date: "2025-06-20",
      time: "3:00 PM",
      location: "Phnom Penh University",
      description:
        "Essential security practices for cryptocurrency holders and traders. Learn about wallet security and safe trading.",
      attendees: 95,
      maxAttendees: 80,
      status: "completed",
      price: "Free",
      organizer: "Security Team",
      image: "/images/demo.png",
      category: "seminar",
    },
    {
      id: 5,
      title: "Smart Contract Development",
      date: "2025-08-20",
      time: "1:00 PM",
      location: "Online Event",
      description:
        "Deep dive into smart contract development using Solidity. Build your first DApp from scratch.",
      attendees: 25,
      maxAttendees: 40,
      status: "upcoming",
      price: "$50",
      organizer: "Development Team",
      image: "/images/demo.png",
      category: "workshop",
    },
    {
      id: 6,
      title: "Cambodia Crypto Conference 2025",
      date: "2025-09-10",
      time: "9:00 AM",
      location: "Sokha Hotel, Phnom Penh",
      description:
        "The biggest crypto event in Cambodia. Industry leaders, government officials, and crypto enthusiasts gathering together.",
      attendees: 180,
      maxAttendees: 300,
      status: "upcoming",
      price: "$75",
      organizer: "SH Crypto Team",
      featured: true,
      image: "/images/demo.png",
      category: "conference",
    },
  ];

  const filterCategories = [
    { id: "all", label: "All Events", count: events.length },
    {
      id: "siemreap",
      label: "Siem Reap",
      count: events.filter((e) => e.category === "workshop").length,
    },
    {
      id: "phnompenh",
      label: "Phnom Penh",
      count: events.filter((e) => e.category === "trading").length,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center max-w-4xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
          Events
        </h2>
      </div>

      <div className="container mx-auto mb-8">
        <div className="flex flex-wrap gap-4">
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              size="sm"
              variant={category.id === "all" ? "primary" : "secondary"}
              className={`!py-2 !rounded-xl text-sm !hover:scale-100 !active:scale-100 ${
                category.id === "all" ? "" : "!bg-gray-600/30 !text-gray-500"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">
                ({category.count})
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id}>
                <div
                  className="relative h-48 w-full overflow-hidden"
                  style={{
                    borderTopLeftRadius: "var(--radius-card)",
                    borderTopRightRadius: "var(--radius-card)",
                  }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        event.status === "upcoming"
                          ? "bg-green-500/30 text-green-300 border-green-500/50"
                          : "bg-gray-500/30 text-gray-300 border-gray-500/50"
                      }`}
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-300">
                      by {event.organizer}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-400">
                      <Calendar size={14} className="mr-2 text-yellow-500" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock size={14} className="mr-2 text-yellow-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin size={14} className="mr-2 text-yellow-500" />
                      {event.location.length > 20
                        ? event.location.substring(0, 20) + "..."
                        : event.location}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center text-gray-400">
                        <User size={14} className="mr-2 text-yellow-500" />
                        {event.attendees}/{event.maxAttendees} attendees
                      </div>
                      <div className="font-semibold text-yellow-500">
                        {event.price}
                      </div>
                    </div>
                  </div>

                  <Button
                    variant={
                      event.status === "completed" ||
                      event.attendees >= event.maxAttendees
                        ? "secondary"
                        : "primary"
                    }
                    className={`w-full !py-2 !rounded-xl text-sm !hover:scale-100 !active:scale-100 ${
                      event.status === "completed"
                        ? "!bg-gray-600/30 !text-gray-500 !cursor-not-allowed"
                        : event.attendees >= event.maxAttendees
                        ? "!bg-orange-500/30 !text-orange-400 !cursor-not-allowed"
                        : ""
                    }`}
                    onClick={
                      event.status === "completed" ||
                      event.attendees >= event.maxAttendees
                        ? undefined
                        : () => {}
                    }
                  >
                    {event.status === "completed"
                      ? "Event Completed"
                      : event.attendees >= event.maxAttendees
                      ? "Fully Booked"
                      : "Register Now"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
            Partner With Us
          </h2>
          <p className="text-sm sm:text-lg md:text-xl  text-white mb-4 max-w-4xl mx-auto leading-relaxed">
            Become our strategic partner and help shape the future of crypto
            education in Cambodia. Collaborate with us to create impactful
            events, expand your brand presence, and connect with a passionate
            community of blockchain enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="!flex !flex-row !items-center !justify-center !space-x-2">
              <MessageSquare size={20} />
              <span>Become a Partner</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
