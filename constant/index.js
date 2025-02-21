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
