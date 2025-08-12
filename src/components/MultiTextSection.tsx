// app/components/MultiSectionLayout.tsx
export default function MultiSectionLayout() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto space-y-16">
        {/* Section 1: Top Text */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            See.{" "}
            <span className="text-cyan-400">
              Decide.
            </span>{" "}
            Act.
          </h1>
          <p className="text-gray-300 mb-4">
            Planet’s advanced satellite imagery and analytics help organizations
            monitor changes to Earth in real-time.
          </p>
          <p className="text-gray-300">
            Gain the insight you need to make confident decisions quickly and
            act with purpose.
          </p>
        </div>

        {/* Section 2: Four Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <InfoCard
            title="LOOK BROADER"
            description="Gain a complete, global perspective with continuous monitoring from space."
          />
          <InfoCard
            title="SEE CLEARLY"
            description="Get detailed imagery to identify changes and assess situations quickly."
          />
          <InfoCard
            title="DECIDE FASTER"
            description="Use timely insights to respond to events and opportunities without delay."
          />
          <InfoCard
            title="ACT SMARTER"
            description="Leverage high-resolution data to make informed, strategic moves."
          />
        </div>

        {/* Section 3: Bottom Call to Action */}
        <div className="bg-gray-800 rounded-md p-8 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            See. Decide. Act.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The Planet Insights Platform enables you to understand change as it
            happens, so you can take action where and when it matters most.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-md transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-800 rounded-md p-6 text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
