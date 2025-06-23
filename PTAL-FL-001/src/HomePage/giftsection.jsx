// const GiftSection = () => {
//   return (
//     <div className="w-full px-6 sm:px-10 lg:px-[40px] my-16">
//       <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
//         {/* Left Side - Image */}
//         <div className="w-full max-w-[510px]">
//           <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[613px] rounded-t-[200px] overflow-hidden">
//             <img
//               src="homepage/gift.png"
//               alt="Gift"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//           </div>
//           <div className="text-center mt-6 lg:hidden">
//             <a
//               href="https://ptal.in/collections/gifting"
//               className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//             >
//               Explore More
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Text */}
//         <div className="w-full max-w-[442px] text-left">
//           <p className="text-[18px] font-semibold leading-[24px] tracking-[2.5px] uppercase mb-2">
//             Personalised for you!
//           </p>
//           <h2
//             className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] text-[#b01c1a] capitalize font-[Fondamento] mb-6"
//             style={{ fontFamily: "Fondamento, cursive" }}
//           >
//             Gift of health, gift of impact
//           </h2>
//           <p className="text-base leading-[24px] mb-6">
//             When every human being is unique, why should your gift be like
//             someone else’s? Explore the wide range of premium curations by P-TAL
//             and experience the joy of gifting customised handcrafted
//             assortments!
//           </p>
//           <div className="hidden lg:flex">
//            <a
//               href="https://ptal.in/collections/gifting"
//               className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//             >
//               Explore More
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GiftSection;


import React from 'react';
import { useTranslation } from 'react-i18next';

const GiftSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`w-full px-6 sm:px-10 lg:px-[40px] my-16 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Image */}
        <div className="w-full max-w-[510px]">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[613px] rounded-t-[200px] overflow-hidden">
            <img
              src="homepage/gift.png"
              alt={t('gift_section.image_alt')}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-6 lg:hidden">
            <a
              href="https://ptal.in/collections/gifting"
              className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('gift_section.explore_more')}
            </a>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full max-w-[442px] text-left">
          <p className="text-[18px] font-semibold leading-[24px] tracking-[2.5px] uppercase mb-2">
            {t('gift_section.subtitle')}
          </p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] text-[#b01c1a] capitalize font-[Fondamento] mb-6"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t('gift_section.title')}
          </h2>
          <p className="text-base leading-[24px] mb-6">
            {t('gift_section.description')}
          </p>
          <div className="hidden lg:flex">
           <a
              href="https://ptal.in/collections/gifting"
              className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('gift_section.explore_more')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
