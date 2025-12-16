"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-discord-dark via-discord-gray to-black">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
