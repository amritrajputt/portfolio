import { cousine, test } from "@/public/font";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";

export default function AboutLanding() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <p className={`text-white text-2xl ${test.className}`}>
          Hello , I&apos;m{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-violet-700 text-transparent bg-clip-text">
            Ankit Kashyap !
          </span>{" "}
        </p>

        <p className="animate-wave">&#128075;</p>
      </div>
      <p className={`${cousine.className} text-sm text-gray-400`}>
        I&apos;m a Full Stack Web Developer and Open Source Contributor with
        expertise in building scalable applications using Next.js, NoSql/Sql,
        and Tailwind CSS. Skilled in translating pixel-perfect Figma designs
        into responsive web pages. I bring a solution-driven approach to
        crafting impactful digital products.
      </p>

      <Link
        href={"mailto:kashyap25ankit@gmail.com?subject=Work Enquiry"}
        className="flex gap-2  px-4 items-center bg-[#0c1c32] p-2 w-fit text-[#0879E7] text-sm rounded-md"
      >
        <FaBriefcase />
        <p>Open For Work</p>
        <BsArrowRight />
      </Link>
    </div>
  );
}
