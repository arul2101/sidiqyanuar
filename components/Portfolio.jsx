"use client";

import { useTranslations } from "next-intl";
import FilterShowcase from "./FilterShowcase";
import { useEffect, useState } from "react";
import Certificates from "./Certificates";
import ModalImageCertificate from "./ModalImageCertificate";
import Projects from "./Projects";

export default function Portfolio({ projects, locale }) {
  const t = useTranslations("Portfolio");
  const [selectedShowcase, setSelectedShowcase] = useState("Projects");
  const [selectedImage, setSelectedImage] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (mounted) return (
    <section className="py-20 px-4 2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 mb-10">
      <h2 className="text-center text-xl font-bold animate-show-from-top">
        {t("title")}
      </h2>
      <p className="text-center font-light animate-show-from-bottom">
        {t("description")}
      </p>

      <FilterShowcase
        selectedShowcase={selectedShowcase}
        onSelectedShowcase={setSelectedShowcase}
      />

      {selectedShowcase === "Certificates" && (
        <Certificates
          locale={locale}
          setSelectedImage={setSelectedImage}
          setShowImage={setShowImage}
          showImage={showImage}
        />
      )}

      {selectedShowcase === "Projects" && (
        <Projects projects={projects} />
      )}

      <ModalImageCertificate
        onShowImage={setShowImage}
        showImage={showImage}
        selectedImage={selectedImage}
      />
    </section>
  );
}
