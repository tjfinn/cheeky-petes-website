'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function Problem() {
  return (
    <section id="about" className="bg-cream relative scroll-mt-20">
      {/* First Row - Text Left, Image Right */}
      <div className="relative lg:min-h-[700px]">
        {/* Right - Product Video - absolute positioned to top right */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full pr-6 md:pr-12 lg:pr-16">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center"
              style={{ aspectRatio: '1 / 1' }}
            >
              <source src="/images/problem-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Mobile video */}
        <div className="lg:hidden w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover object-center"
            style={{ aspectRatio: '1 / 1' }}
          >
            <source src="/images/problem-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Left - Title and Text */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:w-1/2">
          <AnimateOnScroll animation="slide-left">
            <Image
              src="/lockups/Frame 33046.svg"
              alt="Breakfast Has A Problem"
              width={464}
              height={171}
              className="mb-6"
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="font-semibold text-[#FF6F98] text-lg md:text-xl leading-tight max-w-md">
              Most kids' breakfast cereal hasn't really changed in decades. It's still built around sugar and fast carbs and seed oils. The kind that taste great for five minutes, then leave kids hungry, wriggly, and asking for snacks before the school bell rings.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Second Row - Image Left, Text Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Hedgehog Image */}
        <div className="relative flex items-end justify-center px-6 md:px-12 lg:-mt-48">
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
          <AnimateOnScroll animation="slide-right">
            <Image
              src="/lockups/Frame 33047.svg"
              alt="That Big Burst of Energy First Thing in the Morning?"
              width={557}
              height={222}
              className="mb-6"
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="font-semibold text-[#FF6F98] text-lg md:text-xl leading-tight max-w-md">
              The problem isn&apos;t cereal.<br />It&apos;s sneaky cereal.<br /><br />The kind that looks healthy. Sounds wholesome. But is quietly packed with sugar and refined carbs.<br /><br />It promises energy… then vanishes when kids need it most.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      </section>
  );
}
