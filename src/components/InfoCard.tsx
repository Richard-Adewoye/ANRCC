import Link from "next/link"
import Image from "next/image"

interface InfoCardProps {
  title: string
  description: string
  image: string
  href: string
}

export default function InfoCard({
  title,
  description,
  image,
  href,
}: InfoCardProps) {
  return (
    <Link
      href={href}
      className="relative block overflow-hidden rounded-lg border border-gray-200 shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      {/* Image (acts like background) */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 p-4 text-white z-10">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </Link>
  )
}
