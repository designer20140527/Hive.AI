import { Spotlight } from "./ui/Spotlight";

export default function Hero() {
  return (
    <section id="home" className="h-[80vh] sm:h-[92vh] w-full flex flex-col items-center bg-gradient-to-b from-[#0C0C0C] via-[#1a1a1a] via-50% to-[#0C0C0C] to-95% [background:linear-gradient(to_bottom,#0C0C0C_0%,#1a1a1a_50%,#0C0C0C_95%,#290100_100%)]">
      <div className="w-[98vw] h-full flex flex-col">
        {/* 主要内容卡片 */}
        <div className="flex-1 flex items-center justify-center pt-4 sm:pt-8 pb-4 sm:pb-8">
          <div className="relative bg-gradient-to-br from-[#0C0C0C] to-[#050505] border border-[#3c3c3c]/50 rounded-2xl sm:rounded-3xl w-full max-w-7xl p-6 sm:p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between min-w-[98vw] h-full overflow-hidden">
            {/* Spotlight效果 - 灰白色弱光 */}
            <Spotlight
              className="-top-40 right-0 md:right-60 md:-top-20 opacity-30 transform scale-x-[-1]"
              fill="#703a00"
            />
            
            {/* Overlay背景图 - 在移动端隐藏 */}
            <div 
                className="absolute inset-0 bg-no-repeat opacity-30 hidden lg:block"
                style={{
                backgroundImage: 'url(/images/overlay.png)',
                backgroundSize: '90%',
                backgroundPosition: 'right bottom',
                right: '500px',
                width: 'auto',
                height: 'auto',
                }}
            ></div>
            
            {/* 左侧内容 */}
            <div className="flex-1 lg:pr-12 relative z-10 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-maison-neue font-bold leading-tight mb-4 sm:mb-6 lg:mb-8">
                Signal In,<br />
                <span className="bg-gradient-to-r from-[#df7c09] to-[#7b0300] bg-clip-text text-transparent">
                  Smarter AI
                </span>{" "}
                Out.
              </h1>
              
              <p className="text-gray-300 text-base sm:text-lg xl:text-xl font-syne leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hive.AI is a decentralized AI protocol that transforms content from X and Telegram 
                into powerful general and personal AI models. Through AI filtering, community 
                verification, and token rewards, it ensures quality and fairness. Turning 
                intelligence into a shared asset—all driven by the community, for the community.
              </p>
            </div>

            {/* 右侧图片区域 - 重叠卡片效果 */}
            <div className="flex-1 relative flex items-center justify-center h-64 sm:h-80 lg:h-auto">
              {/* 手机版 - 只显示第一张和第二张图片，在文案下方 */}
              <div className="sm:hidden flex gap-6 justify-center items-center w-full h-full">
                <img
                  src="/images/image-1.png"
                  alt="Image 1"
                  className="w-45 h-auto rounded-xl border border-white/20 shadow-lg transform -translate-y-3"
                />
                <img
                  src="/images/image-2.png"
                  alt="Image 2"
                  className="w-45 h-auto rounded-xl border border-white/20 shadow-lg transform translate-y-3"
                />
              </div>

              {/* 平板版 - 显示简化的横向滚动 */}
              <div className="hidden sm:flex lg:hidden gap-4 overflow-x-auto w-full justify-center">
                <img
                  src="/images/image-1.png"
                  alt="Image 1"
                  className="w-32 sm:w-40 h-auto rounded-xl border border-white/20 shadow-lg flex-shrink-0"
                />
                <img
                  src="/images/image-2.png"
                  alt="Image 2"
                  className="w-32 sm:w-40 h-auto rounded-xl border border-white/20 shadow-lg flex-shrink-0"
                />
                <img
                  src="/images/image-3.png"
                  alt="Image 3"
                  className="w-32 sm:w-40 h-auto rounded-xl border border-white/20 shadow-lg flex-shrink-0"
                />
              </div>

              {/* 桌面版 - 复杂的重叠效果 */}
              <div className="hidden lg:block absolute inset-0">
                {/* 图片1 - iPad版右移 */}
                <img
                  src="/images/image-1.png"
                  alt="Image 1"
                  className="absolute top-1/2 left-1/2 transform -translate-x-[350px] md:-translate-x-[300px] lg:-translate-x-[400px] -translate-y-[370px] w-[300px] xl:w-[500px] h-auto rounded-2xl border-2 border-white/20 shadow-xl transition-all duration-300 z-[0]"
                  style={{ animation: 'float1 6s ease-in-out infinite' }}
                />
                
                {/* 图片2 */}
                <img
                  src="/images/image-2.png"
                  alt="Image 2"
                  className="absolute top-1/2 left-1/2 transform -translate-x-[0px] -translate-y-[100px] w-[250px] xl:w-[420px] h-auto rounded-2xl border-2 border-white/20 shadow-xl transition-all duration-300 z-[0]"
                  style={{ animation: 'float2 8s ease-in-out infinite' }}
                />
                
                {/* 图片3 - iPad版左移且下移 */}
                <img
                  src="/images/image-3.png"
                  alt="Image 3"
                  className="absolute top-1/2 left-1/2 transform translate-x-[100px] md:translate-x-[80px] lg:translate-x-[150px] -translate-y-[250px] md:-translate-y-[200px] lg:-translate-y-[300px] w-[180px] xl:w-[300px] h-auto rounded-2xl border-2 border-white/20 shadow-xl transition-all duration-300 z-[0]"
                  style={{ animation: 'float3 7s ease-in-out infinite' }}
                />
                
                {/* 图片4 - iPad版右移 */}
                <img
                  src="/images/image-4.png"
                  alt="Image 4"
                  className="absolute top-1/2 left-1/2 transform -translate-x-[300px] md:-translate-x-[250px] lg:-translate-x-[350px] translate-y-[200px] w-[200px] xl:w-[320px] h-auto rounded-2xl border-2 border-white/20 shadow-xl transition-all duration-300 z-[0]"
                  style={{ animation: 'float4 9s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 底部社交媒体图标 - 手机版隐藏 */}
        <div className="hidden sm:flex h-[5vh] items-start justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 w-[95vw] h-full px-4">
            <div className="flex justify-center items-start h-full">
              <a href="https://x.com/Hive_AI_Coin" target="_blank" rel="noopener noreferrer">
                <SocialMediaItem icon={<TwitterIcon />} name="Twitter" />
              </a>
            </div>
            <div className="flex justify-center items-start h-full">
              <a href="https://t.me/Hive_AI" target="_blank" rel="noopener noreferrer">
                <SocialMediaItem icon={<TelegramIcon />} name="Telegram" />
              </a>
            </div>
            <div className="flex justify-center items-start h-full">
              <a href="https://www.dextools.io/app/cn/bnb/pair-explorer/0xbdb8bac2ee499475f8d048e428fb95e9788aa9bc?t=1750838282649" target="_blank" rel="noopener noreferrer">
              <SocialMediaItem icon={<DextoolsIcon />} name="Dextools" />
                </a>
            </div>
            <div className="flex justify-center items-start h-full">
              <a href="https://dexscreener.com/bsc/0xbdb8bac2ee499475f8d048e428fb95e9788aa9bc" target="_blank" rel="noopener noreferrer">
              <SocialMediaItem icon={<DexScreenerIcon />} name="Dex Screener" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 社交媒体项组件
function SocialMediaItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 text-white hover:text-[#df7c09] transition-colors cursor-pointer">
      <div className="w-6 h-6 sm:w-8 sm:h-8">
        {icon}
      </div>
      <span className="font-syne text-sm sm:text-lg lg:text-xl font-medium truncate">{name}</span>
    </div>
  );
}

// Twitter 图标
function TwitterIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

// Telegram 图标
function TelegramIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

// Dextools 图标
function DextoolsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 -.058 754.779 867.058" fill="currentColor">
      <path clipRule="evenodd" d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z" fillRule="evenodd"/>
    </svg>
  );
}

// Dex Screener 图标
function DexScreenerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 252 300" fill="currentColor">
      <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.029-.029-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"/>
      <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"/>
    </svg>
  );
}

// Discord 图标
function DiscordIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

// GitHub 图标
function GitHubIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
} 
