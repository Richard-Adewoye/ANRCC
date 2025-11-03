"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "coastal-flood-management",
    label: "Forest Conservation and REDD+ Implementation",
    category: "ANRCCC",
    title: "Forest Conservation and REDD+ Initiatives",
    description:
      "ANRCCC has partnered with governments and international organizations to design and implement REDD+ programs, focusing on reducing deforestation and forest degradation in key biodiversity hotspots.",
    link: "/case-studies/southern-california",
    images: ["images/img_1.webp", "images/img_2.webp", "images/img_3.jpg"],
  },
  {
    id: "sustainable-agriculture",
    label: "Climate Resilient Agriculture in Sub-Saharan Africa",
    category: "ANRCCC",
    title: "Climate-Smart Agriculture for Smallholder Farmers",
    description:
      "The firm has led efforts to promote climate-smart agricultural practices that increase productivity while building resilience to climate change for smallholder farmers.",
    link: "/case-studies/the-joint",
    images: ["images/img_4.jpg", "images/img_5.jpg", "images/img_6.jpg"],
  },
  {
    id: "solar-energy-optimization",
    label: "Integrated Water Resource Management in West Africa",
    category: "ANRCCC",
    title: "Integrated Water Resource Management",
    description:
      "ANRCCC has worked on comprehensive water management plans that balance the needs of agricultural, urban, and industrial sectors while ensuring the sustainability of water resources.",
    link: "/case-studies/wrexham-stadium",
    images: ["images/img_7.jpg", "images/img_8.jpg", "images/img_9.jpg"],
  },
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="projects" className="bg-[#1D1D1D] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-200">
          Approach
        </h2>
        <p className="text-green-400 max-w-2xl mx-auto mb-8">
          ANRCCC’s approach is rooted in collaboration, innovation, and sustainability. The firm works closely with stakeholders across Africa to co-create solutions that are locally relevant, culturally appropriate, and environmentally sustainable. By integrating scientific research, traditional knowledge, and advanced technology, ANRCCC ensures that its solutions are both effective and scalable.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 border-b border-green-700 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-colors ${
                activeTab.id === tab.id
                  ? "font-semibold text-green-300 border-b-2 border-green-300"
                  : "text-green-400 hover:text-green-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <TabContent tab={activeTab} />
      </div>
    </section>
  );
}

type Tab = typeof tabs[number];

function TabContent({ tab }: { tab: Tab }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center text-left">
      {/* Left Column - Image Collage */}
      <div className="relative w-full h-80 flex gap-2">
        {tab.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="w-1/3 object-cover rounded-lg"
          />
        ))}
        </div>

      {/* Right Column - Text Content */}
      <div>
        <span className="text-xs uppercase text-green-400">{tab.category}</span>
        <h3 className="text-2xl font-bold mt-2 mb-4 text-green-200">{tab.title}</h3>
        <p className="text-green-300 mb-6">{tab.description}</p>
        {/*<Link
          href={tab.link}
          className="inline-flex items-center gap-2 bg-green-400 text-[#1D1D1D] px-5 py-3 rounded-md hover:bg-green-500 transition font-semibold"
        >
          Read the full case study →
        </Link> 
        */}
      </div>
    </div>
  );
}
