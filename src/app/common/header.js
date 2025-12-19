"use client"; 

import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#701a75] shadow-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-2xl font-extrabold tracking-wide">
            Hath<span className="text-pink-400">way</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-lg font-semibold">
          {[
            { label: "Home", href: "/" },
            { label: "Plans", href: "/plans" },
            { label: "Services", href: "/services" },
            { label: "Support", href: "/support" },
            { label: "Contact", href: "/contact" },
          ].map((item, i) => (
            <Link key={i} href={item.href} passHref>
              <span className="relative cursor-pointer hover:text-pink-400 transition 
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-pink-400 
                hover:after:w-full after:transition-all">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Call Button */}
        <a
          href="tel:+918109958000"
          className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full font-bold shadow-lg transition-all"
        >
          📞 Call Now
        </a>
      </div>
    </header>
  );
};
