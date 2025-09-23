"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// Import Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lines = [
  "Afrique Natural Resource and Climate Change Consulting (ANRCCC) is a premier environmental consulting firm based in Africa, specializing in the sustainable management of natural resources and climate change solutions. The company is dedicated to helping governments, businesses, non-governmental organizations (NGOs), and communities address the complex challenges posed by environmental degradation, climate change, and the sustainable use of natural resources. ANRCCC combines cutting-edge research, innovative technologies, and a deep understanding of local ecosystems to deliver customized solutions that promote sustainable development.",
];

export default function HeroSection() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (currentLine < lines.length) {
      let i = 0;
      const typing = setInterval(() => {
        if (i < lines[currentLine].length) {
          setDisplayedText((prev) => prev + lines[currentLine][i]);
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
            setDisplayedText("");
          }, 1500);
        }
      }, 0.1);
      return () => clearInterval(typing);
    }
  }, [currentLine]);

  return (
    <section
      className={`relative w-full min-h-screen flex items-center overflow-hidden ${montserrat.className}`}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/vid_3.mp4" // <-- place video inside /public/videos/bg.mp4
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Glassmorphic Box */}
      <div className="relative flex flex-col justify-center m-4 p-16 w-[calc(100%-32px)] h-[calc(100%-32px)] bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
          Afrique Natural Resource and Climate Change Consulting
        </h1>

        {/* Typing Effect */}
        <p className="text-lg text-white whitespace-pre-line min-h-[6rem] mb-8">
          {lines.slice(0, currentLine).join("\n")}
          {displayedText}
        </p>

        <Link
          href="#about"
          className="inline-flex items-center bg-green-700 hover:bg-green-600 text-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
        >
          Learn about Us
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
