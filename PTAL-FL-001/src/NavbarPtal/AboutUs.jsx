// import { Bold, LucideBold } from "lucide-react";
// import MeetOurCreators from "./AboutUsComponents/MeetOurCreators";
// import OurPartners from "./AboutUsComponents/OurPartners";
// function AboutUs() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative w-full h-[80vh] max-h-[800px]">
//         <img
//           src="/Aboutsectionimages/heroBanner.webp"
//           alt="Traditional metal crafts workshop"
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           loading="eager"
//         />
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/30">
//           <h1 className="text-2xl md:text-4xl ">WHY DO WE EXIST?</h1>
//           <p
//             className="mt-4 text-4xl md:text-6xl"
//             style={{ fontFamily: "'Fondamento', cursive" }}
//           >
//             About Us
//           </p>
//         </div>
//       </div>
//       {/* First Quote Section */}
//       <div className="bg-[#f8f5ef] py-16 px-6 text-center">
//         <h1
//           className="text-3xl md:text-4xl font-medium text-[#a0141c]  mb-6"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           There Are Easy Choices, And Then There Are 'Right' Choices
//         </h1>
//         <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
//           It is a tough battle when deciding between these two. They don't get
//           along. They're like the angel and the devil that sit on your shoulders
//           talking to you. Each one wants you to listen to them.
//         </p>
//         <p className="text-lg md:text-xl font-semibold text-black max-w-2xl mx-auto leading-relaxed">
//           The right thing may be the toughest and most painful thing to do, but
//           the more reason why we should keep doing it.
//         </p>
//       </div>
     
      
//       {/* Our Mission Section */}
//       <div
//         className="bg-[#b01616] rounded-b-[4rem] pt-20 pb-12 text-center text-white relative"
//         style={{ fontFamily: "'Fondamento', cursive" }}
//       >
//         {/* Circular Logo */}
//         <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
//           <img
//             // src="/Aboutsectionimages/circularLogo.svg"
//             src="/newLogo2.png"
//             alt="P-TAL Mission Logo"
//             className="w-24 h-24 rounded-full border-4 border-[#f8f5ef] bg-[#f8f5ef]"
//             loading="lazy"
//           />
//         </div>

//         <h1 className="text-6xl  text-[#fcd900]  mb-4">Our Mission</h1>
//         <p className="max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed px-4">
//           To Revive The Age Old Traditions In A Contemporary Manner, And Ensure
//           <br />
//           People Take The Right Choices And Not Fall For The Easy Ones.
//         </p>
//       </div>
//       {/* Make The Right Choice Section */}
//       <div className="bg-[#f8f5ef] px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-tr-[4rem] rounded-bl-[4rem]">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6">
//           <p className="text-sm tracking-widest uppercase font-semibold text-gray-600">
//             Don't Fall For The Easy One
//           </p>
//           <h1
//             className="text-4xl md:text-5xl text-[#a0141c] "
//             style={{ fontFamily: "'Fondamento', cursive" }}
//           >
//             Make The Right Choice!
//           </h1>
//           <p className="text-lg text-gray-800 font-medium">
//             It's not just about the food you eat; how you cook
//             <br />
//             and consume your food matters!
//           </p>

//           {/* Feature Icons */}
//           <div className="flex flex-col gap-4">
//             {/* Ayurvedic */}
//             <div className="flex items-center gap-4 pt-2">
//               <img
//                 src="/Aboutsectionimages/AyurvedicLogo.svg"
//                 alt="Ayurvedic certified"
//                 className="w-12 h-12 object-contain"
//                 loading="lazy"
//               />
//               <div>
//                 <h3
//                   className="text-xl "
//                   style={{ fontFamily: "'Fondamento', cursive" }}
//                 >
//                   Ayurvedic
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   Traditional metals like Brass, Copper and Kansa are non toxic,
//                   boost immunity, aid digestion, slow down ageing and improve
//                   your overall health.
//                 </p>
//               </div>
//             </div>

