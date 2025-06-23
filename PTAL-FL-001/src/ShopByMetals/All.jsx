// import React from "react";
// import AllProductGrid from "./AllProductGrid";

// const All = () => {
//   return (
//     <div className="bg-gray-50 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Products Title */}
//         <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
//         <h2
//           className="text-4xl md:text-5xl text-red-700 text-center mb-12"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           Products
//         </h2>

//         {/* Product Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Copper Product Card */}
//           <div className="relative bg-black rounded-lg overflow-hidden aspect-[3/4] group cursor-pointer">
//             {/* Video Background */}
//             <video
//               className="absolute inset-0 w-full h-full object-cover"
//               src="/allProductsmedia/video1.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

//             {/* Bottom Text */}
//             <div className="absolute bottom-4 left-4 right-4 z-20">
//               <p className="text-white text-sm font-medium">Know your metal!</p>
//             </div>
//           </div>

//           {/* Brass Product Card */}
//           <div className="relative bg-black rounded-lg overflow-hidden aspect-[3/4] group cursor-pointer">
//             {/* Video Background */}
//             <video
//               className="absolute inset-0 w-full h-full object-cover"
//               src="/allProductsmedia/video2.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

//             {/* Bottom Text */}
//             <div className="absolute bottom-4 left-4 right-4 z-20">
//               <p className="text-white text-sm font-medium">
//                 Brass Thaali - Thaali / Plate for Dining
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <AllProductGrid />
//     </div>
//   );
// };

// export default All;


import React from "react";
import { useTranslation } from "react-i18next";
import AllProductGrid from "./AllProductGrid";

const All = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={`bg-gray-50 py-16 px-4 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Products Title */}
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
        <h2
          className="text-4xl md:text-5xl text-red-700 text-center mb-12"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          {t('all_products.title')}
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Copper Product Card */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-[3/4] group cursor-pointer">
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/allProductsmedia/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

            {/* Bottom Text */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <p className="text-white text-sm font-medium">
                {t('all_products.copper_card.text')}
              </p>
            </div>
          </div>

          {/* Brass Product Card */}
          <div className="relative bg-black rounded-lg overflow-hidden aspect-[3/4] group cursor-pointer">
            {/* Video Background */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/allProductsmedia/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

            {/* Bottom Text */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <p className="text-white text-sm font-medium">
                {t('all_products.brass_card.text')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <AllProductGrid />
    </div>
  );
};

export default All;
