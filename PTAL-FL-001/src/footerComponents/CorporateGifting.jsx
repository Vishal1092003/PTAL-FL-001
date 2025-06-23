import ChefReviews from "../NavbarPtal/KalaiKitComponents/ChefReviews";
import { useTranslation } from "react-i18next";


export default function CorporateGifting() {

  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[#f9f6ef] min-h-screen w-full font-serif">
      {/* Top Images */}
      <div className="w-full h-40 sm:h-48 md:h-64">
        <img
          src="/FooterComponents/corporateGifting/image1.png"
          alt="Gift Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo Circle */}
      <div className="flex justify-center bg-yellow-100 -mt-10">
        <div className="bg-[#f9f6ef] rounded-full border-4 border-white shadow-md flex items-center justify-center w-24 h-24">
          <img
            src="/newLogo2.png"
            alt="PTAL Logo"
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
        </div>
      </div>

      {/* Gifting Section */}
      <div className="flex flex-col bg-yellow-100 items-center text-center mb-8 p-4">
        <h2
          className="text-2xl sm:text-3xl text-red-700 mb-2"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          {t('footerGifting.title')}
        </h2>
        <p className="text-gray-700 max-w-xl">
          {t('footerGifting.subtitle1')}
          <br />
          {t('footerGifting.subtitle2')}
        </p>
      </div>

      {/* Form */}
      <form className="max-w-md mx-auto bg-white rounded-lg shadow p-4 sm:p-6 mb-10 w-[95%]">
        <input
          type="text"
          placeholder= {t('footerGifting.name')}
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder={t('footerGifting.company')}
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
        />
        <div className="flex flex-col sm:flex-row gap-2 mb-3">
          <select className="w-full sm:w-1/3 px-2 py-2 border border-gray-300 rounded">
            <option>+91</option>
          </select>
          <input
            type="text"
            placeholder={t('footerGifting.number')}
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <input
          type="email"
          placeholder={t('footerGifting.email')}
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
        />
        <select className="w-full mb-3 px-4 py-2 border border-gray-300 rounded">
          <option>{t('footerGifting.budget')}</option>
          <option>{t('footerGifting.below')} $30</option>
          <option>$30 - $60</option>
          <option>$60 - $90</option>
          <option>$90 - $150</option>
        </select>
        <input
          type="number"
          placeholder={t('footerGifting.quantity')}
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#a43c2a] text-white py-2 rounded hover:bg-[#8a3123] transition"
        >
          {t('footerGifting.submit')}
        </button>
      </form>

      {/* Icons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-24 mb-12">
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <img
            src="/FooterComponents/corporateGifting/logo1.png"
            alt="Social Impact"
            className="h-10 mb-1"
          />
          <span className="text-lg sm:text-2xl font-medium">{t('footerGifting.socialImpact')}</span>
        </div>
        <div className="flex flex-col items-center mb-4 sm:mb-0">
          <img
            src="/FooterComponents/corporateGifting/logo2.png"
            alt="Sustainable"
            className="h-10 mb-1"
          />
          <span className="text-lg sm:text-2xl font-medium">{t('footerGifting.sustainable')}</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/FooterComponents/corporateGifting/logo3.png"
            alt="Made in India"
            className="h-10 mb-1"
          />
          <span className="text-lg sm:text-2xl font-medium">{t('footerGifting.madeInIndia')}</span>
        </div>
      </div>

      <ChefReviews />

      <div
        className="border-t border-gray-400 w-[90%] mx-auto mb-8"
        style={{ marginBottom: "0px" }}
      ></div>
    </div>
  );
}
