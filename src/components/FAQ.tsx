"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Hive.AI?",
      answer: "Hive.AI is a decentralized AI training and personalization platform that turns user content from X and Telegram into high-quality AI models, powered by community verification and token incentives."
    },
    {
      question: "How do I contribute to Hive.AI?",
      answer: "You can submit content on X using tags like #Hive.AI-Community or mark quality conversations on Telegram. Approved contributions earn points and $HAI rewards."
    },
    {
      question: "Who are verifiers and how do they work?",
      answer: "Verifiers are community members who stake $HAI to review AI-filtered content. Their accuracy is rated by others and directly impacts their rewards and reputation."
    },
    {
      question: "What can I do with $HAI tokens?",
      answer: "$HAI can be used for staking, governance voting, accessing personal AI tools, and earning rewards through contributions and verification."
    },
    {
      question: "How is content quality ensured?",
      answer: "Content passes through AI pre-screening and human verification. A decentralized scoring system further ensures verifier accountability."
    },
    {
      question: "Can I train my own AI assistant?",
      answer: "Yes. By tagging quality content in Telegram, you can train a lightweight personal AI bot tailored to your style, interests, and behavior."
    },
    {
      question: "Is my data private?",
      answer: "Yes. Sensitive data, especially from Telegram, is encrypted and only used with your explicit consent. All training and verification data is handled transparently and securely."
    },
    {
      question: "How do I start?",
      answer: "Join the Hive.AI bot on Telegram, connect your wallet, start contributing or verifying, and track your progress via the Web Dashboard."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#0C0C0C] py-12 sm:py-16 lg:py-20 flex justify-center relative">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-contain bg-bottom bg-center"
        style={{
          backgroundImage: "url('/images/overlay-2.png')"
        }}
      />
      <div className="max-w-[1450px] w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-maison-neue font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#df7c09] to-[#7b0300] bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick, 
  index 
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <div 
      className="bg-[#1a1a1a] border border-[#3c3c3c]/30 hover:border-[#df7c09]/50 rounded-lg sm:rounded-xl transition-all duration-300 group"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between group-hover:bg-[#2a2a2a]/30 rounded-lg sm:rounded-xl transition-all duration-300"
      >
        <h3 className="text-base sm:text-lg font-maison-neue font-semibold text-white group-hover:text-[#df7c09] transition-colors duration-300 pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 text-[#df7c09] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
          <div className="border-t border-[#3c3c3c]/20 pt-3 sm:pt-4">
            <p className="text-gray-300 font-syne leading-relaxed text-sm sm:text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 