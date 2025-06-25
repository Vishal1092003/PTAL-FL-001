

import { Facebook, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Component1() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="bg-[#fdf8ef] text-black px-4 md:px-16 py-10 font-sans leading-relaxed">
      {/* Date */}
      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      <p className="text-center text-sm mb-4">May 01, 2025</p>

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl text-center mb-8"
        style={{ fontFamily: "Fondamento, cursive" }}
      >
        {t('blogComponent1.title')}
      </h1>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-lg space-y-4">
        <p>
          {t('blogComponent1.intro1')}
        </p>
        <p>
          {t('blogComponent1.intro2')}
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center my-12">
        <img
          src="/blogSectionImages/component1img1.webp"
          alt="Copper and Brass Cookware"
          className="rounded-lg shadow-lg w-full max-w-xl"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto text-lg space-y-6">
        <h2
          className="text-2xl mt-8"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t('blogComponent1.whyCleaningMatters')}
        </h2>
        <p>
          {t('blogComponent1.cleaningP1')}
        </p>
        <p>
          {t('blogComponent1.cleaningP2')}
        </p>

        <h2
          className="text-2xl mt-8"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t('blogComponent1.everydayCareBrass')}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{t('blogComponent1.brassCare1')}</li>
          <li>{t('blogComponent1.brassCare2')}</li>
          <li>{t('blogComponent1.brassCare3')}</li>
        </ul>
        <p>
          {t('blogComponent1.brassP1')}
        </p>
        <p>
          {t('blogComponent1.brassP2')}
        </p>
        <p>
          {t('blogComponent1.ptalInfo')}
        </p>
        <p>{t('blogComponent1.cleanerSolution')}</p>
        
        <div className="flex justify-center my-12">
          <img
            src="/blogSectionImages/component1img2.webp"
            alt="Copper and Brass Cookware"
            className="rounded-lg shadow-lg w-full max-w-xl"
          />
        </div>
        
        <h2
          className="text-2xl mt-8"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t('blogComponent1.caringCopper')}
        </h2>
        <p>
          {t('blogComponent1.copperP1')}
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>{t('blogComponent1.copperCare1')}</li>
          <li>{t('blogComponent1.copperCare2')}</li>
          <li>{t('blogComponent1.copperCare3')}</li>
        </ul>
        <p>
          {t('blogComponent1.copperP2')}
        </p>
        <p>
          {t('blogComponent1.copperP3')}
        </p>

        <h2
          className="text-2xl mt-8"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t('blogComponent1.dosAndDonts')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">{t('blogComponent1.do')}:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('blogComponent1.do1')}</li>
              <li>{t('blogComponent1.do2')}</li>
              <li>{t('blogComponent1.do3')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('blogComponent1.dont')}:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('blogComponent1.dont1')}</li>
              <li>{t('blogComponent1.dont2')}</li>
              <li>{t('blogComponent1.dont3')}</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center my-12">
          <img
            src="/blogSectionImages/component1img3.webp"
            alt="Copper and Brass Cookware"
            className="rounded-lg shadow-lg w-full max-w-xl"
          />
        </div>
        
        <h2
          className="text-2xl mt-8"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t('blogComponent1.finalThoughts')}
        </h2>
        <p>
          {t('blogComponent1.finalP1')}
        </p>
        <p>
          {t('blogComponent1.finalP2')}
        </p>
      </div>

      <div className="bg-[#fdf8ef] py-8 px-4">
        <div className="flex items-center justify-center gap-8 text-black text-sm font-medium max-w-4xl mx-auto">
          <a href="#" className="flex items-center gap-2 ">
            <Facebook size={18} strokeWidth={1.5} />
            Share
          </a>
          <a href="#" className="flex items-center gap-2 ">
            <Twitter size={18} strokeWidth={1.5} />
            Tweet
          </a>
          <a href="#" className="flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.13 2.53 7.65 6.13 9.1-.09-.77-.17-1.95.04-2.8.19-.82 1.22-5.2 1.22-5.2s-.31-.62-.31-1.54c0-1.45.84-2.54 1.89-2.54.89 0 1.31.67 1.31 1.48 0 .9-.57 2.25-.86 3.49-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.17-1.89 3.17-4.62 0-2.41-1.73-4.09-4.2-4.09-2.86 0-4.54 2.14-4.54 4.35 0 .87.34 1.8.77 2.3.08.1.09.2.07.3-.08.33-.26 1.01-.3 1.15-.05.19-.16.23-.37.14-1.37-.57-2.23-2.36-2.23-3.8 0-3.1 2.25-5.94 6.48-5.94 3.4 0 6.04 2.42 6.04 5.65 0 3.38-2.13 6.1-5.08 6.1-1 0-1.94-.52-2.26-1.14l-.61 2.33c-.22.84-.82 1.89-1.22 2.53.91.28 1.88.43 2.88.43 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96z" />
            </svg>
            Pin it
          </a>
        </div>
      </div>

      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
    </div>
  );
}