//             {/* Authentic */}
//             <div className="flex items-center gap-4 pt-2">
//               <img
//                 src="/Aboutsectionimages/ISOLogo.svg"
//                 alt="ISO certified"
//                 className="w-12 h-12 object-contain"
//                 loading="lazy"
//               />
//               <div>
//                 <h3
//                   className="text-xl "
//                   style={{ fontFamily: "'Fondamento', cursive" }}
//                 >
//                   Authentic
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   All our products are made from 100% pure metal sheets and are
//                   ISO 9001:2005 certified
//                 </p>
//               </div>
//             </div>

//             {/* Sustainable */}
//             <div className="flex items-center gap-4 pt-2">
//               <img
//                 src="/Aboutsectionimages/SustainableLogo.svg"
//                 alt="Sustainable practices"
//                 className="w-12 h-12 object-contain"
//                 loading="lazy"
//               />
//               <div>
//                 <h3
//                   className="text-xl "
//                   style={{ fontFamily: "'Fondamento', cursive" }}
//                 >
//                   Sustainable
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   These utensils last a lifetime, are recyclable and help save
//                   gas (good conductors of heat) - making them sustainable and
//                   conscious choices.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src="/Aboutsectionimages/img1.webp"
//             alt="Handcrafted copper vessels"
//             className="w-full md:w-4/5 h-auto rounded-xl shadow-lg"
//             loading="lazy"
//           />
//         </div>
//       </div>
//       {/* The Story Section */}
//       <div className="bg-[#f8f5ef] px-6 md:px-20 py-16 space-y-12">
//         {/* Top Row: Image and Text */}
//         <div className="flex flex-col md:flex-row gap-10 items-center">
//           {/* Left Image */}
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src="/Aboutsectionimages/img2.webp"
//               alt="Traditional copper kitchenware"
//               className="rounded-xl shadow-md w-full md:w-3/4"
//               loading="lazy"
//             />
//           </div>

//           {/* Right Text */}
//           <div className="md:w-1/2 space-y-4">
//             <h2
//               className="text-5xl font-semibold text-[#a0141c]"
//               style={{ fontFamily: "'Fondamento', cursive" }}
//             >
//               The Story
//             </h2>
//             <p className="text-gray-800 text-lg leading-relaxed">
//               P-TAL (Punjab Thathera Art Legacy) is the story of a brand which
//               started as a college project under SRCC, to revive India's only
//               UNESCO listed craftform of Thatheras from Amritsar, Punjab. P-TAL
//               aims to become the No. 1 household brand of everything brass,
//               copper and kansa and we currently deal in kitchenware, cookware
//               and home decor segments.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Row: Text and Image */}
//         <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
//           {/* Left Text */}
//           <div className="md:w-1/2">
//             <p className="text-gray-800 text-lg leading-relaxed">
//               P-TAL runs on three fundamentals – developing an organised market
//               to promote the craft legacy, creating designs for urban consumers
//               and leveraging contemporary marketing to sell traditional art. We
//               also cater to varied consumer demands and crafts wine glasses,
//               vases and tissue paper boxes from metals and alloys. Besides
//               building a dedicated team passionate about boosting India’s
//               artisan economy, P-TAL educates people about.{" "}
//             </p>
//             <br />
//             <br />
//             <p style={{ fontSize: 22 }}>
//               In India, eating in brass and copper vessels has been practised
//               for years. Considered beneficial for health, these vessels are
//               expensive and harder to maintain and have lost the favour of the
//               masses in modern times. P-TAL hopes to change that.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src="/Aboutsectionimages/img3.webp"
//               alt="Artisan crafting metalware"
//               className="rounded-xl shadow-md w-full md:w-3/4"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//       {/* Impact Section */}
//       <div className="relative bg-[#f8f5ef] py-24 px-6 text-center">
//         <h4 className="text-sm tracking-widest font-semibold mb-4 text-gray-600">
//           WE RISE BY LIFTING OTHERS
//         </h4>
//         <h1
//           className="text-5xl mb-8 font-semibold text-[#a0141c]"
//           style={{ fontFamily: "'Fondamento', cursive" }}
//         >
//           Our Impact
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed mb-16">
//           P-TAL, which started as a college project, now impacts 55 families of
//           artisans, increasing their monthly incomes by over 1200% in the last 3
//           years. Just like the Thatheras, P-TAL is an epitome of transforming
//           tradition into trend while converting practice into perfection thus
//           moulding the vessels of hope!
//         </p>

