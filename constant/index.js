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
          ? "Learn Back-End Fundamentals with JavaScript"
          : "Belajar Fundamental Back-End dengan JavaScript",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/7cb477f9-d5cb-43ee-8b30-81f12cb9ed87"
    },
    {
      title:
        locale === "en"
          ? "Become a Back-End Developer Expert with JavaScript"
          : "Menjadi Back-End Developer Expert dengan JavaScript",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/f9528967-eb4d-4e00-8ee8-eb968f866121"
    },
    {
      title:
        locale === "en"
          ? "Learn Front-End Web Development Fundamentals"
          : "Belajar Fundamental Front-End Web Development",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/57c31ab7-eeb6-4249-8f51-301ecb9b842c"
    },
    {
      title:
        locale === "en"
          ? "Learn Intermediate Web Development"
          : "Belajar Pengembangan Web Intermediate",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/a5b733f6-8a99-4983-9c61-2b5324b680c9"
    },
    {
      title:
        locale === "en"
          ? "Learn Web Application Fundamentals with React"
          : "Belajar Fundamental Aplikasi Web dengan React",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/c79fbb2d-2743-4a9a-99c6-5ed1948f5d7d"
    },
    {
      title:
        locale === "en"
          ? "Become a React Web Developer Expert"
          : "Menjadi React Web Developer Expert",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/6e9aed0c-5fa3-42aa-a927-e3bcffaaf873"
    },
    {
      title:
        locale === "en"
          ? "Architecting on AWS"
          : "Membangun Arsitektur Cloud di AWS",
      platform: "Dicoding",
      img: "https://github.com/user-attachments/assets/96048a02-25a1-4989-95ba-ac625ce3e0c0"
    },
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