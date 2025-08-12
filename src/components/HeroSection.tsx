import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column - Text */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 leading-tight mb-6">
            Satellite Imaging and Daily Earth Insights to Take Action
          </h1>
          <p className="text-gray-300 mb-8">
            Access cutting-edge satellite imagery and real-time earth insights 
            to make informed decisions faster. Monitor, analyze, and act 
            with confidence using the latest in geospatial technology.
          </p>
          
          <Link
            href="/read-more"
            className="inline-flex items-center gap-3 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Read More
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white">
              →
            </span>
          </Link>
        </div>

        {/* Right Column - Video */}
        <div className="w-full h-80 md:h-[450px] relative rounded-lg overflow-hidden">
          <video
            src="/videos/vid_2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
