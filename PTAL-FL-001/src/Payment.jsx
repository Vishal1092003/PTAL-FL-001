import React, { useState } from "react";

export default function Checkout() {
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
  const subtotal = 13900;
  const tipAmounts = {
    "2": 278,
    "5": 695,
    "10": 1390,
    "none": 0,
  };

  const tipValue = tip === "custom" ? Number(customTip) : tipAmounts[tip] || 0;
  const total = subtotal + tipValue;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row justify-center py-8">
      {/* Left Section */}
      <div className="flex-1 max-w-2xl p-6">
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
            <span className="mx-3 text-gray-400 font-semibold">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
        {/* Contact */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Contact</h3>
            <a href="#" className="text-blue-600 text-sm hover:underline">Log in</a>
          </div>
          <input
            type="email"
            placeholder="Email"
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
            Email me with news and offers
          </label>
        </div>
        {/* Delivery */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Delivery</h3>
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
              placeholder="First name"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border border-gray-300 rounded-md px-3 py-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="City"
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
              placeholder="ZIP code"
              className="w-1/3 border border-gray-300 rounded-md px-3 py-2"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* Shipping Method */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Shipping method</h3>
          <div className="bg-gray-100 border border-gray-300 rounded p-3 text-gray-500 text-sm">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>
        {/* Payment */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Payment</h3>
          <div className="bg-white border border-gray-300 rounded p-4 mb-2">
            <div className="flex items-center mb-2">
              <input type="radio" checked readOnly className="mr-2" />
              <span className="font-semibold">Credit card</span>
              <span className="ml-auto flex gap-1">
                <img src="https://img.icons8.com/color/24/000000/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/24/000000/mastercard-logo.png" alt="MasterCard" />
                <img src="https://img.icons8.com/color/24/000000/amex.png" alt="Amex" />
              </span>
            </div>
            <input type="text" placeholder="Card number" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2" />
            <div className="flex gap-2 mb-2">
              <input type="text" placeholder="Expiration date (MM / YY)" className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
              <input type="text" placeholder="Security code" className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <input type="text" placeholder="Name on card" className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2" />
            <label className="flex items-center text-sm text-gray-700 mb-2">
              <input type="checkbox" checked readOnly className="mr-2" />
              Use shipping address as billing address
            </label>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <button className="flex-1 flex items-center justify-center bg-[#5a31f4] text-white font-semibold py-2 rounded-md text-lg">
              <span className="mr-2">shop</span>
              <span className="bg-white text-[#5a31f4] px-2 py-1 rounded font-bold">Pay</span>
            </button>
            <button className="flex-1 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 font-semibold py-2 rounded-md text-lg">
              Razorpay Secure
            </button>
          </div>
        </div>
        {/* Add Tip */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Add tip</h3>
          <label className="flex items-center text-sm text-gray-700 mb-2">
            <input
              type="checkbox"
              checked={tip !== "none"}
              onChange={() => setTip(tip === "none" ? "2" : "none")}
              className="mr-2"
            />
            Show your support for the team at P-TAL
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
                {val === "none" ? "None" : `${val}% (₹${tipAmounts[val]})`}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              placeholder="Custom tip"
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
              Add tip
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Thank you, we appreciate it.
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
            Save my information for a faster checkout with a Shop account
          </label>
          <input
            type="text"
            placeholder="Mobile phone number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
          />
        </div>
        {/* Pay Now */}
        <button className="w-full bg-black text-white rounded-md py-3 font-semibold text-lg mt-2">
          Pay now
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Your info will be saved to a Shop account. By continuing, you agree to Shop's{" "}
          <a href="#" className="underline">Terms of Service</a> and acknowledge the{" "}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
      {/* Right Section (Order Summary) */}
      <div className="w-full md:w-96 bg-white border-l border-gray-200 p-8 flex flex-col">
        <div className="flex items-center mb-6">
          <div className="relative mr-4">
            <img
              src="https://ptal.in/cdn/shop/products/CopperWaterDispenser_1.2gal_1024x1024.jpg"
              alt="Copper Water Dispenser"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="absolute -top-2 -right-2 bg-gray-700 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">1</span>
          </div>
          <div>
            <div className="font-semibold">Copper Water Dispenser</div>
            <div className="text-sm text-gray-500">1.2 gal</div>
          </div>
          <div className="ml-auto font-bold text-lg">₹13,900.00</div>
        </div>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Discount code"
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button className="bg-gray-100 border border-l-0 border-gray-300 text-gray-500 px-4 rounded-r-md font-semibold">
            Apply
          </button>
        </div>
        <div className="flex justify-between text-gray-700 mb-1">
          <span>Subtotal</span>
          <span>₹13,900.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-1">
          <span>Shipping</span>
          <span className="text-gray-400">Enter shipping address</span>
        </div>
        <div className="flex justify-between text-xl font-bold border-t border-gray-300 pt-4">
          <span>Total</span>
          <span>
            <span className="text-base text-gray-500 font-normal mr-1">INR</span>
            ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          Including ₹638.10 in taxes
        </div>
      </div>
    </div>
  );
}