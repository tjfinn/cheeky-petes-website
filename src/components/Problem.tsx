'use client';

import Image from 'next/image';

export default function Problem() {
  return (
    <section id="about" className="bg-cream relative scroll-mt-20">
      {/* First Row - Text Left, Image Right */}
      <div className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Right - Product Image - absolute positioned to top right */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
          <img
            src="/images/Frame 33040.png"
            alt="Cheeky Pete's cereal with bowl and milk"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Mobile image */}
        <div className="lg:hidden w-full">
          <img
            src="/images/Frame 33040.png"
            alt="Cheeky Pete's cereal with bowl and milk"
            className="w-full h-auto"
          />
        </div>

        {/* Left - Title and Text */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:w-1/2">
          <Image
            src="/lockups/Frame 33046.svg"
            alt="Breakfast Has A Problem"
            width={464}
            height={171}
            className="mb-6"
          />
          <p className="font-semibold text-[#FF6F98] text-lg md:text-xl leading-tight max-w-md">
            Most kids' breakfast cereal hasn't really changed in decades. It's still built around sugar and fast carbs and seed oils. The kind that taste great for five minutes, then leave kids hungry, wriggly, and asking for snacks before the school bell rings.
          </p>
        </div>
      </div>

      {/* Second Row - Image Left, Text Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Hedgehog Image */}
        <div className="relative flex items-end justify-center px-6 md:px-12 -mt-32 lg:-mt-48">
          <Image
            src="/images/Frame 33041.png"
            alt="Pete the hedgehog fishing"
            width={700}
            height={800}
            className="w-full max-w-2xl h-auto"
          />
        </div>

        {/* Right - Title and Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <Image
            src="/lockups/Frame 33047.svg"
            alt="That Big Burst of Energy First Thing in the Morning?"
            width={557}
            height={222}
            className="mb-6"
          />
          <p className="font-semibold text-[#FF6F98] text-lg md:text-xl leading-tight max-w-md">
            It often comes with an even bigger crash. Not great for focus. Not great for moods. Definitely not great at 8am.
          </p>
        </div>
      </div>

      </section>
  );
}
