import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-[#3c3c3c]/30">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Hive.AI Logo"
                width={32}
                height={32}
                className="object-contain sm:w-10 sm:h-10"
              />
              <span className="text-xl sm:text-2xl font-maison-neue font-bold text-white">
                Hive.AI
              </span>
            </div>
            <p className="text-gray-300 font-syne leading-relaxed max-w-md mb-4 sm:mb-6 text-sm sm:text-base">
              Decentralized AI training and personalization platform that turns user content into high-quality AI models, powered by community verification and token incentives.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="https://x.com/Hive_AI_Coin" target="_blank" rel="noopener noreferrer">
                <SocialLink icon={<TwitterIcon />} label="Twitter" />
              </a>
              <a href="https://t.me/Hive_AI" target="_blank" rel="noopener noreferrer">
                <SocialLink icon={<TelegramIcon />} label="Telegram" />
              </a>
              <a href="https://www.dextools.io/app/cn/bnb/pair-explorer/0xbdb8bac2ee499475f8d048e428fb95e9788aa9bc?t=1750838282649" target="_blank" rel="noopener noreferrer">
              <SocialLink icon={<DextoolsIcon />} label="Dextools" />
              </a>
              <a href="https://dexscreener.com/bsc/0xbdb8bac2ee499475f8d048e428fb95e9788aa9bc" target="_blank" rel="noopener noreferrer">
              <SocialLink icon={<DexScreenerIcon />} label="Dex Screener" />
                </a>
            </div>
          </div>

          {/* Empty space for desktop layout */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-maison-neue font-bold text-white mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <FooterLink href="#home" text="Home" />
              <FooterLink href="#about" text="About" />
              <FooterLink href="#tokenomics" text="Tokenomics" />
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-maison-neue font-bold text-white mb-4 sm:mb-6">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <FooterLink href="https://docs.hiveaitoken.xyz/" text="Whitepaper" external={true} />
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#3c3c3c]/30 pt-6 sm:pt-8">
          <div className="text-center">
            <div className="text-gray-400 font-syne text-xs sm:text-sm">
              © 2025 Hive.AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Social Link Component
function SocialLink({ icon, label }: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] border border-[#3c3c3c]/30 hover:border-[#df7c09]/50 rounded-lg flex items-center justify-center text-white hover:text-[#df7c09] transition-all duration-300 hover:transform hover:scale-110 group cursor-pointer">
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
    </div>
  );
}

// Footer Link Component
function FooterLink({ href, text, small = false, external = false }: {
  href: string;
  text: string;
  small?: boolean;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className={`font-syne text-gray-300 hover:text-[#df7c09] transition-colors duration-300 ${
          small ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
        }`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text}
      </a>
    </li>
  );
}

// Icon Components
function TwitterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function DextoolsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 -.058 754.779 867.058" fill="currentColor">
      <path clipRule="evenodd" d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z" fillRule="evenodd"/>
    </svg>
  );
}

function DexScreenerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 252 300" fill="currentColor">
      <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"/>
      <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"/>
    </svg>
  );
} 
