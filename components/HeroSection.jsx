"use client";

import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/cleaning-hero.jpg')` }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meridian Perla
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Servicii de curatenie profesionale
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Curatenie la domiciliu, birou, scari de bloc - solutii personalizate
          pentru spatiul tau
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="w-full sm:w-auto bg-white text-black">
            <MessageCircle className="mr-2 h-5 w-5" />
            Cere oferta
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
