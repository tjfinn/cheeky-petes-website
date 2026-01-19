'use client';

import Image from 'next/image';

const features = [
  { id: 1, svg: '/lockups/Frame 33050.svg' },
  { id: 2, svg: '/lockups/Frame 33051.svg' },
  { id: 3, svg: '/lockups/Frame 33052.svg' },
  { id: 4, svg: '/lockups/Frame 33053.svg' },
  { id: 5, svg: '/lockups/Frame 33054.svg' },
  { id: 6, svg: '/lockups/Frame 33055.svg' },
];

export default function Features() {
  // Duplicate for seamless loop
  const repeatedFeatures = [...features, ...features];

  return (
    <section className="bg-cream pt-6 md:pt-8 pb-16 md:pb-24 overflow-hidden">
      <div className="flex animate-marquee-slow">
        {repeatedFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-[#FF6F98] px-12 py-8 md:px-16 md:py-10 flex items-center justify-center flex-shrink-0 mx-2"
          >
            <Image
              src={feature.svg}
              alt=""
              width={400}
              height={160}
              className="h-36 md:h-48 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
