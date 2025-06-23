// import React, { useState } from "react";

// // Marquee component
// function Marquee({ text }) {
//   return (
//     <div className="overflow-hidden bg-[#a43c2a] w-full py-6">
//       <div className="whitespace-nowrap flex animate-marquee">
//         {[...Array(5)].map((_, i) => (
//           <span
//             key={i}
//             className="mx-8 text-sm md:text-base text-yellow-400 font-semibold tracking-wider"
//           >
//             {text}
//           </span>
//         ))}
//       </div>
//       {/* Tailwind custom animation */}
//       <style>{`
//         .animate-marquee {
//           animation: marquee 18s linear infinite;
//         }
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   );
// }

// // FAQ Accordion
// function FAQ({ faqs }) {
//   const [open, setOpen] = useState(null);
//   return (
//     <div className="max-w-xl mx-auto">
//       <h2 className="mb-4">HERE TO HELP YOU</h2>
//       <h2 className="text-2xl font-semibold mb-6 text-[#a43c2a]">Frequently Asked Questions</h2>
//       <div className="space-y-3">
//         {faqs.map((faq, idx) => (
//           <div key={idx} className="border-b">
//             <button
//               className="w-full flex justify-between items-center py-4 text-left text-base font-medium text-gray-900 focus:outline-none"
//               onClick={() => setOpen(open === idx ? null : idx)}
//             >
//               {faq.q}
//               <span className="ml-2 text-[#a43c2a]">{open === idx ? "−" : "+"}</span>
//             </button>
//             <div
//               className={`overflow-hidden transition-all duration-300 text-gray-700 ${
//                 open === idx ? "max-h-40 py-2" : "max-h-0"
//               }`}
//             >
//               {open === idx && <div>{faq.a}</div>}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-4 text-sm">
//         *Still Have Questions?{" "}
//         <a href="mailto:support@ptal.in" className="text-[#a43c2a]">
//           <span className="text-black">Email us at</span> <span className="underline">krishna.joshi@ptal.in</span> 
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function BecomeAnAffiliate() {
//   const faqs = [
//     {
//       q: "When do I get paid out?",
//       a: "30 days",
//     },
//     {
//       q: "How long does it take to get approved?",
//       a: "After receiving your application, we will review your Website and notify you of your acceptance or rejection into our Program. Please allow up to 48 hours (Mon-Fri) for your application to be approved.",
//     },
//   ];

//   return (
//     <div className="font-serif bg-[#f9f6ef] min-h-screen">
//       {/* Top Image */}
//       <div className="w-full h-48 md:h-64 relative">
//         <img
//           src="/FooterComponents/becomeAnAffiliate/banner.webp"
//           alt="Affiliate Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-[#f9f6ef] rounded-full border-4 border-white shadow-md">
//           <img src="/newLogo2.png" alt="PTAL Logo" className="h-21 w-21" />
//         </div>
//       </div>

//       {/* Intro Section */}
//       <section className="max-w-3xl mx-auto pt-16 pb-6 px-4 text-center">
//         <h1 className="text-3xl md:text-5xl font-base text-[#a43c2a] mb-8">Join Our Affiliate Program</h1>
//         <p className="text-base text-gray-800 font-semibold mb-2">
//           <span className="text-[#a43c2a]">We are excited to invite you to become a part of the P-TAL family!</span> As an affiliate, you’ll have the opportunity to share your experience with our authentic, Ayurvedic products and educate your readers and followers about our brand.
//         </p>
//         <p className="text-gray-800">
//           At P-TAL, we’re dedicated to bringing the essence of Indian traditions to the world through our authentic handcrafted products. Our collection features the UNESCO-listed art of Thathera, celebrating the rich heritage and craftsmanship of India.
//           <br /><br />
//           If you’re passionate about promoting high-quality, clean, and beautifully made products, we invite you to join our affiliate community today. <span className="text-[#a43c2a] font-semibold">Let’s spread the word together and make a positive impact!</span>
//         </p>
//       </section>

//       {/* Why Join Section */}
//       <section className="bg-[#e4d9ca] py-10 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-2xl md:text-4xl font-md text-[#a43c2a] text-center mb-8">
//             Why Should You Join The Programme?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#a43c2a]">
//             <div className="flex items-start gap-3">
//               <span className="text-2xl">🤝</span>
//               <div>
//                 <h3 className="font-base text-2xl text-black mb-1">Earn With Heart</h3>
//                 <p className="text-gray-700">Share the beauty of our authentic, handcrafted products and earn a commission on each purchase you refer.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-2xl">👥</span>
//               <div>
//                 <h3 className="font-base text-2xl text-black mb-1">Community</h3>
//                 <p className="text-gray-700">Become part of a family that celebrates Indian heritage and craftsmanship, where your voice and efforts make a meaningful impact.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-2xl">🆓</span>
//               <div>
//                 <h3 className="font-base text-2xl text-black mb-1">Free To Join</h3>
//                 <p className="text-gray-700">It’s completely free to become an affiliate. Once you apply, you’ll receive your unique link and assets. You’re rewarded for celebrating Indian heritage. We’ll help you grow and succeed in collaborating with us!</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-2xl">📈</span>
//               <div>
//                 <h3 className="font-base text-2xl text-black mb-1">Guiding Your Growth</h3>
//                 <p className="text-gray-700">We’re here to help, offering guidance on content creation and sharing the beauty of thoughtfully handcrafted items to reach the widest audience.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-2xl">💬</span>
//               <div>
//                 <h3 className="font-base text-2xl text-black mb-1">Dedicated Assistance</h3>
//                 <p className="text-gray-700">Reach out with any query, and our team will always be dedicated in a timely manner.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Marquee */}
//       <Marquee  text="Transforming Traditions Into Trends" />

//       {/* FAQ Section */}
//       <section className="py-12 px-4 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
//         <FAQ faqs={faqs} />
//         <div className="flex justify-center items-start">
//           <img
//             src="/FooterComponents/becomeAnAffiliate/utensils.webp"
//             alt="Handcrafted utensils"
//             className="rounded-lg rounded-t-full shadow-lg w-full max-w-xs object-cover"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useTranslation } from "react-i18next";



// FAQ Accordion
function FAQ({ faqs, t }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="mb-4">{t('becomeAffiliate.faq.helpTitle')}</h2>
      <h2 className="text-4xl  mb-6 text-red-700" style={{ fontFamily: "Fondamento, cursive" }}>{t('becomeAffiliate.faq.title')}</h2>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-base font-medium text-gray-900 focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {faq.q}
              <span className="ml-2 text-[#a43c2a]">{open === idx ? "−" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 text-gray-700 ${
                open === idx ? "max-h-40 py-2" : "max-h-0"
              }`}
            >
              {open === idx && <div>{faq.a}</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm">
        {t('becomeAffiliate.faq.stillHaveQuestions')}{" "}
        <a href="mailto:support@ptal.in" className="text-[#a43c2a]">
          <span className="text-black">{t('becomeAffiliate.faq.emailUs')}</span> <span className="underline">krishna.joshi@ptal.in</span> 
        </a>
      </div>
    </div>
  );
}

export default function BecomeAnAffiliate() {
  const { t, i18n } = useTranslation();
  
  const faqs = [
    {
      q: t('becomeAffiliate.faq.question1'),
      a: t('becomeAffiliate.faq.answer1'),
    },
    {
      q: t('becomeAffiliate.faq.question2'),
      a: t('becomeAffiliate.faq.answer2'),
    },
  ];

  return (
    <div className="font-serif bg-[#f9f6ef] min-h-screen">
      {/* Top Image */}
      <div className="w-full h-48 md:h-64 relative">
        <img
          src="/FooterComponents/becomeAnAffiliate/banner.webp"
          alt="Affiliate Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-[#f9f6ef] rounded-full border-4 border-white shadow-md">
          <img src="/newLogo2.png" alt="PTAL Logo" className="h-21 w-21" />
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-3xl mx-auto pt-16 pb-6 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-base text-[#a43c2a] mb-8"style={{ fontFamily: "Fondamento, cursive" }}>{t('becomeAffiliate.title')}</h1>
        <p className="text-base text-gray-800 font-semibold mb-2">
          <span className="text-[#a43c2a]">{t('becomeAffiliate.intro.highlight')}</span> {t('becomeAffiliate.intro.description')}
        </p>
        <p className="text-gray-800">
          {t('becomeAffiliate.intro.aboutPtal')}
          <br /><br />
          {t('becomeAffiliate.intro.invitation')} <span className="text-[#a43c2a] font-semibold">{t('becomeAffiliate.intro.callToAction')}</span>
        </p>
      </section>

      {/* Why Join Section */}
      <section className="bg-[#e4d9ca] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-md text-[#a43c2a] text-center mb-8"style={{ fontFamily: "Fondamento, cursive" }}>
            {t('becomeAffiliate.whyJoin.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#a43c2a]">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-base text-2xl text-black mb-1">{t('becomeAffiliate.whyJoin.earnWithHeart.title')}</h3>
                <p className="text-gray-700">{t('becomeAffiliate.whyJoin.earnWithHeart.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h3 className="font-base text-2xl text-black mb-1">{t('becomeAffiliate.whyJoin.community.title')}</h3>
                <p className="text-gray-700">{t('becomeAffiliate.whyJoin.community.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🆓</span>
              <div>
                <h3 className="font-base text-2xl text-black mb-1">{t('becomeAffiliate.whyJoin.freeToJoin.title')}</h3>
                <p className="text-gray-700">{t('becomeAffiliate.whyJoin.freeToJoin.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📈</span>
              <div>
                <h3 className="font-base text-2xl text-black mb-1">{t('becomeAffiliate.whyJoin.guidingGrowth.title')}</h3>
                <p className="text-gray-700">{t('becomeAffiliate.whyJoin.guidingGrowth.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="font-base text-2xl text-black mb-1">{t('becomeAffiliate.whyJoin.dedicatedAssistance.title')}</h3>
                <p className="text-gray-700">{t('becomeAffiliate.whyJoin.dedicatedAssistance.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Marquee Container */}
      <div className="overflow-hidden bg-[#B01C1A] text-[#FFD700] py-4 h-[60px]">
        <div className="flex whitespace-nowrap animate-marquee-delayed">
          {/* First half */}
          <div className="flex items-center">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-8 text-2xl md:text-xl "
                style={{ fontFamily: "'Fondamento', cursive" }}
              >
                {t('homepage.transformingLabel')}
              </span>
            ))}
          </div>
          {/* Duplicate */}
          <div className="flex items-center">
            {[...Array(6)].map((_, i) => (
              <span
                key={`dup-${i}`}
                className="mx-8 text-2xl md:text-xl"
                style={{ fontFamily: "'Fondamento', cursive" }}
              >
                {t('homepage.transformingLabel')}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="py-12 px-4 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        <FAQ faqs={faqs} t={t} />
        <div className="flex justify-center items-start">
          <img
            src="/FooterComponents/becomeAnAffiliate/utensils.webp"
            alt="Handcrafted utensils"
            className="rounded-lg rounded-t-full shadow-lg w-full max-w-xs object-cover"
          />
        </div>
      </section>
    </div>
  );
}
