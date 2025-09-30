"use client";

import { BsArrowDownRight, BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhotoProvider, PhotoView } from "react-photo-view";

const achievements = [
  
  {
    num: "01",
    title: "1st Place – Student Skill Competition UNUSIDA 2025",
    description:
      "Won 1st place at the 2025 Student Skill Competition held at Nahdlatul Ulama University of Sidoarjo (UNUSIDA), representing East Java on January 18–19, 2025.",
    pdf_download: "",
    img: "/img/UNUSIDA WEB.jpg",
  },
  {
    num: "02",
    title: "1st Place – Artificial Intelligence (LKS) 2024",
    description:
      "Won 1st place in the Artificial Intelligence category at the 2024 Sidoarjo District Vocational Student Skills Competition, held at SMK Negeri 2 Buduran on February 26–27, 2024.",
    pdf_download: "",
    img: "/img/LKS AI KAB.jpg",
  },
  {
    num: "03",
    title: "2nd Place – Web Technologies (LKS)",
    description:
      "Won 2nd place in the 2025 Sidoarjo District Vocational Student Skills Competition (LKS) in the Web Technologies category, held at MA' Maarif NU Tanggulangin on February 19–20, 2025.",
    pdf_download: "",
    img: "/img/LKS WEB KAB.jpg",
  },
  {
    num: "04",
    title: "Provincial Finalist – Web Technologies (LKS) 2025",
    description:
      "Represented Sidoarjo at the East Java Provincial Vocational Student Skills Competition in the Web Technologies category, held at SMK Muhammadiyah 7 Gondanglegi on April 23–24, 2025.",
    pdf_download: "",
    img: "/img/Peserta WEB JATIM.jpg",
  },
  {
    num: "05",
    title: "Provincial Finalist – Artificial Intelligence (LKS) 2024",
    description:
      "Selected as a provincial finalist in the Web Technologies category at the East Java LKS, held at SMK PGRI Ngawi on April 24–25, 2024.",
    pdf_download: "",
    img: "/img/Peserta AI JATIM.jpg",
  },
  {
    num: "06",
    title: "Top Student – Software Engineering Department",
    description:
      "Recognized as the best-performing student in the Software Engineering Department at SMK Negeri 2 Buduran for the academic year 2023.",
    pdf_download: "",
    img: "/img/SISWA TERBAIK RPL.jpg",
  },
  {
    num: "07",
    title: "Internship at CV ITBrain – Grade A",
    description:
      "Successfully completed a 6-month internship at CV ITBrain from October 1, 2024 to March 31, 2025, achieving an A grade for performance and contribution.",
    pdf_download: "",
    img: "/img/PKL.jpg",
  },
  {
    num: "08",
    title: "IoT Training – Proactive Robotika",
    description:
      "Participated in a hands-on Internet of Things training program during an industrial visit to Proactive Robotika in Yogyakarta on September 20, 2023.",
    pdf_download: "",
    img: "/img/PELATIHAN IOT.jpg",
  },
  {
    num: "09",
    title: "Zurich Entrepreneurship Program – Webinar",
    description:
      "Attended the Zurich Entrepreneurship Program webinar on September 13, 2025, focusing on business innovation and startup development.",
    pdf_download: "",
    img: "/img/ZURICH.jpg",
  },
];

function Achievements() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-5 xl:px-10 px-5">
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
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center ">
                <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500 ">
                  {achievement.num}
                </div>
                <div className="relative group w-fit">
                  <Link
                    href={achievement.pdf_download}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-90"
                  >
                    <BsArrowRight className="text-primary text-3xl" />
                  </Link>

                  {/* Tooltip */}
                  <span
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                   bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none"
                  >
                    Download PDF
                  </span>
                </div>
              </div>

              <div className="w-full xl:px-20">
                <PhotoProvider>
                  <PhotoView src={achievement.img}>
                    <motion.img
                      src={achievement.img}
                      alt="achievement-img"
                      className={`
              rounded-2xl xl:w-full  object-cover
              hover:scale-105 hover:saturate-150 hover:shadow-xl hover:rotate-1 transition-transform
            `}
                      initial={{
                        opacity: 0,
                        filter: "blur(8px) grayscale(100%)",
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        filter: "blur(0px) grayscale(0%)",
                        scale: 1,
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                    />
                  </PhotoView>
                </PhotoProvider>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 mt-5">
                  {achievement.title}
                </h2>
                <p className="text-white/60 ">{achievement.description}</p>
              </div>
              <div className="border-b border-white/20 w-full "></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
