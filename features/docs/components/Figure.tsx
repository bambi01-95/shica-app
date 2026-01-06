"use client";

import React, { useState } from "react";
import Image from "next/image";
interface FigureProps {
  src: string;
  altText: string;
}

const Figure: React.FC<FigureProps> = ({ src, altText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div>
        <div 
          className="relative w-full h-64 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsExpanded(true)}
        >
          <Image src={src} alt={altText} className="mx-auto object-contain" fill sizes="(max-width: 768px) 100vw, 800px" priority/>
        </div>
        {altText && <p className="text-center text-sm text-gray-500 mt-2">{altText}</p>}
      </div>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image 
              src={src} 
              alt={altText} 
              className="object-contain" 
              fill 
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Figure;