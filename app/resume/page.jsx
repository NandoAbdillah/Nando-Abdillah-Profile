"use client";

import { SiAndroidstudio, SiKotlin, SiLaravel, SiNextdotjs, SiVsco, SiVscodium } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaFigma, FaJava, FaPython, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { BsFiletypeXml } from "react-icons/bs";

const about = {
  title: "About me",
  description:
    "Here’s a concise summary about me—feel free to check my CV for the full details.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nando Abdillah ",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 821-2546-9584",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian ",
    },
    {
      fieldName: "Email",
      fieldValue: "nandoabdilah1606@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian",
    },
  ],
};

const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am a recent graduate of SMK Negeri 2 Buduran, class of 2025, having completed a three-year vocational program that included a six-month internship. During my internship at CV ITBrain (October 2024 – March 2025), I contributed to the development of two Android mobile applications and one promotional web application, taking primary responsibility for UI design with XML, and supporting backend and data-persistence tasks using Laravel APIs and Room Database. I also built a marketing site using HTML, CSS, JavaScript (jQuery) and Bootstrap.",
  items: [
    {
      company: "CV ITBrain",
      position: "Mobile & Web Development Intern",
      duration: "October 2024 – March 2025",
    },
  ],
};

const educations = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I completed my middle school education at SMP Dharma Wanita 1 Gedangan (2019–2022), graduating 3rd in my cohort. I then earned admission to SMK Negeri 2 Buduran—one of Sidoarjo’s top vocational schools—through academic merit. There, I majored in Software Engineering, maintained first rank for three consecutive years (2022–2025), and graduated in 2025 as valedictorian with the highest average score in my class. Currently, I am pursuing a Bachelor’s degree in Informatics at Universitas Negeri Surabaya after securing admission via the SNBP national selection.",
  items: [
    {
      institution: "SMK Negeri 2 Buduran, Sidoarjo",
      degree: "Major in Software Engineering",
      duration: "2022 – 2025",
    },
    {
      institution: "Universitas Negeri Surabaya",
      degree: "Bachelor’s Program in Informatics Engineering",
      duration: "2025 – Present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Below are the programming languages, frameworks, and software applications I have learned and mastered.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html-5",
    },
    {
      icon: <FaCss3 />,
      name: "css-3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react-js",
    },
    {
      icon : <SiNextdotjs />,
      name : "nextjs"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwinds",
    },
    {
      icon: <SiLaravel />,
      name: "laravel",
    },
    {
      icon : <FaBootstrap />,
      name : "bootstrap"
    },
    {
      icon : <FaJava />,
      name : "java"
    },
    {
      icon : <SiKotlin />,
      name : "kotlin",
    },
    {
      icon : <BsFiletypeXml/>,
      name : "Android XML"
    },
    {
      icon : <FaPython/>,
      name : "Python"
    },
    {
      icon : <SiAndroidstudio/>,
      name : "Android Studio"
    },
    {
      icon : <FaFigma />,
      name : "Figma"
    }
  ],
};

function Resume() {
  return (
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:px-10 px-5"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experiences.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 ">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{educations.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {educations.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {educations.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 ">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60 ">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              {/* Skills */}

              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              {/* About */}
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex  items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60 ">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
