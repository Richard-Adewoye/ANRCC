"use client";

import { Sun, Wind, AlertTriangle } from "lucide-react";

export default function ClimateChangeSection() {
  const features = [
    {
      title: "Climate Mitigation and Adaptation",
      description:
        "Assisting clients in developing and implementing strategies to reduce greenhouse gas emissions and enhance resilience to climate impacts.",
      icon: <Sun className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Carbon Footprint and Offset Services",
      description:
        "Offering carbon accounting, offset solutions, and emissions reduction strategies for businesses, governments, and organizations.",
      icon: <Wind className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Climate Risk Assessment",
      description:
        "Conducting assessments to identify vulnerabilities in sectors such as agriculture, energy, and infrastructure, and recommending resilience-building measures.",
      icon: <AlertTriangle className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="climate-change-consulting"
      className="relative w-full min-h-screen flex items-center justify-center text-white font-[Montserrat] px-6 py-20 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img-20.jpg')" }} // <-- change path
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column: Heading */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-300 leading-tight">
            Climate Change Consulting
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Building resilience through mitigation, adaptation, and risk
            management.
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
