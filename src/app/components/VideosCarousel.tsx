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

                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
                animationFrame = requestAnimationFrame(step);
            };
            animationFrame = requestAnimationFrame(step);
        };

        const timeout = setTimeout(start, 100);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    const mediaItems = [
        { type: "image", src: "/images/carousel1.PNG" },
        { type: "video", src: "/videos/carousel2.mov" },
        { type: "image", src: "/images/carousel3.PNG" },
        { type: "video", src: "/videos/carousel4.mov" },
        { type: "image", src: "/images/carousel5.PNG" },
        { type: "video", src: "/videos/carousel6.mp4" },
    ];

    const loopMedia = [...mediaItems, ...mediaItems];

    return (
        <section className="py-16 px-6 bg-[#8e735b]">
            <div className="max-w-7xl mx-auto overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-hidden"
                >
                    {loopMedia.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] md:min-w-[400px]"
                        >
                            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl bg-black/10">
                                {item.type === "video" ? (
                                    <video
                                        src={item.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={`Carousel item ${index}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}