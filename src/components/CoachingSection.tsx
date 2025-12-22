// app/components/CoachingSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Stat {
  percentage: string;
  description: string;
}

export interface ButtonItem {
  label: string;
  link: string;
}

export interface CoachingSectionProps {
  sectionTitle?: string;
  mainTitle: string;
  stats: Stat[];
  descriptionText: string;
  buttons: ButtonItem[];
  imageSrc: string; // new prop for the right-hand image
  imageAlt?: string;
}

export default function CoachingSection({
  sectionTitle = "Coaching",
  mainTitle,
  stats = [],
  descriptionText,
  buttons = [],
  imageSrc,
  imageAlt = "Coaching illustration",
}: CoachingSectionProps) {
  return (
    <section className="w-full bg-black text-white py-16 px-6 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN */}
        <div className="relative flex flex-col gap-8">
          {/* Orange custom shaped label */}
          <div className="self-start">
            <div
              aria-hidden
              className="inline-block px-6 py-4 rounded-tr-[48px] rounded-br-[8px] rounded-bl-[48px] rounded-tl-[8px] text-black font-extrabold"
              style={{
                background:
                  "linear-gradient(90deg,#ff7a18 0%, #ff9900 50%, #ff6a00 100%)",
                clipPath:
                  "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 15% 50%)",
              }}
            >
              <span className="text-3xl md:text-4xl tracking-tight">COACHING</span>
            </div>
          </div>

          {/* Header */}
          <div>
            <h3 className="text-sm text-green-400 font-semibold mb-2">
              {sectionTitle}
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              {mainTitle}
            </h2>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex-1 min-w-[160px] bg-white/6 border border-white/8 rounded-lg p-4"
              >
                <div className="text-3xl font-bold text-green-300">
                  {s.percentage}
                </div>
                <div className="text-sm text-green-200 mt-1">{s.description}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-green-200 leading-relaxed max-w-2xl">
            {descriptionText}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {buttons.map((b, idx) => (
              <Link
                key={idx}
                href={b.link}
                className="inline-flex items-center gap-3 bg-white/6 hover:bg-white/10 text-white rounded-md px-5 py-3 text-sm font-medium transition"
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
