'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const [selectedLanguage, setSelectedLanguage] = useState({
  //   code: locale.toUpperCase(),
  //   name: locale === "id" ? "Indonesian" : "English",
  //   flag: locale === "id" ? "ID" : "GB",
  // });

  useEffect(() => {
    const defaultLang = {
      code: locale.toUpperCase(),
      name: locale === 'id' ? 'Indonesian' : 'English',
      flag: locale === "id" ? "ID" : "GB",
    };
    setSelectedLanguage(defaultLang);
  }, [locale]);

  const languages = [
    { code: "EN", name: "English", flag: "GB" },
    { code: "ID", name: "Indonesian", flag: "ID" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    router.push(`/${lang.code.toLowerCase()}`);
  };

  if (!selectedLanguage) return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="inline-block h-6 w-6 text-blue-600 dark:text-[#76ABAE] animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full rounded-md px-4 py-2  text-sm font-medium text-black dark:text-white dark:hover:bg-slate-500 hover:bg-slate-200 focus:outline-none"
      >
        <span className="mr-2">
          <Image
            src={`https://flagsapi.com/${selectedLanguage.flag}/flat/64.png`}
            alt={selectedLanguage.name}
            width={28}
            height={28}
            priority
          />
        </span>
        {selectedLanguage.code}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-slate-500 dark:text-white ring-1 ring-black ring-opacity-5 z-50 transition-all animate-show-fade-in">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  handleLanguageChange(lang);
                }}
                className={`w-full text-left px-4 py-2 text-sm ${
                  selectedLanguage.code === lang.code
                    ? "bg-gray-100 dark:bg-slate-600"
                    : ""
                } hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center`}
              >
                <span className="mr-2">
                  <Image
                    src={`https://flagsapi.com/${lang.flag}/flat/64.png`}
                    alt={lang.name}
                    width={28}
                    height={28}
                    priority
                  />
                </span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
