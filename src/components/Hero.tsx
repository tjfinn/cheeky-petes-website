"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background video */}
      <div className="absolute inset-0 animate-fade-in">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Logo - Left Side, top aligned with menu */}
      <Link href="/" className="absolute left-[2px] md:left-[2px] lg:left-[18px] top-[-10px] md:top-[-42px] z-20 transition-transform duration-300 hover:scale-105 animate-slide-down">
        <div className="w-32 h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 relative">
          <Image
            src="/logo.svg"
            alt="Cheeky Pete's"
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* CTA Buttons - Bottom Left */}
      <div className="absolute left-[4px] md:left-3 lg:left-7 bottom-[50px] md:bottom-[38px] z-20 flex flex-col gap-2">
        <a href="#products" className="inline-block transition-transform duration-200 hover:scale-105 animate-slide-up animation-delay-300">
          <Image
            src="/lockups/Frame 33040.svg"
            alt="Our Cereals"
            width={183}
            height={63}
            className="w-28 md:w-36 lg:w-40 h-auto"
          />
        </a>
        <a href="#about" className="inline-block transition-transform duration-200 hover:scale-105 animate-slide-up animation-delay-500">
          <Image
            src="/lockups/Frame 33041.svg"
            alt="Why's It Different"
            width={245}
            height={75}
            className="w-36 md:w-44 lg:w-48 h-auto"
          />
        </a>
      </div>

      {/* Green bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-[#A3CF43] py-3 md:py-0">
          <Image
            src="/lockups/greenbar.svg"
            alt="The Smooth Start for Little Legends"
            width={1920}
            height={100}
            className="hidden md:block w-full h-auto"
          />
          <p className="md:hidden font-haggler text-white text-center text-lg font-bold uppercase tracking-wide px-4">
            The Smooth Start for Little Legends
          </p>
        </div>
      </div>
    </section>
  );
}
