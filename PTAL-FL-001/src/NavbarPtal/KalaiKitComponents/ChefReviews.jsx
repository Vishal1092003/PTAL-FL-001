import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ChefReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  
  const testimonials = [
    {
      name: t("chefReview.chef1.name"),
      text: t("chefReview.chef1.text"),
      image: "/kalaiKitImages/chef1.jpg",
    },
    {
      name: t("chefReview.chef2.name"),
      text: t("chefReview.chef2.text"),
      image: "/kalaiKitImages/chef2.webp",
    },
    {
      name: t("chefReview.chef3.name"),
      text: t("chefReview.chef3.text"),
      image: "/kalaiKitImages/chef3.webp",
    },
    {
      name: t("chefReview.chef4.name"),
      text: t("chefReview.chef4.text"),
      image: "/kalaiKitImages/chef4.jpg",
    },
    {
      name: t("chefReview.chef5.name"),
      text: t("chefReview.chef5.text"),
      image: "/kalaiKitImages/chef5.jpg",
    },
  ];
  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const { name, text, image } = testimonials[currentIndex];

  return (
    <div className="bg-[#f9f6f0] py-16 px-4 text-center">
      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      <h3 className="uppercase tracking-widest text-sm font-semibold text-gray-700">
        {t("chefReview.subtitle")}
      </h3>
      <h2
        className="text-4xl  text-red-700 my-4"
        style={{ fontFamily: "Fondamento, cursive" }}
      >
        {t("chefReview.title")}
      </h2>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image first on mobile, second on desktop */}
        <div className="order-1 md:order-2 w-full max-w-sm mx-auto md:mx-0 aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="order-2 md:order-1 text-left px-4">
          <div className="flex text-yellow-500 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-lg text-gray-800 leading-relaxed">{text}</p>
          <p className="mt-6 font-bold tracking-wider">~ {name}</p>
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-10">
        <button onClick={prev} className="text-2xl hover:scale-110 transition">
          <ArrowLeft size={24} />
        </button>
        <button onClick={next} className="text-2xl hover:scale-110 transition">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
