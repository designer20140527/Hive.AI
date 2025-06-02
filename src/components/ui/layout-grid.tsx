"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactElement | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    if (selected?.id === card.id) {
      // 如果点击的是已经选中的card，则收起
      setLastSelected(selected);
      setSelected(null);
    } else {
      // 否则展开新的card
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-[1000px] sm:h-[650px] md:h-[700px] lg:h-[700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer border border-[#3c3c3c]/30 hover:border-[#df7c09]/50 transition-all duration-300",
              selected?.id === card.id
                ? "rounded-lg sm:rounded-xl lg:rounded-2xl absolute inset-0 h-80 sm:h-96 w-full sm:w-4/5 md:w-2/3 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-[#0C0C0C] rounded-lg sm:rounded-xl h-60 sm:h-72 lg:h-80"
                : "bg-[#0C0C0C] rounded-lg sm:rounded-xl h-60 sm:h-72 lg:h-80"
            )}
            layoutId={`card-${card.id}`}
            transition={{
              type: "tween",
              ease: [0.4, 0, 0.2, 1],
              duration: 0.4
            }}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
            {selected?.id !== card.id && (
              <CardOverlay card={card} />
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const CardOverlay = ({ card }: { card: Card }) => {
  return (
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6 lg:p-10 z-20">
      <h3 className="text-base sm:text-lg lg:text-xl font-maison-neue font-bold text-white">
        {card.title}
      </h3>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg sm:rounded-xl lg:rounded-2xl shadow-2xl relative z-[60] overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10 rounded-lg sm:rounded-xl lg:rounded-2xl"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="relative px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
}; 