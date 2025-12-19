"use client";
// import globalImg from "../../../public/global.jpg"
// import Image from "next/image";

export const TopReasons = () => {
    const reasons = [
        {
            title: "Super Fast Internet",
            description:
                "Enjoy high-speed broadband with unlimited data so you can stream, work, and game without interruptions.",
        },
        {
            title: "Affordable Plans",
            description:
                "Flexible pricing options for homes, offices, and enterprises to suit your budget and requirements.",
        },
        {
            title: "24/7 Customer Support",
            description:
                "Our support team is always ready to help you with technical issues, billing, and service queries.",
        },
        {
            title: "Easy Installation",
            description:
                "Get your broadband installed quickly and hassle-free by our professional technicians.",
        },
        {
            title: "Reliable & Stable Connection",
            description:
                "Experience consistent and reliable internet connectivity with minimal downtime.",
        },
    ];

    return (
        <>
             {/* <div><Image src={globalImg} /></div> */}
   
        <section className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#701a75] py-24">
       
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Top Reasons to Love Our Service
                    </h2>
                    <p className="text-lg text-gray-300">
                        Discover why our customers choose us for their internet needs
                    </p>
                </div>

                {/* Reason List */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl shadow-lg p-6 transition hover:bg-white/15"
                        >
                            <h3 className="text-xl font-semibold text-gray-100 mb-2 drop-shadow-md">
                                {reason.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
             </>
    );
};
