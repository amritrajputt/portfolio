"use client";

import { navLinks, navLinksType } from "@/lib/constant";
import { useActiveTab } from "@/store/store";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { hanken } from "@/public/font";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-[280px] sm:max-w-fit z-999 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md p-1.5 overflow-x-scroll no-scrollbar overflow-y-hidden shadow-xl shadow-black/10 dark:shadow-black/60 border border-neutral-300 dark:border-neutral-800 rounded-[22px] w-fit ring-1 ring-black/5 dark:ring-white/10 text-neutral-900 dark:text-neutral-100">
      <div className="flex gap-2 items-center">
        {navLinks.map((e: navLinksType, i: number) => {
          return <NavItemComp key={i} e={e} />;
        })}
      </div>
    </div>
  );
}

function NavItemComp({ e }: { e: navLinksType }) {
  const { activeTab, setActiveTab } = useActiveTab();
  const [hovered, setHovered] = useState(false);

  const leavingAnimate = {
    initial: {
      opacity: 1,
    },

    hover: {
      opacity: 0,
      y: 8,
    },
  };

  const comingAnimate = {
    initial: {
      opacity: 0,
      y: 20,
    },

    hover: {
      opacity: 1,
      y: 0,
    },
  };

  const isActive = activeTab === e.value;

  return (
    <Link
      href={e.link}
      onClick={() => setActiveTab(e.value)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`cursor-pointer duration-300 relative py-2 px-6 rounded-[16px] flex items-center justify-center ${
          isActive
            ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-sm"
            : "bg-transparent text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
        }`}
      >
        <motion.div
          variants={leavingAnimate}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          transition={{
            duration: 0.1,
            type: "tween",
          }}
          className="flex items-center justify-center text-current"
        >
          <HugeiconsIcon
            icon={e.icon}
            stroke="2"
            size={22}
            color="currentColor"
            className="text-current"
          />
        </motion.div>

        <motion.div
          variants={comingAnimate}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
          transition={{
            duration: 0.2,
            type: "tween",
            damping: 10,
          }}
          className="absolute inset-0 items-center justify-center flex flex-row gap-1.5 text-current"
        >
          <HugeiconsIcon
            icon={e.icon2}
            stroke="2"
            size={20}
            color="currentColor"
            className="text-current"
          />
          <p className={`${hanken.className} text-xs font-semibold text-current`}>
            {e.name}
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