//         {/* Centered Pie Chart */}
//         <div className="flex justify-center">
//           <img
//             src="/Aboutsectionimages/imgPiechart.webp"
//             alt="Artisan income growth statistics"
//             className="w-[70vw] max-w-none object-contain"
//             loading="lazy"
//           />
//         </div>
//         <div className="font-semibold text-2xl" style={{ marginTop: "50px" }}>
//           <p>
//             Easy choices make you happy in the short term, the right choices
//             keep you happy for life.
//             <br></br>
//             We at P-TAL want to make it easy for you to always take the right
//             choices!
//           </p>
//         </div>
//       </div>

//       <div className="relative w-full">
//         {/* Marquee Container */}
//         <div className="overflow-hidden bg-[#B01C1A] text-[#FFD700] py-4 h-[60px]">
//           <div className="flex whitespace-nowrap animate-marquee-delayed">
//             {/* First half */}
//             <div className="flex items-center">
//               {[...Array(6)].map((_, i) => (
//                 <span
//                   key={i}
//                   className="mx-8 text-2xl md:text-xl "
//                   style={{ fontFamily: "'Fondamento', cursive" }}
//                 >
//                   Transforming Traditions Into Trends
//                 </span>
//               ))}
//             </div>
//             {/* Duplicate */}
//             <div className="flex items-center">
//               {[...Array(6)].map((_, i) => (
//                 <span
//                   key={`dup-${i}`}
//                   className="mx-8 text-2xl md:text-xl"
//                   style={{ fontFamily: "'Fondamento', cursive" }}
//                 >
//                   Transforming Traditions Into Trends
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Video */}
//         <video
//           src="/aboutus.mp4"
//           className="w-full h-[80vh] object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         ></video>

//       </div>

//       <MeetOurCreators />
//       <OurPartners />
//     </>
//   );
// }

// export default AboutUs;


import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bold, LucideBold } from "lucide-react";
import MeetOurCreators from "./AboutUsComponents/MeetOurCreators";
import OurPartners from "./AboutUsComponents/OurPartners";

