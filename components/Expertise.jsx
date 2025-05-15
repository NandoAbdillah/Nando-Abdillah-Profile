"use client";

import { BsArrowDownRight } from "react-icons/bs";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I architect and build dynamic, high-performance web applications using Laravel, React, Next.js, Tailwind CSS, and Bootstrap. Proficient in HTML, CSS, JavaScript, and PHP, I’ve delivered solutions such as a job-seeking platform, a social networking site, and custom content management systems that optimize user engagement and efficiency.",
    href: "https://github.com/NandoAbdillah",
    img: "/img",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I craft intuitive, user-centered interfaces and seamless experiences in Figma, progressing from wireframes to interactive prototypes. My portfolio includes a polished personal portfolio website and a modern web-based music streaming app, both designed to maximize usability and visual appeal.",
    href: "https://github.com/NandoAbdillah",
  },
  {
    num: "03",
    title: "Data Analysis & Machine Learning",
    description:
      "I perform comprehensive data analysis and develop machine learning models using Python and Kaggle datasets. Experienced in regression and classification techniques, I’ve built predictive systems that forecast sales trends and classify customer behaviors to support strategic decision-making.",
    href: "https://github.com/NandoAbdillah",
  },
  {
    num: "04",
    title: "Android Development",
    description:
      "I develop robust Android applications in Android Studio using Kotlin and Java, leveraging XML for responsive layouts. By integrating RESTful APIs powered by Laravel, I enable features like secure authentication, real-time data synchronization, and personalized user dashboards.",
    href: "https://github.com/NandoAbdillah",
  },
];

function Expertise() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-5 xl:px-10 px-5">
      <h3 className="text-4xl font-bold mb-10 mx-auto ">My Expertise</h3>
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center ">
                <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500 ">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60 ">{service.description}</p>

              <div className="border-b border-white/20 w-full "></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Expertise;
