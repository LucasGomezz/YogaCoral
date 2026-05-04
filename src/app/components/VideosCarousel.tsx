"use client";

import { useEffect, useRef } from "react";

export default function VideosCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationFrame: number;

        const speed = 0.5;

        const start = () => {
            const step = () => {
                if (!container) return;

                container.scrollLeft += speed;

                // loop infinito real
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }

                animationFrame = requestAnimationFrame(step);
            };

            animationFrame = requestAnimationFrame(step);
        };

        // pequeño delay para asegurar render
        const timeout = setTimeout(start, 100);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    const videos = [
        "/videos/carousel1.mov",
        "/videos/carousel2.mov",
        "/videos/carousel3.mov",
        "/videos/carousel4.mp4",
        "/videos/carousel5.mov",
    ];

    const loopVideos = [...videos, ...videos];

    return (
        <section className="py-16 px-6 bg-[#8e735b]">
            <div className="max-w-7xl mx-auto overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-hidden"
                >
                    {loopVideos.map((video, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] md:min-w-[400px]"
                        >
                            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
                                <video
                                    src={video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}