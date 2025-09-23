// app/components/MultiSectionLayout.tsx
export default function MultiSectionLayout() {
  return (
    <section className="text-white py-16 px-6" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-screen-xl mx-auto space-y-16">
        {/* Section 1: Top Text */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-green-200">
            Clients{" "}
            <span className="text-green-400">
              And
            </span>{" "}
            Partners
          </h1>
          <p className="text-green-300 mb-4">
            We serve a diverse range of clients
          </p>
        </div>

        {/* Section 2: Four Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <InfoCard
            title="Government Agencies"
            description="National and local governments seeking to develop and implement sustainable resource management and climate change strategies"
          />
          <InfoCard
            title="NGOs"
            description="Partnering with Non-Governmental Organizations(NGOs) to design and execute conservation and climate resilience projects"
          />
          <InfoCard
            title="Private Sector"
            description="Collaborating with businesses in various sectors to enhance their sustainability efforts, including environmental impact mitigation, carbon management, and sustainable sourcing practices"
          />
          <InfoCard
            title="International Organizations"
            description="Working with global organizations like the United Nations, World Bank, and African Development Bank to advance regional and international environmental initiatives"
          />
        </div>

        {/* Section 3: Bottom Call to Action with Glassmorphic Effect */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-green-200">
              Commitment to Sustainability
            </h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              Sustainability is at the heart of everything ANRCCC does.
              The firm is dedicated to ensuring that its projects contribute to the long-term health of ecosystems and communities across Africa.
              ANRCCC is also committed to reducing its own environmental footprint and operates in line with best practices for sustainable business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#1D1D1D] rounded-md p-6 text-center">
      <h3 className="text-lg font-semibold mb-2 text-green-200">{title}</h3>
      <p className="text-green-300 text-sm">{description}</p>
    </div>
  );
}
