"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CEOInsightsSplash({ onComplete }) {
  /* Auto Complete/Redirect after 3 seconds */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-50 text-slate-900 flex flex-col items-center justify-center transition-colors duration-300">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-violet-600/10 rounded-full blur-[120px] animate-pulse duration-[8000ms]" />

      {/* Minimalist Grid Pattern for professional enterprise feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Core Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Animated Spinner with outer glowing track */}
        <div className="relative flex items-center justify-center">
          {/* Outer glowing pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute w-24 h-24 rounded-full border border-indigo-500/30 blur-[4px]"
          />
          {/* Elegant rotating spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-indigo-500/10 border-t-indigo-600 rounded-full shadow-[0_0_15px_rgba(129,140,248,0.2)]"
          />
        </div>

        <div className="flex flex-col gap-3">
          {/* Welcome Text */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700"
          >
            Welcome to HRA People Connect
          </motion.h1>

          {/* Subtitle/Status indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-xs text-slate-500 uppercase tracking-[6px] font-bold font-mono"
          >
            Initializing Secure Session
          </motion.p>
        </div>
      </div>
    </div>
  );
}