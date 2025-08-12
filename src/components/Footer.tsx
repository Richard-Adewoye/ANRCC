// app/components/Footer.tsx
import Link from "next/link";
import { FaTwitter as FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <FooterColumn
          title="GET STARTED"
          links={[
            { label: "Contact Us", href: "/contact" },
            { label: "Get a Quote", href: "/quote" },
            { label: "Request a Demo", href: "/demo" },
          ]}
        />
        <FooterColumn
          title="MAXAR INTELLIGENCE"
          links={[
            { label: "Overview", href: "/intelligence" },
            { label: "Products", href: "/products" },
            { label: "Solutions", href: "/solutions" },
          ]}
        />
        <FooterColumn
          title="MAXAR SPACE SYSTEMS"
          links={[
            { label: "Overview", href: "/space" },
            { label: "Satellites", href: "/space/satellites" },
            { label: "Robotics", href: "/space/robotics" },
          ]}
        />
        <FooterColumn
          title="LEGAL"
          links={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Use", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
          ]}
        />
        <FooterColumn
          title="EXPLORE"
          links={[
            { label: "Careers", href: "/careers" },
            { label: "News", href: "/news" },
            { label: "Events", href: "/events" },
          ]}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-cyan-500 my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center space-y-4 pb-8">
        {/* Social Icons */}
        <div className="flex space-x-3">
          <SocialIcon href="https://twitter.com" icon={<FaXTwitter />} />
          <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} />
          <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} />
          <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
          <SocialIcon href="https://youtube.com" icon={<FaYoutube />} />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Maxar Technologies.{" "}
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:text-white">
            Website Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="uppercase font-bold text-sm mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded hover:bg-cyan-500 transition"
    >
      {icon}
    </Link>
  );
}
