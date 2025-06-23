// import React, { useState } from 'react'

// function Faqs() {
//     const [shippingLOpen, setShippingLOpen] = useState(false); // for location
//     const [shippingCOpen, setShippingCOpen] = useState(false); // for cost
//     const [returnOpen, setReturnOpen] = useState(false);

//     return (
//         <div className="min-h-screen bg-[#f8f6f3] flex items-center justify-center">
//             <div className="w-full max-w-6xl rounded-lg p-8 mx-auto my-12">
//                 <div className="mb-10">
//                     <div className="mb-6">
//                         <p className='text-4xl font-medium' style={{fontFamily: "Fondamento, cursive"}}>Shipping</p>
//                     </div>
//                     <br />
//                     <br />
//                     <div className="py-4">
//                         <div 
//                             className="flex justify-between items-center cursor-pointer"
//                             onClick={() => setShippingLOpen(!shippingLOpen)}
//                         >
//                             <span className="font-medium text-[18px] text-l text-[#0D0D0D]">
//                                 <span className='text-red-900 text-2xl'>{shippingLOpen ? "-" : "+"} </span>  Shipping locations
//                             </span>
//                         </div>
//                         {shippingLOpen && (
//                             <div className="mt-2 text-[15px] text-gray-600 text-lg">
//                                 We ship globally through trusted and reliable partners like DHL, DTDC and Delhivery.
//                             </div>
//                         )}
//                     </div>
//                     <br />
//                     <div className="py-4">
//                         <div 
//                             className="flex justify-between items-center cursor-pointer"
//                             onClick={() => setShippingCOpen(!shippingCOpen)}
//                         >
//                             <span className="font-medium text-[18px] text-l text-[#0D0D0D]">
//                                 <span className='text-red-900 text-2xl'>{shippingCOpen ? "-" : "+"}</span>  Shipping costs
//                             </span>
//                         </div>
//                         {shippingCOpen && (
//                             <div className="mt-2 text-gray-600 text-[15px] text-lg">
//                                 We do not charge anything additional for shipping except for a minimal charge of Rs 50 on COD (Cash on Delivery) orders. Even for our international orders, the shipping provided is free and inclusive in the cost itself.
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 <br />
//                 <br /><br />

