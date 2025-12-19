"use client"; 
import Image from "next/image";
import Link from "next/link";
import globalImg from "../../../public/global.jpg";
import { useState } from "react";

export const Header= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Header */}
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
              <Link key={i} href={item.href}>
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

      {/* Banner Section */}
      <section className="relative mt-20 h-[600px]">
        {/* Background Image */}
        <Image
          src={globalImg}
          alt="Global Service Banner"
          fill
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Form Card */}
        <div className="absolute  inset-0 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg z-10">
            <h2 id='form' className="text-2xl font-bold text-gray-800 mb-6 text-center">
              New Connection Request
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                rows={3}
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
