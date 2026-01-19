"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/__Frame-720.png"
          alt="Cheeky Pete's Cereal Collection"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Logo - Left Side, top aligned with menu */}
      <Link href="/" className="absolute left-[-14px] md:left-[2px] lg:left-[18px] top-[-50px] md:top-[-42px] z-20 transition-transform duration-300 hover:scale-105">
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
      <div className="absolute left-[-4px] md:left-3 lg:left-7 bottom-[22px] md:bottom-[38px] z-20 flex flex-col gap-2">
        <Link href="/products" className="inline-block transition-transform duration-200 hover:scale-105">
          <Image
            src="/lockups/Frame 33040.svg"
            alt="Our Cereals"
            width={183}
            height={63}
            className="w-28 md:w-36 lg:w-40 h-auto"
          />
        </Link>
        <Link href="/about" className="inline-block transition-transform duration-200 hover:scale-105">
          <Image
            src="/lockups/Frame 33041.svg"
            alt="Why's It Different"
            width={245}
            height={75}
            className="w-36 md:w-44 lg:w-48 h-auto"
          />
        </Link>
      </div>

      {/* Green bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Image
          src="/lockups/greenbar.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
