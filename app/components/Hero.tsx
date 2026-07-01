"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.18),transparent_55%)]" />

      {/* Animated Glow */}
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
        className="absolute h-[650px] w-[650px] rounded-full bg-violet-700 blur-[140px]"
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >

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
            width={180}
            height={180}
            priority
            className="drop-shadow-[0_0_80px_rgba(124,58,237,.8)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ delay: .3, duration: 1 }}
          className="mt-10 text-6xl font-black uppercase md:text-8xl"
        >
          Known
          <br />
          Unknown
        </motion.h1>

        <p className="mt-8 text-xl text-gray-300">
          League of Legends Organization
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-violet-300">
          <span>Prime League</span>
          <span>•</span>
          <span>Since 2021</span>
          <span>•</span>
          <span>Community Driven</span>
        </div>

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

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-24 text-gray-500"
        >
          ↓ Scroll
        </motion.div>

      </motion.div>

    </section>
  );
}