// import CopperProductGrid from "./CopperProductGrid";

// export default function Copper() {
//   return (
//     <>
//       {/* Heading */}

//       <div className="bg-[#f9f4ec] py-12">
//         {/* Top Line */}
//         <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>

//         {/* Heading */}
//         <h1
//           className="text-center text-3xl md:text-4xl text-[#8b0000]"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           Copper Ka Bartan 
//         </h1>
//       </div>
//       {/* ProductGrid */}
//       <CopperProductGrid />

//       {/* Benefits */}

//       <div className="bg-[#f9f4ec] px-6 md:px-20 py-16 text-[#1e1e1e]">
//         {/* English Section */}
//         <div className="mb-16">
//           <h2
//             className="text-4xl font-semibold mb-4"
//             style={{ fontFamily: "'Fontamento', cursive" }}
//           >
//             Key Benefits Of Copper Ke Bartan
//           </h2>
//           <p className="text-lg leading-relaxed">
//             Are you looking for healthy weight loss or a fit life or building
//             immunity? Brass ke bartan are a perfect channel to lead a healthy
//             life. Food prepared & consumed in brass has the ability to increase
//             hemoglobin count. The food is tummy friendly and also heart
//             friendly! The eco-friendly brass ke bartan also take less time to
//             get heated and thus cooking is no longer a long work! Along with
//             making life easy, eating food out of brass ware also helps in
//             preventing abdominal infections. The shiny pital ke bartan add a
//             lovely touch to one’s kitchen.
//           </p>
//         </div>

//         <div className="mb-16">
//           <h2
//             className="text-3xl font-semibold mb-4"
//             style={{ fontFamily: "'Fontamento', cursive" }}
//           >
//             Pure Copper ke bartan at Reasonable Price
//           </h2>
//           <p className="text-lg leading-relaxed">
//             Authenticity is a rarity in today’s day and age! Especially when it
//             is about health, one needs to be even more careful about spending
//             the right amount on the right things. Peetal ke bartan have
//             tremendous health benefits and thus spending on them is a wise idea.
//             However, do ensure that you are paying for originality and purity.
//             With <strong>P-Tal</strong> this tension is no more there. There is
//             a vast range of pital ke bartan ranging from a simple brass kadhai
//             of approx. <strong>Rs 3700/-</strong> to a brass saucepan of{" "}
//             <strong>Rs 1300/-</strong>. Brass handi, brass tawa, brass masala
//             box, brass ladles, brass cocktail glass are also available.
//           </p>
//         </div>

//         {/* Hindi Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold mb-4">
//             पीतल के बर्तनों के प्रमुख लाभ
//           </h2>
//           <p className="text-lg leading-relaxed">
//             क्या आप स्वस्थ वजन घटाने या फिट जीवन या प्रतिरक्षा निर्माण की तलाश
//             में हैं? पीतल के बर्तन स्वस्थ जीवन जीने का एक आदर्श माध्यम हैं। पीतल
//             में तैयार और सेवन किए गए भोजन में हीमोग्लोबिन की संख्या बढ़ाने की
//             क्षमता होती है। भोजन पेट के अनुकूल और हृदय के अनुकूल भी है! पर्यावरण
//             के अनुकूल पीतल के बर्तन को गर्म होने में भी कम समय लगता है और इस
//             प्रकार खाना पकाना अब कोई लंबा काम नहीं है! जीवन को आसान बनाने के
//             साथ-साथ पीतल के बर्तनों से भोजन करने से पेट के संक्रमण को रोकने में
//             भी मदद मिलती है। चमकदार पीतल के बर्तन रसोई की सुंदरता को भी बढ़ाते
//             हैं।
//           </p>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold mb-4">
//             उचित मूल्य पर शुद्ध पीतल के बर्तन
//           </h2>
//           <p className="text-lg leading-relaxed">
//             आज के दिन और युग में प्रामाणिकता दुर्लभ है! खासकर जब बात स्वास्थ्य
//             की हो तो सही चीजों पर सही राशि खर्च करने को लेकर और भी अधिक सावधान
//             रहने की जरूरत है। पीतल के बर्तन के जबरदस्त स्वास्थ्य लाभ हैं और
//             इसलिए उन पर खर्च करना एक बुद्धिमानी भरा विचार है। हालांकि, सुनिश्चित
//             करें कि आप मौलिकता और शुद्धता के लिए भुगतान कर रहे हैं, पी-ताल के
//             साथ यह तनाव अब नहीं है। पी-ताल पर सभी प्रकार के बर्तन उपलब्ध हैं,
//             पीतल की कढ़ाई लगभग रुपये 3700/- से लेकर पीतल की कटोरी लगभग रुपये
//             700/- में। पीतल की हांडी, पीतल का तवा, पीतल का मसाला डिब्बा, पीतल की
//             कलछी, पीतल का कॉकटेल गिलास भी उपलब्ध हैं।
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';
import { useTranslation } from 'react-i18next';
import CopperProductGrid from "./CopperProductGrid";

export default function Copper() {
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
          {t('copper.heading')}
        </h1>
      </div>
      
      {/* ProductGrid */}
      <CopperProductGrid />

      {/* Benefits */}
      <div className="bg-[#f9f4ec] px-6 md:px-20 py-16 text-[#1e1e1e]">
        {/* Main Benefits Section */}
        <div className="mb-16">
          <h2
            className="text-4xl font-semibold mb-4"
            style={{ fontFamily: "'Fontamento', cursive" }}
          >
            {t('copper.benefits.title')}
          </h2>
          <p className="text-lg leading-relaxed">
            {t('copper.benefits.description')}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{ fontFamily: "'Fontamento', cursive" }}
          >
            {t('copper.pricing.title')}
          </h2>
          <p className="text-lg leading-relaxed">
            {t('copper.pricing.description')}
          </p>
        </div>

        {/* Additional Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            {t('copper.additional_benefits.title')}
          </h2>
          <p className="text-lg leading-relaxed">
            {t('copper.additional_benefits.description')}
          </p>
        </div>

        {/* Pure Copper Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {t('copper.pure_copper.title')}
          </h2>
          <p className="text-lg leading-relaxed">
            {t('copper.pure_copper.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
