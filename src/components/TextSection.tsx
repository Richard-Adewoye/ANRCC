export default function TextSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-8 font-montserrat text-green-900">
          Empower. Enhance.{" "}
          <span className="text-green-700">
            Strengthen.
          </span>
        </h1>

        {/* First Paragraph */}
        <p className="text-green-800 text-lg mb-6">
          ANRCCC is dedicated to providing innovative and practical solutions that enable stakeholders across Africa to sustainably manage their natural resources while effectively mitigating the impacts of climate change.
        </p>

        {/* Second Paragraph */}
        <p className="text-green-700 text-lg md:text-right">
        The firm strives to strengthen the resilience of communities and economies, fostering long-term sustainability and adaptive capacity across the continent.
        </p>
      </div>
    </section>
  );
}
