// export default function ShopByUtility() {
//   const categories = [
//     {
//       id: 1,
//       title: "COOKWARE &\nKITCHENWARE",
//       image: "/homepage/cookware.png",
//     },
//     {
//       id: 2,
//       title: "DRINKWARE",
//       image: "/homepage/drinkware.png",
//     },
//     {
//       id: 3,
//       title: "TABLEWARE &\nDINNERWARE",
//       image: "/homepage/tableware.png",
//     },
//     {
//       id: 4,
//       title: "SETS & COMBOS",
//       image: "/homepage/setsandcombo.png",
//     },
//     {
//       id: 5,
//       title: "GIFTING",
//       image: "/homepage/gifting.png",
//     },
//     {
//       id: 6,
//       title: "HOME DECOR",
//       image: "/homepage/homedecor.png",
//     },
//   ];

//   return (
//     <div className="w-full py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-orange-50 to-orange-100">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h4 className="text-[16px] sm:text-[18px] font-semibold tracking-[2.5px] uppercase mb-2">
//             CRAFTED FOR ALL YOUR NEEDS!
//           </h4>
//           <h2
//             className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] text-[#b01c1a] font-normal capitalize font-[Fondamento]"
//             style={{ fontFamily: "Fondamento, cursive" }}
//           >
//             Shop By Utility
//           </h2>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="group cursor-pointer flex flex-col items-center"
//             >
//               {/* Image Container */}
//               <div className="relative mb-3 overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
//               </div>

//               {/* Title */}
//               <h3 className="text-xs sm:text-sm text-center font-bold tracking-wide text-gray-800">
//                 {category.title.split("\n").map((line, i) => (
//                   <span key={i} className="block group-hover:text-[#b01c1a]">
//                     {line}
//                   </span>
//                 ))}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ShopByUtility() {
  const { t, i18n } = useTranslation();

  const categories = [
    {
      id: 1,
      title: t('shop_by_utility.categories.cookware'),
      image: "/homepage/cookware.png",
    },
    {
      id: 2,
      title: t('shop_by_utility.categories.drinkware'),
      image: "/homepage/drinkware.png",
    },
    {
      id: 3,
      title: t('shop_by_utility.categories.tableware'),
      image: "/homepage/tableware.png",
    },
    {
      id: 4,
      title: t('shop_by_utility.categories.sets_combos'),
      image: "/homepage/setsandcombo.png",
    },
    {
      id: 5,
      title: t('shop_by_utility.categories.gifting'),
      image: "/homepage/gifting.png",
    },
    {
      id: 6,
      title: t('shop_by_utility.categories.home_decor'),
      image: "/homepage/homedecor.png",
    },
  ];

  return (
    <div className={`w-full py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-orange-50 to-orange-50 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-[16px] sm:text-[18px] font-semibold tracking-[2.5px] uppercase mb-2">
            {t('shop_by_utility.subtitle')}
          </h4>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] text-[#b01c1a] font-normal capitalize font-[Fondamento]"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t('shop_by_utility.title')}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative mb-3 overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm text-center font-bold tracking-wide text-gray-800">
                {category.title.split("\n").map((line, i) => (
                  <span key={i} className="block group-hover:text-[#b01c1a]">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