//                 <div className="mt-10">
//                     <div className='mb-6'>
//                         <p className='text-4xl font-medium' style={{fontFamily: "Fondamento, cursive"}}>Returns</p>
//                     </div>
//                     <br />
//                     <div className="py-4">
//                         <div 
//                             className="flex justify-between items-center cursor-pointer"
//                             onClick={() => setReturnOpen(!returnOpen)}
//                         >
//                             <span className="font-medium text-[18px] text-l text-[#0D0D0D]">
//                                 <span className='text-red-900 text-2xl'>{returnOpen ? "-" : "+"}</span>  Return and exchange policy
//                             </span>
//                         </div>
//                         {returnOpen && (
//                             <div className="mt-2 text-gray-600 text-[15px] text-lg">
//                                 <div className='mb-3'>
//                                     Processing orders of handcrafted products involve days of efforts put in by our artisans and our order processing team. We do not accept returns for orders where the product does not match your satisfaction but is perfect in terms of quality, sizes and other details mentioned on our website. Also once the package is dispatched from our warehouse, its highly dependent on the courier partner, if any delays in delivery please stay patient.
//                                 </div>
//                                 <div className='mb-3'>
//                                     If there are any defects or transit damages in the products, we will accept an exchange of an unused product only if the intimation is done from your end within 2 days after the delivery is executed. Once we receive the returned item, we will process your new order.
//                                 </div>
//                                 <div className='mb-3'>
//                                     Please allow 1-2 weeks post the date of return request for your exchange to divbe processed. If there are any possibilities of refund in case of damages in shipping, we will refund the amount in 5-7 days after receiving back the damaged product.
//                                 </div>
//                                 <div className='mb-3'>
//                                     P-TAL will not issue returns & exchanges for products purchased through other entities, such as distributors or retail partners.
//                                 </div>
//                                 <div className='mb-3'>
//                                     Returned items must be delivered to us unused, in original packaging and in the condition they were received or may not be eligible for refund or be subject to a restocking fee. We cannot be held responsible for items damaged or lost in return shipment, therefore we recommend an insured and trackable mail service.
//                                 </div>
//                                 <div className='mb-3'>
//                                     In the unlikely event that an item is returned to us in an unsuitable condition other than the reason provided by you for exchange, we may have to send it back to you without processing any refunds or compensation. All goods will be inspected on return.
//                                 </div>
//                                 <div className='font-bold text-black text-l'>
//                                     Send returns to this address:
//                                 </div>
//                                 <div>
//                                     P-TAL Headquarters
//                                 </div>
//                                 <div>
//                                     249, HSIIDC Rd, Barwala Industrial Estate, Alipur, Barwala, Haryana 134118
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Faqs

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Faqs() {
    const { t, i18n } = useTranslation();
    const [shippingLOpen, setShippingLOpen] = useState(false); // for location
    const [shippingCOpen, setShippingCOpen] = useState(false); // for cost
    const [returnOpen, setReturnOpen] = useState(false);

    return (
        <div className={`min-h-screen bg-[#f8f6f3] flex items-center justify-center ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
            <div className="w-full max-w-6xl rounded-lg p-8 mx-auto my-12">
                <div className="mb-10">
                    <div className="mb-6">
                        <p className='text-4xl font-medium' style={{fontFamily: "Fondamento, cursive"}}>
                            {t('faqs.shipping.title')}
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="py-4">
                        <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setShippingLOpen(!shippingLOpen)}
                        >
                            <span className="font-medium text-[18px] text-l text-[#0D0D0D]">
                                <span className='text-red-900 text-2xl'>{shippingLOpen ? "-" : "+"} </span>  
                                {t('faqs.shipping.locations.question')}
                            </span>
                        </div>
                        {shippingLOpen && (
                            <div className="mt-2 text-[15px] text-gray-600 text-lg">
                                {t('faqs.shipping.locations.answer')}
                            </div>
                        )}
                    </div>
                    <br />
                    <div className="py-4">
                        <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setShippingCOpen(!shippingCOpen)}
                        >
                            <span className="font-medium text-[18px] text-l text-[#0D0D0D]">
                                <span className='text-red-900 text-2xl'>{shippingCOpen ? "-" : "+"}</span>  
                                {t('faqs.shipping.costs.question')}
                            </span>
                        </div>
                        {shippingCOpen && (
                            <div className="mt-2 text-gray-600 text-[15px] text-lg">
                                {t('faqs.shipping.costs.answer')}
                            </div>
                        )}
                    </div>
                </div>
                <br />
                <br /><br />

                <div className="mt-10">
                    <div className='mb-6'>
                        <p className='text-4xl font-medium' style={{fontFamily: "Fondamento, cursive"}}>
                            {t('faqs.returns.title')}
                        </p>
                    </div>
                    <br />
                    <div className="py-4">
                        <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setReturnOpen(!returnOpen)}
                        >
                            <span className="font-medium text-[18px] text-l text-[#0D0D0D]">
                                <span className='text-red-900 text-2xl'>{returnOpen ? "-" : "+"}</span>  
                                {t('faqs.returns.policy.question')}
                            </span>
                        </div>
                        {returnOpen && (
                            <div className="mt-2 text-gray-600 text-[15px] text-lg">
                                <div className='mb-3'>
                                    {t('faqs.returns.policy.paragraph1')}
                                </div>
                                <div className='mb-3'>
                                    {t('faqs.returns.policy.paragraph2')}
                                </div>
                                <div className='mb-3'>
                                    {t('faqs.returns.policy.paragraph3')}
                                </div>
                                <div className='mb-3'>
                                    {t('faqs.returns.policy.paragraph4')}
                                </div>
                                <div className='mb-3'>
                                    {t('faqs.returns.policy.paragraph5')}
                                </div>
                                <div className='mb-3'>
                                    {t('faqs.returns.policy.paragraph6')}
                                </div>
                                <div className='font-bold text-black text-l'>
                                    {t('faqs.returns.policy.address_label')}
                                </div>
                                <div>
                                    {t('faqs.returns.policy.address_line1')}
                                </div>
                                <div>
                                    {t('faqs.returns.policy.address_line2')}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
