import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/img/logo.png";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export default function Logo({ position }) {
  const phoneStyle = `${position === "phone" && "flex items-center gap-2 w-auto"}`;
  const mobileUpStyle = `${position === "mobileUp"}` && "md:flex hidden items-center gap-2";

  return (
    <Link href="/" className={`${position === "phone" ? phoneStyle : mobileUpStyle}`}>
      <Image
        src={LogoImage}
        alt="Profile Picture Image"
        className="w-[2.5rem] rounded-full bg-blue-950 dark:bg-transparent"
      />

      <h2 className={`font-bold ${position === "phone" ? "text-[1rem]" : "text-[1.3rem]"} ${poppins.className}`}>SidiqYanuar</h2>
    </Link>
  )
}
