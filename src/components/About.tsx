"use client";

import Image from "next/image";

// Decorative Star component
const Star = ({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
};

// Decorative Cloud component
const Cloud = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 120 60"
      fill="currentColor"
    >
      <ellipse cx="35" cy="40" rx="25" ry="18" />
      <ellipse cx="60" cy="35" rx="30" ry="22" />
      <ellipse cx="90" cy="40" rx="22" ry="16" />
      <ellipse cx="50" cy="25" rx="20" ry="15" />
      <ellipse cx="75" cy="28" rx="18" ry="14" />
    </svg>
  );
};

// Fun fact badge component
const FunFactBadge = ({
  icon,
  text,
  bgColor = "bg-cream"
}: {
  icon: string;
  text: string;
  bgColor?: string;
}) => {
  return (
    <div
      className={`${bgColor} border-4 border-brown rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[4px_4px_0px_0px_var(--brown)] transform hover:translate-y-[-2px] hover:shadow-[4px_6px_0px_0px_var(--brown)] transition-all duration-200`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold text-brown text-sm md:text-base">{text}</span>
    </div>
  );
};

export default function About() {
  const funFacts = [
    { icon: "🥣", text: "Loves crunchy cereal!" },
    { icon: "🌅", text: "Early morning adventurer" },
    { icon: "⭐", text: "Champion spoon balancer" },
    { icon: "💚", text: "Best friend to all kids" },
  ];

  return (
    <section className="relative bg-orange overflow-hidden py-16 md:py-24">
      {/* Decorative Elements */}
      <Star
        className="absolute top-8 left-8 text-cream opacity-80 animate-pulse"
        size="lg"
      />
      <Star
        className="absolute top-24 right-16 text-cream opacity-60"
        size="md"
      />
      <Star
        className="absolute bottom-32 left-24 text-cream opacity-70"
        size="sm"
      />
      <Star
        className="absolute top-1/3 right-8 text-cream opacity-50 animate-pulse"
        size="lg"
      />
      <Cloud
        className="absolute top-4 right-1/4 w-32 h-16 text-cream opacity-30"
      />
      <Cloud
        className="absolute bottom-8 left-1/3 w-24 h-12 text-cream opacity-25"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block bg-cream border-6 border-brown rounded-3xl px-8 py-4 text-4xl md:text-5xl lg:text-6xl font-black text-brown shadow-[8px_8px_0px_0px_var(--brown)] transform -rotate-1">
            Meet Cheeky Pete
          </h2>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Mascot Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Thick border frame around image */}
              <div className="relative bg-cream border-8 border-brown rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_var(--brown)] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/Frame 33042.png"
                  alt="Pete the hedgehog standing on a grassy hill with an orange sunset background"
                  width={500}
                  height={500}
                  className="w-full max-w-md h-auto object-cover"
                  priority
                />
              </div>
              {/* Decorative stars around image */}
              <Star
                className="absolute -top-4 -left-4 text-cream drop-shadow-lg"
                size="lg"
              />
              <Star
                className="absolute -bottom-2 -right-2 text-cream drop-shadow-lg"
                size="md"
              />
            </div>
          </div>

          {/* Story Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Story Card */}
            <div className="bg-cream border-6 border-brown rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_0px_var(--brown)]">
              <h3 className="text-2xl md:text-3xl font-bold text-brown mb-4">
                The Cheekiest Hedgehog in Breakfast Land!
              </h3>
              <div className="space-y-4 text-brown text-base md:text-lg leading-relaxed">
                <p>
                  Pete wasn&apos;t always the most famous hedgehog around. He started as a
                  little spiky fellow who could never sit still at the breakfast table!
                </p>
                <p>
                  While other hedgehogs were still snoozing, Pete would bounce out of bed,
                  put on his favorite <span className="font-bold text-blue">blue overalls</span> and
                  <span className="font-bold"> striped shirt</span>, and zoom straight to the kitchen.
                </p>
                <p>
                  One morning, Pete discovered something magical - a bowl of
                  <span className="font-bold text-green"> Cheeky Pete&apos;s cereal</span>!
                  With every crunchy bite, he felt ready to take on any adventure.
                  Now he wants to share that same super-powered feeling with YOU!
                </p>
              </div>

              {/* Tagline Banner */}
              <div className="mt-6 bg-green border-4 border-brown rounded-2xl px-4 py-3 text-center shadow-[4px_4px_0px_0px_var(--brown)] transform rotate-1">
                <p className="text-cream font-black text-lg md:text-xl tracking-wide">
                  &quot;The Smooth Start for Little Legends&quot;
                </p>
              </div>
            </div>

            {/* Fun Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <FunFactBadge
                  key={index}
                  icon={fact.icon}
                  text={fact.text}
                />
              ))}
            </div>

            {/* Pete's Personality Callout */}
            <div className="bg-green border-6 border-brown rounded-3xl p-6 shadow-[8px_8px_0px_0px_var(--brown)] transform -rotate-1">
              <h4 className="text-xl md:text-2xl font-bold text-cream mb-3 flex items-center gap-2">
                <span>Why Kids Love Pete</span>
                <Star className="text-cream" size="sm" />
              </h4>
              <ul className="text-cream space-y-2 text-base md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold">*</span>
                  <span>He&apos;s always up for mischief (the good kind!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold">*</span>
                  <span>His spikes are as soft as they are silly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold">*</span>
                  <span>He believes every kid is a Little Legend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange font-bold">*</span>
                  <span>He never spills his milk (well... almost never!)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
