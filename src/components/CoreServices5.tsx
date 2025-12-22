"use client";

import Image from "next/image";
import { Users, Building2 } from "lucide-react";

export default function CapacityBuildingSection() {
  const features = [
    {
      title: "Community Engagement & Training",
      description:
        "Building capacity in communities to sustainably manage their natural resources and adapt to climate change through participatory approaches and tailored training programs.",
      icon: <Users className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Institutional Strengthening",
      description:
        "Offering technical support and capacity-building services to governmental institutions, NGOs, and private-sector organizations working in natural resource management and climate resilience.",
      icon: <Building2 className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="capacity-building"
      className="relative w-full min-h-screen flex items-center justify-center text-white font-[Montserrat] px-6 py-20 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/img-23.jpg" // replace with your public folder image
        alt="Capacity Building Background"
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
            Capacity Building & Training
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Empowering communities and institutions to strengthen resilience and sustainability.
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
                  <h3 className="text-xl font-semibold text-green-200">{f.title}</h3>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
