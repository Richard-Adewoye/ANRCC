"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Globe, User, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop hover state
  const closeTimeoutRef = useRef<number | null>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about", },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/#projects" },
  ];

  const serviceLinks = [
    { label: "Natural Resource Management", href: "/services/NaturalResourceManagement" },
    { label: "Climate Change Consulting", href: "/services/ClimateChangeConsulting" },
    { label: "Environmental Impact Assessments", href: "/services/EnvironmentalImapctAssessments" },
    { label: "Sustainable Agriculture and Land Use", href: "/services/SustainableAgricultureAndLandUse" },
    { label: "Capacity Building and Training", href: "/services/CapacityBuildingAndTraining" },
    { label: "Policy and Advocacy", href: "/services/PolicyAndAdvocacy" },
  ];

  // open immediately and clear any close timer
  function openServices() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  }

  // close after a small delay so cursor slips don't close it
  function closeServicesWithDelay() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
      closeTimeoutRef.current = null;
    }, 250);
  }

  // cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // ensure mobile services closed when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) setMobileServicesOpen(false);
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 font-[Montserrat]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-2.png"
                alt="Afrique Logo"
                width={70}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Center: Nav links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, idx) =>
              link.label === "Services" ? (
                // wrap trigger + menu so hover on either keeps it open
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesWithDelay}
                >
                  {/* Trigger */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className="text-green-300 hover:text-green-200 font-medium transition-colors relative inline-flex items-center gap-2 py-1 px-1"
                    // keyboard toggle for accessibility (Enter/Space)
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setServicesOpen((s) => !s);
                      }
                    }}
                  >
                    <span className="relative">
                      <span>{link.label}</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown size={14} className="text-green-300" />
                  </button>

                  {/* Dropdown menu - visible while servicesOpen is true */}
                  <div
                    className={`absolute left-0 mt-3 p-6 w-[500px] grid grid-cols-3 gap-4 bg-black/90 backdrop-blur-md border border-white/20 rounded-xl shadow-lg z-50 transform transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                    onMouseEnter={openServices}
                    onMouseLeave={closeServicesWithDelay}
                  >
                    {serviceLinks.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        className="text-green-300 hover:text-green-100 transition-colors relative px-2 py-1 rounded"
                      >
                        {/* underline effect */}
                        <span className="block">{s.label}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-green-300 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-green-300 hover:text-green-200 font-medium transition-colors relative group"
                >
                  <span className="relative inline-block py-1 px-1">
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              )
            )}
          </div>

          {/* Right: Icons & mobile hamburger */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen((s) => !s)}
                aria-label="Toggle menu"
                className="text-green-300 hover:text-green-200 transition-colors p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="backdrop-blur-md bg-white/10 border-t border-white/20 px-4 py-3 space-y-1">
          {navLinks.map((link, idx) =>
            link.label === "Services" ? (
              <div key={idx} className="space-y-1">
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="flex w-full justify-between items-center px-3 py-3 text-green-300 hover:bg-white/20 hover:text-green-200 transition-colors rounded"
                  aria-expanded={mobileServicesOpen}
                >
                  <span>{link.label}</span>
                  <ChevronDownIcon rotated={mobileServicesOpen} />
                </button>

                <div
                  className={`grid grid-cols-2 gap-2 px-2 pt-1 transition-max-height duration-300 overflow-hidden ${
                    mobileServicesOpen ? "max-h-[500px] pb-3" : "max-h-0"
                  }`}
                >
                  {serviceLinks.map((s, i) => (
                    <Link
                      key={i}
                      href={s.href}
                      className="block px-2 py-2 text-green-300 hover:text-green-200 rounded hover:bg-white/10 text-sm"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className="block px-3 py-3 text-green-300 hover:bg-white/20 hover:text-green-200 transition-colors rounded"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

// small helper component for chevron rotation in mobile
function ChevronDownIcon({ rotated }: { rotated: boolean }) {
  return (
    <svg
      className={`w-4 h-4 text-green-300 transform transition-transform duration-200 ${
        rotated ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.243a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}
