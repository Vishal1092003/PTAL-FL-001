// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import AsSeenOnTVGrid from './AsSeenOnTVGrid';

// export default function AsSeenOnTV() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div className={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
//       {/* Heading */}
//       <div className="bg-[#f9f4ec] py-12">
//         {/* Top Line */}
//         <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

//         {/* Heading */}
//         <h1
//           className="text-center text-3xl md:text-4xl text-[#8b0000]"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           {t('brass.heading')}
//         </h1>
//       </div>

//       {/* product */}
//       <AsSeenOnTVGrid />

//       {/* Benefits */}
//       <div className="bg-[#f9f4ec] px-6 md:px-20 py-16 text-[#1e1e1e]">
//         {/* Main Benefits Section */}
//         <div className="mb-16">
//           <h2
//             className="text-4xl font-semibold mb-4"
//             style={{ fontFamily: "'Fontamento', cursive" }}
//           >
//             {t('brass.benefits.title')}
//           </h2>
//           <p className="text-lg leading-relaxed">
//             {t('brass.benefits.description')}
//           </p>
//         </div>

//         {/* Pricing Section */}
//         <div className="mb-16">
//           <h2
//             className="text-3xl font-semibold mb-4"
//             style={{ fontFamily: "'Fontamento', cursive" }}
//           >
//             {t('brass.pricing.title')}
//           </h2>
//           <p className="text-lg leading-relaxed">
//             {t('brass.pricing.description')}
//           </p>
//         </div>

//         {/* Additional Benefits Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold mb-4">
//             {t('brass.additional_benefits.title')}
//           </h2>
//           <p className="text-lg leading-relaxed">
//             {t('brass.additional_benefits.description')}
//           </p>
//         </div>

//         {/* Pure Brass Section */}
//         <div>
//           <h2 className="text-3xl font-bold mb-4">
//             {t('brass.pure_brass.title')}
//           </h2>
//           <p className="text-lg leading-relaxed">
//             {t('brass.pure_brass.description')}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





// import AsSeenOnTVGrid from "./AsSeenOnTVGrid";

// export default function AsSeenOnTV() {
//   return (
//     <>
//       <div className="w-full">
//         <img
//           src="/AsSeenOnTv/Shark_Tank_Banner_02.webp" // Replace with your image path
//           alt="As Seen On TV Banner"
//           className="w-full h-64 md:h-96 object-cover"
//         />
//       </div>
//       <div className="flex justify-center w-full gap-4 p-4 bg-gray-100 rounded-xl">
//         <video className=" w-64 h-96 rounded-lg aspect-video object-cover" controls src="/AsSeenOnTv/video1.mp4" autoPlay loop />
//         <video className=" w-64 h-96  rounded-lg aspect-video object-cover" controls src="/AsSeenOnTv/video2.mp4" autoPlay loop />
//       </div>
//       {/* Heading */}
//       <div className="bg-[#f9f4ec] py-12">
//         {/* Top Line */}
//         <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

//         {/* Heading */}
//         <h1
//           className="text-center text-3xl md:text-4xl text-[#8b0000]"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           As seen on Tv
//         </h1>
//       </div>

//       {/* product */}

//       <AsSeenOnTVGrid />

//       {/* Benefits */}

      
//     </>
//   );
// }



import AsSeenOnTVGrid from "./AsSeenOnTVGrid";

export default function AsSeenOnTV() {
  return (
    <>
      {/* Full-width banner image */}
      <div className="w-full">
        <img
          src="/AsSeenOnTv/Shark_Tank_Banner_02.webp"
          alt="As Seen On TV Banner"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Responsive videos */}
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-xl w-full">
        <video
          className="w-full sm:w-64 h-96 rounded-lg aspect-video object-cover"
          controls
          src="/AsSeenOnTv/video1.mp4"
          autoPlay
          muted
          loop
        />
        <video
          className="w-full sm:w-64 rounded-lg aspect-video object-cover"
          controls
          src="/AsSeenOnTv/video2.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Heading */}
      <div className="bg-[#f9f4ec] py-12">
        {/* Top Line */}
        <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

        {/* Heading */}
        <h1
          className="text-center text-3xl md:text-4xl text-[#8b0000]"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          As seen on Tv
        </h1>
      </div>

      {/* Product grid or other content */}
      <AsSeenOnTVGrid />
    </>
  );
}