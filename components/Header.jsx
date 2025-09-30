"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useLocale } from "@/app/ClientRootLayout"

export const Header = () => {

    const {headers} = useLocale();

    return (
        <header className=" py-8 xl:py-12 text-white px-8 ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className=" text-4xl font-semibold">Nando<span className=" text-accent-default">.</span>
                    </h1>   
                </Link>
                

                {/* Dekstop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={"mailto:nandoabdilah1606@gmail.com"}>
                        <Button>
                            {headers?.btn_hire_me}
                        </Button>
                    </Link>
                </div>


                <div className="xl:hidden">
                     <MobileNav/>
                </div>

            </div>
        </header>
    )
}
