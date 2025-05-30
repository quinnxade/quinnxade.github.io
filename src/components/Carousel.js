// components/Carousel.jsx
'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  { src: '/artwork/Bill.jpg', title: 'Bill' },
  { src: '/artwork/KeshiJournalSpread.JPG', title: 'Keshi Journal Spread' },
  { src: '/artwork/Brendon_pride.JPG', title: 'Brendon (Pride)' },
  { src: '/artwork/uklelele.jpg', title: 'Ukelele' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % images.length);
  const handlePrev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Blurred background (behind the image) */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-lg transform scale-105"
        style={{ backgroundImage: `url(${images[index].src})` }}
      ></div>

      {/* Main image container */}
      <div className="relative rounded-xl overflow-hidden aspect-video shadow-md z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover" // Changed to object-cover
          />
        </AnimatePresence>
      </div>

      {/* Navigation - Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-20 focus:outline-none"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Navigation - Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-20 focus:outline-none"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i ? 'w-8 bg-white' : 'w-2 bg-gray-400'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Caption - Moved for better visibility if needed, or remove if not desired in this style */}
      {/* <p className="mt-4 text-center text-white font-medium text-sm z-10">
        {images[index].title}
      </p> */}
    </div>
  );
}