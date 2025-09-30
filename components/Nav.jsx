"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import ReactCountryFlag from "react-country-flag";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/app/ClientRootLayout";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { currentLocale, headers, setCurrentLocale } = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleLanguageChange = (langCode) => {
    setCurrentLocale(langCode);
    setIsOpen(false); // Tutup dropdown setelah memilih bahasa
  };

  // Handle click outside untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(currentLocale);
    console.log(headers.nav_home);
  }, [currentLocale, headers]);

  // Handle mouse enter - buka dropdown dengan sedikit delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  // Handle mouse leave - tutup dropdown dengan delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Delay 200ms sebelum menutup
  };

  // Toggle untuk click
  const handleToggle = () => {
    setIsOpen(!isOpen);
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
    },
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
    <nav className="flex gap-8 items-center">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname &&
            "text-accent-default border-b-2 border-accent-default"
          } capitalize font-medium hover:text-accent-default transition-all`}
        >
          {link.name}
        </Link>
      ))}

      {/* Language Switcher */}
      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/10 transition-all"
          aria-label="Select language"
          aria-expanded={isOpen}
        >
          <ReactCountryFlag
            countryCode={
              languages.find(
                (lang) => lang.code === currentLocale.toUpperCase()
              )?.countryCode
            }
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
            title={currentLocale}
          />
          <span className="text-sm font-medium">
            {currentLocale.toUpperCase()}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 transition-all duration-200 origin-top ${
            isOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-accent/10 dark:hover:bg-gray-800 transition-all first:rounded-t-md last:rounded-b-md ${
                lang.code === currentLocale.toUpperCase()
                  ? "bg-accent/20 dark:bg-gray-800"
                  : ""
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
              <span className="text-sm font-medium  text-accent">{lang.name}</span>
              {lang.code === currentLocale.toUpperCase() && (
                <svg
                  className="w-4 h-4 ml-auto text-accent-default"
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
    </nav>
  );
};

export default Nav;