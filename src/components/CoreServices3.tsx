"use client";

import Image from "next/image";
import { FileCheck, Layers } from "lucide-react";

export default function EnvironmentalImpactSection() {
  const features = [
    {
      title: "Impact Studies",
      description:
        "Conducting environmental and social impact assessments for infrastructure, energy, and development projects to ensure compliance and minimize negative impacts on ecosystems and communities.",
      icon: <FileCheck className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Strategic Environmental Assessments (SEA)",
      description:
        "Evaluating policies, plans, and programs to integrate environmental considerations into strategic decision-making processes.",
      icon: <Layers className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="environmental-impact-assessments"
      className="relative w-full min-h-screen flex items-center justify-center text-white font-[Montserrat] px-6 py-20 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/img-22.jpg" // <-- just use a string path from public/
        alt="Environmental background"
        fill
        className="object-cover object-center -z-10"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Heading */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-300 leading-tight">
            Environmental Impact Assessments
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Ensuring compliance, minimizing risks, and guiding sustainable
            decisions.
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
