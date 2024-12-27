"use client";
import { cousine, gabarito } from "@/public/font";
import projectsData from "@/lib/projects.json";
import { PiProjectorScreen } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface dataType {
  name: string;
  description: string;
  deployed: string;
  github: string;
}

export default function HomeProjects() {
  const router = useRouter();
  return (
    <div id="projects">
      <p className={`${gabarito.className} text-2xl`}>Projects</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2   gap-6">
        {projectsData.map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-4 rounded-md border border-neutral-900 cursor-pointer hover:border-neutral-800 hover:shadow-sm hover:shadow-fuchsia-950 duration-300 flex flex-col gap-6 group"
            >
              <div className="flex justify-between ">
                <PiProjectorScreen />
                <Link href={e.github} className="hover:text-gray-400">
                  <FaGithub className="size-6" />
                </Link>
              </div>

              <div>
                <p
                  className={`${gabarito.className} text-xl font-bold font-bold`}
                >
                  {e.name}
                </p>

                <p
                  className={`${cousine.className} text-gray-400 text-sm mt-2`}
                >
                  {e.description}
                </p>
              </div>

              <Link
                href={`https://${e.deployed}`}
                className={`${cousine.className} text-sm text-gray-400 flex gap-2 items-center group-hover:text-blue-500`}
                target="_blank"
              >
                <p>{e.deployed}</p>

                <BsArrowUpRight />
              </Link>
            </div>
          );
        })}
      </div>

      <div
        className="border border-neutral-900 hover:border-neutral-800 mt-6 text-center p-2 rounded-lg cursor-pointer duration-300 w-full hover:bg-gray-950 text-gray-400"
        onClick={() => router.push("/projects")}
      >
        See more
      </div>
    </div>
  );
}
