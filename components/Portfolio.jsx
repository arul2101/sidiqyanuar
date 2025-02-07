"use client";

import { motion as m } from "framer-motion";
import ItemPortfolio from "./ItemPortfolio";
import Each from "@/utils/Each";
import { useTranslations } from "next-intl";
import FilterShowcase from "./FilterShowcase";
import { useState } from "react";
import Certificates from "./Certificates";
import ModalImageCertificate from "./ModalImageCertificate";

export default function Portfolio({ projects, locale }) {
  const t = useTranslations("Portfolio");
  const [selectedShowcase, setSelectedShowcase] = useState("Projects");
  const [selectedImage, setSelectedImage] = useState("");
  const [showImage, setShowImage] = useState(false);

  return (
    <section className="py-20 px-4 2xl:max-w-[1480px] lg:max-w-7xl md:max-w-3xl max-w-2xl mx-auto max-md:border-t max-md:border-slate-200 max-md:dark:border-slate-800 mb-10">
      <m.h2
        className="text-center text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        {t("title")}
      </m.h2>
      <m.p
        className="text-center font-light"
        initial={{ y: "-25%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "linear" }}
      >
        {t("description")}
      </m.p>

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
      <ModalImageCertificate
        onShowImage={setShowImage}
        showImage={showImage}
        selectedImage={selectedImage}
      />

      {selectedShowcase === "Projects" && (
        <m.div
          className="flex justify-center gap-4 flex-wrap mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "linear" }}
        >
          {projects?.length > 0 ? (
            <Each
              of={projects}
              render={(props) => <ItemPortfolio {...props} />}
            />
          ) : (
            <p className="mt-40">NO DATA</p>
          )}
        </m.div>
      )}
    </section>
  );
}
