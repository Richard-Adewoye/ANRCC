"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

interface Slide {
  image: string;
  headline: string;
  subHeadline: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero-1.jpg",
    headline: "We Build Climate Solutions That Last",
    subHeadline:
      "ANRCCC is a leading environmental consulting firm in Africa, specializing in climate change strategy, sustainable resource management, and real-world impact.",
  },
  {
    image: "/images/hero-2.jpg",
    headline: "Sustainable Development, Built Right",
    subHeadline:
      "We help governments, businesses, NGOs, and communities design climate-resilient plans backed by research, innovation, and local ecosystem expertise.",
  },
  {
    image: "/images/hero-3.jpg",
    headline: "Turning Data Into Action",
    subHeadline:
      "We use cutting-edge tools and practical strategies to turn environmental data into actionable solutions that protect communities and ecosystems.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen flex items-center overflow-hidden ${montserrat.className}`}
    >
      {slides.map((slide, index) => (
        <BackgroundImage 
          key={index} 
          image={slide.image} 
          isActive={index === active}
        />
      ))}
      <DarkOverlay />
      
      <div className="relative flex flex-col justify-end items-start m-4 p-4 pb-20 w-[calc(100%-32px)] h-[calc(100%-32px)] z-10">
        <HeroText headline={slides[active].headline} subHeadline={slides[active].subHeadline} />
        <LearnMoreButton />
      </div>

      <SlideIndicators active={active} total={slides.length} onSelect={setActive} />
    </section>
  );
}

function BackgroundImage({ image, isActive }: { image: string; isActive: boolean }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}

function DarkOverlay() {
  return <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />;
}

function HeroText({ headline, subHeadline }: { headline: string; subHeadline: string }) {
  return (
    <>
      <h1 className="relative text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-4 drop-shadow-2xl">
        {headline}
      </h1>

      <p className="relative text-white/90 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-[600px] drop-shadow-lg mb-2">
        {subHeadline}
      </p>
    </>
  );
}

function LearnMoreButton() {
  return (
    <Link
      href="#about"
      className="group relative inline-flex items-center w-fit bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base mt-6 hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-white/10"
    >
      <span className="relative z-10">Learn About Us</span>
      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
    </Link>
  );
}

function SlideIndicators({ active, total, onSelect }: { active: number; total: number; onSelect: (index: number) => void }) {
  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            active === index 
              ? 'w-12 bg-white shadow-lg shadow-white/30' 
              : 'w-8 bg-white/40 hover:bg-white/60'
          }`}
        />
      ))}
    </div>
  );
}