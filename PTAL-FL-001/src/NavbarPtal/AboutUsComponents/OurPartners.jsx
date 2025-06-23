import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
export default function OurPartners() {
  const logos = [
    { id: 1, name: "Vogue", logo: "/Aboutsectionimages/logo1.png" },
    { id: 2, name: "What's Hot", logo: "/Aboutsectionimages/logo2.png" },
    { id: 3, name: "YourStory", logo: "/Aboutsectionimages/logo3.svg" },
    { id: 4, name: "LBB", logo: "/Aboutsectionimages/logo4.svg" },
    { id: 5, name: "Forbes", logo: "/Aboutsectionimages/logo5.svg" },
  ];
const { t, i18n } = useTranslation();
  const descriptions = [
    {
      id: 1,
      description:
        t('about_us.ourPartners.description1'),
    },
    {
      id: 2,
      description:
        t('about_us.ourPartners.description2'),
    },
    {
      id: 3,
      description:
        t('about_us.ourPartners.description3'),
    },
    {
      id: 4,
      description:
        t('about_us.ourPartners.description4'),
    },
    {
      id: 5,
      description:
        t('about_us.ourPartners.description5'),
    },
  ];

  const total = logos.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
        setFade(true);
      }, 300); // fade-out duration
    }, 1500); // new interval speed

    return () => resetTimeout();
  }, [currentIndex, total]);

  const getVisibleLogos = () => {
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    return [
      { ...logos[prevIndex], position: -1 },
      { ...logos[currentIndex], position: 0 },
      { ...logos[nextIndex], position: 1 },
    ];
  };

  const currentDescription = descriptions[currentIndex].description;

  return (
    <div className="bg-[#f4f1e8] py-16 px-6 min-h-[400px]">
      <div className="max-w-5xl mx-auto">
        {/* Testimonial Text */}
        <div className="text-center mb-12">
          <div
            className={`relative h-40 flex items-center justify-center transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl font-medium text-[#333] leading-relaxed max-w-3xl mx-auto">
              "{currentDescription}"
            </p>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-8 md:gap-12 py-8">
            {getVisibleLogos().map((partner) => (
              <div
                key={`${partner.id}-${currentIndex}`}
                className={`transition-all duration-500 ease-in-out ${
                  partner.position === 0
                    ? "scale-110 opacity-100"
                    : "scale-90 opacity-70"
                }`}
              >
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 h-24 w-40 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
