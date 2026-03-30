"use client";

import React, { useEffect } from "react";
import { ScrollReveal } from "./scroll-reveal";
import Cal, { getCalApi } from "@calcom/embed-react";

const CAL_USERNAME = "dudepix";
const CAL_SLUG = "30-min-to-understant-business-problem";

export const BookCall = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: {
                        brandColor: "#006bff", // Forces the dots/circles to your blue
                    },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section id="book-call" className="py-24 relative overflow-hidden bg-black w-full">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <ScrollReveal width="100%">
                    <div className="w-full max-w-[1050px] mx-auto rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950/30 backdrop-blur-sm shadow-2xl">

                        {/* Header Section - Reduced Padding Bottom to remove gap */}
                        <div className="pt-16 pb-2 px-8 text-center">
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                                Let’s Level Up <br />
                                <span className="italic text-blue-500">Your Business!</span>
                            </h2>

                            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                                Work with DudePix to engineer your digital empire. Select a
                                date below to speak directly with our strategy team.
                            </p>
                        </div>

                        {/* CAL.COM WIDGET - Negative Margin Top to pull it closer */}
                        <div className="w-full -mt-8">
                            <Cal
                                calLink={`${CAL_USERNAME}/${CAL_SLUG}`}
                                style={{ width: "100%", height: "100%", minHeight: "750px" }}
                                config={{
                                    layout: "month_view",
                                    theme: "dark",
                                }}
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};