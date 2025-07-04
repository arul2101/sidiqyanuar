import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Bounce } from "react-toastify";

export const icon = [
  {
    element: <AiFillGithub />,
    href: "https://github.com/arul2101",
  },
  {
    element: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/muhammad-yanuarullah-assidiq-90a698255/",
  },
  {
    element: <FaFacebook />,
    href: "https://www.facebook.com/m.yanuarullah.assidiq?_rdc=1&_rdr",
  },
  {
    element: <FaInstagram />,
    href: "https://www.instagram.com/m.yanuarullah",
  },
];

export const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const configToast = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

export const getCertificates = (locale) => {
  return [
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
    {
      title:
        locale === "en"
          ? "Learn Basic Javascript Programming"
          : "Belajar Dasar Pemrograman Javascript",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/bfa67f3d-f471-4bcb-8c36-8f18e61bf49f",
    },
    {
      title:
        locale === "en"
          ? "Learning Web Front End for Beginners"
          : "Belajar Front End Web Untuk Pemula",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/5031c284-6dc1-4700-b1e9-58497f386cea",
    },
    {
      title:
        locale === "en"
          ? "Learn Basic Web Programming"
          : "Belajar Dasar Pemrograman Web",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/45be6d82-cd36-4ece-825c-032b3e346569",
    },
  ];
}