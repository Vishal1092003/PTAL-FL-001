
import { useTranslation } from "react-i18next";


export default function KansaBenefits() {
  const { t, i18n } = useTranslation();
const benefits = [
  {
    img: "/kalaiKitImages/benefit1.webp",
    title: t('kalaiKitBenefits.benefit11'),
    subtitle: t('kalaiKitBenefits.benefit12'),
  },
  {
    img: "/kalaiKitImages/benefit2.webp",
    title: t('kalaiKitBenefits.benefit21'),
    subtitle: t('kalaiKitBenefits.benefit22'),
  },
  {
    img: "/kalaiKitImages/benefit3.webp",
    title: t('kalaiKitBenefits.benefit31'),
    subtitle: t('kalaiKitBenefits.benefit32'),
  },
  {
    img: "/kalaiKitImages/benefit4.webp",
    title: t('kalaiKitBenefits.benefit41'),
    subtitle: t('kalaiKitBenefits.benefit42'),
  },
  {
    img: "/kalaiKitImages/benefit5.webp",
    title: t('kalaiKitBenefits.benefit51'),
    subtitle: t('kalaiKitBenefits.benefit52'),
  },
  {
    img: "/kalaiKitImages/benefit6.webp",
    title: t('kalaiKitBenefits.benefit61'),
    subtitle: "",
  },
];
  return (
    <div className="bg-[#f9f6f0] py-16 text-center">
      <p className="mb-2 uppercase tracking-widest text-sm font-semibold text-gray-700 text-center">
        {t('kalaiKitBenefits.subtitle')}
      </p>
      <h2
        className="text-4xl md:text-4xl  text-red-700  mb-12"
        style={{ fontFamily: "Fondamento, cursive" }}
      >
        {t('kalaiKitBenefits.title')}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-300 hover:text-[#941b1b] cursor-pointer text-sm text-gray-800"
          >
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="font-medium">{item.title}</p>
            {item.subtitle && <p className="font-medium">{item.subtitle}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}