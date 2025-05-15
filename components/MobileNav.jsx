"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";



const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "achievements",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    // {
    //     name: "work",
    //     path: "/work",
    // },
    {
        name: "contact",
        path: "/contact",
    }
]

function MobileNav() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center ">
                <CiMenuFries className="flex-[32px] text-3xl text-accent-default" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Nando <span className="text-accent-default">.</span>
                        </h1>
                    </Link>

                </div>

                {/* Navigation */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {
                        links.map((link, index) => (
                            <Link href={link.path} className={`${link.path === pathname && "text-accent-default border-b-2 border-accent-default"} text-xl capitalize hover:text-accent-default transition-all`} key={index}>{link.name}</Link>
                        ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav