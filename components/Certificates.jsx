"use client";

import React from "react";
import Each from "@/utils/Each";
import ItemCertificate from "./ItemCertificate";
import { getCertificates } from "@/constant";

export default function Certificates({
  locale,
  setShowImage,
  showImage,
  setSelectedImage,
}) {
  return (
    <div className="flex justify-center gap-4 flex-wrap mt-4 animate-show-fade-in">
      <Each
        of={getCertificates(locale)}
        render={({ title, img, platform }) => (
          <ItemCertificate
            img={img}
            title={title}
            platform={platform}
            onShowImage={setShowImage}
            onSelectedImage={setSelectedImage}
            showImage={showImage}
          />
        )}
      />
    </div>
  );
}
