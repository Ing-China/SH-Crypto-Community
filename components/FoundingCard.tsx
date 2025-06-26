import React from "react";
import Image from "next/image";
import { Card } from "./Card";
import { FoundingCardProps } from "@/types";
import { Send, Facebook, Twitter } from "lucide-react";

const FoundingCard: React.FC<FoundingCardProps> = ({ item }) => {
  const socialLinks = [
    { name: "Telegram", url: item.telegram, icon: Send },
    { name: "Facebook", url: item.facebook, icon: Facebook },
    { name: "Twitter", url: item.twitter, icon: Twitter },
  ].filter((link) => link.url);

  return (
    <Card>
      <div className="relative overflow-hidden">
        <div className="flex justify-center pt-8 pb-4">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-3 border-[var(--color-primary)] shadow-lg">
              <Image
                src={item.image}
                alt={`${item.name} profile`}
                width={160}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                priority={false}
              />
            </div>

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md" />
          </div>
        </div>

        <div className="p-6 text-center space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors duration-200">
              {item.name}
            </h3>
            <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wide">
              {item.role}
            </p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 max-w-xs mx-auto">
            {item.bio}
          </p>

          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-4 pt-4 border-t border-[var(--color-primary)]">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors duration-300 group"
                    aria-label={`${item.name}'s ${link.name}`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FoundingCard;
