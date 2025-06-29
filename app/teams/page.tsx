import React from "react";
import FoundingCard from "@/components/FoundingCard";
import { foundingMembers, moderators } from "@/data/teams";
import ModeratorCard from "@/components/ModeratorCard";

const Teams = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="text-center max-w-4xl mx-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
          Founding Members
        </h2>
      </div>

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {foundingMembers.map((foundingMember) => (
              <FoundingCard key={foundingMember.id} item={foundingMember} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center max-w-4xl mx-auto pb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-transparent bg-clip-text">
            Moderators
          </h2>
        </div>
        <div className="container mx-auto px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {moderators.map((moderator) => (
              <ModeratorCard key={moderator.id} item={moderator} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
