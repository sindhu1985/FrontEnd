import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg', alt: 'Team working' },
  { id: 2, image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg', alt: 'Business meeting' },
  { id: 3, image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg', alt: 'Discussion' },
  { id: 4, image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg', alt: 'Digital meeting' },
  { id: 5, image: 'https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg', alt: 'Smart workspace' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
      {/* Slide */}
      <div
        className={`w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out ${
          isTransitioning ? 'opacity-80 scale-105' : 'opacity-100 scale-100'
        }`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        role="img"
        aria-label={slides[currentIndex].alt}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Arrows */}
      <div className="absolute inset-y-0 left-2 flex items-center">
        <button onClick={goToPrevious} className="bg-white/30 hover:bg-white/50 p-2 rounded-full text-white">
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button onClick={goToNext} className="bg-white/30 hover:bg-white/50 p-2 rounded-full text-white">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;