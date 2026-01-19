'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "IS CHEEKY PETE'S LOW SUGAR?",
    answer: "Yes! Cheeky Pete's contains no added sugar. We use natural ingredients to create a delicious taste without the sugar spike. Each serving has less than 1g of naturally occurring sugars.",
  },
  {
    question: "IS IT SUITABLE FOR SCHOOL?",
    answer: "Absolutely! Cheeky Pete's is designed to give kids sustained energy throughout the morning. It's perfect for school days - no sugar crashes, just steady focus and energy until lunchtime.",
  },
  {
    question: "WHAT AGE IS IT FOR?",
    answer: "Cheeky Pete's is perfect for kids aged 3 and up. The texture is easy for little ones to manage, and the nutrition profile supports growing bodies at every stage.",
  },
  {
    question: 'WHAT MAKES IT A "SMOOTH START"?',
    answer: "Unlike sugary cereals that cause energy spikes and crashes, Cheeky Pete's provides balanced nutrition with 16g of protein and high fibre. This means steady energy release - no hyperactivity followed by meltdowns!",
  },
  {
    question: "WHAT ARE THE MAIN INGREDIENTS?",
    answer: "Cheeky Pete's is made with wholesome ingredients including oats, plant-based protein, natural flavours, and no artificial colours or preservatives. We never use seed oils or artificial sweeteners.",
  },
  {
    question: "IS IT VEGAN/VEGETARIAN FRIENDLY?",
    answer: "Yes! Cheeky Pete's is 100% vegan, vegetarian, halal, and kosher friendly. We believe every child deserves a great start to their day.",
  },
  {
    question: "HOW DO I PREPARE IT?",
    answer: "Simply add your favourite milk (dairy or plant-based) and enjoy! You can also add fresh fruit, nuts, or seeds for extra nutrition. It's ready in seconds - perfect for busy mornings.",
  },
  {
    question: "WHERE CAN I BUY IT?",
    answer: "Cheeky Pete's is available online through our shop and at select retailers. Sign up to our newsletter to be the first to know about new stockists and special offers!",
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-brown/20">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-haggler text-brown text-lg md:text-xl font-bold uppercase pr-4">
          {item.question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-brown flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-4 h-4 text-cream"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-brown/80 text-base md:text-lg leading-relaxed pr-12">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-brown py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-haggler text-cream text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="font-medium">QUICK</span> QUESTIONS
          </h1>
          <p className="font-haggler text-cream text-xl md:text-2xl font-medium">
            WE'VE GOT YOU!
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="divide-y divide-brown/20">
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block font-haggler text-brown text-sm font-bold uppercase tracking-wide bg-[#FF6F98] hover:bg-[#ff5a87] px-8 py-4 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
