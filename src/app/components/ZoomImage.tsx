"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface ZoomImageProps {
  src: string;
  alt: string;
  text: string;
  link: string;
}

export function ZoomImage({ src, alt, text, link }: ZoomImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link}>
      <div
        className="overflow-hidden relative group w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src}
          alt={alt} 
          fill
          className={`transition-transform duration-500 ease-in-out object-cover ${
            isHovered ? "scale-125" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-black opacity-15 group-hover:opacity-50 transition-all duration-700 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-white font-Playfair_Display text-shadowxl mx-10 text-center">{text}</h1>
        </div>
      </div>
    </Link>
  );
}