function AboutUs() {
  const { t, i18n } = useTranslation();

  return (
    <div className={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] max-h-[800px]">
        <img
          src="/Aboutsectionimages/heroBanner.webp"
          alt={t('about_us.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-black/30">
          <h1 className="text-2xl md:text-4xl">{t('about_us.hero.subtitle')}</h1>
          <p
            className="mt-4 text-4xl md:text-6xl"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            {t('about_us.hero.title')}
          </p>
        </div>
      </div>

      {/* First Quote Section */}
      <div className="bg-[#f8f5ef] py-16 px-6 text-center">
        <h1
          className="text-3xl md:text-4xl font-medium text-[#a0141c] mb-6"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          {t('about_us.quote_section.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mb-6 leading-relaxed">
          {t('about_us.quote_section.paragraph1')}
        </p>
        <p className="text-lg md:text-xl font-semibold text-black max-w-2xl mx-auto leading-relaxed">
          {t('about_us.quote_section.paragraph2')}
        </p>
      </div>
      
      {/* Our Mission Section */}
      <div
        className="bg-[#b01616] rounded-b-[4rem] pt-20 pb-12 text-center text-white relative"
        style={{ fontFamily: "'Fondamento', cursive" }}
      >
        {/* Circular Logo */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            src="/newLogo2.png"
            alt={t('about_us.mission.logo_alt')}
            className="w-24 h-24 rounded-full border-4 border-[#f8f5ef] bg-[#f8f5ef]"
            loading="lazy"
          />
        </div>

        <h1 className="text-6xl text-[#fcd900] mb-4">{t('about_us.mission.title')}</h1>
        <p className="max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed px-4">
          {t('about_us.mission.description')}
        </p>
      </div>

      {/* Make The Right Choice Section */}
      <div className="bg-[#f8f5ef] px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-tr-[4rem] rounded-bl-[4rem]">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-sm tracking-widest uppercase font-semibold text-gray-600">
            {t('about_us.choice_section.subtitle')}
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#a0141c]"
            style={{ fontFamily: "'Fondamento', cursive" }}
          >
            {t('about_us.choice_section.title')}
          </h1>
          <p className="text-lg text-gray-800 font-medium">
            {t('about_us.choice_section.description')}
          </p>

          {/* Feature Icons */}
          <div className="flex flex-col gap-4">
            {/* Ayurvedic */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src="/Aboutsectionimages/AyurvedicLogo.svg"
                alt={t('about_us.choice_section.features.ayurvedic.alt')}
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "'Fondamento', cursive" }}
                >
                  {t('about_us.choice_section.features.ayurvedic.title')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('about_us.choice_section.features.ayurvedic.description')}
                </p>
              </div>
            </div>

            {/* Authentic */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src="/Aboutsectionimages/ISOLogo.svg"
                alt={t('about_us.choice_section.features.authentic.alt')}
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "'Fondamento', cursive" }}
                >
                  {t('about_us.choice_section.features.authentic.title')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('about_us.choice_section.features.authentic.description')}
                </p>
              </div>
            </div>

            {/* Sustainable */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src="/Aboutsectionimages/SustainableLogo.svg"
                alt={t('about_us.choice_section.features.sustainable.alt')}
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
              <div>
                <h3
                  className="text-xl"
                  style={{ fontFamily: "'Fondamento', cursive" }}
                >
                  {t('about_us.choice_section.features.sustainable.title')}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t('about_us.choice_section.features.sustainable.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Aboutsectionimages/img1.webp"
            alt={t('about_us.choice_section.image_alt')}
            className="w-full md:w-4/5 h-auto rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* The Story Section */}
      <div className="bg-[#f8f5ef] px-6 md:px-20 py-16 space-y-12">
        {/* Top Row: Image and Text */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Aboutsectionimages/img2.webp"
              alt={t('about_us.story_section.image1_alt')}
              className="rounded-xl shadow-md w-full md:w-3/4"
              loading="lazy"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 space-y-4">
            <h2
              className="text-5xl font-semibold text-[#a0141c]"
              style={{ fontFamily: "'Fondamento', cursive" }}
            >
              {t('about_us.story_section.title')}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              {t('about_us.story_section.paragraph1')}
            </p>
          </div>
        </div>

        {/* Bottom Row: Text and Image */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Left Text */}
          <div className="md:w-1/2">
            <p className="text-gray-800 text-lg leading-relaxed">
              {t('about_us.story_section.paragraph2')}
            </p>
            <br />
            <br />
            <p style={{ fontSize: 22 }}>
              {t('about_us.story_section.paragraph3')}
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Aboutsectionimages/img3.webp"
              alt={t('about_us.story_section.image2_alt')}
              className="rounded-xl shadow-md w-full md:w-3/4"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="relative bg-[#f8f5ef] py-24 px-6 text-center">
        <h4 className="text-sm tracking-widest font-semibold mb-4 text-gray-600">
          {t('about_us.impact_section.subtitle')}
        </h4>
        <h1
          className="text-5xl mb-8 font-semibold text-[#a0141c]"
          style={{ fontFamily: "'Fondamento', cursive" }}
        >
          {t('about_us.impact_section.title')}
        </h1>
        <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed mb-16">
          {t('about_us.impact_section.description')}
        </p>

        {/* Centered Pie Chart */}
        <div className="flex justify-center">
          <img
            src="/Aboutsectionimages/imgPiechart.webp"
            alt={t('about_us.impact_section.chart_alt')}
            className="w-[70vw] max-w-none object-contain"
            loading="lazy"
          />
        </div>
        <div className="font-semibold text-2xl" style={{ marginTop: "50px" }}>
          <p>
            {t('about_us.impact_section.conclusion')}
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Marquee Container */}
        <div className="overflow-hidden bg-[#B01C1A] text-[#FFD700] py-4 h-[60px]">
          <div className="flex whitespace-nowrap animate-marquee-delayed">
            {/* First half */}
            <div className="flex items-center">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="mx-8 text-2xl md:text-xl"
                  style={{ fontFamily: "'Fondamento', cursive" }}
                >
                  {t('about_us.marquee_text')}
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
                  {t('about_us.marquee_text')}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Video */}
        <video
          src="/aboutus.mp4"
          className="w-full h-[80vh] object-cover"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      <MeetOurCreators />
      <OurPartners />
    </div>
  );
}

export default AboutUs;
