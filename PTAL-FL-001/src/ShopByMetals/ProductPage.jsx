

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useCart } from '../contexts/CartContext';
// import productData from '../products.json';

// const ProductPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [isAdded, setIsAdded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Find product by ID
//     const foundProduct = productData.find(item => item.id.toString() === id);
//     if (foundProduct) {
//       setProduct(foundProduct);
//     }
//     setLoading(false);
//   }, [id]);

//   // Get translated product details
//   const getTranslatedProduct = (product) => {
//     if (!product) return null;
//     return {
//       name: t(`products.${product.id}.name`, { defaultValue: product.name }),
//       price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() })),
//       image: t(`products.${product.id}.image`, { defaultValue: product.image })
//     };
//   };

//   const handleAddToCart = () => {
//     if (product) {
//       // Add multiple quantities if selected
//       for (let i = 0; i < quantity; i++) {
//         addToCart(product.id);
//       }
//       setIsAdded(true);
//       setTimeout(() => setIsAdded(false), 2000);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity >= 1) {
//       setQuantity(newQuantity);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-xl text-gray-600">{t('product_page.loading')}</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//         <h1 className="text-2xl font-bold mb-4 text-gray-900">{t('product_page.not_found')}</h1>
//         <button 
//           onClick={() => navigate(-1)}
//           className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
//         >
//           {t('product_page.go_back')}
//         </button>
//       </div>
//     );
//   }

//   const translatedProduct = getTranslatedProduct(product);

//   return (
//     <div className={`min-h-screen bg-[#f9f4ec] ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Back Button */}
//         <button 
//           onClick={() => navigate(-1)}
//           className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
//         >
//           <span className="mr-2 text-lg">{i18n.language === 'ar' ? '→' : '←'}</span>
//           {t('product_page.back')}
//         </button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Product Image */}
//           <div className="bg-white rounded-lg p-8">
//             <img
//               src={translatedProduct.image}
//               alt={translatedProduct.name}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Rating */}
//             <div className="flex items-center space-x-2">
//               <div className="flex text-red-500">
//                 {Array(product.rating).fill(0).map((_, idx) => (
//                   <span key={idx} className="text-lg">★</span>
//                 ))}
//                 {Array(5 - product.rating).fill(0).map((_, idx) => (
//                   <span key={idx} className="text-lg text-gray-300">☆</span>
//                 ))}
//               </div>
//               <span className="text-sm text-gray-600">
//                 {product.reviews} {t('product_page.reviews')}
//               </span>
//             </div>

//             {/* Product Title */}
//             <h1 className="text-2xl font-bold text-gray-900 leading-tight">
//               {translatedProduct.name}
//             </h1>

//             {/* Price */}
//             <div className="space-y-1">
//               <div className="text-2xl font-bold text-gray-900">
//                 {t('product_page.price', { 
//                   price: `MRP. ${t('common.currency_symbol')}${translatedProduct.price.toLocaleString()}`,
//                   currency: ''
//                 })}
//               </div>
//               <div className="text-sm text-gray-600">incl. of all taxes</div>
//             </div>

//             {/* Product Description Preview */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {t(`products.${product.id}.description`, { 
//                 defaultValue: t('product_page.default_description', { name: translatedProduct.name })
//               })}
//             </p>

//             {/* Product Category */}
//             <div className="inline-block">
//               <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                 {t(`product_page.categories.${product.class.toLowerCase()}`, { 
//                   defaultValue: product.class 
//                 })}
//               </span>
//             </div>

//             {/* Quantity Section */}
//             <div className="space-y-4">
//               <div className="font-semibold text-gray-900 uppercase tracking-wide">
//                 {t('product_page.quantity')}:
//               </div>
              
//               <div className="flex space-x-4">
//                 {/* Quantity Selector */}
//                 <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
//                   <button
//                     onClick={() => handleQuantityChange(-1)}
//                     disabled={quantity <= 1}
//                     className="px-4 py-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     −
//                   </button>
//                   <span className="px-6 py-3 font-semibold text-lg border-l border-r border-gray-300 bg-white">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => handleQuantityChange(1)}
//                     className="px-4 py-3 hover:bg-gray-100 transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={isAdded}
//                   className={`flex-1 py-3 px-6 rounded-lg font-bold text-white uppercase tracking-wide transition-all duration-300 ${
//                     isAdded 
//                       ? 'bg-green-600 cursor-not-allowed' 
//                       : 'bg-red-600 hover:bg-red-700 active:scale-95'
//                   }`}
//                 >
//                   {isAdded 
//                     ? t('product_page.added_to_cart') 
//                     : t('product_page.add_to_cart')
//                   }
//                 </button>
//               </div>

