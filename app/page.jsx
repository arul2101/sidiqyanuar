import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Homepage"
};

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Contact />
    </>
  );
}
