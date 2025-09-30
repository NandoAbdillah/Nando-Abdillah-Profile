"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Avatar } from "@/components/Avatar";
import { OrbitControls } from "@react-three/drei";
import AvatarCanvas from "@/components/AvatarCanvas";
import TypewriterComponent from "typewriter-effect";
import Expertise from "@/components/Expertise";
import FloatingPhotos from "@/components/FloatingPhotos";
import { useLocale } from "./ClientRootLayout";
import { useEffect, useState } from "react";

const Home = () => {

  const { currentLocale, setCurrentLocale, translations } = useLocale();

  const [currentLanguage, setCurrentLanguage] = useState(currentLocale?.toUpperCase() || 'EN');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang && storedLang.toUpperCase() !== currentLanguage) {
      setCurrentLanguage(storedLang.toUpperCase());
    }
  }, []);

  useEffect (() => {
    if (currentLanguage && currentLanguage.toLowerCase() !== currentLocale) {
      setCurrentLocale(currentLanguage.toLowerCase());
      localStorage.setItem('lang', currentLanguage.toLowerCase());
    }
  }, [currentLanguage, setCurrentLocale]);


  return (
    <section className="h-full w-full flex flex-col justify-center items-center ">
      <div className="container  h-full  mx-auto ">
        <div className="flex flex-col xl:flex-row items-center  justify-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <TypewriterComponent
                options={{
                  strings: [
                   `${translations?.hero_me_web}`,
                    `${translations?.hero_me_mobile}`,
                    `${translations?.hero_me_design}`
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <h1 className="h1 mb-6">
              {" "}
              <span className="h2"> {translations?.hero_me} </span>{" "}
              <hr className=" mb-3  border-2 border-accent xl:w-[27.5rem] inline-block " />{" "}
              <br /> <span className="text-accent">Nando Abdillah </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              {translations?.hero_me_desc}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className={"uppercase flex items-center gap-2"}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>

          <div className="relative order-1 xl:order-none mb-8 xl:mb-0 w-full lg:w-1/2 h-96 lg:h-[700px]">
            {/* Avatar 3D di tengah dengan z-index lebih tinggi */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className=" h-[50vh]  w-[-20vw] md:h-[70vh] md:w-[30vw]">
                <AvatarCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center w-full mb-24 gap-10 md:gap-52 mt-32 md:mt-0">
        <FloatingPhotos />
        <Stats />
      </div>

      <Expertise />
    </section>
  );
};

export default Home;
