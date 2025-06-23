// // ReturnExchangePolicy.jsx
// import React from "react";

// const ReturnsRefunds = () => (
//   <div className="max-w-full mx-auto bg-[#f7f2ea] p-8 rounded-lg shadow-md text-[#2b2b2b] font-serif">
//     <br />
//     <h1 className="text-5xl font-md text-center mb-6"style={{ fontFamily: "Fondamento, cursive" }}>Return And Exchange Policy</h1>
//     <p className="mb-4 text-lg text-gray-950">
//       At P-TAL, our passionate artisans handcraft each product specifically for you. We want to ensure you experience the true beauty of their art.
//     </p>
//     <p className="mb-4 text-lg text-gray-950">
//       We prioritize your satisfaction and encourage you to contact our customer support team (<a href="mailto:contactus@ptal.com" className="underline text-blue-700">contactus@ptal.com</a>) with any questions or concerns before initiating a return. We’re often able to resolve issues quickly and avoid any inconvenience.
//     </p>
//     <p className="mb-4 text-lg text-gray-950">
//       We ship directly from India to ensure quality control before your order reaches you. To minimize costs associated with international shipping, we encourage contacting us beforehand.
//     </p>
//     <p className="mb-4 text-lg text-gray-950">
//       If, after contacting customer support, you’re still not satisfied with your purchase due to the below mentioned reasons, you may return or exchange it within 7 days of receiving your order.
//     </p>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">To be eligible for a return or exchange:</h2>
//     <ul className="list-disc pl-6 mb-4 space-y-1">
//       <li>The item(s) must be in its original condition, unused, and with all original packaging (tags, labels, etc.).</li>
//       <li>
//         Items damaged due to misuse, neglect, or accidents are not eligible for return. Examples of such misuse include using excessively high heat, storing water for more than 10 hours in copper, improper cleaning, preheating without oil or ghee, or slight discoloration, including natural tarnishing of brass, copper, and bronze.
//       </li>
//       <li>
//         Tarnishing is natural and indicates the purity of the metal. You can use Pitambari powder to maintain its shine. These items are not eligible for return.
//       </li>
//       <li>
//         Handmade items may show slight variations in sizes, which are not considered defects.
//       </li>
//       <li>
//         If the item matches all details as mentioned on the website and still you are not satisfied with the purchase, these may not be eligible for the return.
//       </li>
//     </ul>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">Fees</h2>
//     <p className="mb-4 text-lg text-gray-950">
//       We do not charge any restocking fees for returns. For all orders, we will refund your original form of payment less return shipping costs.
//     </p>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">How do I initiate my return?</h2>
//     <p className="mb-4 text-lg text-gray-950">
//       Please mail us at <a href="mailto:contactus@ptal.com" className="underline text-blue-700">contactus@ptal.com</a> with your order ID, your concern, and pictures of the product you want to refund. We will get back to you within 48 hours. Please pack your products in its original packaging. Ship them to us.
//     </p>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">What if I receive a damaged or defective item?</h2>
//     <p className="mb-4 text-lg text-gray-950">
//       If you received a defective or damaged product, please let us know within 3 days of receiving your order. We’ll do our best to resolve the issue quickly. Simply contact us at <a href="mailto:contactus@ptal.com" className="underline text-blue-700">Contactus@ptal.com</a>
//     </p>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">Refund Policy</h2>
//     <ul className="list-disc pl-6 mb-4 space-y-1">
//       <li>A refund will be issued to the original form of payment once we receive your returned item(s). You will receive an email confirmation once your return has been processed.</li>
//       <li>Please allow up to 10 business days for the refund to be processed.</li>
//       <li>To ensure the safe return of your items, we recommend using the original packaging whenever possible.</li>
//       <li>For international orders, the actual refund amount may vary slightly due to currency fluctuations.</li>
//     </ul>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">Cancellation Policy</h2>
//     <p className="mb-4 text-lg text-gray-950">
//       For the best chance of canceling your order, please contact us within 24 hours. If your order has already been shipped, we may not be able to cancel it. Please note that due to the complexities of cross-border transactions, we may incur charges from our payment service provider for processing your order. In the event of a cancellation, these charges will be deducted from your refund amount.
//     </p>

//     <h2 className="text-xl text-black font-semibold mt-8 mb-2">Send returns to this address:</h2>
//     <address className="not-italic mb-4 text-gray-950">
//       Karshini Artysun Pvt. Ltd.<br />
//       P-TAL<br />
//       Plot No. 16<br />
//       Industrial Area Phase-2<br />
//       Panchkula, 134116
//     </address>
//   </div>
// );

// export default ReturnsRefunds;

import React from "react";
import { useTranslation } from "react-i18next";

const ReturnsRefunds = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="max-w-full mx-auto bg-[#f7f2ea] p-8 rounded-lg shadow-md text-[#2b2b2b] font-serif">
      <br />
      <h1 className="text-5xl font-md text-center mb-6" style={{ fontFamily: "Fondamento, cursive" }}>
        {t('returnExchange.title')}
      </h1>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.intro.part1')}
      </p>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.intro.part2')} (<a href="mailto:contactus@ptal.com" className="underline text-blue-700">contactus@ptal.com</a>) {t('returnExchange.intro.part3')}
      </p>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.intro.part4')}
      </p>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.intro.part5')}
      </p>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.eligibility.title')}
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>{t('returnExchange.eligibility.condition1')}</li>
        <li>{t('returnExchange.eligibility.condition2')}</li>
        <li>{t('returnExchange.eligibility.condition3')}</li>
        <li>{t('returnExchange.eligibility.condition4')}</li>
        <li>{t('returnExchange.eligibility.condition5')}</li>
      </ul>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.fees.title')}
      </h2>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.fees.content')}
      </p>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.initiateReturn.title')}
      </h2>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.initiateReturn.part1')} <a href="mailto:contactus@ptal.com" className="underline text-blue-700">contactus@ptal.com</a> {t('returnExchange.initiateReturn.part2')}
      </p>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.damagedItem.title')}
      </h2>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.damagedItem.part1')} <a href="mailto:contactus@ptal.com" className="underline text-blue-700">Contactus@ptal.com</a>
      </p>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.refundPolicy.title')}
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>{t('returnExchange.refundPolicy.point1')}</li>
        <li>{t('returnExchange.refundPolicy.point2')}</li>
        <li>{t('returnExchange.refundPolicy.point3')}</li>
        <li>{t('returnExchange.refundPolicy.point4')}</li>
      </ul>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.cancellationPolicy.title')}
      </h2>
      <p className="mb-4 text-lg text-gray-950">
        {t('returnExchange.cancellationPolicy.content')}
      </p>

      <h2 className="text-xl text-black font-semibold mt-8 mb-2">
        {t('returnExchange.returnAddress.title')}
      </h2>
      <address className="not-italic mb-4 text-gray-950">
        {t('returnExchange.returnAddress.company')}<br />
        {t('returnExchange.returnAddress.brand')}<br />
        {t('returnExchange.returnAddress.plot')}<br />
        {t('returnExchange.returnAddress.area')}<br />
        {t('returnExchange.returnAddress.city')}
      </address>
    </div>
  );
};

export default ReturnsRefunds;