//               {/* Buy It Now Button */}
//               <button className="w-full py-3 px-6 rounded-lg font-bold text-gray-900 border-2 border-gray-300 hover:bg-gray-50 transition-all uppercase tracking-wide">
//                 BUY IT NOW
//               </button>
//             </div>

//             {/* Tax Info */}
//             <p className="text-xs text-gray-500">
//               *Tax included. Shipping calculated at checkout.
//             </p>

//             {/* Offers Section */}
//             <div className="space-y-4">
//               <h3 className="font-bold text-gray-900 uppercase tracking-wide">OFFERS</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE5
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">Flat 5% off</div>
//                     <div className="text-gray-600">on all orders</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       (Apply at checkout)
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE8
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">Flat 8% off on</div>
//                     <div className="text-gray-600">orders above Rs 4,999</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       (Apply at checkout)
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE10
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">Flat 10% off</div>
//                     <div className="text-gray-600">on orders above Rs 9,999</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       (Apply at checkout)
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE12
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">Flat 12% off</div>
//                     <div className="text-gray-600">on orders above Rs 24,999</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       (Apply at checkout)
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Full Product Description */}
//             <div className="mt-8 pt-8 border-t border-gray-200">
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">
//                 {t('product_page.description')}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {t(`products.${product.id}.description`, { 
//                   defaultValue: t('product_page.default_description', { name: translatedProduct.name })
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useCart } from '../contexts/CartContext';
// import productData from '../products.json';

// const ProductPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const { addToCart, clearCart } = useCart(); // Add clearCart
//   const [product, setProduct] = useState(null);
//   const [isAdded, setIsAdded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Find product by ID
//     const foundProduct = productData.find(item => item.id.toString() === id);
//     if (foundProduct) {
//       setProduct(foundProduct);
//     }
//     setLoading(false);
//   }, [id]);

//   // Get translated product details
//   const getTranslatedProduct = (product) => {
//     if (!product) return null;
//     return {
//       name: t(`products.${product.id}.name`, { defaultValue: product.name }),
//       price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() })),
//       image: t(`products.${product.id}.image`, { defaultValue: product.image })
//     };
//   };

//   const handleAddToCart = () => {
//     if (product) {
//       // Add multiple quantities if selected
//       for (let i = 0; i < quantity; i++) {
//         addToCart(product.id);
//       }
//       setIsAdded(true);
//       setTimeout(() => setIsAdded(false), 2000);
//     }
//   };

//   // Handle Buy It Now - Clear cart, add product, go to payment
//   const handleBuyNow = () => {
//     if (product) {
//       // Clear existing cart
//       clearCart();
      
//       // Add selected quantity of this product
//       for (let i = 0; i < quantity; i++) {
//         addToCart(product.id);
//       }
      
//       // Navigate directly to payment page
//       navigate('/payment');
//     }
//   };

//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity >= 1) {
//       setQuantity(newQuantity);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-xl text-gray-600">{t('product_page.loading')}</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//         <h1 className="text-2xl font-bold mb-4 text-gray-900">{t('product_page.not_found')}</h1>
//         <button 
//           onClick={() => navigate(-1)}
//           className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
//         >
//           {t('product_page.go_back')}
//         </button>
//       </div>
//     );
//   }

//   const translatedProduct = getTranslatedProduct(product);

//   return (
//     <div className={`min-h-screen bg-[#f9f4ec] ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Back Button */}
//         <button 
//           onClick={() => navigate(-1)}
//           className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
//         >
//           <span className="mr-2 text-lg">{i18n.language === 'ar' ? '→' : '←'}</span>
//           {t('product_page.back')}
//         </button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Product Image */}
//           <div className="bg-white rounded-lg p-8">
//             <img
//               src={translatedProduct.image}
//               alt={translatedProduct.name}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Rating */}
//             <div className="flex items-center space-x-2">
//               <div className="flex text-red-500">
//                 {Array(product.rating).fill(0).map((_, idx) => (
//                   <span key={idx} className="text-lg">★</span>
//                 ))}
//                 {Array(5 - product.rating).fill(0).map((_, idx) => (
//                   <span key={idx} className="text-lg text-gray-300">☆</span>
//                 ))}
//               </div>
//               <span className="text-sm text-gray-600">
//                 {product.reviews} {t('product_page.reviews')}
//               </span>
//             </div>

