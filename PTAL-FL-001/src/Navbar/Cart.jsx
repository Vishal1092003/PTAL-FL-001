// import React, { useState } from 'react';
// // import { FaTimes } from 'react-icons/fa';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const frequentlyBought = [
//     {
//       id: 1,
//       name: 'BRASS GHEE POT',
//       price: '₹ 1,850.00',
//       image: './imagesForCart/brass_ghee_pot.webp',
//     },
//     {
//       id: 2,
//       name: 'COPPER GLASS',
//       price: '₹ 1,890.00',
//       image: './imagesForCart/copper_glass.webp',
//     },
//     {
//       id: 3,
//       name: 'BRASS PATILA / MILK TOPIA-NATURALLY NON-STICKY , NON-TOXIC , TEFLON FREE',
//       price: '₹ 3250.00',
//       image: './imagesForCart/brass_patila.webp',
//     },
//     {
//       id: 4,
//       name: 'COPPER TUMBLER',
//       price: '₹ 2190.00',
//       image: './imagesForCart/copper_tumbler.webp',
//     },
//     // Add more as needed
//   ];

//   return (
//     <div className="fixed top-0 right-0 w-full md:w-[580px] h-full bg-[#F9F5EC] z-50 shadow-lg overflow-y-auto">
//       {/* Close Icon */}
//       {/* <div className="flex justify-end p-4">
//         <button className="text-2xl text-red-700 hover:text-red-900">
//           <FaTimes />
//         </button>
//       </div> */}

//       {/* Cart Header */}
//       <div className="flex items-center justify-between p-5 mb-2">
//         <div
//           className="text-2xl font-base text-red-700"
//           style={{ fontFamily: 'Fondamento, cursive' }}
//         >
//           Cart ({cartItems.length})
//         </div>
//         <button className="text-2xl text-red-700 hover:text-red-900">
//           <FaTimes />
//         </button>
//       </div>

//       <div className="bg-red-700 text-white text-center py-2 font-medium">
//         Free shipping on all orders!
//       </div>

//       {/* Cart Content */}
//       <div className="p-6 text-center border-b-1">
//         {cartItems.length === 0 ? (
//           <>
//             <br />
//             <h2 className="text-3xl text-red-700 font-base" style={{fontFamily: 'Fondamento, cursive'}}>Your Cart Is Empty!</h2>
//             <p className="mt-2 text-gray-600">Add Your Favorite Items To Your Cart.</p>
//             <br />
//           </>
//         ) : (
//           <div>{/* Render cart items here */}</div>
//         )}
//       </div>
//       <br />
//       <br />

//       {/* Frequently Bought Together */}
//       <div className="px-6 pb-10">
//         <h3 className="text-xl font-bold mb-4">Frequently Bought Together</h3>
//         <div className="flex overflow-x-auto space-x-4 pb-4">
//           {frequentlyBought.map((item) => (
//             <div
//               key={item.id}
//               className="min-w-[300px] bg-yellow-100 p-4 rounded flex items-center space-x-4"
//             >
//               {/* Image Left */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-24 h-24 object-cover rounded"
//               />

//               {/* Text Right */}
//               <div className="flex flex-col">
//                 <div className="font-bold text-sm">{item.name}</div>
                
//                 <div className="text-sm text-gray-700">{item.price}</div>
//                 <br />
//                 <button className="mt-2 text-red-700 font-semibold text-sm hover:underline">
//                   ADD TO CART +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Continue Shopping Button */}
//       <div className="px-6 pb-6">
//         <button className="w-full bg-red-700 text-white font-semibold py-3 rounded hover:bg-red-800">
//           CONTINUE SHOPPING
//         </button>
//       </div>
//     </div>
//   );

// };

// export default Cart;



//new cart system 
// import { useCart } from "../contexts/CartContext";

// export default function Cart() {
//   const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();

//   return (
//     <section className="p-6 bg-[#f9f4ec] min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-8 text-center">
//           <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//             Your Cart
//           </h1>
//           <div className="w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
//               <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
//               </svg>
//             </div>
//             <p className="text-xl text-gray-600 font-medium">Your cart is empty</p>
//             <p className="text-gray-500 mt-2">Add some items to get started!</p>
//           </div>
//         ) : (
//           <>
//             <div className="space-y-4 mb-8">
//               {cartItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="flex items-center p-6">
//                     {/* Product Image */}
//                     <div className="relative flex-shrink-0 mr-6">
//                       <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shadow-md">
//                         <img 
//                           src={item.image} 
//                           alt={item.name} 
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
//                         />
//                       </div>
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                         ×{item.quantity}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="flex-grow">
//                       <h2 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-600 transition-colors">
//                         {item.name}
//                       </h2>
//                       <div className="flex items-center space-x-4">
//                         <span className="text-lg font-semibold text-gray-900">
//                           ₹{item.price}
//                         </span>
//                         <span className="text-sm text-gray-500">per item</span>
//                       </div>
//                       <div className="mt-2 text-lg font-bold text-green-600">
//                         Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
//                       </div>
//                     </div>

