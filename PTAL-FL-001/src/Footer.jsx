// import { Facebook, Instagram } from "lucide-react";
// import { Link } from "react-router-dom";
// function Footer() {
//   return (
//     <footer className="bg-[#b01616] text-white px-8 py-12 rounded-t-[5rem]">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo & Address */}
//         <div>
//           <div className="flex items-center mb-2">
//             <img
//               src="/newestLogo.png"
//               alt="P-TAL Logo"
//               className="h-60 w-60 mr-2 rounded-4xl"
//             />
//           </div>
//           <p className="mb-2 text-3xl font-semibold">Owned By</p>
//           <p className="text-sm">
//             Karshini P-TAL Inc
//             <br />
//             8 The Green #20482
//             <br />
//             Dover, DE, 19901, United States
//           </p>
//         </div>

//         {/* Know More */}
//         <div>
//           <h3
//             className="text-2xl mb-5"
//             style={{ fontFamily: "Fondamento, cursive" }}
//           >
//             Know More
//           </h3>
//           <ul className="space-y-2 text-sm">
//             {[
//               { name: "About SANAAYA", to: "/NavbarPtal/AboutUs" },
//               { name: "Privacy Policy", to: "/footerComponents/PrivacyPolicy" },
//               { name: "Terms & Conditions", to: "/footerComponents/TermsConditions" },
//               {
//                 name: "Become An Affiliate",
//                 to: "/footerComponents/BecomeAnAffiliate",
//               },
//               { name: "Contact Us", to: "/NavbarPtal/ContactUs" },
//               { name: "FAQ", to: "/NavbarPtal/Faqs" },
//               { name: "Returns/Refunds Policy", to: "/footerComponents/ReturnsRefunds" },
//               {
//                 name: "Corporate Gifting",
//                 to: "/footerComponents/CorporateGifting",
//               },
//             ].map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.to}
//                   className="hover:text-yellow-300 transition-colors"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Help */}
//         <div>
//           <h3
//             className="text-2xl mb-5"
//             style={{ fontFamily: "Fondamento, cursive" }}
//           >
//             Help
//           </h3>
//           <ul className="space-y-2 text-sm">
//             {[
//               { name: "Use And Care", to: "/footerComponents/UseAndCare" },
//               { name: "Shipping", to: "/footerComponents/Shipping" },
//             ].map((item) => (
//               <li key={item.name}>
//                 <Link
//                   to={item.to}
//                   className="hover:text-yellow-300 transition-colors"
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Join Email List */}
//         <div>
//           <h3
//             className="text-2xl mb-5"
//             style={{ fontFamily: "Fondamento, cursive" }}
//           >
//             Join Our Email List
//           </h3>
//           <p className="text-sm mb-4">
//             Be the first to hear about our latest promotions, new products and
//             more.
//           </p>
//           <form className="flex items-center border-b border-white py-1">
//             <input
//               type="email"
//               placeholder="Enter email"
//               className="bg-transparent text-white placeholder-white w-full outline-none"
//             />
//             <button type="submit" className="text-white ml-2">
//               →
//             </button>
//           </form>

//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="hover:text-yellow-300 transition-colors">
//               <Instagram size={24} />
//             </a>
//             <a href="#" className="hover:text-yellow-300 transition-colors">
//               <Facebook size={24} />
//             </a>
//             <a href="#" className="group transition-colors">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors"
//                 fill="currentColor"
//               >
//                 <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.13 2.53 7.65 6.13 9.1-.09-.77-.17-1.95.04-2.8.19-.82 1.22-5.2 1.22-5.2s-.31-.62-.31-1.54c0-1.45.84-2.54 1.89-2.54.89 0 1.31.67 1.31 1.48 0 .9-.57 2.25-.86 3.49-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.17-1.89 3.17-4.62 0-2.41-1.73-4.09-4.2-4.09-2.86 0-4.54 2.14-4.54 4.35 0 .87.34 1.8.77 2.3.08.1.09.2.07.3-.08.33-.26 1.01-.3 1.15-.05.19-.16.23-.37.14-1.37-.57-2.23-2.36-2.23-3.8 0-3.1 2.25-5.94 6.48-5.94 3.4 0 6.04 2.42 6.04 5.65 0 3.38-2.13 6.1-5.08 6.1-1 0-1.94-.52-2.26-1.14l-.61 2.33c-.22.84-.82 1.89-1.22 2.53.91.28 1.88.43 2.88.43 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>