//             {/* Product Title */}
//             <h1 className="text-2xl font-bold text-gray-900 leading-tight">
//               {translatedProduct.name}
//             </h1>

//             {/* Price */}
//             <div className="space-y-1">
//               <div className="text-2xl font-bold text-gray-900">
//                 {t('product_page.price', { 
//                   price: `MRP. ${t('common.currency_symbol')}${translatedProduct.price.toLocaleString()}`,
//                   currency: ''
//                 })}
//               </div>
//               <div className="text-sm text-gray-600">{t('product_page.incl_taxes')}</div>
//             </div>

//             {/* Product Description Preview */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {t(`products.${product.id}.description`, { 
//                 defaultValue: t('product_page.default_description', { name: translatedProduct.name })
//               })}
//             </p>

//             {/* Product Category */}
//             <div className="inline-block">
//               <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                 {t(`product_page.categories.${product.class.toLowerCase()}`, { 
//                   defaultValue: product.class 
//                 })}
//               </span>
//             </div>

//             {/* Quantity Section */}
//             <div className="space-y-4">
//               <div className="font-semibold text-gray-900 uppercase tracking-wide">
//                 {t('product_page.quantity')}:
//               </div>
              
//               <div className="flex space-x-4">
//                 {/* Quantity Selector */}
//                 <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
//                   <button
//                     onClick={() => handleQuantityChange(-1)}
//                     disabled={quantity <= 1}
//                     className="px-4 py-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                   >
//                     −
//                   </button>
//                   <span className="px-6 py-3 font-semibold text-lg border-l border-r border-gray-300 bg-white">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => handleQuantityChange(1)}
//                     className="px-4 py-3 hover:bg-gray-100 transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={isAdded}
//                   className={`flex-1 py-3 px-6 rounded-lg font-bold text-white uppercase tracking-wide transition-all duration-300 ${
//                     isAdded 
//                       ? 'bg-green-600 cursor-not-allowed' 
//                       : 'bg-red-600 hover:bg-red-700 active:scale-95'
//                   }`}
//                 >
//                   {isAdded 
//                     ? t('product_page.added_to_cart') 
//                     : t('product_page.add_to_cart')
//                   }
//                 </button>
//               </div>

//               {/* Buy It Now Button */}
//               <button 
//                 onClick={handleBuyNow}
//                 className="w-full py-3 px-6 rounded-lg font-bold text-white bg-black hover:bg-gray-800 transition-all uppercase tracking-wide"
//               >
//                 {t('product_page.buy_it_now')}
//               </button>
//             </div>

//             {/* Tax Info */}
//             <p className="text-xs text-gray-500">
//               {t('product_page.tax_info')}
//             </p>

//             {/* Offers Section */}
//             <div className="space-y-4">
//               <h3 className="font-bold text-gray-900 uppercase tracking-wide">{t('product_page.Offers')}</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE5
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_5_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.on_all_orders')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE8
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_8_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.orders_above_4999')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE10
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_10_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.orders_above_9999')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE12
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_12_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.orders_above_24999')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Full Product Description */}
//             <div className="mt-8 pt-8 border-t border-gray-200">
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">
//                 {t('product_page.description')}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {t(`products.${product.id}.description`, { 
//                   defaultValue: t('product_page.default_description', { name: translatedProduct.name })
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useCart } from '../contexts/CartContext';
// import productData from '../products.json';

// const ProductPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const { addToCart, clearCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [isAdded, setIsAdded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Find product by ID
//     const foundProduct = productData.find(item => item.id.toString() === id);
//     if (foundProduct) {
//       setProduct(foundProduct);
//     }
//     setLoading(false);
//   }, [id]);

//   // Get translated product details
//   const getTranslatedProduct = (product) => {
//     if (!product) return null;
//     return {
//       name: t(`products.${product.id}.name`, { defaultValue: product.name }),
//       price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() })),
//       image: t(`products.${product.id}.image`, { defaultValue: product.image })
//     };
//   };

