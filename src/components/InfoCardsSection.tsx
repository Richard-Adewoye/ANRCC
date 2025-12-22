import InfoCard from "./InfoCard";

export default function InfoCardsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 max-w-3xl mx-auto font-montserrat text-green-900">
        We are committed to being Africa’s leading consultancy in sustainable natural resource management and climate change solutions, driving a resilient and equitable future for the continent.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <InfoCard
          title="Natural Resource Management"
          description="Advancing forestry, water, and biodiversity solutions for sustainable development outcomes."
          image="/images/img_12.jpg"
          href="services/NaturalResourceManagement"
        />
        <InfoCard
          title="Climate Change Consulting"
          description="Guiding clients in emissions reduction, carbon strategies, and climate resilience."
          image="/images/img_13.jpg"
          href="services/ClimateChangeConsulting"
        />
        <InfoCard
          title="Sustainable Agriculture and Land Use"
          description="Advancing sustainable land use through smart agriculture, ecosystem conservation, and equity."
          image="/images/img_14.jpg"
          href="services/SustainableAgricultureAndLandUse"
        />
      </div>
    </section>
  );
}
