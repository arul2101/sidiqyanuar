"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { Component } from "react";

class DisableBodyScroll extends Component {
  componentDidMount() {
    document.body.classList.add("overflow-y-hidden");
  }

  componentWillUnmount() {
    document.body.classList.remove("overflow-y-hidden");
  }

  render() {
    return false;
  }
}

export default function ModalImageCertificate({
  showImage,
  onShowImage,
  selectedImage,
}) {
  return (
    <section className="relative">
      {showImage && <DisableBodyScroll />}
      <div
        className={`fixed top-0 bottom-0 left-0 w-[100%] h-[100%]  z-20 transition-colors ${
          showImage ? "visible backdrop-blur-sm bg-opacity-30" : "invisible"
        }`}
        onClick={() => onShowImage(false)}
      >
        <X
          onClick={() => onShowImage(false)}
          size={36}
          className={`text-black dark:text-white absolute top-2 right-2 z-50 cursor-pointer ${
            showImage ? "visible" : "invisible"
          }`}
        />
      </div>

      <div
        className={`fixed p-4 top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%] z-50 ${showImage ? "visible" : "invisible"} md:w-[45%] w-[70%]`}
      >
        <Image
          src={selectedImage}
          alt="image"
          height={1920}
          width={1080}
          className={`w-full ${
            showImage
              ? "scale-150 opacity-100 visible"
              : "scale-0 opacity-0 invisible"
          } duration-300`}
          priority
        />
      </div>
    </section>
  );
}
