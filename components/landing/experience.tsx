"use client";

import { gabarito, hanken } from "@/public/font";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconBriefcase, IconCircleArrowRight } from "@tabler/icons-react";
import { experienceData } from "@/lib/constant";

interface dataType {
  company: string;
  description: string;
  role: string;
  timeframe: string;
  tech?: string[];
}

export default function Experience() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="experience" className="flex flex-col gap-6">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Experience
      </p>

      <div className="flex flex-col items-start justify-start gap-6 sm:gap-8 md:gap-12 w-full">
        {experienceData.map((e: dataType, i: number) => {
          const isOpen = openedIndex === i;

          return (
            <div
              className="flex flex-row items-start gap-x-3 px-4 w-full"
              key={i}
            >
              <div>
                <IconBriefcase
                  size={36}
                  className="border border-neutral-200 dark:border-neutral-800 p-2 rounded-lg text-black dark:text-white shrink-0"
                />
              </div>

              <div className="cursor-pointer flex flex-col gap-2 w-full">
                <div
                  className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between w-full"
                  onClick={() => toggleIndex(i)}
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="flex gap-4 items-center">
                        <p
                          className={`${gabarito.className} text-xl text-black dark:text-white font-semibold`}
                        >
                          {e.company}
                        </p>

                        <IconCircleArrowRight
                          size={22}
                          className={`text-gray-500 transition-transform duration-200 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </div>
                      <p
                        className={`${hanken.className} text-gray-500 text-sm font-medium`}
                      >
                        {e.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex place-self-start sm:place-self-auto sm:items-center gap-2">
                    <p
                      className={`${hanken.className} text-sm font-medium ${
                        e.timeframe.includes("Current") ||
                        e.timeframe.includes("Present")
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {e.timeframe}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p
                    className={`${hanken.className} text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-2`}
                  >
                    {e.description}
                  </p>

                  {e.tech && e.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3">
                      {e.tech.map((tag, j) => (
                        <span
                          key={j}
                          className={`${hanken.className} text-xs px-2.5 py-1 rounded-md bg-gray-200/70 dark:bg-neutral-800 text-black dark:text-gray-300 font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
