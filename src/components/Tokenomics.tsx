export default function Tokenomics() {
  const tokenAllocation = [
    { label: "Fair Launch", percentage: 60, color: "from-[#df7c09] to-[#7b0300]" },
    { label: "Stake & Incentive Pool", percentage: 15, color: "from-[#7b0300] to-[#df7c09]" },
    { label: "Airdrop & Community", percentage: 10, color: "from-[#df7c09] to-[#7b0300]" },
    { label: "Ecosystem & Partnerships", percentage: 10, color: "from-[#7b0300] to-[#df7c09]" },
    { label: "Team & Advisors", percentage: 5, color: "from-[#df7c09] to-[#7b0300]" }
  ];

  const utilityFeatures = [
    {
      title: "Verifier Staking",
      description: "Stake $HAI to become an official verifier and participate in content auditing with on-chain rewards.",
      icon: <WalletIcon />
    },
    {
      title: "Contribution Rewards",
      description: "Earn $HAI by submitting high-quality content that passes AI screening and verifier approval.",
      icon: <StarCircleIcon />
    },
    {
      title: "Community Scoring",
      description: "Holding $HAI to rate verifier performance; scores influence reputation and reward distribution.",
      icon: <FiveStarIcon />
    },
    {
      title: "AI Access",
      description: "Unlock advanced features such as personalized AI assistants, model training tools, and analytics dashboards.",
      icon: <WidgetIcon />
    },
    {
      title: "Governance Rights",
      description: "Vote on protocol upgrades, model training rules, and incentive adjustments within the Hive.AI DAO.",
      icon: <VoteIcon />
    },
    {
      title: "Ecosystem Utility",
      description: "$HAI will power future integrations, cross-platform sync fees, and developer API access across the Hive network.",
      icon: <AnchorIcon />
    }
  ];

  return (
    <section id="tokenomics" className="w-full bg-[#1a1a1a] py-12 sm:py-16 lg:py-20 flex justify-center">
      <div className="max-w-[1450px] w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-maison-neue font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#df7c09] to-[#7b0300] bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-maison-neue font-semibold text-gray-300">
            Total Supply: <span className="text-white">1,000,000,000 $HAI</span>
          </p>
        </div>

        {/* Main Content - Responsive Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Token Allocation */}
          <div className="bg-[#0C0C0C] border border-[#3c3c3c]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-maison-neue font-bold text-white mb-6 sm:mb-8 text-center xl:text-left">
              Token Allocation
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {tokenAllocation.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <span className="text-base sm:text-lg text-white font-syne font-medium">{item.label}</span>
                    <span className="text-base sm:text-lg text-white font-maison-neue font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#3c3c3c]/30 rounded-full h-2.5 sm:h-3">
                    <div 
                      className={`h-2.5 sm:h-3 rounded-full bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg`}
                      style={{ 
                        width: `${item.percentage}%`,
                        boxShadow: `0 0 20px rgba(223, 124, 9, 0.3)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Utility */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-maison-neue font-bold text-white mb-6 sm:mb-8 text-center xl:text-left">
              Utility
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {utilityFeatures.map((feature, index) => (
                <UtilityCard 
                  key={index} 
                  title={feature.title} 
                  description={feature.description} 
                  icon={feature.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Utility Card Component - For responsive grid
function UtilityCard({ title, description, icon, index }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div 
      className="bg-[#0C0C0C] border border-[#3c3c3c]/30 hover:border-[#df7c09]/50 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 group cursor-pointer hover:transform hover:scale-105"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Icon and Title */}
      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white group-hover:text-[#df7c09] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
          {icon}
        </div>
        <h4 className="text-sm sm:text-base font-maison-neue font-bold text-white group-hover:text-[#df7c09] transition-colors duration-300">
          {title}
        </h4>
      </div>
      
      {/* Description */}
      <p className="text-gray-300 font-syne leading-relaxed text-xs sm:text-sm">
        {description}
      </p>
    </div>
  );
}

// Icon Components
function WalletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <g>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M7.269 11.515c5.969 -3.1 13.564 -5.96 20.65 -7.703 2.073 -0.51 4.215 0.257 5.293 2.099 0.77 1.316 1.71 3.12 2.704 5.478" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M29.064 31.123c0.095 2.13 1.737 3.717 3.866 3.802 1.085 0.044 2.434 0.075 4.07 0.075 1.636 0 2.985 -0.031 4.07 -0.075 2.13 -0.085 3.771 -1.672 3.866 -3.802 0.038 -0.867 0.064 -1.904 0.064 -3.123 0 -1.22 -0.026 -2.256 -0.064 -3.123 -0.095 -2.13 -1.737 -3.717 -3.866 -3.802A102.114 102.114 0 0 0 37 21c-1.636 0 -2.985 0.031 -4.07 0.075 -2.13 0.085 -3.771 1.672 -3.866 3.802A70.762 70.762 0 0 0 29 28c0 1.22 0.026 2.256 0.064 3.123Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M40.874 21.067a118.72 118.72 0 0 0 -0.293 -5.012c-0.208 -2.551 -2.189 -4.47 -4.742 -4.647C32.899 11.204 28.363 11 22 11s-10.9 0.204 -13.84 0.408c-2.552 0.176 -4.533 2.096 -4.741 4.647C3.204 18.689 3 22.613 3 28c0 5.387 0.204 9.31 0.419 11.945 0.208 2.551 2.189 4.47 4.742 4.647C11.1 44.796 15.637 45 22 45s10.9 -0.204 13.839 -0.408c2.553 -0.176 4.534 -2.096 4.742 -4.647 0.109 -1.333 0.215 -2.996 0.293 -5.012" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="m36 27 0 2" strokeWidth="2"></path>
      </g>
    </svg>
  );
}

function StarCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <g>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M24 3a21 21 0 1 0 0 42 21 21 0 1 0 0 -42" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M22.224 12.423c0.747 -1.439 2.805 -1.439 3.551 0l2.81 5.418 5.96 1.174c1.522 0.3 2.138 2.145 1.1 3.3l-4.225 4.698 0.776 6.288c0.195 1.584 -1.45 2.747 -2.878 2.035L24 32.68l-5.318 2.655c-1.427 0.712 -3.073 -0.451 -2.878 -2.035l0.776 -6.288 -4.225 -4.699c-1.038 -1.154 -0.422 -3 1.1 -3.3l5.96 -1.173 2.81 -5.418Z" strokeWidth="2"></path>
      </g>
    </svg>
  );
}

function FiveStarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <g>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M20.74 4.707a3.085 3.085 0 0 1 5.52 0l5.124 9.818L41.94 16.59c2.437 0.477 3.404 3.562 1.706 5.44l-7.388 8.165 1.381 11.12c0.318 2.563 -2.222 4.474 -4.466 3.361L23.5 39.879l-9.672 4.797c-2.244 1.113 -4.784 -0.798 -4.466 -3.36l1.381 -11.122 -7.388 -8.165c-1.698 -1.877 -0.73 -4.962 1.706 -5.44l10.555 -2.064 5.124 -9.818Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="m27.75 20 -7.583 0L19 27l0.855 -0.428a7 7 0 0 1 3.13 -0.739h1.848a3.5 3.5 0 0 1 3.5 3.5l0 1.167a3.5 3.5 0 0 1 -3.5 3.5H22.5a3.501 3.501 0 0 1 -3.3 -2.333" strokeWidth="2"></path>
      </g>
    </svg>
  );
}

function WidgetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <g>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M3.31747 6.45713c0.13349 -1.70392 1.43573 -3.00616 3.13966 -3.13966C8.46579 3.16011 11.5925 3 16 3c4.4075 0 7.5342 0.16011 9.5429 0.31747 1.7039 0.13349 3.0061 1.43573 3.1396 3.13966C28.8399 8.46579 29 11.5925 29 16c0 4.4075 -0.1601 7.5342 -0.3175 9.5429 -0.1335 1.7039 -1.4357 3.0061 -3.1396 3.1396C23.5342 28.8399 20.4075 29 16 29s-7.5342 -0.1601 -9.54287 -0.3175c-1.70393 -0.1335 -3.00616 -1.4357 -3.13966 -3.1396C3.16011 23.5342 3 20.4075 3 16s0.16011 -7.5342 0.31747 -9.54287Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M35.029 22.0861c0.055 -1.7082 1.3489 -3.0021 3.0571 -3.0571C38.6368 19.0113 39.2731 19 40 19c0.7269 0 1.3632 0.0113 1.9139 0.029 1.7082 0.055 3.0021 1.3489 3.0571 3.0571 0.0177 0.5507 0.029 1.187 0.029 1.9139 0 0.7269 -0.0113 1.3632 -0.029 1.9139 -0.055 1.7082 -1.3489 3.0021 -3.0571 3.0571 -0.5507 0.0177 -1.187 0.029 -1.9139 0.029 -0.7269 0 -1.3632 -0.0113 -1.9139 -0.029 -1.7082 -0.055 -3.0021 -1.3489 -3.0571 -3.0571C35.0113 25.3632 35 24.7269 35 24c0 -0.7269 0.0113 -1.3632 0.029 -1.9139Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M3.30329 37.0844c0.28173 -1.2172 1.42494 -1.8739 2.67388 -1.9056C8.75512 35.1083 14.5582 35 24 35c9.4418 0 15.2449 0.1083 18.0228 0.1788 1.249 0.0317 2.3922 0.6884 2.6739 1.9056C44.8663 37.8171 45 38.7812 45 40c0 1.2188 -0.1337 2.1829 -0.3033 2.9156 -0.2817 1.2172 -1.4249 1.8739 -2.6739 1.9056C39.2449 44.8917 33.4418 45 24 45s-15.24488 -0.1083 -18.02283 -0.1788c-1.24894 -0.0317 -2.39215 -0.6884 -2.67388 -1.9056C3.13368 42.1829 3 41.2188 3 40c0 -1.2187 0.13368 -2.1829 0.30329 -2.9156Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M35.029 6.08615c0.055 -1.70827 1.3489 -3.00219 3.0571 -3.05712C38.6368 3.01132 39.2731 3 40 3c0.7269 0 1.3632 0.01132 1.9139 0.02903 1.7082 0.05492 3.0021 1.34885 3.0571 3.05711C44.9887 6.63681 45 7.27312 45 8s-0.0113 1.36319 -0.029 1.91386c-0.055 1.70824 -1.3489 3.00214 -3.0571 3.05714 -0.5507 0.0177 -1.187 0.029 -1.9139 0.029 -0.7269 0 -1.3632 -0.0113 -1.9139 -0.029 -1.7082 -0.055 -3.0021 -1.3489 -3.0571 -3.05714C35.0113 9.36319 35 8.72688 35 8s0.0113 -1.36319 0.029 -1.91385Z" strokeWidth="2"></path>
      </g>
    </svg>
  );
}

function VoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <g>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M45.0002 24.5v6.4999c0 4.0271 -0.1861 7.0613 -0.3978 9.2097 -0.2459 2.4959 -2.2586 4.2886 -4.7628 4.4258 -3.2217 0.1764 -8.4015 0.3645 -15.8394 0.3645 -7.4378 0 -12.6177 -0.1881 -15.83936 -0.3645 -2.5042 -0.1372 -4.51684 -1.9299 -4.76276 -4.4258 -0.21168 -2.1484 -0.39785 -5.1826 -0.39785 -9.2097L3 24.5" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M12 16.0859c-1.7098 0.0371 -3.12876 0.0789 -4.27268 0.1188 -2.28353 0.0797 -4.22122 1.5437 -4.48812 3.813C3.10119 21.191 3 22.666 3 24.4686s0.10119 3.2775 0.2392 4.4509c0.26691 2.2692 2.20181 3.7331 4.48534 3.8129 3.18166 0.1111 8.49226 0.2362 16.27546 0.2362 7.7832 0 13.0938 -0.1251 16.2755 -0.2362 2.2835 -0.0798 4.2184 -1.5437 4.4853 -3.813 0.138 -1.1733 0.2392 -2.6482 0.2392 -4.4508s-0.1012 -3.2776 -0.2392 -4.4509c-0.2669 -2.2693 -2.2037 -3.7333 -4.4872 -3.813 -0.5313 -0.0185 -1.122 -0.0375 -1.7736 -0.0562" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M33 22.0537c1.1229 0.0154 1.9515 0.0313 2.5073 0.0436 0.5575 0.0124 1.0869 0.2717 1.2608 0.8016 0.125 0.3807 0.2319 0.9089 0.2319 1.6016 0 0.6926 -0.1069 1.2208 -0.2319 1.6016 -0.1739 0.5298 -0.7024 0.7891 -1.2599 0.8015 -1.5515 0.0344 -5.2308 0.0969 -11.5082 0.0969 -6.2774 -0.0001 -9.9567 -0.0625 -11.5082 -0.0969 -0.5575 -0.0124 -1.086 -0.2717 -1.2599 -0.8015 -0.125 -0.3808 -0.2319 -0.909 -0.2319 -1.6017 0 -0.6926 0.1069 -1.2208 0.2319 -1.6016 0.1739 -0.5298 0.7033 -0.7891 1.2608 -0.8015 0.5558 -0.0123 1.3843 -0.0282 2.5071 -0.0436" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M17.3163 12.0177c-1.4308 1.5512 -1.5192 3.808 -0.1077 5.3769 0.5774 0.6418 1.2858 1.3938 2.1452 2.2529 0.8594 0.8593 1.6116 1.5676 2.2535 2.1449 1.5691 1.4111 3.8258 1.3223 5.3767 -0.1087 1.01 -0.9319 2.3139 -2.1747 3.9198 -3.7808 1.6058 -1.606 2.8483 -2.9101 3.78 -3.9202 1.4309 -1.5512 1.5193 -3.808 0.1078 -5.37682 -0.5774 -0.64179 -1.2858 -1.39379 -2.1452 -2.25297 -0.8594 -0.85925 -1.6116 -1.56755 -2.2536 -2.14487 -1.569 -1.4111 -3.8257 -1.32231 -5.3766 0.10871 -1.01 0.93189 -2.314 2.1747 -3.9198 3.78079 -1.6058 1.60602 -2.8483 2.91016 -3.7801 3.92016Z" strokeWidth="2"></path>
      </g>
    </svg>
  );
}

function AnchorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <g>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M41.5 7.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0 -7Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M6.5 7.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0 -7Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M30 12.795c3.526 -0.25 6.231 -0.683 8.077 -1.062M18 12.795c-3.526 -0.25 -6.232 -0.683 -8.077 -1.062" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M18.065 9.673c0.068 -1.476 1.132 -2.54 2.607 -2.608A73.479 73.479 0 0 1 24 7c1.415 0 2.502 0.027 3.327 0.065 1.476 0.068 2.54 1.132 2.608 2.608 0.038 0.826 0.065 1.912 0.065 3.327s-0.027 2.5 -0.065 3.327c-0.068 1.476 -1.133 2.54 -2.608 2.608C26.5 18.973 25.415 19 24 19s-2.501 -0.027 -3.327 -0.065c-1.476 -0.068 -2.54 -1.132 -2.608 -2.608A73.512 73.512 0 0 1 18 13c0 -1.415 0.027 -2.502 0.065 -3.327Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M18.009 14.343C13.274 16.588 10 21.41 10 27v2m28 0v-2c0 -5.589 -3.274 -10.412 -8.009 -12.657" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M32.065 31.673c0.068 -1.476 1.132 -2.54 2.608 -2.608A73.529 73.529 0 0 1 38 29c1.415 0 2.502 0.027 3.327 0.065 1.476 0.068 2.54 1.132 2.608 2.608 0.038 0.826 0.065 1.912 0.065 3.327s-0.027 2.5 -0.065 3.327c-0.068 1.476 -1.133 2.54 -2.608 2.608C40.5 40.973 39.415 41 38 41s-2.501 -0.027 -3.327 -0.065c-1.476 -0.068 -2.54 -1.132 -2.608 -2.608A73.512 73.512 0 0 1 32 35c0 -1.415 0.027 -2.502 0.065 -3.327Z" strokeWidth="2"></path>
        <path stroke="#df7c09" strokeLinecap="round" strokeLinejoin="round" d="M4.065 31.673c0.068 -1.476 1.132 -2.54 2.608 -2.608A73.53 73.53 0 0 1 10 29c1.415 0 2.502 0.027 3.327 0.065 1.476 0.068 2.54 1.132 2.608 2.608 0.038 0.826 0.065 1.912 0.065 3.327s-0.027 2.5 -0.065 3.327c-0.068 1.476 -1.133 2.54 -2.609 2.608 -0.825 0.038 -1.911 0.065 -3.326 0.065s-2.501 -0.027 -3.327 -0.065c-1.476 -0.068 -2.54 -1.132 -2.608 -2.608A73.54 73.54 0 0 1 4 35c0 -1.415 0.027 -2.502 0.065 -3.327Z" strokeWidth="2"></path>
      </g>
    </svg>
  );
} 