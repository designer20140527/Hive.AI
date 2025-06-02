import { LayoutGrid } from "./ui/layout-grid";

const cards = [
  {
    id: 1,
    title: "Community-Trained Intelligence",
    content: (
      <div className="text-white">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-maison-neue font-bold mb-3 sm:mb-4">Community-Trained Intelligence</h3>
        <p className="text-gray-300 font-syne leading-relaxed text-sm sm:text-base">
          Hive.AI flips the script—AI isn't built behind closed doors, but trained openly by real users across X and Telegram.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "/images/bg-1.png"
  },
  {
    id: 2,
    title: "Verifiable Data Quality",
    content: (
      <div className="text-white">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-maison-neue font-bold mb-3 sm:mb-4">Verifiable Data Quality</h3>
        <p className="text-gray-300 font-syne leading-relaxed text-sm sm:text-base">
          Every piece of training data is AI-screened, human-validated, and community-rated to ensure trust and relevance.
        </p>
      </div>
    ),
    className: "col-span-1",
    thumbnail: "/images/bg-2.png"
  },
  {
    id: 3,
    title: "Deep Personalization",
    content: (
      <div className="text-white">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-maison-neue font-bold mb-3 sm:mb-4">Deep Personalization</h3>
        <p className="text-gray-300 font-syne leading-relaxed text-sm sm:text-base">
          Your Telegram data trains your own AI assistant—tailored insights, real-time responses, and privacy-respecting learning.
        </p>
      </div>
    ),
    className: "col-span-1",
    thumbnail: "/images/bg-3.png"
  },
  {
    id: 4,
    title: "Interoperable by Design",
    content: (
      <div className="text-white">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-maison-neue font-bold mb-3 sm:mb-4">Interoperable by Design</h3>
        <p className="text-gray-300 font-syne leading-relaxed text-sm sm:text-base">
          Cross-platform syncing ensures knowledge flows freely between general and personal models, enhancing both.
        </p>
      </div>
    ),
    className: "md:col-span-2",
    thumbnail: "/images/bg-4.png"
  }
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-[#0C0C0C] py-16 sm:py-20 lg:py-20 flex justify-center">
      <div className="max-w-[1450px] w-full px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-maison-neue font-bold text-white mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#df7c09] to-[#7b0300] bg-clip-text text-transparent">
              Hive.AI
            </span>
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="h-auto">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
} 