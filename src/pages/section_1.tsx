"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="bg-gray-900 text-white flex flex-col justify-center px-8 py-16 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          ArcGIS: Esri&apos;s comprehensive geospatial platform
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Unlock the power of location with ArcGIS, the world’s leading mapping and spatial analysis software.
        </p>
        <Link
          href="/arcgis"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Learn about ArcGIS
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Right Column */}
      <div className="relative md:w-1/2 h-64 md:h-auto">
        {/* Video Background */}
        <video
          ref={videoRef}
          src="/videos/vid_1.mp4" // replace with your video path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Semi-transparent orange circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 opacity-40 rounded-full pointer-events-none"></div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    </section>
  );
}
