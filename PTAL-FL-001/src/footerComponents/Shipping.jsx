import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Shipping() {
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
