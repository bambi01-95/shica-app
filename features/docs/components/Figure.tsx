"use client";

import React from "react";
import Image from "next/image";
interface FigureProps {
  src: string;
  altText: string;
}

const Figure: React.FC<FigureProps> = ({ src, altText }) => {
  return (
    <div>
        <div className="relative w-full h-64">
        <Image src={src} alt={altText} className="mx-auto object-contain" fill />
        </div>
        {altText && <p className="text-center text-sm text-gray-500 mt-2">{altText}</p>}
    </div>
  );
};

export default Figure;