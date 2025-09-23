"use client";

import Image from "next/image";
import { TreePine, Droplet, Leaf } from "lucide-react";

export default function NaturalResourceSection() {
  const features = [
    {
      title: "Sustainable Forestry",
      description:
        "Supporting forest conservation, reforestation, and agroforestry projects to enhance ecosystem services and biodiversity while promoting livelihoods.",
      icon: <TreePine className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Water Resource Management",
      description:
        "Implementing integrated strategies to ensure the sustainable use of water bodies, promote watershed protection, and address water scarcity.",
      icon: <Droplet className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Biodiversity Conservation",
      description:
        "Conducting biodiversity assessments, developing conservation strategies, and designing programs to protect critical habitats and species.",
      icon: <Leaf className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="natural-resource-management"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white font-[Montserrat] px-6 py-20 overflow-hidden"
    >
      {/* Overlay Image (covers 75% of section) */}
      <div className="absolute inset-0">
        <Image
          src="/images/img-19.jpg" // <-- replace with your image
          alt="Natural resources"
          fill
          className="object-cover opacity-70"
          style={{ clipPath: "inset(0 0 0% 0)" }} // shows 75% of the section
        />
      </div>

      {/* Content sits above the image */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Heading */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-300 leading-tight">
            Natural Resource Management
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Sustainability through Forestry, Water, and Biodiversity.
          </p>
        </div>

        {/* Right column: Feature cards */}
        <div className="space-y-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-lg hover:border-green-400 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-green-200">
                    {f.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
