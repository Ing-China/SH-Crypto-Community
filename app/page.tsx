import { Navbar } from "@/components/layout/Navbar";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
