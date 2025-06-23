import { useState, useEffect } from "react";
import FeaturedSection from "./featuresection";
import ShopByMetals from "./shopbymetals";
import Presscoverage from "./presscoverage";
import Section from "./section";
import ShopByUtility from "./shopbyutilities";
import GiftSection from "./giftsection";
import ChoiceSection from "./choice";
import Follow from "./follow";
import OurPartners from "../NavbarPtal/AboutUsComponents/OurPartners";
import ChefReviews from "../NavbarPtal/KalaiKitComponents/ChefReviews";
import PtalExperience from "../NavbarPtal/KalaiKitComponents/PtalExperience";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
const { t, i18n } = useTranslation();
  const slides = [
    {
      desktop: "/images/image1.png",
      mobile: "/images/image1mobileview.webp",
      alt: t('homepage.slide1.alt'),
      title: t('homepage.slide1.title'),
      subtitle: t('homepage.slide1.subtitle'),
      showButtons: false,
    },
    {
      desktop: "/images/image2.webp",
      mobile: "/images/image2mobileview.webp",
      alt: t('homepage.slide2.alt'),
      title: t('homepage.slide2.title'),
      subtitle: t('homepage.slide2.subtitle'),
      showButtons: true,
    },
    {
      desktop: "/images/image4.webp",
      mobile: "/images/image4mobileview.webp",
      alt: t('homepage.slide3.alt'),
      title: t('homepage.slide3.title'),
      subtitle: t('homepage.slide3.subtitle'),
      showButtons: true,
    },
    {
      desktop: "/images/image3.webp",
      mobile: "/images/image3mobileview.webp",
      alt: t('homepage.slide4.alt'),
      title: t('homepage.slide4.title'),
      subtitle: t('homepage.slide4.subtitle'),
      showButtons: true,
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section - Fixed with proper height */}
      <section
        className="relative overflow-hidden"
        style={{ height: isMobile ? "400px" : "700px" }}
      >
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={isMobile ? slide.mobile : slide.desktop}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />

              {/* Overlay text content */}
              {slide.showButtons && (
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white z-10 space-y-4 md:space-y-6 md:items-start md:pl-32 md:text-left">
                  <h4 className="text-sm tracking-widest font-semibold">
                    {slide.title}
                  </h4>
                  <h1
                    className="text-3xl md:text-6xl font-[500] leading-tight md:leading-normal"
                    style={{ fontFamily: "'Fondamento', cursive" }}
                  >
                    {slide.subtitle}
                  </h1>
                  <div className="flex flex-col w-full max-w-xs sm:flex-row sm:max-w-none sm:w-auto gap-3 sm:gap-4 mt-4 md:mt-6">
                    <a
                      href="/ShopByMetals/All"
                      className="px-6 py-3 sm:px-6 sm:py-3 rounded-full text-black font-bold bg-[#f9f6f0] shadow-md hover:bg-[#ece7dc] hover:scale-105 transition-transform duration-300 flex-1 text-center md:flex-none"
                    >
                      {t('homepage.shopnow')}
                    </a>
                    <a
                      href="/ShopByMetals/All"
                      className="px-6 py-3 sm:px-6 sm:py-3 rounded-full text-black font-bold bg-[#f9f6f0] shadow-md hover:bg-[#ece7dc] hover:scale-105 transition-transform duration-300 flex-1 text-center md:flex-none"
                    >
                      {t('homepage.shopproducts')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-gray-400/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <Presscoverage />
      <ShopByMetals />
      <FeaturedSection />
      <PtalExperience/>
      <ChoiceSection />

      {/* Marquee Container */}
      <div className="overflow-hidden bg-[#B01C1A] text-[#FFD700] py-4 h-[60px]">
        <div className="flex whitespace-nowrap animate-marquee-delayed">
          {/* First half */}
          <div className="flex items-center">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-8 text-2xl md:text-xl "
                style={{ fontFamily: "'Fondamento', cursive" }}
              >
                {t('homepage.transformingLabel')}
              </span>
            ))}
          </div>
          {/* Duplicate */}
          <div className="flex items-center">
            {[...Array(6)].map((_, i) => (
              <span
                key={`dup-${i}`}
                className="mx-8 text-2xl md:text-xl"
                style={{ fontFamily: "'Fondamento', cursive" }}
              >
                {t('homepage.transformingLabel')}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ShopByUtility />
      <ChefReviews />

      {/* Marquee Container */}
      <div className="overflow-hidden bg-[#B01C1A] text-[#FFD700] py-4 h-[60px]">
        <div className="flex whitespace-nowrap animate-marquee-delayed">
          {/* First half */}
          <div className="flex items-center">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-8 text-2xl md:text-xl "
                style={{ fontFamily: "'Fondamento', cursive" }}
              >
                {t('homepage.transformingLabel')}
              </span>
            ))}
          </div>
          {/* Duplicate */}
          <div className="flex items-center">
            {[...Array(6)].map((_, i) => (
              <span
                key={`dup-${i}`}
                className="mx-8 text-2xl md:text-xl"
                style={{ fontFamily: "'Fondamento', cursive" }}
              >
                {t('homepage.transformingLabel')}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Section />
      <GiftSection />
      <OurPartners />
      <Follow />
    </div>
  );
};

export default Home;
