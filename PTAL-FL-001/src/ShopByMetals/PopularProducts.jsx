// import React from "react";
// import KansaProductGrid from "./KansaProductGrid";

// function PopularProducts() {
//   return (
//     <div>
//       {/* Heading */}

//       <div className="bg-[#f9f4ec] py-12">
//         {/* Top Line */}
//         <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

//         {/* Heading */}
//         <h1
//           className="text-center text-3xl md:text-4xl text-[#8b0000]"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           Our Popular Products
//         </h1>
//       </div>
//       <KansaProductGrid />
//     </div>
//   );
// }

// export default PopularProducts;

import React from "react";
import { useTranslation } from "react-i18next";
import KansaProductGrid from "./KansaProductGrid";

function PopularProducts() {
  const { t, i18n } = useTranslation();

  return (
    <div className={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Heading */}
      <div className="bg-[#f9f4ec] py-12">
        {/* Top Line */}
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

        {/* Heading */}
        <h1
          className="text-center text-3xl md:text-4xl text-[#8b0000]"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          {t('popular_products.heading')}
        </h1>
      </div>
      <KansaProductGrid />
    </div>
  );
}

export default PopularProducts;

