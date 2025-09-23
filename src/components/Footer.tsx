// app/components/Footer.tsx
import Link from "next/link";
import { FaTwitter as FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-green-200 py-6">
      <div className="max-w-screen-xl mx-auto px-6 text-center space-y-2">
        <p className="text-sm">
          <strong>Headquarters:</strong> 26 Old Lamingo Road, Nabor, Jos, Plateau State.
        </p>
        <p className="text-sm">
          <strong>Phone:</strong> +234 80 69420 985
        </p>
        <p className="text-sm">
          <strong>Email:</strong> <Link href="mailto:info@anrccc.com" className="hover:text-green-400">info@anrccc.com</Link>
        </p>
        <p className="text-sm">
          <strong>Website:</strong> <Link href="https://www.anrccc.com" className="hover:text-green-400">www.anrccc.com</Link>
        </p>

        <p className="text-xs mt-2">
          © {new Date().getFullYear()} ANRCCC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center bg-green-800 text-green-200 rounded hover:bg-green-700 transition"
    >
      {icon}
    </Link>
  );
}
