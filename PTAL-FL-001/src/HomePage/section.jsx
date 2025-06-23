// const Section = () => {
//   return (
//     <div
//       className="pt-[60px] pb-[90px] mb-[90px] rounded-b-[50px] w-full"
//       style={{
//         backgroundImage:
//           "url('//ptal.in/cdn/shop/files/Rectangle_6098.svg?v=1696833701')",
//         backgroundRepeat: "repeat",
//         backgroundSize: "50% auto",
//         backgroundPosition: "top left",
//         backgroundColor: "#fff3da",
//       }}
//     >
//       <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center max-w-[1330px] mx-auto w-full">
//         {/* Text Section */}
//         <div className="w-full lg:max-w-[522px] mb-10 lg:mb-0">
//           <div className="mb-[20px] text-left">
//             <p className="font-[Eczar] text-[18px] sm:text-[20px] lg:text-[22px] font-medium uppercase leading-[1.2] mb-[9px] mt-[10px]">
//               'ठ से ठठेरा'
//             </p>
//             <h2
//               className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[50px] lg:leading-[60px] text-[#b01c1a] font-[400] capitalize block m-0"
//               style={{ fontFamily: "Fondamento, cursive" }}
//             >
//               Revival of India’s only UNESCO listed craftform
//             </h2>
//           </div>

//           <div className="text-base leading-6 space-y-4">
//             <p>
//               P-TAL aims at reviving the dying craft form of the indigenous
//               Thathera community of Jandiala Guru, Amritsar, who have the
//               distinction of practising the only craftform from India to be
//               listed on UNESCO’s List of Intangible Cultural Heritage.
//             </p>
//             <p>
//               Every handcrafted product has a story of its own and is a carrier
//               of the rich legacy and traditions of these artisans.
//             </p>
//             <p>
//               Just like the Thatheras,{" "}
//               <strong className="font-semibold">
//                 P-TAL is an epitome of transforming traditions into trend while
//                 converting practice into perfection thus moulding the vessels of
//                 hope!
//               </strong>
//             </p>
//           </div>
//           <div style={{marginTop:"20px"}}>
//           <a
//             href="https://ptal.in/blogs/ayurvedic-metals/th-se-thathera-revival-of-india-s-only-unesco-listed-craftform"
//             className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//           >
//             Know More
//           </a></div>
//         </div>

//         {/* Images Section */}
//         <div className="w-full flex justify-center lg:justify-end items-end relative">
//           {/* Smaller Image - hidden at overlap-prone widths */}
//           <div className="absolute left-[10%] bottom-0 w-[180px] sm:w-[200px] md:w-[220px] h-[200px] sm:h-[240px] md:h-[280px] z-10 hidden xl:block">
//             <img
//               src="//ptal.in/cdn/shop/files/Rectangle_6054.jpg?v=1696921507"
//               alt="Artisan 1"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Main Image */}
//           <div className="ml-auto max-[575px]:ml-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[429px] h-[400px] sm:h-[480px] md:h-[530px] lg:h-[584px] rounded-t-[275px] overflow-hidden relative z-0">
//             <img
//               src="//ptal.in/cdn/shop/files/Rectangle_6053.jpg?v=1696919211"
//               alt="Artisan 2"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section;


import React from 'react';
import { useTranslation } from 'react-i18next';

const Section = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`pt-[60px] pb-[90px]  w-full ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}
      style={{
        backgroundImage:
          "url('//ptal.in/cdn/shop/files/Rectangle_6098.svg?v=1696833701')",
        backgroundRepeat: "repeat",
        backgroundSize: "50% auto",
        backgroundPosition: "top left",
        backgroundColor: "#fff3da",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center max-w-[1330px] mx-auto w-full">
        {/* Text Section */}
        <div className="w-full lg:max-w-[522px] mb-10 lg:mb-0">
          <div className="mb-[20px] text-left">
            <p className="font-[Eczar] text-[18px] sm:text-[20px] lg:text-[22px] font-medium uppercase leading-[1.2] mb-[9px] mt-[10px]">
              {t('section.subtitle')}
            </p>
            <h2
              className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[50px] lg:leading-[60px] text-[#b01c1a] font-[400] capitalize block m-0"
              style={{ fontFamily: "Fondamento, cursive" }}
            >
              {t('section.title')}
            </h2>
          </div>

          <div className="text-base leading-6 space-y-4">
            <p>
              {t('section.paragraph1')}
            </p>
            <p>
              {t('section.paragraph2')}
            </p>
            <p>
              {t('section.paragraph3')}
            </p>
          </div>
          <div style={{marginTop:"20px"}}>
            <a
              href={t('section.know_more_link')}
              className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#B01C1A] to-[#8B1416] text-white rounded-full hover:from-[#8B1416] hover:to-[#B01C1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('section.know_more')}
            </a>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full flex justify-center lg:justify-end items-end relative">
          {/* Smaller Image - hidden at overlap-prone widths */}
          <div className="absolute left-[10%] bottom-0 w-[180px] sm:w-[200px] md:w-[220px] h-[200px] sm:h-[240px] md:h-[280px] z-10 hidden xl:block">
            <img
              src="//ptal.in/cdn/shop/files/Rectangle_6054.jpg?v=1696921507"
              alt={t('section.alt_artisan1')}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Image */}
          <div className="ml-auto max-[575px]:ml-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[429px] h-[400px] sm:h-[480px] md:h-[530px] lg:h-[584px] rounded-t-[275px] overflow-hidden relative z-0">
            <img
              src="//ptal.in/cdn/shop/files/Rectangle_6053.jpg?v=1696919211"
              alt={t('section.alt_artisan2')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
