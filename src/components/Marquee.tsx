'use client';

const features = [
  'NO ARTIFICIAL SWEETNERS',
  'NO SEED OILS',
  '16G PROTEIN',
];

export default function Marquee() {
  // Duplicate the array multiple times for seamless loop
  const repeatedFeatures = [...features, ...features, ...features, ...features, ...features, ...features];

  return (
    <section className="bg-[#4D0F00] py-6 md:py-8 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeatedFeatures.map((feature, index) => (
            <span
              key={index}
              className="font-haggler font-bold text-cream text-xl md:text-2xl lg:text-3xl mx-8 md:mx-12 lg:mx-16"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