//   const handleAddToCart = () => {
//     if (product) {
//       // Add the selected quantity to cart
//       for (let i = 0; i < quantity; i++) {
//         addToCart(product.id);
//       }
//       setIsAdded(true);
//       setTimeout(() => setIsAdded(false), 2000);
//     }
//   };

//   // Handle Buy It Now - Clear cart, add product, go to payment
//   const handleBuyNow = () => {
//     if (product) {
//       // Clear existing cart
//       clearCart();
      
//       // Add selected quantity of this product
//       for (let i = 0; i < quantity; i++) {
//         addToCart(product.id);
//       }
      
//       // Navigate directly to payment page
//       navigate('/payment');
//     }
//   };

//   // Fixed quantity change handler
//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity >= 1) {
//       setQuantity(newQuantity);
//     }
//   };

//   // Direct quantity set handler
//   const handleQuantitySet = (newQuantity) => {
//     if (newQuantity >= 1) {
//       setQuantity(newQuantity);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-xl text-gray-600">{t('product_page.loading')}</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//         <h1 className="text-2xl font-bold mb-4 text-gray-900">{t('product_page.not_found')}</h1>
//         <button 
//           onClick={() => navigate(-1)}
//           className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
//         >
//           {t('product_page.go_back')}
//         </button>
//       </div>
//     );
//   }

//   const translatedProduct = getTranslatedProduct(product);

//   return (
//     <div className={`min-h-screen bg-[#f9f4ec] ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Back Button */}
//         <button 
//           onClick={() => navigate(-1)}
//           className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
//         >
//           <span className="mr-2 text-lg">{i18n.language === 'ar' ? '→' : '←'}</span>
//           {t('product_page.back')}
//         </button>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Product Image */}
//           <div className="bg-white rounded-lg p-8">
//             <img
//               src={translatedProduct.image}
//               alt={translatedProduct.name}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             {/* Rating */}
//             <div className="flex items-center space-x-2">
//               <div className="flex text-red-500">
//                 {Array(product.rating).fill(0).map((_, idx) => (
//                   <span key={idx} className="text-lg">★</span>
//                 ))}
//                 {Array(5 - product.rating).fill(0).map((_, idx) => (
//                   <span key={idx} className="text-lg text-gray-300">☆</span>
//                 ))}
//               </div>
//               <span className="text-sm text-gray-600">
//                 {product.reviews} {t('product_page.reviews')}
//               </span>
//             </div>

//             {/* Product Title */}
//             <h1 className="text-2xl font-bold text-gray-900 leading-tight">
//               {translatedProduct.name}
//             </h1>

//             {/* Price */}
//             <div className="space-y-1">
//               <div className="text-2xl font-bold text-gray-900">
//                 MRP. {t('common.currency_symbol')}{translatedProduct.price.toLocaleString()}
//               </div>
//               <div className="text-sm text-gray-600">{t('product_page.incl_taxes')}</div>
//             </div>

//             {/* Product Description Preview */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {t(`products.${product.id}.description`, { 
//                 defaultValue: t('product_page.default_description', { name: translatedProduct.name })
//               })}
//             </p>

//             {/* Product Category */}
//             <div className="inline-block">
//               <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
//                 {t(`product_page.categories.${product.class.toLowerCase()}`, { 
//                   defaultValue: product.class 
//                 })}
//               </span>
//             </div>

//             {/* Quantity Section */}
//             <div className="space-y-4">
//               <div className="font-semibold text-gray-900 uppercase tracking-wide">
//                 {t('product_page.quantity')}:
//               </div>
              
//               <div className="flex space-x-4">
//                 {/* Enhanced Quantity Selector */}
//                 <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
//                   <button
//                     onClick={() => handleQuantityChange(-1)}
//                     disabled={quantity <= 1}
//                     className="px-4 py-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg font-bold"
//                   >
//                     −
//                   </button>
                  
//                   {/* Editable quantity input */}
//                   <input
//                     type="number"
//                     min="1"
//                     max="99"
//                     value={quantity}
//                     onChange={(e) => {
//                       const value = parseInt(e.target.value) || 1;
//                       handleQuantitySet(value);
//                     }}
//                     className="px-4 py-3 w-16 text-center font-semibold text-lg border-l border-r border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
//                   />
                  
