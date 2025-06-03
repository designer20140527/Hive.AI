'use client';

import { useEffect, useState } from 'react';

export default function ImageSection() {
  return (
    <section className="w-full bg-[#0C0C0C] py-12 sm:py-16 lg:py-20 flex justify-center relative overflow-hidden">
      {/* 多层光晕效果 - 修复样式冲突 */}
      <div className="absolute inset-0">
        {/* 主光晕层 - 脉动效果 */}
        <div 
          className="absolute top-1/2 left-1/2 rounded-full blur-3xl"
          style={{
            transform: 'translate(-50%, -50%)',
            width: '1400px',
            height: '1400px',
            background: 'radial-gradient(circle, rgba(223, 124, 9, 0.4) 0%, rgba(223, 124, 9, 0.2) 30%, rgba(223, 124, 9, 0.05) 70%, transparent 100%)',
            animationName: 'glowPulse',
            animationDuration: '3s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}
        ></div>
        
        {/* 次光晕层 - 漂浮效果 */}
        <div 
          className="absolute top-1/2 left-1/2 rounded-full blur-2xl"
          style={{
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '1000px',
            background: 'radial-gradient(circle, rgba(123, 3, 0, 0.5) 0%, rgba(123, 3, 0, 0.25) 40%, rgba(123, 3, 0, 0.05) 80%, transparent 100%)',
            animationName: 'glowFloat',
            animationDuration: '5s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}
        ></div>
        
        {/* 小光晕点缀 - 增强可见性 */}
        <div 
          className="absolute rounded-full blur-xl"
          style={{
            top: '30%',
            left: '30%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(223, 124, 9, 0.3) 0%, rgba(223, 124, 9, 0.1) 60%, transparent 100%)',
            animationName: 'glowPulse',
            animationDuration: '4s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute rounded-full blur-xl"
          style={{
            bottom: '30%',
            right: '30%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(123, 3, 0, 0.25) 0%, rgba(123, 3, 0, 0.08) 70%, transparent 100%)',
            animationName: 'glowFloat',
            animationDuration: '6s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: '2s'
          }}
        ></div>

        {/* 额外的亮点效果 */}
        <div 
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 140, 20, 0.15) 0%, transparent 100%)',
            animationName: 'glowPulse',
            animationDuration: '2s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
          }}
        ></div>
      </div>
      
      <div className="max-w-[1450px] w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center">
          <img 
            src="/images/image-5.png" 
            alt="Hive AI Visualization" 
            className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}