"use client";
export const Footer = () => {
      return (
            <footer className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#701a75] text-gray-200">
                  <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-14">
                        {/* Brand */}
                        <div>
                              <div className="flex items-center gap-3 cursor-pointer">
                                    <span className="text-2xl font-extrabold tracking-wide">
                                          Hath
                                          <span className="text-pink-400">
                                                way
                                          </span>
                                    </span>
                              </div>
                              <p className="font-semibold leading-relaxed text-gray-300">
                                    Empowering Indore with seamless connectivity
                                    and next-generation digital services. We
                                    help homes and enterprises stay online with
                                    stable, secure, and high-performance
                                    internet solutions.
                              </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                              <h4 className="text-white text-xl font-semibold mb-6 tracking-wide relative after:block after:w-12 after:h-[3px] after:bg-pink-400 after:mt-3">
                                    Quick Links
                              </h4>
                              <ul className="space-y-4 font-semibold">
                                    {[
                                          "Explore Plans",
                                          "Customer Assistance",
                                          "Get in Touch",
                                          "Data Protection",
                                          "Usage Agreement",
                                    ].map((item, i) => (
                                          <li
                                                key={i}
                                                className="hover:text-pink-400 transition-all duration-200 cursor-pointer"
                                          >
                                                {item}
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Broadband */}
                        <div>
                              <h4 className="text-white text-xl font-semibold mb-6 tracking-wide relative after:block after:w-12 after:h-[3px] after:bg-pink-400 after:mt-3">
                                    Broadband
                              </h4>
                              <ul className="space-y-4 font-semibold">
                                    <li className="hover:text-pink-400 transition cursor-pointer">
                                          High-Speed Internet
                                    </li>
                                    <li className="hover:text-pink-400 transition cursor-pointer">
                                          Home Installation
                                    </li>
                                    <li className="hover:text-pink-400 transition cursor-pointer">
                                          Enterprise Connectivity
                                    </li>
                                    <li className="hover:text-pink-400 transition cursor-pointer">
                                          Bandwidth Enhancement
                                    </li>
                              </ul>
                        </div>

                        {/* Contact */}
                        <div>
                              <h4 className="text-white text-xl font-semibold mb-6 tracking-wide relative after:block after:w-12 after:h-[3px] after:bg-pink-400 after:mt-3">
                                    Contact Us
                              </h4>
                              <ul className="space-y-5 font-semibold text-gray-300">
                                    <li>
                                          📍 Central Business District, Indore
                                    </li>
                                    <li>📍 Corporate Office, Vijay Nagar</li>
                                    <li className="hover:text-white transition">
                                          📞 +91 90000 12345
                                    </li>
                                    <li className="hover:text-white transition">
                                          ✉️ connect@hathwayindore.in
                                    </li>
                              </ul>
                        </div>
                  </div>

                  {/* Bottom */}
                  <div className="border-t border-white/15 py-7 text-center font-semibold text-gray-300">
                        © 2026 Hathway Networks Pvt. Ltd. All rights reserved.
                  </div>
            </footer>
      );
};
