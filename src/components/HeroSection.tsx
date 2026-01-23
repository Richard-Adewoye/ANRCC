"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const images = [
  "/images/img-16.jpg",
  "/images/img-17.jpg",
  "/images/img-18.jpg",
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-green-800">
            Our Team
          </h1>
          <p className="text-gray-700 mb-8">
            We boast a multidisciplinary team of experts, including environmental scientists,
            ecologists, climate change specialists, economists, and policy analysts.
            The team’s diverse expertise enables the firm to address complex environmental
            challenges holistically and deliver integrated solutions that are both innovative
            and practical.
          </p>
        </div>

        {/* Right Column - Image Slideshow */}
        <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden bg-white/40 backdrop-blur-lg border border-gray-200 shadow-md">
          {images.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Team image ${idx + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={idx === 0}
              className={`absolute inset-0 object-cover transition-opacity duration-1000 rounded-xl ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
