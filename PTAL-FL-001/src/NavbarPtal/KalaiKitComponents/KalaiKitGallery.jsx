import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
const images = [
  "https://ptal.com/cdn/shop/files/DSC_6648.jpg?v=1723884762&width=720",
  "https://ptal.com/cdn/shop/files/DSC_6656.jpg?v=1723884762&width=1080",
  "https://ptal.com/cdn/shop/files/DSC_6657.jpg?v=1723884761&width=1080",
  "https://ptal.com/cdn/shop/files/DSC_6658.jpg?v=1723884761&width=1080",
  "https://ptal.com/cdn/shop/files/DSC_6659.jpg?v=1740919157&width=1080",
  "https://ptal.com/cdn/shop/files/kalai_kit__1-1_contents.jpg?v=1747644114&width=1080",
  "https://ptal.com/cdn/shop/files/kalai_kit__1-1_process.jpg?v=1747644129&width=1080",
];

const KalaiKitProductSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const { t, i18n } = useTranslation();
  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#f9f6f0] pb-10">
      <div className="flex flex-col lg:flex-row gap-10 p-6 max-w-7xl mx-auto">
        {/* LEFT SECTION - Image Gallery */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img
              src={images[selectedIndex]}
              alt="Main"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumb ${index}`}
                onClick={() => setSelectedIndex(index)}
                className={`w-16 h-16 object-cover border-2 rounded cursor-pointer ${
                  index === selectedIndex ? "border-red-500" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - Product Info */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h2
            className="text-3xl"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t('kalaiKitGalery.productName')}
          </h2>
          <p className="text-xl font-semibold text-red-700">₹4,400.00</p>
          <p className="text-gray-700">
            {t('kalaiKitGalery.smalldescription')}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-semibold">{t('kalaiKitGalery.quantity')}</span>
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-900 transition">
              {t('kalaiKitGalery.addToCart')}
            </button>
            <button className="border border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
               {t('kalaiKitGalery.buyItNow')}
            </button>
          </div>

          {/* Offers Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2 tracking-wide">{t('kalaiKitGalery.offers')}</h3>
            <div className="flex flex-wrap gap-4">
              {/* PTAL10 */}
              <div
                onClick={() => setSelectedCoupon("PTAL10")}
                className={`cursor-pointer border rounded-md px-4 py-2 w-[200px] shadow-sm ${
                  selectedCoupon === "PTAL10"
                    ? "border-red-600 bg-red-50"
                    : "border-black bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-semibold px-2 py-[2px] rounded-full ${
                      selectedCoupon === "PTAL10"
                        ? "bg-red-700 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    PTAL10
                  </span>
                  <div className="w-4 h-4 rounded-full bg-black text-center text-xs font-bold text-white">
                    i
                  </div>
                </div>
                <p
                  className={`text-sm font-semibold text-center leading-tight ${
                    selectedCoupon === "PTAL10" ? "text-red-700" : "text-black"
                  }`}
                >
                  {t('kalaiKitGalery.ptal10offer')} <br />
                  {t('kalaiKitGalery.ptal10offer2')}
                </p>
              </div>

              {/* SPECIAL12 */}
              <div
                onClick={() => setSelectedCoupon("SPECIAL12")}
                className={`cursor-pointer border rounded-md px-4 py-2 w-[200px] shadow-sm ${
                  selectedCoupon === "SPECIAL12"
                    ? "border-red-600 bg-red-50"
                    : "border-black bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-sm font-semibold px-2 py-[2px] rounded-full ${
                      selectedCoupon === "SPECIAL12"
                        ? "bg-red-700 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    SPECIAL12
                  </span>
                  <div className="w-4 h-4 rounded-full bg-black text-center text-xs font-bold text-white">
                    i
                  </div>
                </div>
                <p
                  className={`text-sm font-semibold text-center leading-tight ${
                    selectedCoupon === "SPECIAL12"
                      ? "text-red-700"
                      : "text-black"
                  }`}
                >
                  {t('kalaiKitGalery.special12offer')} <br />
                  {t('kalaiKitGalery.special12offer2')}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid and Collapsible Sections */}
          <div className="mt-6 border-t border-gray-300 pt-4 space-y-6">
            {/* Icons */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-10">
              {[
                { src: "free-shipping_50x.svg", text: t('kalaiKitGalery.freeshipping') },
                { src: "code_50x.svg", text: t('kalaiKitGalery.securepay') },
                { src: "ISO_50x.svg", text: t('kalaiKitGalery.iso') },
                { src: "life3_50x.svg", text: t('kalaiKitGalery.warranty') },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img
                    src={`https://ptal.com/cdn/shop/files/${item.src}?v=1699337962`}
                    alt={item.text}
                    className="w-6"
                  />
                  <p className="text-sm font-bold">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Collapsible Sections */}
            <div className="border-t border-gray-300 pt-4">
              <details className="mb-4 cursor-pointer group">
                <summary className="text-md font-bold flex justify-between items-center">
                  {t('kalaiKitGalery.description')}
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:inline">−</span>
                </summary>
                <div className="mt-2 text-sm text-gray-700 space-y-3">
                  <p>
                    {t('kalaiKitGalery.descriptionText1')}
                  </p>
                  <p>
                   {t('kalaiKitGalery.descriptionText2')}
                  </p>
                  <p className="font-semibold">
              {t('kalaiKitGalery.descriptionText3')}
                  </p>
                  <ul className="list-disc list-inside">
                    <li>{t('kalaiKitGalery.descriptionText4')}</li>
                    <li>
                      {t('kalaiKitGalery.descriptionText5')}
                    </li>
                    <li>{t('kalaiKitGalery.descriptionText6')}</li>
                    <li>{t('kalaiKitGalery.descriptionText7')}</li>
                    <li>{t('kalaiKitGalery.descriptionText8')}</li>
                    <li>
                     {t('kalaiKitGalery.descriptionText9')}
                    </li>
                  </ul>
                  <p className="font-semibold">{t('kalaiKitGalery.descriptionText20')}</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      {t('kalaiKitGalery.descriptionText10')}
                    </li>
                    <li>
                     {t('kalaiKitGalery.descriptionText11')}
                    </li>
                    <li>
                      {t('kalaiKitGalery.descriptionText12')}
                    </li>
                    <li>
                      {t('kalaiKitGalery.descriptionText13')}
                    </li>
                    <li>
                      {t('kalaiKitGalery.descriptionText14')}
                    </li>
                    
                  </ol>
                  <p>
                    {t('kalaiKitGalery.descriptionText15')}{" "}
                    <strong>{t('kalaiKitGalery.descriptionText16')}</strong> {t('kalaiKitGalery.descriptionText17')}
                  </p>
                  <p className="text-red-700 font-semibold">
                    {t('kalaiKitGalery.descriptionText18')}
                  </p>
                  <p className="text-blue-600 underline">
                    <a
                      href="https://www.health.state.mn.us/communities/environment/envlab/sdsin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     {t('kalaiKitGalery.descriptionText19')}
                    </a>
                  </p>
                </div>
              </details>

              <details className="border-t border-gray-300 pt-4 cursor-pointer group">
                <summary className="text-md font-bold flex justify-between items-center">
                 {t('kalaiKitGalery.included')}
                  <span className="text-xl group-open:hidden">+</span>
                  <span className="text-xl hidden group-open:inline">−</span>
                </summary>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>{t('kalaiKitGalery.includedText1')}</li>
                  <li>{t('kalaiKitGalery.includedText2')}</li>
                  <li>{t('kalaiKitGalery.includedText3')}</li>
                  <li>{t('kalaiKitGalery.includedText4')}</li>
                  <li>{t('kalaiKitGalery.includedText5')}</li>
                  <li>{t('kalaiKitGalery.includedText6')}</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalaiKitProductSection;
