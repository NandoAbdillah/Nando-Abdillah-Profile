"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";
import ReactCountryFlag from "react-country-flag";
import { useState } from 'react';
import { useLocale } from "@/app/ClientRootLayout";

function MobileNav() {
    const pathname = usePathname();
    const { currentLocale, headers, setCurrentLocale } = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const handleLanguageChange = (langCode) => {
        setCurrentLocale(langCode);
        setIsOpen(false);
    };

    const links = [
        {
            name: `${headers?.nav_home}`,
            path: "/",
        },
        {
            name: `${headers?.nav_achievements}`,
            path: "/achievements",
        },
        {
            name: `${headers?.nav_resume}`,
            path: "/resume",
        },
        {
            name: `${headers?.nav_contact}`,
            path: "/contact",
        }
    ];

    const languages = [
        {
            code: "EN",
            name: "English",
            countryCode: "US",
        },
        {
            code: "ID",
            name: "Indonesia",
            countryCode: "ID",
        },
    ];

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="flex-[32px] text-3xl text-accent-default" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Nando <span className="text-accent-default">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link 
                                href={link.path} 
                                className={`${
                                    link.path === pathname && 
                                    "text-accent-default border-b-2 border-accent-default"
                                } text-xl capitalize hover:text-accent-default transition-all`}
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>

                {/* Language Switcher */}
                <div className="mt-auto mb-8 px-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                            Select Language
                        </p>
                        
                        <div className="flex flex-col gap-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                        lang.code === currentLocale.toUpperCase()
                                            ? "bg-accent-default text-white"
                                            : "bg-gray-100 text-accent dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                                >
                                    <ReactCountryFlag
                                        countryCode={lang.countryCode}
                                        svg
                                        style={{
                                            width: "1.5em",
                                            height: "1.5em",
                                        }}
                                        title={lang.name}
                                    />
                                    <span className="text-base  font-medium flex-1 text-left">
                                        {lang.name}
                                    </span>
                                    {lang.code === currentLocale.toUpperCase() && (
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;