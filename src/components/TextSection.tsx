export default function TextSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-8">
          Don&apos;t just capture change.{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Act on it.
          </span>
        </h1>

        {/* First Paragraph */}
        <p className="text-gray-300 text-lg mb-6">
          Planet provides daily satellite imagery and insights, empowering
          organizations to monitor the world, detect changes, and respond
          effectively to global events as they happen.
        </p>

        {/* Second Paragraph */}
        <p className="text-gray-300 text-lg md:text-right">
          Our high-resolution data allows for detailed analysis of Earth’s
          surface, enabling smarter decision-making across agriculture, climate
          science, security, and more.
        </p>
      </div>
    </section>
  );
}
