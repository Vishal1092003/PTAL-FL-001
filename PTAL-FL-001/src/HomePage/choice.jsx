// import React from "react";

// const ChoiceSection = () => {
//   return (
//     <div className="w-full my-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-start gap-12">
//         {/* Left Text Section */}
//         <div className="w-full max-w-[514px] pt-8 lg:pt-[80px]">
//           {/* Heading */}
//           <div className="mb-6 text-left">
//             <p className="text-[16px] sm:text-[18px] font-semibold leading-[24px] tracking-[2.5px] uppercase mb-3">
//               Don’t fall for the easy one
//             </p>
//             <h2
//               className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#b01c1a] leading-tight capitalize font-[Fondamento] mb-4"
//               style={{ fontFamily: "Fondamento, cursive" }}
//             >
//               Make the right choice!
//             </h2>
//           </div>

//           {/* Subtext */}
//           <p className="text-[17px] sm:text-[18px] font-semibold leading-[28px] mb-4">
//             It’s not just about the food you eat; how you cook and consume your food matters!
//           </p>

//           {/* List */}
//           <ul className="mt-6 space-y-8">
//             {/* List Items */}
//             {[
//               {
//                 title: "Ayurvedic",
//                 img: "https://ptal.in/cdn/shop/files/Group_1073715739.svg?v=1697102542",
//                 desc:
//                   "Traditional metals like Brass, Copper and Kansa are non toxic, boost immunity, aid digestion, slow down ageing and improve your overall health.",
//               },
//               {
//                 title: "Authentic",
//                 img: "https://ptal.in/cdn/shop/files/Group_1073715209.svg?v=1696935798",
//                 desc:
//                   "All our products are made from 100% pure metal sheets and are ISO 9001:2005 certified",
//               },
//               {
//                 title: "Sustainable",
//                 img: "https://ptal.in/cdn/shop/files/Black_2.svg?v=1696935778",
//                 desc:
//                   "These utensils last a lifetime, are recyclable and help save gas (good conductors of heat) - making them sustainable and conscious choices.",
//               },
//             ].map((item, index) => (
//               <li key={index} className="flex items-start">
//                 <div className="min-w-[48px] sm:min-w-[58px] mr-5">
//                   <img src={item.img} alt={item.title} className="w-full" />
//                 </div>
//                 <div>
//                   <h3
//                     className="text-[24px] sm:text-[28px] lg:text-[32px] font-normal mb-2 font-[Fondamento]"
//                     style={{ fontFamily: "Fondamento, cursive" }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-[16px] sm:text-[18px] leading-[24px]">{item.desc}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Image Section */}
//         <div className="w-full max-w-[682px]">
//           <img
//             src="https://ptal.in/cdn/shop/files/Rectangle_6021_1.jpg?v=1696937236"
//             alt="Healthy Choice"
//             className="block w-full rounded-lg mb-4"
//           />
//           <img
//             src="https://ptal.in/cdn/shop/files/Rectangle_6021_2.jpg?v=1697107143"
//             alt="Alternate"
//             className="hidden w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChoiceSection;



import React from "react";
import { useTranslation } from "react-i18next";

const ChoiceSection = () => {
  const { t, i18n } = useTranslation();

  const choiceItems = [
    {
      title: t('choice_section.items.ayurvedic.title'),
      img: "https://ptal.in/cdn/shop/files/Group_1073715739.svg?v=1697102542",
      desc: t('choice_section.items.ayurvedic.description'),
    },
    {
      title: t('choice_section.items.authentic.title'),
      img: "https://ptal.in/cdn/shop/files/Group_1073715209.svg?v=1696935798",
      desc: t('choice_section.items.authentic.description'),
    },
    {
      title: t('choice_section.items.sustainable.title'),
      img: "https://ptal.in/cdn/shop/files/Black_2.svg?v=1696935778",
      desc: t('choice_section.items.sustainable.description'),
    },
  ];

  return (
    <div className={`w-full my-16 px-4 sm:px-6 lg:px-8 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Text Section */}
        <div className="w-full max-w-[514px] pt-8 lg:pt-[80px]">
          {/* Heading */}
          <div className="mb-6 text-left">
            <p className="text-[16px] sm:text-[18px] font-semibold leading-[24px] tracking-[2.5px] uppercase mb-3">
              {t('choice_section.subtitle')}
            </p>
            <h2
              className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#b01c1a] leading-tight capitalize font-[Fondamento] mb-4"
              style={{ fontFamily: "Fondamento, cursive" }}
            >
              {t('choice_section.title')}
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-[17px] sm:text-[18px] font-semibold leading-[28px] mb-4">
            {t('choice_section.description')}
          </p>

          {/* List */}
          <ul className="mt-6 space-y-8">
            {/* List Items */}
            {choiceItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className={`min-w-[48px] sm:min-w-[58px] ${i18n.language === 'ar' ? 'ml-5' : 'mr-5'}`}>
                  <img src={item.img} alt={item.title} className="w-full" />
                </div>
                <div>
                  <h3
                    className="text-[24px] sm:text-[28px] lg:text-[32px] font-normal mb-2 font-[Fondamento]"
                    style={{ fontFamily: "Fondamento, cursive" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[16px] sm:text-[18px] leading-[24px]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-full max-w-[682px]">
          <img
            src="https://ptal.in/cdn/shop/files/Rectangle_6021_1.jpg?v=1696937236"
            alt={t('choice_section.image_alt')}
            className="block w-full rounded-lg mb-4"
          />
          <img
            src="https://ptal.in/cdn/shop/files/Rectangle_6021_2.jpg?v=1697107143"
            alt={t('choice_section.image_alt_alternate')}
            className="hidden w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ChoiceSection;
