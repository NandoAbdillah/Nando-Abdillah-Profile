import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import React from "react";
import Link from "next/link";

const socials = [
  {
    icon: <MdOutlineEmail />,
    path: "mailto:nandoabdilah1606@gmail.com",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/NandoAbdillah",
  },
  // {
  //     icon : <FaLinkedin />,
  //     path : ""
  // },   <MdOutlineEmail />
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/nndo_abd/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://api.whatsapp.com/send/?phone=%2B6282125469584&text&type=phone_number&app_absent=0",
  },
];
function Socials({ containerStyle, iconStyles }) {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
