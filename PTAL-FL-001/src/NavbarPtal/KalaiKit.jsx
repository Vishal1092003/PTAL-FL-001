import ChefReviews from "./KalaiKitComponents/ChefReviews";
import ComparisonTable from "./KalaiKitComponents/ComparisonTable";
import FaqSection from "./KalaiKitComponents/Faq";
import KansaBenefits from "./KalaiKitComponents/KansaBenefits";
import KalaiKitGallery from "./KalaiKitComponents/KalaiKitGallery";
import PtalExperience from "./KalaiKitComponents/PtalExperience";
import { useTranslation } from "react-i18next";
function KalaiKit() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <KalaiKitGallery />

      {/* did you know section */}
      <div
        className="bg-[#b01616] rounded-b-[4rem] pt-20 pb-12 text-center text-white relative"
        style={{ fontFamily: "'Fondamento', cursive" }}
      >
        {/* Circular Logo */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            // src="/Aboutsectionimages/circularLogo.svg"
            src="/newLogo2.png"
            alt="P-TAL Mission Logo"
            className="w-24 h-24 rounded-full border-4 border-[#f9f6f0] bg-[#f9f6f0]"
            loading="lazy"
          />
        </div>

        <h1 className="text-6xl  text-[#fcd900]  mb-4">{t("diduknow.did")}</h1>
        <p className="max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed px-4">
          {t('diduknow.text')}
        </p>
      </div>
      <KansaBenefits />
      <PtalExperience/>
      <ComparisonTable />
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
      <FaqSection />
    </>
  );
}

export default KalaiKit;
