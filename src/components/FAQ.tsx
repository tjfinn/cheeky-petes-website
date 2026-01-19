'use client';

import Image from 'next/image';
import Link from 'next/link';

const faqItems = [
  { id: 1, svg: '/lockups/Frame 33056.svg', rotation: '-rotate-2' },
  { id: 2, svg: '/lockups/Frame 33057.svg', rotation: 'rotate-1' },
  { id: 3, svg: '/lockups/Frame 33058.svg', rotation: 'rotate-2' },
  { id: 4, svg: '/lockups/Frame 33059.svg', rotation: '-rotate-1' },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-brown py-16 md:py-24 px-6 md:px-12 lg:px-16 scroll-mt-20">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-haggler text-cream text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          <span className="font-medium">QUICK</span> QUESTIONS
        </h2>
        <p className="font-haggler text-cream text-2xl md:text-3xl font-medium">
          WE'VE GOT YOU!
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center ${item.rotation} transition-transform hover:rotate-0 cursor-pointer`}
            >
              <Image
                src={item.svg}
                alt=""
                width={500}
                height={80}
                className="w-full max-w-md h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* See All Link */}
      <div className="text-right mt-8 md:mt-12 max-w-5xl mx-auto">
        <Link
          href="/faq"
          className="font-haggler text-cream text-sm md:text-base font-medium uppercase tracking-wide hover:text-[#FF6F98] transition-colors"
        >
          SEE ALL FAQs HERE
        </Link>
      </div>
    </section>
  );
}
