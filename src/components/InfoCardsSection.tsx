import InfoCard from "./InfoCard";

export default function InfoCardsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-3xl mx-auto">
        Esri builds ArcGIS, the world&apos;s leading GIS mapping software.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <InfoCard
          title="ArcGIS overview"
          description="Explore how ArcGIS empowers organizations with geospatial capabilities."
          image="/images/arcgis-overview.jpg" // replace with actual path
          href="/arcgis-overview"
        />
        <InfoCard
          title="What is GIS?"
          description="Learn the fundamentals of Geographic Information Systems."
          image="/images/what-is-gis.jpg" // replace with actual path
          href="/what-is-gis"
        />
        <InfoCard
          title="About Esri"
          description="Discover Esri's mission, values, and global impact."
          image="/images/about-esri.jpg" // replace with actual path
          href="/about-esri"
        />
      </div>
    </section>
  );
}
