'use client';

import Image from 'next/image';

export default function MeetPete() {
  return (
    <section className="relative w-full">
      <img
        src="/images/Frame 33042.png"
        alt="Pete relaxing on grass looking at stars"
        className="w-full h-auto"
      />
      {/* Overlay text */}
      <div className="absolute top-8 md:top-12 lg:top-16 left-6 md:left-12 lg:left-16">
        <Image
          src="/lockups/meet-cheeky-pete.svg"
          alt="Meet Cheeky Pete"
          width={400}
          height={150}
          className="mb-4 md:mb-6"
        />
        <p className="font-semibold text-cream text-lg md:text-xl leading-tight max-w-md">
          Cheeky Pete's was made to give kids the breakfast they deserve and parents the mornings they want. Instead of sugar spikes and crashes, we focus on steady energy that lasts all morning.
        </p>
      </div>
    </section>
  );
}
