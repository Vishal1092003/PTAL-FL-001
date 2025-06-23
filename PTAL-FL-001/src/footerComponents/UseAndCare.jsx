// import React from "react";

// import { useTranslation } from "react-i18next";

// export default function UseAndCare() {
//   const { t, i18n } = useTranslation();
//   const cleaningTips = [
//     {
//       title: "1. Plain boiling water and easily available tamarind or lemon",
//       content: (
//         <>
//           <p>
//             Add some tamarind and a little vinegar or lemon juice to a bowl of
//             hot water. Soak the utensils in this solution for 10–15 minutes
//             depending on the extent of the stains. Scrub with a soft cloth or
//             brush and rinse well. This method helps remove tarnish and restore
//             shine.
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "2. The multi-purpose baking soda",
//       content: (
//         <>
//           <p>
//             Sprinkle or form a paste with baking soda and water, apply to
//             utensils, and gently scrub. Baking soda helps lift stains and
//             tarnish without scratching the metal.
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "3. Tamarind paste + dishwashing liquid",
//       content: (
//         <>
//           <p>
//             Make the pulp of tamarind by soaking it in warm water or cooking it
//             further. Mix with a little dishwashing liquid to form a paste. Apply
//             on the utensils and let it sit. Scrub the piece and rinse with water
//             for a bright, clean finish.
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "4. Lemon + salt",
//       content: (
//         <>
//           <p>
//             Cut a lemon, dip it in salt, and rub it all over the utensil. The
//             mixture of the two acts as a natural abrasive and cleanser.
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "5. Tomato ketchup",
//       content: (
//         <>
//           <p>
//             Spread a little ketchup on the tarnished area, leave for a few
//             minutes, then clean and rinse. Ketchup contains acids that help
//             remove tarnish.
//           </p>
//         </>
//       ),
//     },
//     {
//       title: "6. Pitambari",
//       content: (
//         <>
//           <p>
//             Pitambari powder is an appropriate choice to clean copper utensils.
//             Only use minimal water and rub the powder gently for best results.
//           </p>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-amber-50 min-h-screen py-8 px-4 font-serif">
//       <div className="max-w-full mx-auto bg-amber-50 rounded-lg border-t-1 border-b-1  p-6">
//         <h1
//           className="text-2xl md:text-4xl font-md gap-4 text-center text-black mb-2"
//           style={{ fontFamily: "Fondamento, cursive" }}
//         >
//           Simple, Quick & Easy Cleaning Tips For Everyday Use Of Brass, Copper
//           And Kansa Utensils
//         </h1>
//         <h2 className="text-lg font-semibold text-center text-black p-6 mb-6">
//           Simple, Quick & Easy Cleaning Tips for everyday use of Brass, Copper
//           and Kansa utensils
//         </h2>
//         <div className="flex justify-center mb-6">
//           <img
//             src="/FooterComponents/useAndCare/image1.png"
//             alt="How to maintain the shine of P-TAL utensils"
//             className="rounded-lg w-full max-w-md shadow"
//           />
//         </div>
//         <p className="text-gray-900 text-lg mb-4">
//           With the growing emphasis on health and the resurfacing of ancient
//           wisdom, the charm of brass, copper and kansa utensils is everywhere.
//           The visibility of these metals is there almost in all households.
//           While the elders are thoroughly impressed with their benefits and
//           purity, younger generation too is quite attracted to their health
//           benefits as well as their cool and fancy designs. However, some
//           problems remain the same. How to clean brass utensils, how to maintain
//           copper vessels, and how to ensure brass utensils cleaning are some of
//           the questions that revolve in our heads on a daily basis. This might
//           come as a surprise to you that maintaining and cleaning copper, brass
//           and kansa is extremely easy! We bring you here some of the coolest,
//           fun and easiest as well as effective ways of cleaning and how to wash
//           brass, copper and kansa vessels!
//         </p>
//         {cleaningTips.map((tip, idx) => (
//           <div key={idx} className="mb-6 ">
//             <h3 className="text-black text-center font-semibold mb-2">
//               {tip.title}
//             </h3>
//             <div className="text-gray-900 text-center">{tip.content}</div>
//           </div>
//         ))}
//         <div className="flex flex-col items-center my-8">
//           <img
//             src="/FooterComponents/useAndCare/image2.png"
//             alt="Cleaning brass utensils video thumbnail"
//             className="rounded-lg w-full max-w-md mb-2 shadow"
//           />
//           <span className="text-lg text-gray-900">
//             It is also important to take complete care of the metalware after
//             cleaning them. They should be dried in the sun to ensure that no
//             moisture is left behind. How to clean brass, copper and kansa
//             utensils is quite an easy job in totality. One simple needs to use
//             them well and ensure their cleaning which can be done with very
//             simple household items. You must thus feel totally free to use these
//             things of beauty!
//           </span>
//         </div>
//         <div className="flex justify-center mt-8">
//           <img
//             src="/FooterComponents/useAndCare/image2.png"
//             alt="Brass, copper, and kansa utensils"
//             className="rounded-lg w-full max-w-lg shadow"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useTranslation } from "react-i18next";

export default function UseAndCare() {
  const { t } = useTranslation();

  const cleaningTips = Array.from({ length: 6 }, (_, i) => ({
    title: t(`useAndCare.tips.${i}.title`),
    content: <p>{t(`useAndCare.tips.${i}.content`)}</p>
  }));

  return (
    <div className="bg-amber-50 min-h-screen py-8 px-4 font-serif">
      <div className="max-w-full mx-auto bg-amber-50 rounded-lg border-t border-b border-gray-300 p-6">
        <h1
          className="text-2xl md:text-4xl font-medium text-center text-black mb-2"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t("useAndCare.title")}
        </h1>

        <h2 className="text-lg font-semibold text-center text-black p-6 mb-6">
          {t("useAndCare.subtitle")}
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src="/FooterComponents/useAndCare/image1.png"
            alt="How to maintain the shine of P-TAL utensils"
            className="rounded-lg w-full max-w-md shadow"
          />
        </div>

        <p className="text-gray-900 text-lg mb-4">
          {t("useAndCare.intro")}
        </p>

        {cleaningTips.map((tip, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-black text-center font-semibold mb-2">
              {tip.title}
            </h3>
            <div className="text-gray-900 text-center">{tip.content}</div>
          </div>
        ))}

        <div className="flex flex-col items-center my-8">
          <img
            src="/FooterComponents/useAndCare/image2.png"
            alt="Cleaning brass utensils video thumbnail"
            className="rounded-lg w-full max-w-md mb-2 shadow"
          />
          <span className="text-lg text-gray-900 text-center">
            {t("useAndCare.closingNote")}
          </span>
        </div>

        <div className="flex justify-center mt-8">
          <img
            src="/FooterComponents/useAndCare/image2.png"
            alt="Brass, copper, and kansa utensils"
            className="rounded-lg w-full max-w-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