//                     {/* Quantity Controls */}
//                     <div className="flex items-center space-x-4 mr-6">
//                       <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden">
//                         <button
//                           onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                           className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-lg"
//                           disabled={item.quantity <= 1}
//                         >
//                           −
//                         </button>
//                         <div className="px-4 py-2 font-bold text-lg text-gray-800 min-w-[3rem] text-center">
//                           {item.quantity}
//                         </div>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-lg"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* Remove Button */}
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Cart Summary */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 sticky bottom-6">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <p className="text-gray-600 text-lg">Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
//                   <p className="text-3xl font-bold text-gray-800">
//                     Total: ₹{total.toLocaleString()}
//                   </p>
//                 </div>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={clearCart}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
//                   >
//                     Clear Cart
//                   </button>
//                   <button className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }


//new responsive cart
// import { useCart } from "../contexts/CartContext";

// export default function Cart() {
//   const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();

//   return (
//     <section className="p-4 sm:p-6 bg-[#f9f4ec] min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-6 sm:mb-8 text-center">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//             Your Cart
//           </h1>
//           <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-12 sm:py-16">
//             <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
//               <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
//               </svg>
//             </div>
//             <p className="text-lg sm:text-xl text-gray-600 font-medium">Your cart is empty</p>
//             <p className="text-gray-500 mt-2">Add some items to get started!</p>
//           </div>
//         ) : (
//           <>
//             <div className="space-y-4 mb-6 sm:mb-8">
//               {cartItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {/* Mobile Layout */}
//                   <div className="block sm:hidden p-4">
//                     <div className="flex items-start space-x-4 mb-4">
//                       {/* Product Image */}
//                       <div className="relative flex-shrink-0">
//                         <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shadow-md">
//                           <img 
//                             src={item.image} 
//                             alt={item.name} 
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
//                           />
//                         </div>
//                         <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                           ×{item.quantity}
//                         </div>
//                       </div>

//                       {/* Product Details */}
//                       <div className="flex-grow min-w-0">
//                         <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-600 transition-colors break-words">
//                           {item.name}
//                         </h2>
//                         <div className="flex flex-col space-y-1">
//                           <span className="text-base font-semibold text-gray-900">
//                             ₹{item.price} <span className="text-sm text-gray-500 font-normal">per item</span>
//                           </span>
//                           <div className="text-base font-bold text-green-600">
//                             Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Quantity Controls and Remove Button */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden">
//                         <button
//                           onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                           className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-base"
//                           disabled={item.quantity <= 1}
//                         >
//                           −
//                         </button>
//                         <div className="px-3 py-2 font-bold text-base text-gray-800 min-w-[2.5rem] text-center">
//                           {item.quantity}
//                         </div>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-base"
//                         >
//                           +
//                         </button>
//                       </div>

//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="bg-gradient-to-r from-[#b01616] to-[#8b1010] hover:from-[#8b1010] hover:to-[#6b0c0c] text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>

//                   {/* Desktop Layout */}
//                   <div className="hidden sm:flex items-center p-6">
//                     {/* Product Image */}
//                     <div className="relative flex-shrink-0 mr-4 lg:mr-6">
//                       <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shadow-md">
//                         <img 
//                           src={item.image} 
//                           alt={item.name} 
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
//                         />
//                       </div>
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                         ×{item.quantity}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="flex-grow min-w-0 mr-4">
//                       <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-600 transition-colors break-words leading-tight">
//                         {item.name}
//                       </h2>
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
//                         <span className="text-base lg:text-lg font-semibold text-gray-900">
//                           ₹{item.price}
//                         </span>
//                         <span className="text-sm text-gray-500">per item</span>
//                       </div>
//                       <div className="mt-2 text-base lg:text-lg font-bold text-green-600">
//                         Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
//                       </div>
//                     </div>

