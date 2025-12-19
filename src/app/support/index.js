// components/support/SupportPage.tsx
"use client";

import { useState } from "react";

export const SupportPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        issue: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Support form submitted:", formData);
        alert("Support request submitted! Check console.");
        // Add API call here if needed
    };

    return (
        <section className="relative py-24 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#701a75] min-h-screen">
            <div className="container mx-auto px-6 max-w-2xl">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Support
                </h2>

                <p className="text-center text-white mb-8">
                    Need help? Fill out the form below and our support team will contact you.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-2xl p-8 space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />

                    <input
                        type="text"
                        name="issue"
                        placeholder="Issue/Subject"
                        value={formData.issue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Describe your issue"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition transform"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </section>
    );
};
