import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function InfoCard({ title, description, image, href }: InfoCardProps) {
  return (
    <Link
      href={href}
      className="relative block rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transform hover:scale-105 transition duration-300"
    >
      {/* Background Image */}
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </Link>
  );
}
