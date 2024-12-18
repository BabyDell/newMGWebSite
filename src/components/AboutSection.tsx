"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.section
        ref={ref}
        style={{ opacity, scale, y }}
        className="w-full bg-gradient-to-b from-stone-900 to-black py-20 lg:py-32 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl lg:text-5xl text-slate-100 font-Playfair_Display tracking-wider font-semibold">
                  Maria Gutierrez
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed">
                With over 20 years of experience in the Coachella Valley, Maria
                has a keen understanding of the local market, trends, and
                neighborhoods. Her expertise allows her to expertly guide
                clients in finding their perfect home or selling at the optimal
                time and price.
              </p>
              <p className="text-slate-200 text-lg leading-relaxed">
                Maria&apos;s deep familiarity with the area ensures that her clients
                receive the most informed, strategic advice for their real
                estate needs.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-indigo-400 font-semibold group"
              >
                Learn more about Maria
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative h-96">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/mgTempImage.avif"
                  alt="Maria Gutierrez"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-semibold">20+ Years</p>
                <p className="text-sm">of Local Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
  );
}