//                   <button
//                     onClick={() => handleQuantityChange(1)}
//                     className="px-4 py-3 hover:bg-gray-100 transition-colors text-lg font-bold"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={handleAddToCart}
//                   disabled={isAdded}
//                   className={`flex-1 py-3 px-6 rounded-lg font-bold text-white uppercase tracking-wide transition-all duration-300 ${
//                     isAdded 
//                       ? 'bg-green-600 cursor-not-allowed' 
//                       : 'bg-red-600 hover:bg-red-700 active:scale-95'
//                   }`}
//                 >
//                   {isAdded 
//                     ? t('product_page.added_to_cart') 
//                     : t('product_page.add_to_cart')
//                   }
//                 </button>
//               </div>

//               {/* Buy It Now Button */}
//               <button 
//                 onClick={handleBuyNow}
//                 className="w-full py-3 px-6 rounded-lg font-bold text-white bg-black hover:bg-gray-800 transition-all uppercase tracking-wide"
//               >
//                 {t('product_page.buy_it_now')}
//               </button>

//               {/* Quantity Info */}
//               <div className="text-sm text-gray-600">
//                 {quantity > 1 && (
//                   <p>
//                     Total: {t('common.currency_symbol')}{(translatedProduct.price * quantity).toLocaleString()} 
//                     <span className="ml-2">({quantity} × {t('common.currency_symbol')}{translatedProduct.price.toLocaleString()})</span>
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* Tax Info */}
//             <p className="text-xs text-gray-500">
//               {t('product_page.tax_info')}
//             </p>

