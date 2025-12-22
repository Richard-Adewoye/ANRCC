"use client";

import Image from "next/image";
import { FileText, Megaphone } from "lucide-react";

export default function PolicyAdvocacySection() {
  const features = [
    {
      title: "Environmental Policy Development",
      description:
        "Supporting governments in developing and implementing robust environmental and climate change policies and frameworks.",
      icon: <FileText className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Advocacy for Sustainable Development",
      description:
        "Engaging in advocacy efforts to promote sustainable development goals (SDGs) and drive climate action at local, national, and international levels.",
      icon: <Megaphone className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="policy-advocacy"
      className="relative w-full min-h-screen flex items-center justify-center text-white font-[Montserrat] px-6 py-20 overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/img-24.jpg" // replace with your actual image in public/images
        alt="Policy & Advocacy Background"
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
            Policy & Advocacy
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Driving impactful change through environmental policies and sustainable development advocacy.
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
