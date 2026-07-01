"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0d0718] to-black" />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[900px] w-[900px] rounded-full bg-violet-600/30 blur-[180px]"
      />

      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[150px]"
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[150px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        {/* Logo */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Known Unknown"
            width={260}
            height={260}
            priority
            className="drop-shadow-[0_0_120px_rgba(124,58,237,.9)]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-10 text-center text-7xl font-black uppercase leading-none tracking-[0.28em] md:text-9xl"
        >
          Known
          <br />
          Unknown
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-center text-lg leading-8 text-gray-300 md:text-xl">
          League of Legends Organization
          <br />
          Prime League • Since 2021 • Community Driven
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://discord.gg/UAwyyfJnm"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button font-semibold"
          >
            Join Discord
          </a>

          <a
            href="#teams"
            className="secondary-button"
          >
            Our Teams
          </a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-24 flex flex-col items-center text-gray-500"
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll Down
          </span>

          <span className="mt-2 text-2xl">
            ↓
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}