'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function MeetPete() {
  return (
    <section className="relative w-full">
      <img
        src="/images/Frame 33042.png"
        alt="Pete relaxing on grass looking at stars"
        className="w-full h-auto"
      />
      {/* Overlay text - desktop */}
      <div className="hidden md:block absolute top-12 lg:top-16 left-12 lg:left-16">
        <AnimateOnScroll animation="slide-left">
          <Image
            src="/lockups/meet-cheeky-pete.svg"
            alt="Meet Cheeky Pete"
            width={400}
            height={150}
            className="mb-6"
          />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="font-semibold text-cream text-xl leading-tight max-w-md">
            Cheeky Pete&apos;s was made to give kids the breakfast they deserve and parents the mornings they want. Instead of sugar spikes and crashes, we focus on steady energy that lasts all morning.
          </p>
        </AnimateOnScroll>
      </div>
      {/* Text below image - mobile */}
      <div className="md:hidden bg-[#F5A623] px-6 py-8">
        <AnimateOnScroll animation="slide-left">
          <Image
            src="/lockups/meet-cheeky-pete.svg"
            alt="Meet Cheeky Pete"
            width={400}
            height={150}
            className="mb-4 w-full max-w-xs"
          />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="font-semibold text-cream text-base leading-tight">
            Cheeky Pete&apos;s was made to give kids the breakfast they deserve and parents the mornings they want. Instead of sugar spikes and crashes, we focus on steady energy that lasts all morning.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
