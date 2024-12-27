import { cousine, gabarito } from "@/public/font";
import experienceData from "@/lib/experience.json";
import { BiBriefcase } from "react-icons/bi";

interface dataType {
  company: string;
  about: string;
  role: string;
  timeframe: string;
}

export default function Experience() {
  return (
    <div id="experience">
      <p className={`${gabarito.className} text-2xl`}>Experience</p>

      <div className="mt-12 flex flex-col gap-6">
        {experienceData.map((e: dataType, i: number) => {
          return (
            <div
              key={i}
              className="p-4 border border-neutral-900 hover:border-neutral-800 duration-300 cursor-pointer rounded-md flex flex-col gap-8"
            >
              <div>
                <div className="flex items-center gap-2">
                  <BiBriefcase className="size-6" />
                  <p className={`${gabarito.className} text-xl`}>{e.role}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-400 text-sm">{e.company}</p>
                  <p className="text-gray-400 text-sm">{e.timeframe}</p>
                </div>
              </div>
              <p className={`${cousine.className} text-sm text-gray-400`}>
                {e.about}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
