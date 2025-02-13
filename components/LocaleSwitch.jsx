import React, { useState, useTransition } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: locale.toUpperCase(),
    name: locale === "id" ? "Indonesian" : "English",
    flag: locale === "id" ? "ID" : "GB",
  });

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
        <m.div
          className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-slate-500 dark:text-white ring-1 ring-black ring-opacity-5 z-50 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
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
        </m.div>
      )}
    </div>
  );
};

export default LanguageSelector;
