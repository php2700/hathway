"use client";
import React, { useRef } from "react";

const plans = [
    {
        name: "WFH Plan 🏠",
        speed: "40 Mbps",
        monthly: "₹500/-",
        quarterly: "₹1501/-",
        sixMonthly: "₹3002/-",
        benefits: [
            { text: "Pay for 11 months and get 12th month free 🎁", color: "bg-purple-100" },
            { text: "Available in 3, 6, and 12 month options ⏱️", color: "bg-blue-100" },
            { text: "Zero Installation Charges, No Security Deposit 🛠️", color: "bg-pink-100" },
        ],
    },
    {
        name: "Family Plan 👨‍👩‍👧",
        speed: "75 Mbps",
        monthly: "₹649/-",
        quarterly: "₹1947/-",
        sixMonthly: "5GHz Dual Band Router Free to Use* 📶",
        benefits: [
            { text: "OTT combo plans available 🎬", color: "bg-blue-100" },
            { text: "Pay for 11 months and get 12th month free 🎁", color: "bg-pink-100" },
            { text: "Available in 3, 6, and 12 month options ⏱️", color: "bg-green-100" },
            { text: "Zero Installation Charges, No Security Deposit 🛠️", color: "bg-yellow-100" },
        ],
    },
    {
        name: "Premium Plan ⭐",
        speed: "150 Mbps",
        monthly: "₹708/-",
        quarterly: "₹2124/-",
        sixMonthly: "5GHz Dual Band Router Free to Use* 📶",
        benefits: [
            { text: "OTT combo plans available 🎬", color: "bg-blue-100" },
            { text: "Pay for 11 months and get 12th month free 🎁", color: "bg-pink-100" },
            { text: "Available in 3, 6, and 12 month options ⏱️", color: "bg-green-100" },
            { text: "Zero Installation Charges, No Security Deposit 🛠️", color: "bg-yellow-100" },
        ],
    },
    {
        name: "Ultra Plan 🚀",
        speed: "250 Mbps",
        monthly: "₹999/-",
        quarterly: "₹2997/-",
        sixMonthly: "5GHz Dual Band Router + Premium OTT Pack 📶",
        benefits: [
            { text: "Unlimited Data 💾", color: "bg-purple-100" },
            { text: "Free Router Upgrade 🔌", color: "bg-blue-100" },
            { text: "Priority Customer Support ☎️", color: "bg-pink-100" },
        ],
    },
    {
        name: "Gamer Plan 🎮",
        speed: "350 Mbps",
        monthly: "₹1299/-",
        quarterly: "₹3897/-",
        sixMonthly: "5GHz Dual Band Router + Game Booster Pack 🕹️",
        benefits: [
            { text: "Low latency for gaming ⚡", color: "bg-green-100" },
            { text: "Unlimited Data 💾", color: "bg-yellow-100" },
            { text: "Free Router Upgrade 🔌", color: "bg-blue-100" },
            { text: "Priority Customer Support ☎️", color: "bg-pink-100" },
        ],
    },
];

 

export const ServicePlans = () => {
    
    return (
        <section className="relative py-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
            {/* Optional decorative shapes */}


            <div className="container mx-auto px-6  relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                    Internet Service Plans in Indore
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Plan Header */}
                            <div className="p-6 text-center relative z-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <p className="text-lg mt-2 flex items-center justify-center gap-2 text-white font-medium">
                                    ⚡ {plan.speed}
                                </p>
                            </div>

                            {/* Pricing */}
                            <div className="p-6 space-y-3">
                                <div className="bg-indigo-600 text-white px-4 py-2 rounded text-lg font-semibold text-center">
                                    Monthly Plan: {plan.monthly}
                                </div>
                                <div className="bg-indigo-600 text-white px-4 py-2 rounded text-lg font-semibold text-center">
                                    Quarterly Plan: {plan.quarterly}
                                </div>

                                {plan.sixMonthly && (
                                    <div className="bg-purple-100 text-gray-800 px-4 py-2 rounded text-center font-medium">
                                        {plan.sixMonthly}
                                    </div>
                                )}

                                {/* Benefits */}
                                <ul className="mt-4 space-y-2">
                                    {plan.benefits.map((benefit, i) => (
                                        <li
                                            key={i}
                                            className={`inline-block ${benefit.color} px-3 py-1 rounded-full text-gray-800 text-sm shadow-sm`}
                                        >
                                            {benefit.text}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button  className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition transform">
                                    Get it Now 👉
                                </button>
                            </div>

                            {/* Decorative Gradient Bar */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};