//             {/* Offers Section */}
//             <div className="space-y-4">
//               <h3 className="font-bold text-gray-900 uppercase tracking-wide">{t('product_page.offers')}</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE5
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_5_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.on_all_orders')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE8
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_8_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.orders_above_4999')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE10
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_10_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.orders_above_9999')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border border-gray-200 rounded-lg p-3 relative">
//                   <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
//                     SAVE12
//                   </div>
//                   <div className="text-sm pr-16">
//                     <div className="font-semibold">{t('product_page.offers.flat_12_off')}</div>
//                     <div className="text-gray-600">{t('product_page.offers.orders_above_24999')}</div>
//                     <div className="text-xs text-gray-500 mt-1">
//                       {t('product_page.offers.apply_checkout')}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Full Product Description */}
//             <div className="mt-8 pt-8 border-t border-gray-200">
//               <h3 className="text-lg font-semibold mb-3 text-gray-900">
//                 {t('product_page.description')}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {t(`products.${product.id}.description`, { 
//                   defaultValue: t('product_page.default_description', { name: translatedProduct.name })
//                 })}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import productData from '../products.json';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addToCart, clearCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find product by ID
    const foundProduct = productData.find(item => item.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [id]);

  // Get translated product details
  const getTranslatedProduct = (product) => {
    if (!product) return null;
    return {
      name: t(`products.${product.id}.name`, { defaultValue: product.name }),
      price: parseFloat(t(`products.${product.id}.price`, { defaultValue: product.price.toString() })),
      image: t(`products.${product.id}.image`, { defaultValue: product.image })
    };
  };

  const handleAddToCart = () => {
    if (product) {
      // Add the selected quantity to cart in one go
      addToCart(product.id, quantity);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  // Handle Buy It Now - Clear cart, add product with quantity, go to payment
  const handleBuyNow = () => {
    if (product) {
      // Clear existing cart
      clearCart();
      
      // Add selected quantity of this product
      addToCart(product.id, quantity);
      
      // Navigate directly to payment page
      navigate('/payment');
    }
  };

  // Fixed quantity change handler
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Direct quantity set handler
  const handleQuantitySet = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">{t('product_page.loading')}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">{t('product_page.not_found')}</h1>
        <button 
          onClick={() => navigate(-1)}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          {t('product_page.go_back')}
        </button>
      </div>
    );
  }

  const translatedProduct = getTranslatedProduct(product);

  return (
    <div className={`min-h-screen bg-[#f9f4ec] ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <span className="mr-2 text-lg">{i18n.language === 'ar' ? '→' : '←'}</span>
          {t('product_page.back')}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8">
            <img
              src={translatedProduct.image}
              alt={translatedProduct.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-red-500">
                {Array(product.rating).fill(0).map((_, idx) => (
                  <span key={idx} className="text-lg">★</span>
                ))}
                {Array(5 - product.rating).fill(0).map((_, idx) => (
                  <span key={idx} className="text-lg text-gray-300">☆</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.reviews} {t('product_page.reviews')}
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              {translatedProduct.name}
            </h1>

            {/* Price */}
            <div className="space-y-1">
              <div className="text-2xl font-bold text-gray-900">
                MRP. {t('common.currency_symbol')}{translatedProduct.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">{t('product_page.incl_taxes')}</div>
            </div>

            {/* Product Description Preview */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {t(`products.${product.id}.description`, { 
                defaultValue: t('product_page.default_description', { name: translatedProduct.name })
              })}
            </p>

            {/* Product Category */}
            <div className="inline-block">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {t(`product_page.categories.${product.class.toLowerCase()}`, { 
                  defaultValue: product.class 
                })}
              </span>
            </div>

            {/* Quantity Section */}
            <div className="space-y-4">
              <div className="font-semibold text-gray-900 uppercase tracking-wide">
                {t('product_page.quantity')}:
              </div>
              
              <div className="flex space-x-4">
                {/* Enhanced Quantity Selector */}
                <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="px-4 py-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-lg font-bold"
                  >
                    −
                  </button>
                  
                  {/* Editable quantity input */}
                  <input
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      handleQuantitySet(value);
                    }}
                    className="px-4 py-3 w-16 text-center font-semibold text-lg border-l border-r border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors text-lg font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={`flex-1 py-3 px-6 rounded-lg font-bold text-white uppercase tracking-wide transition-all duration-300 ${
                    isAdded 
                      ? 'bg-green-600 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700 active:scale-95'
                  }`}
                >
                  {isAdded 
                    ? t('product_page.added_to_cart') 
                    : t('product_page.add_to_cart')
                  }
                </button>
              </div>

              {/* Buy It Now Button */}
              <button 
                onClick={handleBuyNow}
                className="w-full py-3 px-6 rounded-lg font-bold text-white bg-black hover:bg-gray-800 transition-all uppercase tracking-wide"
              >
                {t('product_page.buy_it_now')}
              </button>

              {/* Quantity Info */}
              <div className="text-sm text-gray-600">
                {quantity > 1 && (
                  <p>
                    Total: {t('common.currency_symbol')}{(translatedProduct.price * quantity).toLocaleString()} 
                    <span className="ml-2">({quantity} × {t('common.currency_symbol')}{translatedProduct.price.toLocaleString()})</span>
                  </p>
                )}
              </div>
            </div>

            {/* Tax Info */}
            <p className="text-xs text-gray-500">
              {t('product_page.tax_info')}
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 uppercase tracking-wide">{t('product_page.Offers')}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-gray-200 rounded-lg p-3 relative">
                  <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
                    SAVE5
                  </div>
                  <div className="text-sm pr-16">
                    <div className="font-semibold">{t('product_page.offers.flat_5_off')}</div>
                    <div className="text-gray-600">{t('product_page.offers.on_all_orders')}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {t('product_page.offers.apply_checkout')}
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-3 relative">
                  <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
                    SAVE8
                  </div>
                  <div className="text-sm pr-16">
                    <div className="font-semibold">{t('product_page.offers.flat_8_off')}</div>
                    <div className="text-gray-600">{t('product_page.offers.orders_above_4999')}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {t('product_page.offers.apply_checkout')}
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-3 relative">
                  <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
                    SAVE10
                  </div>
                  <div className="text-sm pr-16">
                    <div className="font-semibold">{t('product_page.offers.flat_10_off')}</div>
                    <div className="text-gray-600">{t('product_page.offers.orders_above_9999')}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {t('product_page.offers.apply_checkout')}
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-3 relative">
                  <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded font-bold">
                    SAVE12
                  </div>
                  <div className="text-sm pr-16">
                    <div className="font-semibold">{t('product_page.offers.flat_12_off')}</div>
                    <div className="text-gray-600">{t('product_page.offers.orders_above_24999')}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {t('product_page.offers.apply_checkout')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {t('product_page.description')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`products.${product.id}.description`, { 
                  defaultValue: t('product_page.default_description', { name: translatedProduct.name })
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
