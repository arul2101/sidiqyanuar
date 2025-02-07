import Image from "next/image";
import React from "react";
import ModalImageCertificate from "./ModalImageCertificate";

export default function ItemCertificate({
  title,
  img,
  platform,
  onSelectedImage,
  onShowImage,
}) {
  return (
    <div
      onClick={() => {
        onSelectedImage(img);
        onShowImage(true);
      }}
      className="p-2 w-[28rem] relative fade hover:shadow-lg transition-all hover:scale-105 duration-300 rounded-lg shadow-slate-950 dark:shadow-[#76ABAE] cursor-pointer"
    >
      <div className="w-full">
        <Image
          src={img}
          height={400}
          width={1080}
          alt="Image Portfolio"
          className="mb-2 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="text-slate-400">{platform}</p>
      </div>
    </div>
  );
}
