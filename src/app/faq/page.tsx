'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "WHAT AGE IS CHEEKY PETE'S FOR?",
    answer: "Cheeky Pete's is designed for little legends aged 4–10, but older fans are welcome too.",
  },
  {
    question: "IS CHEEKY PETE'S LOW SUGAR?",
    answer: "Yes. Cheeky Pete's has no added sugar and is sweetened using fibre, not sugar.",
  },
  {
    question: 'WHAT MAKES IT A "SMOOTH START"?',
    answer: "It's high in protein and fibre, paired with coconut oil containing natural MCTs — helping support steady energy throughout the morning without the spike and crash.",
  },
  {
    question: "IS IT SUITABLE FOR SCHOOL?",
    answer: "Yes. Please note our Peanut Butter flavour contains peanuts, so always check individual school policies.",
  },
  {
    question: "WHERE CAN I BUY IT?",
    answer: "Cheeky Pete's is available on Amazon.",
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
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#4D0F00] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
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
      <div className="bg-[#4D0F00] py-16 md:py-24 px-6 md:px-12 lg:px-16">
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
