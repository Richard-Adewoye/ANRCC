import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Globe, User, ChevronDown } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  dropdown?: string[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { label: "Products", href: "/products", dropdown: ["Product 1", "Product 2", "Product 3"] },
    { label: "Industries", href: "/industries", dropdown: ["Industry 1", "Industry 2"] },
    { label: "Support & Services", href: "/support", dropdown: ["Support 1", "Service 1"] },
    { label: "Stories", href: "/stories", dropdown: ["Story 1", "Story 2"] },
    { label: "About", href: "/about", dropdown: ["About Us", "Careers"] },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/esri-logo.svg" // Place your logo in public/
                alt="Esri Logo"
                width={80}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Center: Nav links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center space-x-1 text-gray-800 hover:text-blue-600"
                >
                  <span>{link.label}</span>
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && dropdownOpen === link.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-40">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-blue-600">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-blue-600">
              <Globe size={20} />
            </button>
            <button className="p-2 hover:text-blue-600">
              <User size={20} />
            </button>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map((link, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full px-4 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === link.label ? null : link.label)
                }
              >
                <span>{link.label}</span>
                {link.dropdown && <ChevronDown size={16} />}
              </button>

              {/* Mobile Dropdown */}
              {link.dropdown && dropdownOpen === link.label && (
                <div className="pl-6 pb-2">
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="block py-2 text-gray-700 hover:text-blue-600"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