//                     {/* Quantity Controls */}
//                     <div className="flex items-center space-x-4 mr-4 lg:mr-6">
//                       <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden">
//                         <button
//                           onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                           className="px-3 lg:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-lg"
//                           disabled={item.quantity <= 1}
//                         >
//                           −
//                         </button>
//                         <div className="px-3 lg:px-4 py-2 font-bold text-lg text-gray-800 min-w-[3rem] text-center">
//                           {item.quantity}
//                         </div>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 lg:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-lg"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* Remove Button */}
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="bg-gradient-to-r from-[#b01616] to-[#8b1010] hover:from-[#8b1010] hover:to-[#6b0c0c] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Cart Summary */}
//             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky bottom-4 sm:bottom-6">
//               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
//                 <div>
//                   <p className="text-gray-600 text-base sm:text-lg">
//                     Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//                   </p>
//                   <p className="text-2xl sm:text-3xl font-bold text-gray-800">
//                     Total: ₹{total.toLocaleString()}
//                   </p>
//                 </div>
//                 <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//                   <button
//                     onClick={clearCart}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
//                   >
//                     Clear Cart
//                   </button>
//                   <button className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
//                     Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }


// import { useCart } from "../contexts/CartContext";
// import { useTranslation } from "react-i18next";

// export default function Cart() {
//   const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();
//   const { t, i18n } = useTranslation();

//   return (
//     <section className={`p-4 sm:p-6 bg-[#f9f4ec] min-h-screen ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-6 sm:mb-8 text-center">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//             {t("cart.your_cart")}
//           </h1>
//           <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-12 sm:py-16">
//             <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
//               <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
//               </svg>
//             </div>
//             <p className="text-lg text-gray-600 mb-2">{t("cart.cart_empty")}</p>
//             <p className="text-gray-500">{t("cart.cart_add_items")}</p>
//           </div>
//         ) : (
//           <>
//             <div className="space-y-4 mb-6 sm:mb-8">
//               {cartItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {/* Mobile Layout */}
//                   <div className="block sm:hidden p-4">
//                     <div className="flex items-start space-x-4 mb-4">
//                       {/* Product Image */}
//                       <div className="relative flex-shrink-0">
//                         <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shadow-md">
//                           <img 
//                             src={item.image} 
//                             alt={item.name} 
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
//                           />
//                         </div>
//                         <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                           ×{item.quantity}
//                         </div>
//                       </div>

//                       {/* Product Details */}
//                       <div className="flex-grow min-w-0">
//                         <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-600 transition-colors break-words">
//                           {item.name}
//                         </h2>
//                         <div className="flex flex-col space-y-1">
//                           <span className="text-base font-semibold text-gray-900">
//                             ₹{item.price} <span className="text-sm text-gray-500 font-normal">{t("cart.per_item")}</span>
//                           </span>
//                           <div className="text-base font-bold text-green-600">
//                             {t("cart.subtotal")}: ₹{(item.price * item.quantity).toLocaleString()}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Quantity Controls and Remove Button */}
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden">
//                         <button
//                           onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                           className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-base"
//                           disabled={item.quantity <= 1}
//                         >
//                           {i18n.language === 'ar' ? '+' : '−'}
//                         </button>
//                         <div className="px-3 py-2 font-bold text-base text-gray-800 min-w-[2.5rem] text-center">
//                           {item.quantity}
//                         </div>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-base"
//                         >
//                           {i18n.language === 'ar' ? '−' : '+'}
//                         </button>
//                       </div>
//                       <button
//                         onClick={() => removeFromCart(item.id)}
//                         className="bg-gradient-to-r from-[#b01616] to-[#8b1010] hover:from-[#8b1010] hover:to-[#6b0c0c] text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
//                       >
//                         {t("cart.remove")}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Desktop Layout */}
//                   <div className="hidden sm:flex items-center p-6">
//                     {/* Product Image */}
//                     <div className="relative flex-shrink-0 mr-4 lg:mr-6">
//                       <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shadow-md">
//                         <img 
//                           src={item.image} 
//                           alt={item.name} 
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
//                         />
//                       </div>
//                       <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
//                         ×{item.quantity}
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="flex-grow min-w-0 mr-4">
//                       <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-600 transition-colors break-words leading-tight">
//                         {item.name}
//                       </h2>
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
//                         <span className="text-base lg:text-lg font-semibold text-gray-900">
//                           ₹{item.price}
//                         </span>
//                         <span className="text-sm text-gray-500">{t("cart.per_item")}</span>
//                       </div>
//                       <div className="mt-2 text-base lg:text-lg font-bold text-green-600">
//                         {t("cart.subtotal")}: ₹{(item.price * item.quantity).toLocaleString()}
//                       </div>
//                     </div>

