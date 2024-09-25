'use client';  // Add this at the top of the file

import React, { useState } from 'react';
// import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

const images = [
  { src: "/images/IMG_0301.jpeg", alt: "Image 1" },
  { src: "/images/IMG_0325.jpeg", alt: "Image 2" },
  { src: "/images/IMG_0340.jpeg", alt: "Image 3" },
  { src: "/images/IMG-20231007-WA0062.jpg", alt: "Image 4" },
];

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const SlideshowGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <main className="min-h-screen flex flex-col">
    <Header />
    
    {/* Add margin-top to push the image container below the header */}
    <div className="flex-grow relative w-full max-w-4xl aspect-video mx-auto">
        <div className="absolute inset-0 flex items-center justify-center bg-white-800">
        <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt}
            className="max-w-full max-h-full object-contain"
        />
        </div>

        {/* Previous button */}
        <button 
        onClick={goToPrevious} 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
        <ChevronLeft />
        </button>

        {/* Next button */}
        <button 
        onClick={goToNext} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
        <ChevronRight />
        </button>

        {/* Image description */}
        <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black bg-opacity-50 px-2 py-1 rounded">
        Image {currentIndex + 1} of {images.length}
        </p>
    </div>

    {/* Footer stays at the bottom */}
    <Footer />
    </main>
  );
};

export default SlideshowGallery;