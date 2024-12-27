import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      link: "https://x.com/kashyap_tweetts",
      icon: FaTwitter,
    },
    {
      link: "https://www.linkedin.com/in/ankit-kashyap-coder/",
      icon: FaGithub,
    },

    {
      link: "mailto:kashyap25ankit@gmail.com?subject=Work Enquiry",
      icon: CgMail,
    },
  ];

  return (
    <div className="flex gap-4 mb-12">
      {socials.map((e, i: number) => {
        return (
          <Link key={i} href={e.link}>
            <e.icon className="size-6 hover:text-gray-400" />
          </Link>
        );
      })}
    </div>
  );
}
