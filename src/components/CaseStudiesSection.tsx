import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "southern-california",
    label: "Southern California",
    category: "GOVERNMENT",
    title: "Southern California transforms regional planning",
    description:
      "The Southern California Association of Governments is using Esri technology to revolutionize how the region plans and manages growth, improving sustainability and infrastructure.",
    link: "/case-studies/southern-california",
    images: ["/img1.jpg", "/img2.jpg", "/img3.jpg"], // placeholder paths
  },
  {
    id: "the-joint",
    label: "The Joint",
    category: "BUSINESS",
    title: "The Joint drives smarter retail expansion",
    description:
      "By leveraging Esri's mapping capabilities, The Joint Chiropractic has optimized location selection, ensuring better access for their customers nationwide.",
    link: "/case-studies/the-joint",
    images: ["/img4.jpg", "/img5.jpg", "/img6.jpg"],
  },
  {
    id: "wrexham-stadium",
    label: "Wrexham stadium",
    category: "SPORTS",
    title: "Wrexham stadium enhances fan experience",
    description:
      "Using Esri technology, Wrexham stadium has improved crowd management and engagement through real-time spatial analytics.",
    link: "/case-studies/wrexham-stadium",
    images: ["/img7.jpg", "/img8.jpg", "/img9.jpg"],
  },
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Who uses Esri technology?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Organizations around the world rely on Esri’s powerful mapping and
          spatial analytics to transform their operations and decision-making.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 border-b border-gray-200 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-colors ${
                activeTab.id === tab.id
                  ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-500"
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
        {/* Play Button Overlay */}
        <button className="absolute inset-0 flex items-center justify-center">
          <span className="bg-black bg-opacity-50 text-white rounded-full p-4">
            ▶
          </span>
        </button>
      </div>

      {/* Right Column - Text Content */}
      <div>
        <span className="text-xs uppercase text-gray-500">{tab.category}</span>
        <h3 className="text-2xl font-bold mt-2 mb-4">{tab.title}</h3>
        <p className="text-gray-600 mb-6">{tab.description}</p>
        <Link
  href={tab.link}
  className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
>
  Read the full case study →
</Link>
      </div>
    </div>
  );
}