//       <hr className="my-8 border-white border-t-1.5" />
//       <p className="text-center text-sm">
//         © 2023, SANAAYA All Rights Reserved.
//       </p>
//     </footer>
//   );
// }

// export default Footer;


//new footer with translation
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className={`bg-[#b01616] text-white px-8 py-12 rounded-t-[5rem] ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div>
          <div className="flex items-center mb-2">
            <img
              src="/newestLogo.png"
              alt="P-TAL Logo"
              className="h-60 w-60 mr-2 rounded-4xl"
            />
          </div>
          <p className="mb-2 text-3xl font-semibold">{t('footer.owned_by')}</p>
          <p className="text-sm">
            {t('footer.company_name')}
            <br />
            {t('footer.address_line1')}
            <br />
            {t('footer.address_line2')}
          </p>
        </div>

        {/* Know More */}
        <div>
          <h3
            className="text-2xl mb-5"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t('footer.know_more')}
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { nameKey: "about_sanaaya", to: "/NavbarPtal/AboutUs" },
              { nameKey: "privacy_policy", to: "/footerComponents/PrivacyPolicy" },
              { nameKey: "terms_conditions", to: "/footerComponents/TermsConditions" },
              { nameKey: "become_affiliate", to: "/footerComponents/BecomeAnAffiliate" },
              { nameKey: "contact_us", to: "/NavbarPtal/ContactUs" },
              { nameKey: "faq", to: "/NavbarPtal/Faqs" },
              { nameKey: "returns_refunds", to: "/footerComponents/ReturnsRefunds" },
              { nameKey: "corporate_gifting", to: "/footerComponents/CorporateGifting" },
            ].map((item) => (
              <li key={item.nameKey}>
                <Link
                  to={item.to}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {t(`footer.links.${item.nameKey}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3
            className="text-2xl mb-5"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t('footer.help')}
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { nameKey: "use_and_care", to: "/footerComponents/UseAndCare" },
              { nameKey: "shipping", to: "/footerComponents/Shipping" },
            ].map((item) => (
              <li key={item.nameKey}>
                <Link
                  to={item.to}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {t(`footer.help_links.${item.nameKey}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Email List */}
        <div>
          <h3
            className="text-2xl mb-5"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t('footer.join_email_list')}
          </h3>
          <p className="text-sm mb-4">
            {t('footer.email_description')}
          </p>
          <form className="flex items-center border-b border-white py-1">
            <input
              type="email"
              placeholder={t('footer.email_placeholder')}
              className="bg-transparent text-white placeholder-white w-full outline-none"
            />
            <button type="submit" className="text-white ml-2">
              {i18n.language === 'ar' ? '←' : '→'}
            </button>
          </form>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="group transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors"
                fill="currentColor"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.13 2.53 7.65 6.13 9.1-.09-.77-.17-1.95.04-2.8.19-.82 1.22-5.2 1.22-5.2s-.31-.62-.31-1.54c0-1.45.84-2.54 1.89-2.54.89 0 1.31.67 1.31 1.48 0 .9-.57 2.25-.86 3.49-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.17-1.89 3.17-4.62 0-2.41-1.73-4.09-4.2-4.09-2.86 0-4.54 2.14-4.54 4.35 0 .87.34 1.8.77 2.3.08.1.09.2.07.3-.08.33-.26 1.01-.3 1.15-.05.19-.16.23-.37.14-1.37-.57-2.23-2.36-2.23-3.8 0-3.1 2.25-5.94 6.48-5.94 3.4 0 6.04 2.42 6.04 5.65 0 3.38-2.13 6.1-5.08 6.1-1 0-1.94-.52-2.26-1.14l-.61 2.33c-.22.84-.82 1.89-1.22 2.53.91.28 1.88.43 2.88.43 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-white border-t-1.5" />
      <p className="text-center text-sm">
        {t('footer.copyright')}
      </p>
    </footer>
  );
}

export default Footer;
