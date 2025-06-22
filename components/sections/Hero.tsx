// "use client";
// import React from "react";
// import { CommunityStats } from "@/types";
// import { Card } from "../ui/Card";
// import { Button } from "../ui/Button";

// const communityStats: CommunityStats[] = [
//   { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
//   { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
//   { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
//   { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
// ];

// export const Hero: React.FC = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-crypto-gradient">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
//       </div>

//       <div className="container mx-auto px-4 z-10">
//         <div className="text-center max-w-6xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-orange-500 bg-clip-text text-transparent animate-float">
//             Cambodia&apos;s Leading Crypto Community
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Join thousands of crypto enthusiasts, traders, and investors in
//             Cambodia&apos;s most active cryptocurrency community. Learn, share,
//             and grow together.
//           </p>

//           {/* Community Stats - 4 Cards in One Line */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
//             {communityStats.map((stat, index) => (
//               <Card key={`${stat.platform}-${index}`} className="text-center">
//                 <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-bold text-primary-400 mb-2">
//                   {stat.members.toLocaleString()}
//                 </h3>
//                 <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base">
//                   {stat.platform}
//                 </p>
//                 <Button
//                   href={stat.joinUrl}
//                   size="sm"
//                   className="w-full text-xs lg:text-sm"
//                 >
//                   Join {stat.platform}
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React from "react";
// import { CommunityStats } from "@/types";
// import { Card } from "../ui/Card";
// import { Button } from "../ui/Button";

// const communityStats: CommunityStats[] = [
//   { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
//   { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
//   { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
//   { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
// ];

// export const Hero: React.FC = () => {
//   return (
//     <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-crypto-gradient">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-glow" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
//       </div>

//       <div className="container mx-auto px-4 z-10">
//         <div className="text-center max-w-6xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-primary-400 via-primary-500 to-orange-500 bg-clip-text text-transparent animate-float">
//             Cambodia&apos;s Leading Crypto Community
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
//             Join thousands of crypto enthusiasts, traders, and investors in
//             Cambodia&apos;s most active cryptocurrency community. Learn, share,
//             and grow together.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
//             {communityStats.map((stat, index) => (
//               <Card key={`${stat.platform}-${index}`} className="text-center">
//                 <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-bold text-primary-400 mb-2">
//                   {stat.members.toLocaleString()}
//                 </h3>
//                 <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base">
//                   {stat.platform}
//                 </p>
//                 <Button
//                   href={stat.joinUrl}
//                   size="sm"
//                   className="w-full text-xs lg:text-sm"
//                 >
//                   Join {stat.platform}
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React from "react";
// import { CommunityStats } from "@/types";
// import { Card } from "../ui/Card";
// import { Button } from "../ui/Button";

// const communityStats: CommunityStats[] = [
//   { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
//   { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
//   { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
//   { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
// ];

// export const Hero: React.FC = () => {
//   return (
//     <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-crypto-gradient">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
//       </div>

//       <div className="container mx-auto px-4 z-10">
//         <div className="text-center max-w-6xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent animate-[var(--animate-float)]">
//             Cambodia&apos;s Leading Crypto Community
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-muted)] mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
//             Join thousands of crypto enthusiasts, traders, and investors in
//             Cambodia&apos;s most active cryptocurrency community. Learn, share,
//             and grow together.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
//             {communityStats.map((stat, index) => (
//               <Card key={`${stat.platform}-${index}`} className="text-center">
//                 <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2">
//                   {stat.members.toLocaleString()}
//                 </h3>
//                 <p className="text-[var(--color-muted)] mb-3 lg:mb-4 text-sm lg:text-base">
//                   {stat.platform}
//                 </p>
//                 <Button
//                   href={stat.joinUrl}
//                   size="sm"
//                   className="w-full text-xs lg:text-sm"
//                 >
//                   Join {stat.platform}
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React from "react";
// import { CommunityStats } from "@/types";
// import { Card } from "../ui/Card";
// import { Button } from "../ui/Button";

// const communityStats: CommunityStats[] = [
//   { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
//   { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
//   { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
//   { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
// ];

// export const Hero: React.FC = () => {
//   return (
//     <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-crypto-gradient">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
//       </div>

//       <div className="container mx-auto px-4 z-10">
//         <div className="text-center max-w-6xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent animate-[var(--animate-float)]">
//             Cambodia&apos;s Leading Crypto Community
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-muted)] mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
//             Join thousands of crypto enthusiasts, traders, and investors in
//             Cambodia&apos;s most active cryptocurrency community. Learn, share,
//             and grow together.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
//             {communityStats.map((stat, index) => (
//               <Card key={`${stat.platform}-${index}`} className="text-center">
//                 <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2">
//                   {stat.members.toLocaleString()}
//                 </h3>
//                 <p className="text-[var(--color-muted)] mb-3 lg:mb-4 text-sm lg:text-base">
//                   {stat.platform}
//                 </p>
//                 <Button
//                   href={stat.joinUrl}
//                   size="sm"
//                   className="w-full text-xs lg:text-sm"
//                 >
//                   Join {stat.platform}
//                 </Button>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";
import React from "react";
import { CommunityStats } from "@/types";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const communityStats: CommunityStats[] = [
  { platform: "Telegram", members: 5847, icon: "📱", joinUrl: "#" },
  { platform: "Discord", members: 2156, icon: "💬", joinUrl: "#" },
  { platform: "Facebook", members: 1243, icon: "📘", joinUrl: "#" },
  { platform: "Active Traders", members: 892, icon: "📈", joinUrl: "#" },
];

export const Hero: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-crypto-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-[var(--animate-pulse-glow)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent animate-[var(--animate-float)] hover:drop-shadow-[0_0_3px_var(--color-primary)] transition-all duration-300 cursor-default">
            Cambodia&apos;s Leading Crypto Community
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of crypto enthusiasts, traders, and investors in
            Cambodia&apos;s most active cryptocurrency community. Learn, share,
            and grow together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {communityStats.map((stat, index) => (
              <Card key={`${stat.platform}-${index}`} className="text-center">
                <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-2">
                  {stat.members.toLocaleString()}
                </h3>
                <p className="text-white mb-3 lg:mb-4 text-sm lg:text-base">
                  {stat.platform}
                </p>
                <Button
                  href={stat.joinUrl}
                  size="sm"
                  className="w-full text-xs lg:text-sm"
                >
                  Join {stat.platform}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