//                     {/* Quantity Controls */}
//                     <div className="flex items-center space-x-4 mr-4 lg:mr-6">
//                       <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 overflow-hidden">
//                         <button
//                           onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                           className="px-3 lg:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-lg"
//                           disabled={item.quantity <= 1}
//                         >
//                           {i18n.language === 'ar' ? '+' : '−'}
//                         </button>
//                         <div className="px-3 lg:px-4 py-2 font-bold text-lg text-gray-800 min-w-[3rem] text-center">
//                           {item.quantity}
//                         </div>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="px-3 lg:px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors font-bold text-lg"
//                         >
//                           {i18n.language === 'ar' ? '−' : '+'}
//                         </button>
//                       </div>
//                     </div>

//                     {/* Remove Button */}
//                     <button
//                       onClick={() => removeFromCart(item.id)}
//                       className="bg-gradient-to-r from-[#b01616] to-[#8b1010] hover:from-[#8b1010] hover:to-[#6b0c0c] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
//                     >
//                       {t("cart.remove")}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Cart Summary */}
//             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky bottom-4 sm:bottom-6">
//               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
//                 <div>
//                   <p className="text-gray-600 text-base sm:text-lg">
//                     {t("cart.total_items")}: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
//                   </p>
//                   <p className="text-2xl sm:text-3xl font-bold text-gray-800">
//                     {t("cart.total")}: ₹{total.toLocaleString()}
//                   </p>
//                 </div>
//                 <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
//                   <button
//                     onClick={clearCart}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base"
//                   >
//                     {t("cart.clear_cart")}
//                   </button>
//                   <button className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
//                     {t("cart.checkout")}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }


//new simple cart
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { t, i18n } = useTranslation();

  // Helper function to get product details from translation
  const getProductDetails = (productId) => {
    return {
      id: productId,
      name: t(`products.${productId}.name`),
      price: parseFloat(t(`products.${productId}.price`)),
      image: t(`products.${productId}.image`)
    };
  };

  // Calculate total dynamically
  const total = cartItems.reduce((acc, item) => {
    const product = getProductDetails(item.id);
    return acc + (product.price * item.quantity);
  }, 0);

  // Get currency symbol based on language
  const getCurrencySymbol = () => i18n.language === 'ar' ? 'ر.س' : '₹';

  return (
    <section className={`p-4 sm:p-6 bg-[#f9f4ec] min-h-screen ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {t("cart.your_cart")}
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
              </svg>
            </div>
            <p className="text-gray-600 mb-2">{t("cart.cart_empty")}</p>
            <p className="text-gray-500 text-sm">{t("cart.cart_add_items")}</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => {
                const product = getProductDetails(item.id);
                return (
                  <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center">
                    {/* Image */}
                    <div className={`w-20 h-20 rounded-xl overflow-hidden bg-gray-100 mb-4 sm:mb-0 ${i18n.language === 'ar' ? 'ml-4' : 'mr-4'}`}>
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 w-full">
                      <h2 className="font-semibold text-gray-800 text-lg">{product.name}</h2>
                      <div className="text-sm text-gray-600 mt-1">
                        {getCurrencySymbol()}{product.price} <span className="text-xs mx-1">{t("cart.per_item")}</span>
                      </div>
                      <div className="text-green-600 font-bold text-sm mt-1">
                        {t("cart.subtotal")}: {getCurrencySymbol()}{(product.price * item.quantity).toLocaleString()}
                      </div>

                      {/* Quantity Controls */}
                      <div className={`flex items-center mt-3 ${i18n.language === 'ar' ? 'space-x-reverse' : 'space-x-2'}`}>
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                          className="px-3 py-1 text-gray-600 border rounded disabled:opacity-50"
                        >
                          {i18n.language === "ar" ? "+" : "−"}
                        </button>
                        <span className="font-semibold px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 border rounded"
                        >
                          {i18n.language === "ar" ? "−" : "+"}
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <div className={`mt-4 sm:mt-0 ${i18n.language === 'ar' ? 'sm:mr-4' : 'sm:ml-4'}`}>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gradient-to-r from-[#b01616] to-[#8b1010] text-white px-4 py-2 rounded font-semibold text-sm"
                      >
                        {t("cart.remove")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl shadow-md p-4 sticky bottom-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <p className="text-gray-600 text-sm">{t("cart.total_items")}: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
                  <p className="text-xl font-bold text-gray-800">
                    {t("cart.total")}: {getCurrencySymbol()}{total.toLocaleString()}
                  </p>
                </div>
                <div className={`flex gap-3 ${i18n.language === 'ar' ? 'space-x-reverse' : 'space-x-3'}`}>
                  <button
                    onClick={clearCart}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-semibold"
                  >
                    {t("cart.clear_cart")}
                  </button>
                  <button
                    className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-5 py-2 rounded text-sm font-semibold"
                  >
                    {t("cart.checkout")}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
