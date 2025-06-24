// import "./css/feature.css";
// import React, { useState } from 'react';
// import { useCart } from "../contexts/CartContext";
// import products from '../homePageProduct.json';

// const FeaturedSection = () => {
//   const [activeTab, setActiveTab] = useState('bestSellers');
//   const { addToCart } = useCart();

//   // Group products by class
//   const productData = products.reduce((acc, product) => {
//     const className = product.class;
//     if (!acc[className]) {
//       acc[className] = [];
//     }
//     acc[className].push({
//       ...product,
//       price: parseInt(product.price.replace(/[^0-9]/g, '')) // Convert price string to number
//     });
//     return acc;
//   }, {});

//   const handleTabClick = (tabName) => {
//     const classMap = {
//       'BEST SELLERS': 'bestSellers',
//       'NEWLY LAUNCHED': 'newlyLaunched',
//       'SETS AND COMBOS': 'setsAndCombos'
//     };
//     setActiveTab(classMap[tabName]);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const renderStars = (rating) => {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   return (
//     <section className="featured-section">
//       <div className="container">
//         <div className="section-header">
//           <p className="section-subtitle">FEATURED PRODUCTS</p>
//           <h1 className="section-title">Our All Time Favourites</h1>
//         </div>

//         <div className="product-tabs">
//           <button 
//             className={`tab ${activeTab === 'bestSellers' ? 'active' : ''}`}
//             onClick={() => handleTabClick('BEST SELLERS')}
//           >
//             BEST SELLERS
//           </button>
//           <button 
//             className={`tab ${activeTab === 'newlyLaunched' ? 'active' : ''}`}
//             onClick={() => handleTabClick('NEWLY LAUNCHED')}
//           >
//             NEWLY LAUNCHED
//           </button>
//           <button 
//             className={`tab ${activeTab === 'setsAndCombos' ? 'active' : ''}`}
//             onClick={() => handleTabClick('SETS AND COMBOS')}
//           >
//             SETS AND COMBOS
//           </button>
//         </div>

//         <div className="w-full overflow-x-auto">
//           <div className="flex gap-4 py-4 min-w-max">
//             {productData[activeTab]?.map((product) => {
//               const [isAdded, setIsAdded] = useState(false);

//               const handleClick = (product) => {
//                 setIsAdded(true);
//                 handleAddToCart(product);
//               };

//               return (
//                 <div
//                   key={product.id}
//                   className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-[300px] h-[450px]"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.alt}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-4 flex flex-col gap-2 pb-12">
//                     {/* Rating */}
//                     <div className="text-[#8b0000] text-sm flex items-center gap-2">
//                       <div className="flex">
//                         {Array(product.rating).fill(0).map((_, idx) => (
//                           <span key={idx} className="hover:scale-110 transition">★</span>
//                         ))}
//                         {Array(5 - product.rating).fill(0).map((_, idx) => (
//                           <span key={idx} className="hover:scale-110 transition">☆</span>
//                         ))}
//                       </div>
//                       <span>{product.reviews} reviews</span>
//                     </div>

//                     {/* Name */}
//                     <h2 className="font-bold uppercase text-base leading-snug hover:underline line-clamp-2">
//                       {product.name}
//                     </h2>

//                     {/* Price */}
//                     <p className="text-sm font-medium text-black">
//                       FROM ₹ {product.price.toLocaleString()}
//                     </p>
//                   </div>

//                   {/* Add to cart button fixed to bottom 5px */}
//                   <button
//                     onClick={() => handleClick(product)}
//                     disabled={isAdded}
//                     className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300 
//                       ${isAdded 
//                         ? 'bg-gray-400 cursor-not-allowed' 
//                         : 'bg-[#8b0000] text-white hover:bg-red-800 active:scale-95'
//                       }`}
//                   >
//                     {isAdded ? 'ADDED TO CART' : 'ADD TO CART'}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;


// import "./css/feature.css";
// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useCart } from "../contexts/CartContext";
// import products from '../homePageProduct.json';

// const FeaturedSection = () => {
//   const [activeTab, setActiveTab] = useState('bestSellers');
//   const { addToCart } = useCart();
//   const { t, i18n } = useTranslation();

//   // Group products by class
//   const productData = products.reduce((acc, product) => {
//     const className = product.class;
//     if (!acc[className]) {
//       acc[className] = [];
//     }
//     acc[className].push({
//       ...product,
//       price: parseInt(product.price.replace(/[^0-9]/g, '')) // Convert price string to number
//     });
//     return acc;
//   }, {});

