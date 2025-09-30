"use client";

import { useLocale } from "@/app/ClientRootLayout";
import CountUp from "react-countup";





function Stats() {

    const {translations} = useLocale();

    const stats = [
        {
            num: 3,
            text: `${translations?.stats_experience}`
        },
        {
            num: 7,
            text: `${translations?.stats_completed}`
        },
        {
            num: 5,
            text: `${translations?.stats_programming}`
        },
        {
            num: 220,
            text: `${translations?.stats_commits}`
        },
    ]


    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-[10vw]  ">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
                    {
                        stats.map((item, index) => (
                            <div key={index}
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold " />

                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Stats