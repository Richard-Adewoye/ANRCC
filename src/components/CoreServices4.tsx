"use client";

import Image from "next/image";
import { Map, Sprout, Landmark } from "lucide-react";

export default function SustainableAgricultureSection() {
  const features = [
    {
      title: "Land Use Planning",
      description:
        "Developing sustainable land use plans that balance agricultural productivity with the conservation of forests, wetlands, and other critical ecosystems.",
      icon: <Map className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Agroecology",
      description:
        "Promoting climate-smart agricultural practices that enhance food security while preserving natural resources and reducing emissions.",
      icon: <Sprout className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Land Tenure Advisory",
      description:
        "Addressing land tenure issues to promote equitable and sustainable land use in rural communities.",
      icon: <Landmark className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="sustainable-agriculture"
      className="relative w-full min-h-screen flex items-center justify-center text-white font-[Montserrat] px-6 py-20 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/img-21.jpg" // <-- replace with your public folder image path
        alt="Sustainable Agriculture Background"
        fill
        className="object-cover object-center -z-10"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 -z-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Heading */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-300 leading-tight">
            Sustainable Agriculture & Land Use
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Balancing productivity, equity, and ecosystem conservation.
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
