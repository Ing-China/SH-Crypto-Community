import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/Button";
import { PartnerCard } from "@/components/PartnerCard";
import { eventsData } from "@/data/events";
import { partnersData } from "@/data/partners";
import Link from "next/link";

export function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id.toString(),
  }));
}

interface EventDetailProps {
  params: Promise<{ id: string }>;
}

const EventDetail = async ({ params }: EventDetailProps) => {
  const { id } = await params;
  const eventId = parseInt(id);
  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Event not found
          </h1>
          <Link href="/events">
            <Button>Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const eventSponsors = event.sponsors 
    ? partnersData.filter(partner => event.sponsors?.includes(partner.name))
    : [];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden">
        <div className="container mx-auto pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={
                    "px-4 py-2 rounded-full text-sm font-medium text-white bg-[var(--color-primary)]"
                  }
                >
                  Meetup
                </span>
                <span className="text-[var(--color-primary)] font-medium">
                  {event.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                {event.title}
              </h1>

              <p className="text-xl text-white mb-8 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-6 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white">
                    <Calendar
                      className="text-[var(--color-primary)]"
                      size={20}
                    />
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <Clock className="text-[var(--color-primary)]" size={20} />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <MapPin className="text-[var(--color-primary)]" size={20} />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <User className="text-[var(--color-primary)]" size={20} />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="flex  gap-3 text-white">
                  <span className="text-white ">Organized by:</span>
                  <div className="flex flex-wrap gap-2">
                    {event.organizers.map((organizer, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-600/30 text-white rounded-2xl text-sm border border-[var(--color-primary)]"
                      >
                        {organizer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm h-80 lg:h-96">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {eventSponsors.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center pb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
                Event Sponsors
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Special thanks to our amazing sponsors who make this event
                possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventSponsors.map((partner, index) => (
                <PartnerCard key={index} item={partner} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventDetail;
