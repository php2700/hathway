"use client"; 

import { useState } from "react";

export const FAQ = () => {
      const [openIndex, setOpenIndex] = useState(null);

      const faqs = [
            {
                  question: "What internet plans are available in Indore?",
                  answer: "We provide multiple high-speed broadband plans for homes, offices, and enterprises with flexible pricing and unlimited data options.",
            },
            {
                  question: "How can I apply for a new broadband connection?",
                  answer: "You can apply online or contact our support team. Installation is usually completed within 24–48 hours.",
            },
            {
                  question: "Do you offer 24/7 customer support?",
                  answer: "Yes, our customer support team is available to assist with technical issues, billing queries, and service requests.",
            },
            {
                  question: "Can I change my broadband plan later?",
                  answer: "Yes, you can upgrade or downgrade your plan anytime by contacting our support team.",
            },
            {
                  question: "Are there any installation charges?",
                  answer: "Installation charges depend on location and selected plan. Our team will inform you before installation.",
            },
      ];

      return (
            <section className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#701a75] py-24">
                  <div className="container mx-auto px-6 max-w-7xl">
                        {/* Heading */}
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-extrabold text-white mb-4">
                                    Frequently Asked Questions
                              </h2>
                              <p className="text-lg text-gray-300">
                                    Clear answers to common questions about our
                                    services
                              </p>
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-6">
                              {faqs.map((faq, index) => (
                                    <div
                                          key={index}
                                          className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl shadow-lg transition hover:bg-white/15"
                                    >
                                          <button
                                                onClick={() =>
                                                      setOpenIndex(
                                                            openIndex === index
                                                                  ? null
                                                                  : index
                                                      )
                                                }
                                                className="w-full flex justify-between items-center px-6 py-5 text-left"
                                          >
                                                <span className="text-lg font-semibold text-gray-100 drop-shadow-md">
                                                      {faq.question}
                                                </span>

                                                <span
                                                      className={`text-2xl font-bold transition-transform duration-300 ${
                                                            openIndex === index
                                                                  ? "rotate-45"
                                                                  : ""
                                                      }`}
                                                >
                                                      +
                                                </span>
                                          </button>

                                          {openIndex === index && (
                                                <div className="px-6 pb-6 text-gray-300 leading-relaxed text-base">
                                                      {faq.answer}
                                                </div>
                                          )}
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};
