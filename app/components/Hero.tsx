"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[700px] w-[700px] rounded-full bg-violet-700 blur-3xl"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/logo.png"
            width={220}
            height={220}
            alt="Known Unknown"
            priority
            className="drop-shadow-[0_0_80px_rgba(124,58,237,0.9)]"
          />
        </motion.div>

        <h1 className="mt-10 text-center text-7xl font-black uppercase tracking-[0.35em] md:text-8xl">
          Known
          <br />
          Unknown
        </h1>

        <p className="mt-8 max-w-xl text-center text-xl text-gray-400">
          Built to compete.
          <br />
          Ready to conquer.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-12 flex gap-6"
        >
          <a
            href="https://discord.gg/UAwyyfJnm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
          >
            Join Discord
          </a>

          <a
            href="#teams"
            className="rounded-full border border-white/20 px-8 py-4 transition hover:border-violet-500"
          >
            Our Teams
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}