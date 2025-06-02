'use client';

import { useState } from 'react';

const functions = [
  {
    title: "Multi-Platform Data Integration",
    description: "Seamlessly gather user-generated content from X (Twitter) and Telegram to power both general and personal AI models.",
    icon: "/images/icon-1.png"
  },
  {
    title: "AI-Powered Pre-Screening",
    description: "Advanced NLP models automatically filter and rank submitted content based on originality, relevance, and semantic quality.",
    icon: "/images/icon-2.png"
  },
  {
    title: "Verifier Network",
    description: "A decentralized layer of staked community verifiers reviews AI-selected content, ensuring human oversight and trustable inputs.",
    icon: "/images/icon-3.png"
  },
  {
    title: "Community Scoring System",
    description: "Token holders rate verifier decisions anonymously, with scores directly influencing verifier rewards and reputation.",
    icon: "/images/icon-4.png"
  },
  {
    title: "Personalized AI Assistants",
    description: "Train your own AI on Telegram using your tagged conversations, receiving real-time insights, recommendations, and task support.",
    icon: "/images/icon-5.png"
  }
];

export default function Functions() {
  const [currentView, setCurrentView] = useState(0); // 0: 显示1-4项, 1: 显示2-5项
  
  // 获取当前视图的items
  const getVisibleItems = () => {
    if (currentView === 0) {
      // 显示第1-4个item (索引0-3)
      return functions.slice(0, 4);
    } else {
      // 显示第2-5个item (索引1-4)
      return functions.slice(1, 5);
    }
  };

  const goToView = (viewIndex: number) => {
    setCurrentView(viewIndex);
  };

  return (
    <section id="about" className="w-full bg-[#0C0C0C] py-12 sm:py-16 lg:py-20 flex justify-center">
      <div className="max-w-[1450px] w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-maison-neue font-bold text-white mb-4">
            Key Protocol{" "}
            <span className="bg-gradient-to-r from-[#df7c09] to-[#7b0300] bg-clip-text text-transparent">
              Functions
            </span>
          </h2>
        </div>

        {/* Function Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 lg:mb-12">
          {getVisibleItems().map((func, index) => (
            <FunctionCard
              key={`${func.title}-${currentView}`}
              title={func.title}
              description={func.description}
              icon={func.icon}
              index={index}
            />
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 sm:gap-4">
          {[0, 1].map((viewIndex) => (
            <button
              key={viewIndex}
              onClick={() => goToView(viewIndex)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                viewIndex === currentView
                  ? 'bg-gradient-to-r from-[#df7c09] to-[#7b0300] scale-125'
                  : 'bg-[#3c3c3c] hover:bg-[#df7c09]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Function Card Component
function FunctionCard({ title, description, icon, index }: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  return (
    <div 
      className="bg-[#0C0C0C] border border-[#3c3c3c]/30 hover:border-[#df7c09]/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:transform hover:scale-105 group"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Icon */}
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        <img 
          src={icon} 
          alt={title} 
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-maison-neue font-bold text-white mb-3 sm:mb-4 group-hover:text-[#df7c09] transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 font-syne leading-relaxed flex-1 text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
} 