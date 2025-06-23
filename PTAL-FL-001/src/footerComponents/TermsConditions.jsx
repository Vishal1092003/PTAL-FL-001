// import React from "react";
// import { useTranslation } from "react-i18next";
// export default function TermsConditions() {
  
//   const { t } = useTranslation();

//   return (
//     <div className="min-h-screen bg-[#f8f6ef] py-10 px-4 sm:px-6 lg:px-12 font-serif text-[#3e2b1c]">
//       <div className="max-w-5xl mx-auto bg-[#f8f6ef] border-y border-gray-300 p-4 sm:p-6 lg:p-10">
//         {/* INTRODUCTION */}
//         <h1
//           className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-red-800 mb-6 tracking-wide"
//           style={{ fontFamily: "Fondamento, cursive" }}
//         >
//           INTRODUCTION
//         </h1>
//         <p className="mb-6 text-sm sm:text-base leading-relaxed">
//           These Website Standard Terms and Conditions written on this webpage
//           shall manage your use of our website, P-tal accessible at
//           https://ptal.in.
//           <br />
//           These Terms will be applied fully and affect to your use of this
//           Website. By using this Website, you agreed to accept all terms and
//           conditions written here. You must not use this Website if you disagree
//           with any of these Website Standard Terms and Conditions.
//           <br />
//           Minors or people below 18 years old are not allowed to use this
//           Website.
//         </p>

//         {/* Section Heading Component */}
//         {[
//           {
//             title: "INTELLECTUAL PROPERTY RIGHTS",
//             content: `Other than the content you own, under these Terms, P-tal and/or its licensors own all the intellectual property rights and materials contained in this Website.
// You are granted limited license only for purposes of viewing the material contained on this Website.`,
//           },
//           {
//             title: "RESTRICTIONS",
//             content: `You are specifically restricted from all of the following:`,
//             list: [
//               "publishing any Website material in any other media;",
//               "selling, sublicensing and/or otherwise commercializing any Website material;",
//               "publicly performing and/or showing any Website material;",
//               "using this Website in any way that is or may be damaging to this Website;",
//               "using this Website in any way that impacts user access to this Website;",
//               "using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;",
//               "engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;",
//               "using this Website to engage in any advertising or marketing.",
//             ],
//             extra: `Certain areas of this Website are restricted from being access by you and P-tal may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.`,
//           },
//           {
//             title: "YOUR CONTENT",
//             content: `In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant P-tal a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
// Your Content must be your own and must not be invading any third-party’s rights. P-tal reserves the right to remove any of Your Content from this Website at any time without notice.`,
//           },
//           {
//             title: "YOUR PRIVACY",
//             content: "Please read Privacy Policy.",
//           },
//           {
//             title: "NO WARRANTIES",
//             content: `This Website is provided "as is," with all faults, and P-tal expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.`,
//           },
//           {
//             title: "LIMITATION OF LIABILITY",
//             content: `In no event shall P-tal, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. P-tal, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.`,
//           },
//           {
//             title: "INDEMNIFICATION",
//             content: `You hereby indemnify to the fullest extent P-tal from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.`,
//           },
//           {
//             title: "SEVERABILITY",
//             content: `If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.`,
//           },
//           {
//             title: "VARIATION OF TERMS",
//             content: `P-tal is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.`,
//           },
//           {
//             title: "ASSIGNMENT",
//             content: `The P-tal is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.`,
//           },
//           {
//             title: "ENTIRE AGREEMENT",
//             content: `These Terms constitute the entire agreement between P-tal and you in relation to your use of this Website, and supersede all prior agreements and understandings.`,
//           },
//           {
//             title: "GOVERNING LAW & JURISDICTION",
//             content: `These Terms will be governed by and interpreted in accordance with the laws of the State of [Your State] and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.`,
//           },
//         ].map((section, index) => (
//           <div key={index} className="mb-10">
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl text-center text-red-800 font-medium mb-4 tracking-wide"
//               style={{ fontFamily: "Fondamento, cursive" }}
//             >
//               {section.title}
//             </h2>
//             <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
//               {section.content}
//             </p>
//             {section.list && (
//               <ul className="list-disc list-inside mt-4 mb-4 space-y-1 text-sm sm:text-base">
//                 {section.list.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             )}
//             {section.extra && (
//               <p className="text-sm sm:text-base leading-relaxed">
//                 {section.extra}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useTranslation } from "react-i18next";

export default function TermsConditions() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8f6ef] py-10 px-4 sm:px-6 lg:px-12 font-serif text-[#3e2b1c]">
      <div className="max-w-5xl mx-auto bg-[#f8f6ef] border-y border-gray-300 p-4 sm:p-6 lg:p-10">
        {/* INTRODUCTION */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-center text-red-800 mb-6 tracking-wide"
          style={{ fontFamily: "Fondamento, cursive" }}
        >
          {t('termsConditions.introduction.title')}
        </h1>
        <p className="mb-6 text-sm sm:text-base leading-relaxed">
          {t('termsConditions.introduction.part1')}
          <br />
          {t('termsConditions.introduction.part2')}
          <br />
          {t('termsConditions.introduction.part3')}
        </p>

        {/* Section Heading Component */}
        {[
          {
            title: t('termsConditions.intellectualProperty.title'),
            content: t('termsConditions.intellectualProperty.content'),
          },
          {
            title: t('termsConditions.restrictions.title'),
            content: t('termsConditions.restrictions.content'),
            list: [
              t('termsConditions.restrictions.list.item1'),
              t('termsConditions.restrictions.list.item2'),
              t('termsConditions.restrictions.list.item3'),
              t('termsConditions.restrictions.list.item4'),
              t('termsConditions.restrictions.list.item5'),
              t('termsConditions.restrictions.list.item6'),
              t('termsConditions.restrictions.list.item7'),
              t('termsConditions.restrictions.list.item8'),
            ],
            extra: t('termsConditions.restrictions.extra'),
          },
          {
            title: t('termsConditions.yourContent.title'),
            content: t('termsConditions.yourContent.content'),
          },
          {
            title: t('termsConditions.privacy.title'),
            content: t('termsConditions.privacy.content'),
          },
          {
            title: t('termsConditions.noWarranties.title'),
            content: t('termsConditions.noWarranties.content'),
          },
          {
            title: t('termsConditions.limitationLiability.title'),
            content: t('termsConditions.limitationLiability.content'),
          },
          {
            title: t('termsConditions.indemnification.title'),
            content: t('termsConditions.indemnification.content'),
          },
          {
            title: t('termsConditions.severability.title'),
            content: t('termsConditions.severability.content'),
          },
          {
            title: t('termsConditions.variationTerms.title'),
            content: t('termsConditions.variationTerms.content'),
          },
          {
            title: t('termsConditions.assignment.title'),
            content: t('termsConditions.assignment.content'),
          },
          {
            title: t('termsConditions.entireAgreement.title'),
            content: t('termsConditions.entireAgreement.content'),
          },
          {
            title: t('termsConditions.governingLaw.title'),
            content: t('termsConditions.governingLaw.content'),
          },
        ].map((section, index) => (
          <div key={index} className="mb-10">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-center text-red-800 font-medium mb-4 tracking-wide"
              style={{ fontFamily: "Fondamento, cursive" }}
            >
              {section.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
            {section.list && (
              <ul className="list-disc list-inside mt-4 mb-4 space-y-1 text-sm sm:text-base">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {section.extra && (
              <p className="text-sm sm:text-base leading-relaxed">
                {section.extra}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
