import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { useTranslation } from "react-i18next";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const faqs = [
    {
      question: t("kalaiKitfaq.q1"),
      answer: t("kalaiKitfaq.a1"),
    },
    {
      question: t("kalaiKitfaq.q2"),
      answer: t("kalaiKitfaq.a2"),
    },
    {
      question: t("kalaiKitfaq.q3"),
      answer: t("kalaiKitfaq.a3"),
    },
    {
      question: t("kalaiKitfaq.q4"),
      answer: t("kalaiKitfaq.a4"),
    },
    {
      question: t("kalaiKitfaq.q5"),
      answer: t("kalaiKitfaq.a5"),
    },
  ];
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col md:flex-row bg-[#f9f6f0] items-start">
      {/* Left: FAQ Content */}
      <div className="md:w-2/3 w-full p-8 md:pl-16">
        <div className="text-center md:text-left">
          <h4 className="mb-2 uppercase tracking-widest text-sm font-semibold text-gray-700">
            {t("kalaiKitfaq.subtitle")}
          </h4>
          <h2
            className="text-4xl font-serif text-red-700 mb-8"
            style={{ fontFamily: "Fondamento, cursive" }}
          >
            {t("kalaiKitfaq.title")}
          </h2>
        </div>

        {faqs.map((item, index) => (
          <div key={index} className="border-t border-gray-300 py-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
            >
              {item.question}
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Right: Image with semicircle top */}
      <div className="hidden md:flex md:w-1/3 justify-center pr-8 pt-8">
        <div className="relative w-72 h-96 overflow-hidden">
          <img
            src="/kalaiKitImages/frequentQImage.webp"
            alt="Artisan"
            className="w-full h-full object-cover rounded-t-full"
          />
        </div>
      </div>
    </section>
  );
}
