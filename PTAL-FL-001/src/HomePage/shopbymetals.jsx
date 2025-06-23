// import "./css/shopbymetals.css";
// import React from 'react';

// const ShopByMetals = () => {
//   return (
//     <section className="metals-section">
//     <div className="container">
//       <div className="section-header">
//         <p className="section-subtitle">AYURVEDA SWEARS BY THESE</p>
//         <h2 className="section-title">Shop By Metals</h2>
//       </div>

//       <div className="metals-grid">
//         <div className="metal-category">
//           <div className="metal-image">
//             <img src="/images/brass.webp" alt="Brass Cookware" />
//           </div>
//           <h3 className="metal-title">BRASS FOR COOKING</h3>
//         </div>

//         <div className="metal-category">
//           <div className="metal-image">
//             <img src="images/copper.webp" alt="Copper Drinkware" />
//           </div>
//           <h3 className="metal-title">COPPER FOR DRINKING</h3>
//         </div>

//         <div className="metal-category">
//           <div className="metal-image">
//             <img src="images/kansa.jpg" alt="Kansa Dinnerware" />
//           </div>
//           <h3 className="metal-title">KANSA FOR EATING</h3>
//         </div>
//       </div>
//     </div>
//     </section>
//   )
// }
// export default ShopByMetals;



import "./css/shopbymetals.css";
import React from 'react';
import { useTranslation } from 'react-i18next';

const ShopByMetals = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className={`metals-section ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">{t('shop_by_metals.subtitle')}</p>
          <h2 className="section-title">{t('shop_by_metals.title')}</h2>
        </div>

        <div className="metals-grid">
          <div className="metal-category">
            <div className="metal-image">
              <img src="/images/brass.webp" alt={t('shop_by_metals.brass.alt')} />
            </div>
            <h3 className="metal-title">{t('shop_by_metals.brass.title')}</h3>
          </div>

          <div className="metal-category">
            <div className="metal-image">
              <img src="images/copper.webp" alt={t('shop_by_metals.copper.alt')} />
            </div>
            <h3 className="metal-title">{t('shop_by_metals.copper.title')}</h3>
          </div>

          <div className="metal-category">
            <div className="metal-image">
              <img src="images/kansa.jpg" alt={t('shop_by_metals.kansa.alt')} />
            </div>
            <h3 className="metal-title">{t('shop_by_metals.kansa.title')}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopByMetals;