//   const handleTabClick = (tabName) => {
//     const classMap = {
//       'BEST SELLERS': 'bestSellers',
//       'NEWLY LAUNCHED': 'newlyLaunched',
//       'SETS AND COMBOS': 'setsAndCombos'
//     };
//     setActiveTab(classMap[tabName]);
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const renderStars = (rating) => {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   return (
//     <section className={`featured-section ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
//       <div className="container">
//         <div className="section-header">
//           <p className="section-subtitle">{t('featured_section.subtitle')}</p>
//           <h1 className="section-title">{t('featured_section.title')}</h1>
//         </div>

//         <div className="product-tabs">
//           <button 
//             className={`tab ${activeTab === 'bestSellers' ? 'active' : ''}`}
//             onClick={() => handleTabClick('BEST SELLERS')}
//           >
//             {t('featured_section.tabs.best_sellers')}
//           </button>
//           <button 
//             className={`tab ${activeTab === 'newlyLaunched' ? 'active' : ''}`}
//             onClick={() => handleTabClick('NEWLY LAUNCHED')}
//           >
//             {t('featured_section.tabs.newly_launched')}
//           </button>
//           <button 
//             className={`tab ${activeTab === 'setsAndCombos' ? 'active' : ''}`}
//             onClick={() => handleTabClick('SETS AND COMBOS')}
//           >
//             {t('featured_section.tabs.sets_and_combos')}
//           </button>
//         </div>

//         <div className="w-full overflow-x-auto">
//           <div className="flex gap-4 py-4 min-w-max">
//             {productData[activeTab]?.map((product) => {
//               const [isAdded, setIsAdded] = useState(false);

//               const handleClick = (product) => {
//                 setIsAdded(true);
//                 handleAddToCart(product);
//               };

//               return (
//                 <div
//                   key={product.id}
//                   className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-[300px] h-[450px]"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.alt}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="p-4 flex flex-col gap-2 pb-12">
//                     {/* Rating */}
//                     <div className="text-[#8b0000] text-sm flex items-center gap-2">
//                       <div className="flex">
//                         {Array(product.rating).fill(0).map((_, idx) => (
//                           <span key={idx} className="hover:scale-110 transition">★</span>
//                         ))}
//                         {Array(5 - product.rating).fill(0).map((_, idx) => (
//                           <span key={idx} className="hover:scale-110 transition">☆</span>
//                         ))}
//                       </div>
//                       <span>{product.reviews} {t('featured_section.reviews')}</span>
//                     </div>

//                     {/* Name */}
//                     <h2 className="font-bold uppercase text-base leading-snug hover:underline line-clamp-2">
//                       {product.name}
//                     </h2>

//                     {/* Price */}
//                     <p className="text-sm font-medium text-black">
//                       {t('featured_section.from_price', { price: product.price.toLocaleString() })}
//                     </p>
//                   </div>

//                   {/* Add to cart button fixed to bottom 5px */}
//                   <button
//                     onClick={() => handleClick(product)}
//                     disabled={isAdded}
//                     className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300 
//                       ${isAdded 
//                         ? 'bg-gray-400 cursor-not-allowed' 
//                         : 'bg-[#8b0000] text-white hover:bg-red-800 active:scale-95'
//                       }`}
//                   >
//                     {isAdded ? t('featured_section.added_to_cart') : t('featured_section.add_to_cart')}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;


// import "./css/feature.css";
// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useCart } from "../contexts/CartContext";
// import products from '../products.json';
// const FeaturedSection = () => {
//   const [activeTab, setActiveTab] = useState('bestSellers');
//   const [productData, setProductData] = useState({});
//   const [addedProducts, setAddedProducts] = useState(new Set());
//   const { addToCart } = useCart();
//   const { t, i18n } = useTranslation();
//   useEffect(() => {
//     const groupedProducts = products.reduce((acc, product) => {
//       const className = product.class.toLowerCase();
      
//       let tabKey;
//       if (className === 'bestsellers') {
//         tabKey = 'bestSellers';
//       } else if (className === 'newlylaunched') {
//         tabKey = 'newlyLaunched';
//       } else if (className === 'setsandcombos') {
//         tabKey = 'setsAndCombos';
//       }
      
//       if (tabKey) {
//         if (!acc[tabKey]) {
//           acc[tabKey] = [];
//         }
//         acc[tabKey].push(product);
//       }
      
//       return acc;
//     }, {});
    
//     setProductData(groupedProducts);
//   }, []);
//   const handleTabClick = (tabName) => {
//     const classMap = {
//       'BEST SELLERS': 'bestSellers',
//       'NEWLY LAUNCHED': 'newlyLaunched',
//       'SETS AND COMBOS': 'setsAndCombos'
//     };
//     setActiveTab(classMap[tabName]);
//   };
//   const handleAddToCart = (productId) => {
//     addToCart(productId);
//     setAddedProducts(prev => new Set([...prev, productId]));
    
//     setTimeout(() => {
//       setAddedProducts(prev => {
//         const newSet = new Set(prev);
//         newSet.delete(productId);
//         return newSet;
//       });
//     }, 2000);
//   };
//   const ProductCard = ({ product }) => {
//     const isAdded = addedProducts.has(product.id);
//     const handleClick = () => {
//       if (!isAdded) {
//         handleAddToCart(product.id);
//       }
//     };
//     const getTranslatedProduct = (product) => {
//       return {
//         name: t(`products.${product.id}.name`, { defaultValue: product.name }),
//         price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() }))
//       };
//     };
//     const translatedProduct = getTranslatedProduct(product);
//     return (
//       <div className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-[300px] h-[450px]">
//         <img
//           src={product.image}
//           alt={translatedProduct.name}
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-4 flex flex-col gap-2 pb-12">
//           <div className="text-[#8b0000] text-sm flex items-center gap-2">
//             <div className="flex">
//               {Array(product.rating).fill(0).map((_, idx) => (
//                 <span key={idx} className="hover:scale-110 transition">★</span>
//               ))}
//               {Array(5 - product.rating).fill(0).map((_, idx) => (
//                 <span key={idx} className="hover:scale-110 transition">☆</span>
//               ))}
//             </div>
//             <span>{product.reviews} {t('featured_section.reviews')}</span>
//           </div>

//           {/* Name - Now translated */}
//           <h2 className="font-bold uppercase text-base leading-snug hover:underline line-clamp-2">
//             {translatedProduct.name}
//           </h2>

//           {/* Price - Now translated with currency symbol */}
//           <p className="text-sm font-medium text-black">
//             {t('featured_section.from_price', { 
//               price: translatedProduct.price.toLocaleString(),
//               currency: t('common.currency_symbol')
//             })}
//           </p>
//         </div>

//         {/* Add to cart button fixed to bottom 5px */}
//         <button
//           onClick={handleClick}
//           disabled={isAdded}
//           className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300 
//             ${isAdded 
//               ? 'bg-green-600 cursor-not-allowed text-white' 
//               : 'bg-[#8b0000] text-white hover:bg-red-800 active:scale-95'
//             }`}
//         >
//           {isAdded ? t('featured_section.added_to_cart') : t('featured_section.add_to_cart')}
//         </button>
//       </div>
//     );
//   };

//   return (
//     <section className={`featured-section ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
//       <div className="container">
//         <div className="section-header">
//           <p className="section-subtitle">{t('featured_section.subtitle')}</p>
//           <h1 className="section-title">{t('featured_section.title')}</h1>
//         </div>

//         <div className="product-tabs">
//           <button 
//             className={`tab ${activeTab === 'bestSellers' ? 'active' : ''}`}
//             onClick={() => handleTabClick('BEST SELLERS')}
//           >
//             {t('featured_section.tabs.best_sellers')}
//           </button>
//           <button 
//             className={`tab ${activeTab === 'newlyLaunched' ? 'active' : ''}`}
//             onClick={() => handleTabClick('NEWLY LAUNCHED')}
//           >
//             {t('featured_section.tabs.newly_launched')}
//           </button>
//           <button 
//             className={`tab ${activeTab === 'setsAndCombos' ? 'active' : ''}`}
//             onClick={() => handleTabClick('SETS AND COMBOS')}
//           >
//             {t('featured_section.tabs.sets_and_combos')}
//           </button>
//         </div>

//         <div className="w-full overflow-x-auto">
//           <div className="flex gap-4 py-4 min-w-max">
//             {productData[activeTab]?.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedSection;


import "./css/feature.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from "../contexts/CartContext";
import products from '../products.json';

const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState('bestSellers');
  const [productData, setProductData] = useState({});
  const [addedProducts, setAddedProducts] = useState(new Set());
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const groupedProducts = products.reduce((acc, product) => {
      const className = product.class.toLowerCase();
      
      let tabKey;
      if (className === 'bestsellers') {
        tabKey = 'bestSellers';
      } else if (className === 'newlylaunched') {
        tabKey = 'newlyLaunched';
      } else if (className === 'setsandcombos') {
        tabKey = 'setsAndCombos';
      }
      
      if (tabKey) {
        if (!acc[tabKey]) {
          acc[tabKey] = [];
        }
        acc[tabKey].push(product);
      }
      
      return acc;
    }, {});
    
    setProductData(groupedProducts);
  }, []);

  const handleTabClick = (tabName) => {
    const classMap = {
      'BEST SELLERS': 'bestSellers',
      'NEWLY LAUNCHED': 'newlyLaunched',
      'SETS AND COMBOS': 'setsAndCombos'
    };
    setActiveTab(classMap[tabName]);
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation(); 
    addToCart(productId);
    setAddedProducts(prev => new Set([...prev, productId]));
    
    setTimeout(() => {
      setAddedProducts(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }, 2000);
  };

  const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const isAdded = addedProducts.has(product.id);

    const handleProductClick = () => {
      navigate(`/product/${product.id}`);
    };

    const getTranslatedProduct = (product) => {
      return {
        name: t(`products.${product.id}.name`, { defaultValue: product.name }),
        price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() }))
      };
    };

    const translatedProduct = getTranslatedProduct(product);

    return (
      <div 
        className="bg-[#f9f4ec] text-[#1e1e1e] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 relative w-[300px] h-[450px] cursor-pointer hover:scale-105"
        onClick={handleProductClick}
      >
        <img
          src={product.image}
          alt={translatedProduct.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-4 flex flex-col gap-2 pb-12">
          <div className="text-[#8b0000] text-sm flex items-center gap-2">
            <div className="flex">
              {Array(product.rating).fill(0).map((_, idx) => (
                <span key={idx} className="hover:scale-110 transition">★</span>
              ))}
              {Array(5 - product.rating).fill(0).map((_, idx) => (
                <span key={idx} className="hover:scale-110 transition">☆</span>
              ))}
            </div>
            <span>{product.reviews} {t('featured_section.reviews')}</span>
          </div>

          {/* Name - Now translated */}
          <h2 className="font-bold uppercase text-base leading-snug line-clamp-2">
            {translatedProduct.name}
          </h2>

          {/* Price - Now translated with currency symbol */}
          <p className="text-sm font-medium text-black">
            {t('featured_section.from_price', { 
              price: translatedProduct.price.toLocaleString(),
              currency: t('common.currency_symbol')
            })}
          </p>

          
        </div>

        {/* Add to cart button fixed to bottom 5px */}
        <button
          onClick={(e) => handleAddToCart(e, product.id)}
          disabled={isAdded}
          className={`absolute left-4 right-4 bottom-[5px] py-2 w-auto text-sm font-bold rounded-full transition-all duration-300 z-10
            ${isAdded 
              ? 'bg-green-600 cursor-not-allowed text-white' 
              : 'bg-[#8b0000] text-white hover:bg-red-800 active:scale-95'
            }`}
        >
          {isAdded ? t('featured_section.added_to_cart') : t('featured_section.add_to_cart')}
        </button>
      </div>
    );
  };

  return (
    <section className={`featured-section ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">{t('featured_section.subtitle')}</p>
          <h1 className="section-title">{t('featured_section.title')}</h1>
        </div>

        <div className="product-tabs">
          <button 
            className={`tab ${activeTab === 'bestSellers' ? 'active' : ''}`}
            onClick={() => handleTabClick('BEST SELLERS')}
          >
            {t('featured_section.tabs.best_sellers')}
          </button>
          <button 
            className={`tab ${activeTab === 'newlyLaunched' ? 'active' : ''}`}
            onClick={() => handleTabClick('NEWLY LAUNCHED')}
          >
            {t('featured_section.tabs.newly_launched')}
          </button>
          <button 
            className={`tab ${activeTab === 'setsAndCombos' ? 'active' : ''}`}
            onClick={() => handleTabClick('SETS AND COMBOS')}
          >
            {t('featured_section.tabs.sets_and_combos')}
          </button>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 py-4 min-w-max">
            {productData[activeTab]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
