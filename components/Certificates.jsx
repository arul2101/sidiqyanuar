"use client";

import React from "react";
import { motion as m } from "framer-motion";
import Each from "@/utils/Each";
import ItemCertificate from "./ItemCertificate";

export default function Certificates({
  locale,
  setShowImage,
  showImage,
  setSelectedImage,
}) {
  const images = [
    {
      title:
        locale === "en"
          ? "The Ultimate React Course 2024: React, Redux & More"
          : "Kursus Ultimate React 2024: React, Redux & Lainnya",
      platform: "Udemy",
      img: "https://github.com/user-attachments/assets/812266ed-b7c1-47a6-b434-50eae35ba1d8",
    },
    {
      title:
        locale === "en"
          ? "PHP Programming: Beginner to Advanced"
          : "Pemrograman PHP: Pemula sampai Mahir",
      platform: "Udemy",
      img: "https://github.com/user-attachments/assets/46d71d55-0842-483d-ad4a-cbc7af5fa84a",
    },
    {
      title:
        locale === "en"
          ? "MySQL Database: Beginner to Advanced"
          : "Database MySQL: Pemula sampai Mahir",
      platform: "Udemy",
      img: "https://github.com/user-attachments/assets/604df3e7-5df0-4171-a57e-833353b843ce",
    },
    {
      title:
        locale === "en"
          ? "Learn To Create Back-End Applications for Beginners"
          : "Belajar Membuat Aplikasi Back-End untuk pemula",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/253faecf-a370-44cd-90a3-4d4d1815f4d3",
    },
    {
      title: "Frontend Developer (React)",
      platform: "HackerRank",
      img: "https://github.com/user-attachments/assets/ea8cd7ff-f9ac-4961-9062-8e3868db8acd",
    },
  ];

  return (
    <m.div
      className="flex justify-center gap-4 flex-wrap mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "linear" }}
    >
      <Each
        of={images}
        render={({ title, img, platform }) => (
          <>
            <ItemCertificate
              img={img}
              title={title}
              platform={platform}
              onShowImage={setShowImage}
              onSelectedImage={setSelectedImage}
              showImage={showImage}
            />
          </>
        )}
      />
    </m.div>
  );
}
