import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center  fixed top-4 left-1/2 -translate-x-1/2  w-11/12 md:w-1/2 ">
      <Image
        src={"/x.png"}
        width={500}
        height={500}
        className="w-8  rounded-full border border-neutral-800"
        alt="my-img"
      />

      <div className="flex gap-6 border border-neutral-700 px-4 py-2 rounded-full text-sm">
        <p>About</p>
        <p>Projects</p>
        <p>Experience</p>
      </div>

      <div>
        <FaGithub className="size-6" />
      </div>
    </div>
  );
}
