// import React, { useState } from "react";

// export default function Payment() {
//   const [email, setEmail] = useState("");
//   const [news, setNews] = useState(false);
//   const [country, setCountry] = useState("Luxembourg");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [company, setCompany] = useState("");
//   const [address, setAddress] = useState("");
//   const [apartment, setApartment] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("Alabama");
//   const [zip, setZip] = useState("");
//   const [phone, setPhone] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [tip, setTip] = useState("none");
//   const [customTip, setCustomTip] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const subtotal = 13900;
//   const tipAmounts = {
//     "2": 278,
//     "5": 695,
//     "10": 1390,
//     "none": 0,
//   };

//   const tipValue = tip === "custom" ? Number(customTip) : tipAmounts[tip] || 0;
//   const total = subtotal + tipValue;

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center py-8">
//       {/* Left Section */}
//       <div className="flex-1 max-w-2xl p-6">
//         {/* Express Checkout */}
//         <div className="mb-6">
//           <div className="flex gap-4">
//             <button className="flex-1 flex items-center justify-center bg-[#5a31f4] text-white font-semibold py-2 rounded-md text-lg">
//               <span className="mr-2">shop</span>
//               <span className="bg-white text-[#5a31f4] px-2 py-1 rounded font-bold">Pay</span>
//             </button>
//             <button className="flex-1 flex items-center justify-center bg-black text-white font-semibold py-2 rounded-md text-lg">
//               <span className="mr-2">G</span>Pay
//             </button>
//           </div>
//           <div className="flex items-center my-6">
//             <div className="flex-1 border-t border-gray-300"></div>
//             <span className="mx-3 text-gray-400 font-semibold">OR</span>
//             <div className="flex-1 border-t border-gray-300"></div>
//           </div>
//         </div>
//         {/* Contact */}
//         <div className="mb-6">
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="font-semibold text-lg">Contact</h3>
//             <a href="#" className="text-blue-600 text-sm hover:underline">Log in</a>
//           </div>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label className="flex items-center text-sm text-gray-700">
//             <input
//               type="checkbox"
//               checked={news}
//               onChange={() => setNews(!news)}
//               className="mr-2"
//             />
//             Email me with news and offers
//           </label>
//         </div>
//         {/* Delivery */}
//         <div className="mb-6">
//           <h3 className="font-semibold text-lg mb-2">Delivery</h3>
//           <select
//             className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//           >
//             <option>Luxembourg</option>
//             <option>India</option>
//             <option>United States</option>
//             <option>Canada</option>
//           </select>
//           <div className="flex gap-2 mb-2">
//             <input
//               type="text"
//               placeholder="First name"
//               className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Company (optional)"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Apartment, suite, etc. (optional)"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
//             value={apartment}
//             onChange={(e) => setApartment(e.target.value)}
//           />
//           <div className="flex gap-2 mb-2">
//             <input
//               type="text"
//               placeholder="City"
//               className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <select
//               className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//             >
//               <option>Alabama</option>
//               <option>Delhi</option>
//               <option>Ontario</option>
//             </select>
//             <input
//               type="text"
//               placeholder="ZIP code"
//               className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
//               value={zip}
//               onChange={(e) => setZip(e.target.value)}
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Phone"
//             className="w-full border border-gray-300 rounded-md px-3 py-2"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         {/* Shipping Method */}
//         <div className="mb-6">
//           <h3 className="font-semibold text-lg mb-2">Shipping method</h3>
//           <div className="bg-gray-100 border border-gray-300 rounded p-3 text-gray-500 text-sm">
//             Enter your shipping address to view available shipping methods.
//           </div>
//         </div>
//         {/* Payment */}
//         <div className="mb-6">
//           <h3 className="font-semibold text-lg mb-2">Payment</h3>
//           <div className="bg-white border border-gray-300 rounded p-4 mb-2">
//             <div className="flex items-center mb-2">
//               <input type="radio" checked readOnly className="mr-2" />
//               <span className="font-semibold">Credit card</span>
//               <span className="ml-auto flex gap-1">
//                 <img src="https://img.icons8.com/color/24/000000/visa.png" alt="Visa" />
//                 <img src="https://img.icons8.com/color/24/000000/mastercard-logo.png" alt="MasterCard" />
//                 <img src="https://img.icons8.com/color/24/000000/amex.png" alt="Amex" />
//               </span>
//             </div>
//             <input type="text" placeholder="Card number" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2" />
//             <div className="flex gap-2 mb-2">
//               <input type="text" placeholder="Expiration date (MM / YY)" className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
//               <input type="text" placeholder="Security code" className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
//             </div>
//             <input type="text" placeholder="Name on card" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2" />
//             <label className="flex items-center text-sm text-gray-700 mb-2">
//               <input type="checkbox" checked readOnly className="mr-2" />
//               Use shipping address as billing address
//             </label>
//           </div>
//           <div className="flex items-center gap-3 mb-2">
//             <button className="flex-1 flex items-center justify-center bg-[#5a31f4] text-white font-semibold py-2 rounded-md text-lg">
//               <span className="mr-2">shop</span>
//               <span className="bg-white text-[#5a31f4] px-2 py-1 rounded font-bold">Pay</span>
//             </button>
//             <button className="flex-1 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 font-semibold py-2 rounded-md text-lg">
//               Razorpay Secure
//             </button>
//           </div>
//         </div>
//         {/* Add Tip */}
//         <div className="mb-6">
//           <h3 className="font-semibold text-lg mb-2">Add tip</h3>
//           <label className="flex items-center text-sm text-gray-700 mb-2">
//             <input
//               type="checkbox"
//               checked={tip !== "none"}
//               onChange={() => setTip(tip === "none" ? "2" : "none")}
//               className="mr-2"
//             />
//             Show your support for the team at P-TAL
//           </label>
//           <div className="flex gap-2 mb-2">
//             {["2", "5", "10", "none"].map((val) => (
//               <button
//                 key={val}
//                 onClick={() => setTip(val)}
//                 className={`flex-1 border rounded-md px-2 py-1 text-sm ${
//                   tip === val ? "border-black" : "border-gray-300"
//                 }`}
//               >
//                 {val === "none" ? "None" : `${val}% (₹${tipAmounts[val]})`}
//               </button>
//             ))}
//           </div>
//           <div className="flex gap-2 mb-2">
//             <input
//               type="number"
//               placeholder="Custom tip"
//               className="flex-1 border border-gray-300 rounded-md px-3 py-2"
//               value={customTip}
//               onChange={(e) => {
//                 setCustomTip(e.target.value);
//                 setTip("custom");
//               }}
//               min="0"
//             />
//             <button
//               className={`border rounded-md px-2 py-1 text-sm ${
//                 tip === "custom" ? "border-black" : "border-gray-300"
//               }`}
//               onClick={() => setTip("custom")}
//             >
//               Add tip
//             </button>
//           </div>
//           <div className="text-sm text-gray-500">
//             Thank you, we appreciate it.
//           </div>
//         </div>
//         {/* Remember Me */}
//         <div className="mb-6">
//           <label className="flex items-center text-sm text-gray-700">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//               className="mr-2"
//             />
//             Save my information for a faster checkout with a Shop account
//           </label>
//           <input
//             type="text"
//             placeholder="Mobile phone number"
//             className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
//           />
//         </div>
//         {/* Pay Now */}
//         <button className="w-full bg-black text-white rounded-md py-3 font-semibold text-lg mt-2">
//           Pay now
//         </button>
//         <p className="text-xs text-gray-500 mt-2">
//           Your info will be saved to a Shop account. By continuing, you agree to Shop's{" "}
//           <a href="#" className="underline">Terms of Service</a> and acknowledge the{" "}
//           <a href="#" className="underline">Privacy Policy</a>.
//         </p>
//       </div>
//       {/* Right Section (Order Summary) */}
//       <div className="w-full md:w-96 bg-white border-l border-gray-200 p-8 flex flex-col">
//         <div className="flex items-center mb-6">
//           <div className="relative mr-4">
//             <img
//               src="https://ptal.in/cdn/shop/products/CopperWaterDispenser_1.2gal_1024x1024.jpg"
//               alt="Copper Water Dispenser"
//               className="w-16 h-16 rounded-md object-cover"
//             />
//             <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">1</span>
//           </div>
//           <div>
//             <div className="font-semibold">Copper Water Dispenser</div>
//             <div className="text-sm text-gray-500">1.2 gal</div>
//           </div>
//           <div className="ml-auto font-bold text-lg">₹13,900.00</div>
//         </div>
//         <div className="mb-4 flex">
//           <input
//             type="text"
//             placeholder="Discount code"
//             className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//           <button className="bg-gray-100 border border-l-0 border-gray-300 text-gray-500 px-4 rounded-r-md font-semibold">
//             Apply
//           </button>
//         </div>
//         <div className="flex justify-between text-gray-700 mb-1">
//           <span>Subtotal</span>
//           <span>₹13,900.00</span>
//         </div>
//         <div className="flex justify-between text-gray-700 mb-1">
//           <span>Shipping</span>
//           <span className="text-gray-400">Enter shipping address</span>
//         </div>
//         <div className="flex justify-between text-xl font-bold border-t border-gray-300 pt-4">
//           <span>Total</span>
//           <span>
//             <span className="text-base text-gray-500 font-normal mr-1">INR</span>
//             ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
//           </span>
//         </div>
//         <div className="text-xs text-gray-400 mt-2">
//           Including ₹638.10 in taxes
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useCart } from "./contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [news, setNews] = useState(false);
  const [country, setCountry] = useState("Luxembourg");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [discount, setDiscount] = useState("");
  const [tip, setTip] = useState("none");
  const [customTip, setCustomTip] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Helper function to get product details from translation
  const getProductDetails = (productId) => {
    return {
      id: productId,
      name: t(`products.${productId}.name`),
      price: parseFloat(t(`products.${productId}.price`)),
      image: t(`products.${productId}.image`)
    };
  };

  // Calculate subtotal from cart items
  const subtotal = cartItems.reduce((acc, item) => {
    const product = getProductDetails(item.id);
    return acc + (product.price * item.quantity);
  }, 0);

  // Get currency symbol based on language
  const getCurrencySymbol = () => i18n.language === 'ar' ? 'ر.س' : '₹';

  const tipAmounts = {
    "2": Math.round(subtotal * 0.02),
    "5": Math.round(subtotal * 0.05),
    "10": Math.round(subtotal * 0.10),
    "none": 0,
  };

  const tipValue = tip === "custom" ? Number(customTip) : tipAmounts[tip] || 0;
  const total = subtotal + tipValue;

  // Redirect to cart if no items
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t("payment.no_items")}</h2>
          <p className="text-gray-600 mb-4">{t("payment.add_items_first")}</p>
          <button
            onClick={() => navigate('/cart')}
            className="bg-[#8b0000] text-white px-6 py-2 rounded hover:bg-red-800"
          >
            {t("payment.go_to_cart")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center py-8 ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Left Section */}
      <div className="flex-1 max-w-2xl p-6">
        {/* Back to Cart Button */}
        <button
          onClick={() => navigate('/cart')}
          className="mb-6 flex items-center text-[#8b0000] hover:text-red-800 transition-colors"
        >
          <span className="mr-2">{i18n.language === 'ar' ? '→' : '←'}</span>
          {t("payment.back_to_cart")}
        </button>

        {/* Express Checkout */}
        <div className="mb-6">
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center bg-[#5a31f4] text-white font-semibold py-2 rounded-md text-lg">
              <span className="mr-2">shop</span>
              <span className="bg-white text-[#5a31f4] px-2 py-1 rounded font-bold">Pay</span>
            </button>
            <button className="flex-1 flex items-center justify-center bg-black text-white font-semibold py-2 rounded-md text-lg">
              <span className="mr-2">G</span>Pay
            </button>
          </div>
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-3 text-gray-400 font-semibold">{t("payment.or")}</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{t("payment.contact")}</h3>
            <a href="#" className="text-blue-600 text-sm hover:underline">{t("payment.log_in")}</a>
          </div>
          <input
            type="email"
            placeholder={t("payment.email_placeholder")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              checked={news}
              onChange={() => setNews(!news)}
              className="mr-2"
            />
            {t("payment.email_news")}
          </label>
        </div>

        {/* Delivery */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">{t("payment.delivery")}</h3>
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Luxembourg</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={t("payment.first_name")}
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder={t("payment.last_name")}
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder={t("payment.company_optional")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("payment.address")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("payment.apartment_optional")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder={t("payment.city")}
              className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <select
              className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Alabama</option>
              <option>Delhi</option>
              <option>Ontario</option>
            </select>
            <input
              type="text"
              placeholder={t("payment.zip_code")}
              className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder={t("payment.phone")}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Shipping Method */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">{t("payment.shipping_method")}</h3>
          <div className="bg-gray-100 border border-gray-300 rounded p-3 text-gray-500 text-sm">
            {t("payment.enter_shipping_address")}
          </div>
        </div>

        {/* Payment */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">{t("payment.payment")}</h3>
          <div className="bg-white border border-gray-300 rounded p-4 mb-2">
            <div className="flex items-center mb-2">
              <input type="radio" checked readOnly className="mr-2" />
              <span className="font-semibold">{t("payment.credit_card")}</span>
              <span className="ml-auto flex gap-1">
                <img src="https://img.icons8.com/color/24/000000/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/24/000000/mastercard-logo.png" alt="MasterCard" />
                <img src="https://img.icons8.com/color/24/000000/amex.png" alt="Amex" />
              </span>
            </div>
            <input type="text" placeholder={t("payment.card_number")} className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2" />
            <div className="flex gap-2 mb-2">
              <input type="text" placeholder={t("payment.expiration_date")} className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder={t("payment.security_code")} className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <input type="text" placeholder={t("payment.name_on_card")} className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2" />
            <label className="flex items-center text-sm text-gray-700 mb-2">
              <input type="checkbox" checked readOnly className="mr-2" />
              {t("payment.use_shipping_address")}
            </label>
          </div>
        </div>

        {/* Add Tip */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">{t("payment.add_tip")}</h3>
          <label className="flex items-center text-sm text-gray-700 mb-2">
            <input
              type="checkbox"
              checked={tip !== "none"}
              onChange={() => setTip(tip === "none" ? "2" : "none")}
              className="mr-2"
            />
            {t("payment.show_support")}
          </label>
          <div className="flex gap-2 mb-2">
            {["2", "5", "10", "none"].map((val) => (
              <button
                key={val}
                onClick={() => setTip(val)}
                className={`flex-1 border rounded-md px-2 py-1 text-sm ${
                  tip === val ? "border-black" : "border-gray-300"
                }`}
              >
                {val === "none" ? t("payment.none") : `${val}% (${getCurrencySymbol()}${tipAmounts[val]})`}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              placeholder={t("payment.custom_tip")}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2"
              value={customTip}
              onChange={(e) => {
                setCustomTip(e.target.value);
                setTip("custom");
              }}
              min="0"
            />
            <button
              className={`border rounded-md px-2 py-1 text-sm ${
                tip === "custom" ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setTip("custom")}
            >
              {t("payment.add_tip_button")}
            </button>
          </div>
          <div className="text-sm text-gray-500">
            {t("payment.thank_you")}
          </div>
        </div>

        {/* Remember Me */}
        <div className="mb-6">
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            {t("payment.save_info")}
          </label>
          <input
            type="text"
            placeholder={t("payment.mobile_phone")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
          />
        </div>

        {/* Pay Now */}
        <button className="w-full bg-black text-white rounded-md py-3 font-semibold text-lg mt-2">
          {t("payment.pay_now")}
        </button>
        <p className="text-xs text-gray-500 mt-2">
          {t("payment.terms_text")}{" "}
          <a href="#" className="underline">{t("payment.terms_of_service")}</a> {t("payment.and_acknowledge")}{" "}
          <a href="#" className="underline">{t("payment.privacy_policy")}</a>.
        </p>
      </div>

      {/* Right Section (Order Summary) */}
      <div className="w-full md:w-96 bg-white border-l border-gray-200 p-8 flex flex-col">
        <h3 className="font-semibold text-lg mb-4">{t("payment.order_summary")}</h3>
        
        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => {
            const product = getProductDetails(item.id);
            return (
              <div key={item.id} className="flex items-center">
                <div className="relative mr-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{product.name}</div>
                </div>
                <div className="font-bold text-lg">
                  {getCurrencySymbol()}{(product.price * item.quantity).toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-4 flex">
          <input
            type="text"
            placeholder={t("payment.discount_code")}
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button className="bg-gray-100 border border-l-0 border-gray-300 text-gray-500 px-4 rounded-r-md font-semibold">
            {t("payment.apply")}
          </button>
        </div>

        <div className="flex justify-between text-gray-700 mb-1">
          <span>{t("payment.subtotal")}</span>
          <span>{getCurrencySymbol()}{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-1">
          <span>{t("payment.shipping")}</span>
          <span className="text-gray-400">{t("payment.enter_shipping_address")}</span>
        </div>
        {tipValue > 0 && (
          <div className="flex justify-between text-gray-700 mb-1">
            <span>{t("payment.tip")}</span>
            <span>{getCurrencySymbol()}{tipValue.toLocaleString()}</span>
          </div>
        )}
        <div className="flex justify-between text-xl font-bold border-t border-gray-300 pt-4">
          <span>{t("payment.total")}</span>
          <span>
            <span className="text-base text-gray-500 font-normal mr-1">
              {i18n.language === 'ar' ? 'ر.س' : 'INR'}
            </span>
            {getCurrencySymbol()}{total.toLocaleString()}
          </span>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          {t("payment.including_taxes", { amount: `${getCurrencySymbol()}${Math.round(total * 0.18).toLocaleString()}` })}
        </div>
      </div>
    </div>
  );
}
