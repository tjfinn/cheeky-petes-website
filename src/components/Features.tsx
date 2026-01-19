"use client";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" />
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="currentColor"
        >
          0g
        </text>
      </svg>
    ),
    title: "No Added Sugar",
    description: "Zero grams of added sugar. Naturally sweetened, never guilty.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path
          d="M32 8C20 8 12 20 12 32c0 16 20 24 20 24s20-8 20-24c0-12-8-24-20-24z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 32l6 6 10-12"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "16g Protein",
    description: "Packed with protein to fuel growing bodies and busy mornings.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="4" />
        <path
          d="M22 22l20 20M42 22L22 42"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <ellipse
          cx="32"
          cy="32"
          rx="8"
          ry="12"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="4 2"
        />
      </svg>
    ),
    title: "No Seed Oils",
    description: "Made with wholesome ingredients. No industrial oils here!",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <rect
          x="14"
          y="20"
          width="36"
          height="28"
          rx="4"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M14 32h36"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="24" cy="26" r="3" fill="currentColor" />
        <circle cx="32" cy="26" r="3" fill="currentColor" />
        <circle cx="40" cy="26" r="3" fill="currentColor" />
        <path
          d="M24 40l6 6 10-10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "No Artificial Colors",
    description: "Real colors from real foods. Nature does it better!",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <path
          d="M16 48c0-16 8-24 16-32 8 8 16 16 16 32"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 44c4-8 8-12 12-16 4 4 8 8 12 16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <circle cx="32" cy="40" r="4" fill="currentColor" />
      </svg>
    ),
    title: "High Soluble Fibre",
    description: "Happy tummies start here. Fiber that keeps kids going strong.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none">
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" />
        <path
          d="M20 32a12 12 0 0124 0"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="24" cy="28" r="2" fill="currentColor" />
        <circle cx="40" cy="28" r="2" fill="currentColor" />
        <path
          d="M26 38c2 3 8 3 12 0"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "For Everyone",
    description: "Vegan, Halal & Kosher friendly. Every kid deserves the good stuff!",
  },
];

export default function Features() {
  return (
    <section className="bg-green py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-haggler text-4xl md:text-5xl lg:text-6xl font-black text-cream mb-4 tracking-tight">
            Good Stuff Only
          </h2>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Everything parents want. Nothing they don&apos;t. That&apos;s the Cheeky Pete promise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-cream rounded-3xl p-6 md:p-8 border-4 border-brown transition-all duration-300 hover:scale-[1.02] hover:shadow-[8px_8px_0px_0px_#3D2914] hover:-translate-x-1 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange rounded-2xl border-4 border-brown flex items-center justify-center mb-5 text-brown group-hover:bg-orange-dark transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-haggler text-xl md:text-2xl font-bold text-brown mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-brown/80 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-cream/20 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-cream/40">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-cream"
              fill="currentColor"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span className="text-cream font-semibold text-sm md:text-base">
              Trusted by 10,000+ families nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
