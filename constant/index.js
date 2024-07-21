import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAsia } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import coffeShopImage from "@/public/img/coffee-shop.png";
import skuyHotelsImage from "@/public/img/skuy-hotels.png";
import myAnimeChanImage from "@/public/img/my-anime-chan.png";
import rizerDigitalImage from "@/public/img/rizer-digital.png";
import tourTravelImage from "@/public/img/tour-travel.png";
import todolistImage from "@/public/img/todolist.png";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiNextdotjs, SiAxios, SiTypescript, SiReactquery } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCss3 } from "react-icons/fa";

export const icon = [
  {
    element: <AiFillGithub />,
    href: "https://github.com/arul2101"
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
    element: <FaGlobeAsia />,
    href: "https://arul2101.github.io",

  }
]

export const menu = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Portfolio",
    href: "/portfolio"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  }
]

export const menuPortfolio = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Front End"
  },
  {
    id: 3,
    title: "Back End"
  },
  {
    id: 4,
    title: "Full Stack"
  }
];

export const dataPortfolio = [
  {
    id: 1,
    category: "Full Stack",
    tech: [
      {
        title: "React JS",
        icon: <FaReact />,
      },
      {
        title: "React Query",
        icon: <SiReactquery />
      },
      {
        title: "Tailwind",
        icon: <RiTailwindCssFill />
      },
      {
        title: "Ant Design",
        icon: <SiAntdesign />
      },
      {
        title: "Supabase",
        icon: <RiSupabaseFill />
      }
    ],
    title: "Dashboard Booking Management",
    img: skuyHotelsImage,
    link: "https://skuy-hotels.vercel.app",
    github: "https://github.com/arul2101/skuy-hotels"
  },
  {
    id: 2,
    category: "Front End",
    tech: [
      {
        title: "Next JS",
        icon: <SiNextdotjs />
      },
      {
        title: "Tailwind",
        icon: <RiTailwindCssFill />
      },
      {
        title: "Axios",
        icon: <SiAxios />
      },
      {
        title: "Framer Motion",
        icon: <TbBrandFramerMotion />
      },
      {
        title: "Typescript",
        icon: <SiTypescript />
      }
    ],
    title: "My Anime Chan",
    img: myAnimeChanImage,
    link: "https://my-anime-chan.vercel.app",
    github: "https://github.com/arul2101/my-anime-chan"
  },
  {
    id: 3,
    category: "Front End",
    tech: [
      {
        title: "React JS",
        icon: <FaReact />
      },
      {
        title: "Framer Motion",
        icon: <TbBrandFramerMotion />
      },
      {
        title: "React Slick",
      },
      {
        title: "Vanilla CSS",
        icon: <FaCss3 />
      }
    ],
    title: "Company Website",
    img: rizerDigitalImage,
    link: "https://arul2101.github.io/rizer-digital",
    github: "https://github.com/arul2101/rizer-digital"
  },
  {
    id: 4,
    category: "Front End",
    tech: [
      {
        title: "React JS",
        icon: <FaReact />
      },
      {
        title: "Vanilla CSS",
        icon: <FaCss3 />
      }
    ],
    title: "Coffee Shop Website",
    img: coffeShopImage,
    link: "https://arul2101.github.io/warkop-sobat-website",
    github: "https://github.com/arul2101/warkop-sobat-website"
  },
  {
    id: 5,
    category: "Front End",
    tech: [
      {
        title: "React JS",
        icon: <FaReact />
      },
      {
        title: "Vanilla CSS",
        icon: <FaCss3 />
      }
    ],
    title: "Tour & Travel Website",
    img: tourTravelImage,
    link: "https://arul2101.github.io/tour-id",
    github: "https://github.com/arul2101/tour-id"
  },
  {
    id: 6,
    category: "Front End",
    tech: [
      {
        title: "React JS",
        icon: <FaReact />
      },
      {
        title: "Vanilla CSS",
        icon: <FaCss3 />
      }
    ],
    title: "Todolist",
    img: todolistImage,
    link: "https://arul2101.github.io/todolist-app",
    github: "https://github.com/arul2101/todolist-app"
  },

]