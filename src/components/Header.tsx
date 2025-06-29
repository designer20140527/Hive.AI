"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-[#0C0C0C] h-[8vh] w-full flex items-center justify-center">
      <div className="flex items-center justify-between w-[95vw] px-4 sm:px-0">
        {/* 左侧：Logo + 网站名 + 导航 */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo-white.png"
              alt="Hive.AI Logo"
              width={28}
              height={28}
              className="object-contain sm:w-8 sm:h-8"
            />
            <h1 className="text-white text-lg sm:text-xl font-maison-neue font-bold">
              Hive.AI
            </h1>
          </div>
          
          {/* 桌面导航 */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-syne">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-syne">
              About
            </a>
            <a href="#tokenomics" className="text-gray-300 hover:text-white transition-colors font-syne">
              Tokenomics
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors font-syne">
              FAQ
            </a>
          </nav>
        </div>

        {/* 右侧：社交图标 + 按钮 + 移动端菜单按钮 */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* 社交图标 - 在小屏幕上隐藏部分图标 */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <SocialIcon href="https://x.com/Hive_AI_Coin" ariaLabel="Twitter">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon href="https://t.me/Hive_AI" ariaLabel="Telegram">
              <TelegramIcon />
            </SocialIcon>
            <div className="hidden md:block">
              <SocialIcon href="https://www.dextools.io/app/cn/bnb/pair-explorer/0xbdb8bac2ee499475f8d048e428fb95e9788aa9bc?t=1750842762354" ariaLabel="Discord">
                <DiscordIcon />
              </SocialIcon>
            </div>
            <div className="hidden md:block">
              <SocialIcon href="https://dexscreener.com/bsc/0xbdb8bac2ee499475f8d048e428fb95e9788aa9bc" ariaLabel="GitHub">
                <GitHubIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Gitbook 按钮 */}
          <a 
            href="https://docs.hiveaitoken.xyz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-white font-syne font-medium rounded-full bg-gradient-to-r from-[#7b0300] to-[#df7c09] p-[2px] group"
          >
            <span className="block px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 bg-[#1a1a1a] rounded-full group-hover:bg-transparent transition-colors w-full h-full text-sm sm:text-base">
              Gitbook
            </span>
          </a>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0C0C0C] border-t border-[#3c3c3c]/30 lg:hidden z-50">
          <nav className="flex flex-col py-4 px-8">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition-colors font-syne py-3 border-b border-[#3c3c3c]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors font-syne py-3 border-b border-[#3c3c3c]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tokenomics" 
              className="text-gray-300 hover:text-white transition-colors font-syne py-3 border-b border-[#3c3c3c]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a 
              href="#faq" 
              className="text-gray-300 hover:text-white transition-colors font-syne py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            
            {/* 移动端社交图标 */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#3c3c3c]/20 sm:hidden">
              <SocialIcon href="https://x.com/Hive_AI_Coin" ariaLabel="Twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon href="https://t.me/Hive_AI" ariaLabel="Telegram">
                <TelegramIcon />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="Discord">
                <DiscordIcon />
              </SocialIcon>
              <SocialIcon href="#" ariaLabel="GitHub">
                <GitHubIcon />
              </SocialIcon>
            </div>
          </nav>
        </div>
      )}

      {/* 底部动画进度条 */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-transparent overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#7b0300] to-[#df7c09] w-full animate-progress-bar"></div>
      </div>
    </header>
  );
}

// 社交图标容器组件
function SocialIcon({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-white hover:text-[#df7c09] transition-colors p-1"
    >
      {children}
    </a>
  );
}

// Twitter 图标
function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// Telegram 图标
function TelegramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" fill="currentColor">
      <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/>
    </svg>
  );
}

// Discord 图标
function DiscordIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20px" viewBox="0 -.058 754.779 867.058" width="20px">
      <path clipRule="evenodd" d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z" fillRule="evenodd"/>
    </svg>
  );
}

// GitHub 图标
function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" fillRule="evenodd" viewBox="0 0 252 300">
      <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.029-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"/>
      <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"/>
    </svg>
  );
} 
